import React from 'react';
import Profile from './Profile.js'

 const ProfileView = ({profiles, setWhiteProfile, setOnOff}) => {

    return(
        <>
        {profiles.map((profile) => (
            <Profile key={profile.name} profile={profile} setWhiteProfile = {setWhiteProfile}/>
        ))}
        </>
    )
}

export default ProfileView