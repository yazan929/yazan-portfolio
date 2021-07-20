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
    const[ctr,setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    function next(){
        if(ctr===2){
            setCount(ctr - ctr)
        }else{
            setCount(ctr + 1)
        }
    }
    function previous(){
        if(ctr===0){
            setCount(ctr + 2)
        }else{
            setCount(ctr - 1)
        }
    }
    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (

        <div>



            <Modal

                style={bg}
                className="modal"
                isOpen={isOpen}
                onRequestClose={toggleModal}
            >
                <div className="modalButtons">
                    <div>



                        {project.githubL ? (
                            <a className="iconM" href={project.github} title="Github repo">
                                <AiFillGithub className="iconSM"></AiFillGithub>
                            </a>
                        ) :
                            <a className="iconN" title="No github repo available">
                                <AiFillGithub className="iconSM"></AiFillGithub>
                            </a>}



                        {project.youtubeL ? (
                            <a className="iconM" href={project.youtube} title="Github repo">
                                <AiFillYoutube className="iconSM"></AiFillYoutube>
                            </a>
                        ) :
                            <a className="iconN" title="No youtube demo available">
                                <AiFillYoutube className="iconSM"></AiFillYoutube>
                            </a>}



                        {project.tryL ? (
                            <a className="iconM" href={project.try} title="Demo">
                                <BiLinkExternal className="iconSM"></BiLinkExternal>
                            </a>
                        ) :
                            <a className="iconN" title="No demo available">
                                <BiLinkExternal className="iconSM"></BiLinkExternal>
                            </a>}




                    </div>

                    <div>
                        <a onClick={toggleModal} className="iconX" title="close">
                            <AiFillCloseCircle className="iconSM"></AiFillCloseCircle>
                        </a>
                    </div>


                </div>

                <div className="topT">{project.name}</div>
                <div className="topT2">{project.about}</div>
                <div className="topT2">Project was created with: {project.technologies}</div>

                <div className="imagesHolder">
                    <button onClick={next} className="sideB">&lt; </button>


                    {ctr === 0 ? (
                    <img className="imgs" src={project.pic1} />) :
                    ctr===1 ? (<img className="imgs" src={project.pic2} />): 
                     (<img className="imgs" src={project.pic3} />)}


                    <button onClick={previous} className="sideB"> &gt;  </button>
                </div>

                <div className="description">{project.msg}</div>

            </Modal>

            <div className="modalH">

                <div className="Perproject">

                    {/* <img src='../../photos/projects/project1.jpg'  /> */}

                    <img className="projectImg" src={project.photo} alt="CSS" title="CSS" onClick={toggleModal} />

                    <div className="textUnder">{project.name.substring(0, 1).toUpperCase() + project.name.substring(1)}</div>
                </div>
            </div>


        </div>

    );
};

export default Project;