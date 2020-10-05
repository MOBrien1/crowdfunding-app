import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
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
            //console.log(results)
            return results.json();

        })
        .then((data) => {
            //console.log(data)
            setProfileData(data);
        });
    }, [],); 

//template
    return (
        <div className="profile_card">
            <div className="profile_items">
                <img className="profile_pic" src={profileData.profile_pic} alt='profile_owner'/>
                <h2>{profileData.username}'s Profile</h2>
                <h3>Biography</h3><p>{profileData.bio}</p>
                <h3>Contact me:</h3><p>{profileData.email}</p>
                <h3>My pets</h3>
                <img className='pet_pics' src={profileData.pet_pic} alt='pets'/>
            </div>
            <div className="active_projects">
            </div>
            <div className="closed_projects">
            </div>
        </div>
    );
}

export default ProfileCard;