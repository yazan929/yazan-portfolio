import Header from '../header/header'
import React from "react";
import Project from "./project/project";
import "./projects.css";
import projectsList from "./projectsList";

import qomra from '../photos/projects/qomra.jpg';
import qomra1 from '../photos/projects/qomra1.jpg';
import qomra2 from '../photos/projects/qomra2.jpg';
import qomra3 from '../photos/projects/qomra3.jpg';

import ateSeconds from '../photos/projects/ateSeconds.jpg';
import ateSeconds1 from '../photos/projects/ateSeconds1.JPG';
import ateSeconds2 from '../photos/projects/ateSeconds2.JPG';
import ateSeconds3 from '../photos/projects/ateSeconds3.JPG';

import Rcube from '../photos/projects/Rcube.jpg';
import Rcube1 from '../photos/projects/Rcube1.jpg';
import Rcube2 from '../photos/projects/Rcube2.jpg';
import Rcube3 from '../photos/projects/Rcube3.jpg';

import yazanShoes from '../photos/projects/yazanShoes.jpg';
import yazanShoes1 from '../photos/projects/yazanShoes1.jpg';
import yazanShoes2 from '../photos/projects/yazanShoes2.jpg';
import yazanShoes3 from '../photos/projects/yazanShoes3.jpg';


import yazanport from '../photos/projects/yazanport.jpg';
import yazanport1 from '../photos/projects/yazanport1.jpg';
import yazanport2 from '../photos/projects/yazanport2.jpg';
import yazanport3 from '../photos/projects/yazanport3.jpg';

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