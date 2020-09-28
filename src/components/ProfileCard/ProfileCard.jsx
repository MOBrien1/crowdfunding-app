import React, { useState, useEffect } from "react";

//variables
const [profileData, setProfileData] = useState([]);

//method
useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}profile/${id}/`)
    .then((results) => {
        //console.log(results)
        return results.json();
    })
    .then((data) => {
        //console.log(data)
        setProfileData(data);
    });
}, [id]); 


//template
return (
    <div>
        <h2>{`${profileData.profile_pic}`}</h2>
        <h3>{`${profileData.bio}`}</h3>
        <h3>{`${profileData.email}`}</h3>
        <img src={profileData.image} alt='profile'/>
    </div>
    );
}

export default ProfileCard