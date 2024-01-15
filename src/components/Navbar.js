import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/home">Home</Link></li>
                {/* <li><Link to="/about">About Me</Link></li> */}
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                {/* <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/skills">Skills</Link></li> */}
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
