import React from 'react';
import Header from '../header/header'
import yazan from '../photos/yazan.jpg'; // Tell webpack this JS file uses this image
import { FaUniversity, GiPodiumWinner } from 'react-icons/fa';

import css from '../photos/icons/css.png'
import html from '../photos/icons/html.png'
import javascript from '../photos/icons/javascript.png'
import git from '../photos/icons/git.png'
import github from '../photos/icons/github.png'
import react from '../photos/icons/react.png'
import springboot from '../photos/icons/springboot.png'
import nodejs from '../photos/icons/nodejs.png'
import mongodb from '../photos/icons/mongodb.png'
import unity3d from '../photos/icons/unity3d.png'
import csharp from '../photos/icons/csharp.png'
import python from '../photos/icons/python.png'
import pytorch from '../photos/icons/pytorch.png'
import opencv from '../photos/icons/opencv.png'


import "./home.css";

const Home = () => (
    <div >
        <Header />
        <div className="Home">

            <div className="main">
                {/* <div>Welcome to my porfolio</div> */}
                <div className="top1">
                    <div className="top2Y">
                        <img className="yazpic" src={yazan} alt="Yazan" />
                        <br />
                        <div className="name">Yazan Qawasmeh </div>

                        <div className="major">CS Student At Coventry University</div>
                    </div>


                    <div className="top2">
                        <div className="YazanH">Biography </div>
                        <br />
                        <br />
                        <div className="underH">A bachelor's degree student in the Department of Computer Science at Coventry University graduating in Mar 2022,
                            I have a Diploma in Information Technology from INTI collage in collaboration with IBM.
                        </div>
                        <br />
                        <div className="underH">Highly motivated developer, Passionate about what I do and constantly seeking New challenges,
                            Loves building user-friendly websites, web apps and creating video games.

                        </div>
                        <br />
                        <div className="buttonHolder">
                            <button className="projectsBtn">Check out some of my projects</button>

                        </div>
                    </div>
                </div>


            </div>
            <div className="aboutP">
                <div className="aboutPP">
                    <div className="T1">ABOUT</div>
                    <div className="simpleText"> My name is Yazan Qawasmeh, I'm a junior software engineer who is always experimenting, learning, and never bored, Currently i am focusing on improving my web development skills and at React as a framework.  </div>
                </div>

            </div>


            <div className="T1B">SKILLS</div>
            <div>
                <div className="subTitle">Web Development languages frameworks and tools</div>
                <div className="iconsList">

                    <img className="iconLogo" src={react} title="React" title="React" />
                    <img className="iconLogo" src={html} alt="HTML" title="HTML" />
                    <img className="iconLogo" src={css} alt="CSS" title="CSS" />
                    <img className="iconLogo" src={javascript} alt="JAVASCRIPT" title="Javascript" />
                    <img className="iconLogo" src={nodejs} alt="NodeJS" title="NodeJS" />
                    <img className="iconLogo" src={mongodb} alt="MongoDB" title="MongoDB" />
                    <img className="iconLogo" src={springboot} alt="SpringBoot" title="SpringBoot" />
                    <img className="iconLogo" src={git} alt="Git" title="Git" />
                    <img className="iconLogo" src={github} alt="GitHub" title="GitHub" />


                </div>
                <br />
                <br />
                <div className="subTitle">Game Development and Machine learning</div>
                <div className="iconsList">
                    <img className="iconLogo" src={csharp} alt="Csharp" title="C#" />
                    <img className="iconLogo" src={unity3d} alt="Unity3D" title="Unity3D" />
                    <img className="iconLogo" src={opencv} alt="OpenCV" title="OpenCV" />
                    <img className="iconLogo" src={python} alt="Python" title="Python" />
                    <img className="iconLogo" src={pytorch} alt="Pytorch" title="Pytorch" />

                </div>
            </div>
            <div className="simpleText2">While my current focus is frontend development and creating responsive webapps with React, CSS, Nodejs and mongodb, I also do game development with Unity3D, C#, I've worked before with Java Springboot, Java/Android studio, Pytorch and .NET Framework, To see my skills in action, check out my Projects or contact me if you have any questions.</div>

            <div className="awardsP">
                <div className="T1">AWARDS</div>
                <div>
                    <ul class="pointA">
                        <li>1st place Danah game jam 2019 </li>
                        <li>3rd place Ajman summer game jam 2020 </li>
                        <li>3rd place EID JAM!!! 2019 </li>
                    </ul>
                </div>

    </div>
                <div>Thank you for your time, I wish you a pleasant day :)</div>

            </div>
            <div>:copyright: 2021 Yazan Qawasmeh</div>

        </div>

        );

        export default Home;