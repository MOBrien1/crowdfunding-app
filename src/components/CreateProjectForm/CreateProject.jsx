import React from "react";


function AddProject() {

const postData = async () => {
    let token = window.localStorage.getItem("token");
    console.log(token)

    // POST request using fetch with async/away 
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(projectData),
    });
    console.log(response)
    return response.json();
};

export default AddProject;
