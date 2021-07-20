
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

const projectsList=[
    {
        photo: yazanport,
        pic1: yazanport1,
        pic2: yazanport2,
        pic3: yazanport3,   
        about: "A page about my skills and the projects that i have made",
        name: "Portfolio webapp",
        projectTitle: "xd",
        technologies: "React, CSS",
        msg: "A simple responsive Webapp that has some of my recent projects and a page about me and my skills",
        game: false,
        webapp: true,
        youtubeL: false,
        githubL: true,
        tryL: true,
        youtube: "//",
        github: "//",
        try: "",
        date: "July 2021",

    }, 
    {
        photo: Rcube,
        pic1: Rcube1,
        pic2: Rcube2,
        pic3: Rcube3,   
        about: "Final year project - currently working on (not yet finished)",
        name: "3x3x3 Rubik’s Cube Solver",
        projectTitle: "xd",
        technologies: "Unity3D, C#, OpenCV, Python, Pytorch, ML-Agents",
        msg: "A Rubik’s cube simulator created with Unity3D engine where the user can move, rotate, solve, shuffle and fill the colours of the cube manually, or scan the cube's colours to get the solving steps using an NN (Neural-Network), this project is a 2 semester subject so this project will be ready before the end of Nov 2021.",
        game: true,
        webapp: true,
        youtubeL: false,
        githubL: false,
        tryL: false,
        youtube: "//",
        github: "//",
        try: "",
        date: "Apr 2021",

    }, 

    {
        photo: yazanShoes,
        pic1: yazanShoes1,
        pic2: yazanShoes2,
        pic3: yazanShoes3,   
        about: "Practice project where i got to learn about fullstack development",
        name: "Yazan929 Shoes Shop",
        projectTitle: "xd",
        technologies: "React, Redux, Express, NodeJS, MongoDB, Java, Springboot",
        msg: "A fullstack webapp where a list of shoes MongoDB loads on react using Springboot's port, users can write a review with a number of stars and a string and it will be stored on the database and can be accessed by other users from the about us tab,Code for the frontend and backend is available at the top left corner.",
        game: false,
        webapp: true,
        youtubeL: false,
        githubL: true,
        tryL: true,
        youtube: "//",
        github: "//github.com/yazan929/RealReactShoes",
        try: "//github.com/yazan929/ShoeBackend",
        date: "Apr 2021",

    }, 

    
    {
        photo: ateSeconds,
        pic1: ateSeconds1,
        pic2: ateSeconds2,
        pic3: ateSeconds3,   
        about: "A GameJam submission",
        name: "Ate seconds",
        projectTitle: "xd",
        technologies: "Unity3D, C#",
        msg: "A mobile videogame that was created in 3 days, main goal is to solve a puzzle with time reversing mechanics, Video and apk demo are availabe at the top left corner.",
        game: true,
        webapp: false,
        youtubeL: true,
        githubL: false,
        tryL: true,
        youtube: "//www.youtube.com/watch?v=bli1XEKhdMc",
        github: "//www.github.com",
        try: "//drive.google.com/uc?export=download&id=1jVQ9D5ngytzZpLr5SztZW5XPbHiaes34",
        date: "May 2021",

    }, 

    {
        photo: qomra,
        pic1: qomra1,
        pic2: qomra2,
        pic3: qomra3,   
        about: "A GameJam submission",
        name: "Qomra",
        technologies: "Unity3D, C#",
        projectTitle: "xd",
        msg: "A historical FPS game created with Unity C# that shows the story of ibn alHaitham and how the camera was invented, This project has fluid simulation physics, Video and demo are abailable at the top left.",
        game: true,
        webapp: false,
        youtubeL: true,
        githubL: false,
        tryL: true,
        youtube: "//www.youtube.com/watch?v=35vpQuWmKbg",
        github: "//www.github.com",
        try: "//drive.google.com/uc?export=download&id=1fROH5C7BNBpxtJVEGhGCp18PDvv-Yxlr",
        date: "Dec 2019",

    },



];
export default projectsList;