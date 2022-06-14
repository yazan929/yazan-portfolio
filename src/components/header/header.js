import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillHome, AiFillRocket, AiFillPhone } from 'react-icons/ai';

const Header = () => (
    <div className="Navbar">
        <div className="Section1">
            <Link className="Title" to="/">
                <div className="Yazan">YAZAN</div>
            </Link>
            <Link className="Title2" to="/">
                <div className="Qawasmeh">QAWASMEH</div>
            </Link>


        </div>
        {/* <div className="Section2">
            <Link className="Navlink" to="/aboutPage"  ><div  > About</div> </Link>
            <Link className="Navlink" to="/skills" ><div >  Skills </div> </Link>
            <Link className="Navlink" to="/projects" ><div > Projects </div> </Link>

        </div> */}
        <div className="Section2">

            <a className="icon" href="https://github.com/yazan929" title="Github Account">
                <AiFillGithub className="iconS"></AiFillGithub>
            </a>

            <a className="icon" href="https://www.linkedin.com/in/yazan-qawasmeh-4108b2173/" title="Linkedin Profile">
                <AiFillLinkedin className="iconS"></AiFillLinkedin>

            </a>
            <a className="icon" href="mailto: yazanq95@hotmail.com" title="Email me">
                <AiFillMail className="iconS"></AiFillMail>
            </a>

            {/* <a className="icon" href="https://www.linkedin.com/in/yazan-qawasmeh-4108b2173/" title="Call me">
                <AiFillPhone className="iconS"></AiFillPhone>

            </a> */}

        </div>

    </div>
);

export default Header;