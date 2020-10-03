import React, { useState, useEffect } from "react";
import "./ProfileCard.css";

function ProfileCard() {
    //variables
    const [profileData, setProfileData] = useState([]);
    let token = window.localStorage.getItem("token");

    //method
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}profile/me/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
        }})
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
                <img src={profileData.pet_pic} alt='pets'/>
            </div>
        </div>
    );
}

export default ProfileCard;