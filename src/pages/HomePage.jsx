import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {

//variable
const [projectList, setProjectList] = useState([]);

//methods
useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setProjectList(data);
    });
    //setProjectList(allProjects);
}, []);

//template

    return (
        <div>
            <div id="PETBNK">
                <h3>Welcome to PETBNK</h3>
                <p>Helping local animal welfare groups, pounds and rescue groups connect with the community to find donations and goods for animals in need.  </p>
            </div>
            <div id="project-list">
                
                {projectList.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
            <p>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        </div>
    );
}

export default HomePage;
