import React, { useState, useEffect } from "react";
import "./ProfileCard.css";
import { useParams } from "react-router-dom";


function ProfileCard() {
    //variables
    const [profileData, setProfileData] = useState([]);
    

    //method
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}profile/me/`)
        .then((results) => {
            console.log(results)
            return results.json();
        })
        .then((data) => {
            console.log(data)
            setProfileData(data);
        });
    }, []); 


//template
    return (
        <div className="profile_card">
            <div>
                <h3>{`${profileData.profile_pic}`}</h3>
                <h3>{`${profileData.bio}`}</h3>
                <h3>{`${profileData.email}`}</h3>
                <img src={profileData.image} alt='profile'/>
            </div>
        </div>
    );
}

export default ProfileCard;