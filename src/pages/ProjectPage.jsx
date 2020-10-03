import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage() {
const [projectData, setProjectData] = useState({ pledges: [] });
const { id } = useParams();
const date = new Date(projectData.date_created);

useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`)
    .then((results) => {
        console.log(results)
        return results.json();
    })
    .then((data) => {
        console.log(data)
        setProjectData(data);
    });
}, [id]); 

    return (
        <div>
            <h2>{`Title: ${projectData.title}`}</h2>
            <h3>{`Status: ${projectData.is_open === false ? "Complete" : "Active"}`}</h3>
            <h3>Posted: {date.toLocaleDateString()}</h3>
            <img src={projectData.image} alt='project'/>
            <h3> Pledges from: </h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.supporter} 
                        </li>
                    );
                })}
            </ul>
        </div>
        );
    }

export default ProjectPage;