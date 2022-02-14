import React, { useState } from "react";
import "./project.css";
import Modal from "react-modal";
import { AiFillGithub, AiFillYoutube, AiFillCloseCircle } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi'
// Modal.setAppElement("#root");
const bg = {
    overlay: {
        background: "rgba(29, 29, 29, 0.5)",
        // background: "rgba(29, 29, 29, 1, 0.2 )",
        //   opacity: "0.5"

    }
};



// let image = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';




const Project = ({ project }) => {
    const [ctr, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    function next() {
        if (ctr == 2) {
            setCount(ctr - ctr)
        } else {
            setCount(ctr + 1)
        }
    }
    function previous() {
        if (ctr == 0) {
            setCount(ctr + 2)
        } else {
            setCount(ctr - 1)
        }
    }
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    var theListOfTech;

    // project.technologies.forEach(function (item, index) {
    //     theListOfTech += '<div className="technologies">' + project.technologies[index + 1] + '</div>';
    // });
    // console.log(theListOfTech);

    return (

        <div className="listOfProjects">



            <Modal
                // centered
                style={bg}
                className="modal"
                isOpen={isOpen}
                onRequestClose={toggleModal}
            >

                <div className="imagesHolder">
                    {/* <button onClick={next} className="sideB">&lt; </button> */}


                    {/* {ctr == 0 ? (
                        <img className="imgs" src={project.pic1} alt="pic1" />) :
                        ctr == 1 ? (<img className="imgs" src={project.pic2} alt="pic2" />) :
                            (<img className="imgs" src={project.pic3} alt="pic3" />)} */}
                    <img className="imgs" src={project.pic1} alt="pic1" />
                    <img className="imgs" src={project.pic2} alt="pic2" />
                    <img className="imgs" src={project.pic3} alt="pic2" />


                    {/* <button onClick={previous} className="sideB"> &gt;  </button> */}
                </div>

                <div className="otherSide">
                    <div className="closeHolder">
                        <a onClick={toggleModal} className="closeButton" title="close">
                            <AiFillCloseCircle ></AiFillCloseCircle>
                        </a>
                    </div>

                    <div className="modalButtons">

                        {project.githubL ? (
                            <a className="iconA" href={"//" + project.github} title="Github repo">
                                <AiFillGithub className=""></AiFillGithub>
                            </a>
                        ) :
                            <a className="iconNA" title="No github repo available">
                                <AiFillGithub className=""></AiFillGithub>
                            </a>}



                        {project.youtubeL ? (
                            <a className="iconA" href={"//" + project.youtube} title="Youtube demo">
                                <AiFillYoutube className=""></AiFillYoutube>
                            </a>
                        ) :
                            <a className="iconNA" title="No Youtube available">
                                <AiFillYoutube className=""></AiFillYoutube>
                            </a>}



                        {project.tryL ? (
                            <a className="iconA" href={"//" + project.try} title="Demo">
                                <BiLinkExternal className=""></BiLinkExternal>
                            </a>
                        ) :
                            <a className="iconA" title="No demo available">
                                <BiLinkExternal className=""></BiLinkExternal>
                            </a>}




                    </div>


                    <div className="modalAbout">{project.about}</div>
                    <div className="modalDesc">{project.msg}</div>

                    <div className="technologiesBoxes">
                        {project.technologies.map((technologies, index) => (
                            <div className="techBox" key={index}>{project.technologies[index]}</div>
                        ))}
                    </div>
                </div>





            </Modal>

            <div className="modalH" onClick={toggleModal}>


                {/* <img src='../../photos/projects/project1.jpg'  /> */}
                <img className="projectImg" src={project.photo} alt={" photo"} title={project.name} />
                <div className="modalTitle">{project.name}</div>

                <div className="technologiesList">
                    {project.technologies.map((technologies, index) => (
                        <div className="technologies" key={index}>{project.technologies[index]}</div>
                    ))}
                </div>


                {/* <div className="technologies">{project.technologies[0]}</div>
                    <div className="technologies">{project.technologies[1]}</div>
                    <div className="technologies">{project.technologies[2]}</div>
                    <div className="technologies">{project.technologies[3]}</div>
                    <div className="technologies">{project.technologies[4]}</div>
                    <div className="technologies">{project.technologies[5]}</div>
                    <div className="technologies">{project.technologies[6]}</div>
                    <div className="technologies">{project.technologies[7]}</div>
                    <div className="technologies">{project.technologies[8]}</div>
                    <div className="technologies">{project.technologies[9]}</div> */}




                {/* <div className="textUnder">{project.name.substring(0, 1).toUpperCase() + project.name.substring(1)}</div> */}
            </div>


        </div>

    );
};

export default Project;