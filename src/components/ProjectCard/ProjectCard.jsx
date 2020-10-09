import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {

    //variables
    const { projectData } = props;
    const date = new Date(projectData.date_created);

    //method


    //template
    return (
        <div className="project-card">
            <div id="link_project">
            <Link id="link_project_1">Help Us</Link>
            <Link to={`/project/${projectData.id}`} id="link_project_2">Read More</Link>
            <Link id="link_project_3">Contact</Link>
            </div>
            <Link to={`/project/${projectData.id}`}>
                <img className="main_img" src={projectData.image} alt='project' />
                <h4>{date.toLocaleDateString()}</h4>
                <div className="location_div">
                    <img className="location_pin" src="https://www.flaticon.com/svg/static/icons/svg/3455/3455735.svg" />
                    <h3>{projectData.suburb}</h3>
                </div>
            </Link>
            <h3>Looking for: {projectData.seeking}</h3>
            <p>{projectData.description}</p>
        </div>
    );
}

export default ProjectCard; 
