import Header from '../header/header'
import React from "react";
import Project from "./project/project";
import "./projects.css";
import projectsList from "./projectsList";

const Projects = () => {
    // let ctr = 1;

    const projects = projectsList;
    console.log(projects);


    return projects.length === 0 || !projects ? (
        <div>
            <Header />
            <div className="Break"></div>
            <div>No Projects Found </div>
        </div>
    ) : (
        <div>
            <Header />


            <div className="Home">
                <div className="projectsList">


                    {projects.map((project) => (

                        <div key={project.id}>

                            <Project project={project} />

                        </div>





                    ))}

                </div>
            </div>

        </div>

    );
};

export default Projects;