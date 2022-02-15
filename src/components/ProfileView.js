import React from 'react';
//import Profile from './Profile.js'
import ProfileCard from './ProfileCard.js'

 const ProfileView = ({profiles, setWhiteProfile, setOnOff}) => {

    return(
        <>
        {profiles.map((profile) => (
            <ProfileCard key={profile.name} profile={profile} setWhiteProfile = {setWhiteProfile}/>
        ))}
        </>
    )
}

export default ProfileView