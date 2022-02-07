import React from 'react';
import {FaSun, FaThermometerHalf} from 'react-icons/fa'
const Profile = ({profile, setWhiteProfile}) => {
  return(
    <div className='profile' onClick={() => setWhiteProfile(profile.brightness,profile.temperature)}>
        <h3 >{profile.name}</h3>
        <p><FaSun />{profile.brightness}</p>
        <p><FaThermometerHalf/>{profile.temperature}</p>
    </div>
  ) 
}

export default Profile;
