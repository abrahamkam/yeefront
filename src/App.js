
import React from 'react';
import ProfileView from './components/ProfileView.js'
import{useState, useEffect} from 'react'
import './styling.scss'

const host = "https://yeeapi.abrahamkam.net"


const setWhiteProfile = (brightness, temperature) => {
  console.log("set white: "+brightness + " and "+temperature)
  fetch(host+"/createwhiteprofile", {method: 'POST', headers : {'Content-Type': 'application/json'},body : JSON.stringify({"brightness": brightness,"temperature":temperature})}).catch((error) => {console.log(error)})
}



const setOnOff = (action) => {
  if(action == "on"){
    console.log(action)
    fetch(host+'/turnon', {method: 'POST'}).catch((error) => {console.log(error)})
  }else if(action == "off"){
    console.log(action)
    fetch(host+'/shutdown', {method: 'POST'}).catch((error) => {console.log(error)})
  }
}

function App() {
  //Default profiles in case there is a failure to retrieve profiles from backend
  const [profiles, setProfiles] = useState([
    {
        name:'Firelight',
        brightness: 100,
        temperature: 1700,
        image:'https://pbs.twimg.com/media/D8BRDEDWsAInrYe.png'
    },
    {
        name:'Nap',
        brightness: 20,
        temperature: 1700,
        image:'https://img.freepik.com/free-vector/pixel-art-moon-icon_41992-1203.jpg?size=338&ext=jpg'
    },
    {
        name:'Harsh',
        brightness: 100,
        temperature: 6500,
        image:'https://images.squarespace-cdn.com/content/v1/551a19f8e4b0e8322a93850a/1529105713123-9Q3OJ9SYBUN78ESS81PR/Intro_Image.png'
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
  const res = await fetch(host+'/getdbprofiles', {method: 'GET'}).catch((error) => {console.log(error)})
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
