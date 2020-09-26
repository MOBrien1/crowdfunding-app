import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {

    //variables
    const { projectData } = props;

    //method


    //template
    return (
        <div className="project-card">
            <Link to={`/project/{$projectData.id}`}>
                <img src={projectData.image} />
                <h3>{projectData.title}</h3>
            </Link>
            <p>{projectData.description}</p>
        </div>
    );
}

export default ProjectCard; 
