
import React from 'react';
import ProfileView from './components/ProfileView.js'
import{useState, useEffect} from 'react'
//import {json} from 'express/lib/response';


const setWhiteProfile = (brightness, temperature) => {
  console.log("set white: "+brightness + " and "+temperature)
  fetch('http://localhost:8080/createwhiteprofile', {method: 'POST', headers : {'Content-Type': 'application/json'},body : JSON.stringify({"brightness": brightness,"temperature":temperature})}).catch((error) => {console.log(error)})
}



const setOnOff = (action) => {
  if(action == "on"){
    console.log(action)
    fetch('http://localhost:8080/turnon', {method: 'POST'}).catch((error) => {console.log(error)})
  }else if(action == "off"){
    console.log(action)
    fetch('http://localhost:8080/shutdown', {method: 'POST'}).catch((error) => {console.log(error)})
  }
}

function App() {
  const [profiles, setProfiles] = useState([
    {
        name:'Firelight',
        brightness: 100,
        temperature: 1700
    },
    {
        name:'Nap',
        brightness: 20,
        temperature: 1700
    },
    {
        name:'Harsh',
        brightness: 100,
        temperature: 6500
    }
])

useEffect(() => {
  const getProfiles = async () => {
    const retrievedProfiles = await fetchProfiles();
    setProfiles(retrievedProfiles)
  }
  getProfiles();
}, [])

const fetchProfiles = async () => {
  const res = await fetch('http://localhost:8080/profiles', {method: 'GET'}).catch((error) => {console.log(error)})
  const data = res.json();
  return data;
}
  return (
    <div className ='container'>
    <ProfileView profiles={profiles} setWhiteProfile = {setWhiteProfile}/>
    <button onClick={()=>setOnOff("on")}>On</button>
    <button onClick={()=>setOnOff("off")}>Off</button>
    </div>
  );
}

export default App;
