import React from 'react';
import Navbar from './Navbar';
import '../styles/home.css'
import { FaGithub, FaLinkedin, FaInstagram, FaFilePdf } from 'react-icons/fa'; 

const Home = () => {
    return (
        <div className="homepage">
            <Navbar/>
            <div className="home-container">
                <div className="text-section">
                    <h1>Hi</h1>
                    <h2>I'm Keshav Shivkumar</h2>
                    <p className="subtitle">
                        MSCS Student at Rutgers University, passionate to learn and leverage experience in Software Engineering, Data Science, and Machine Learning.
                    </p>
                    <div className='external-links'>
                        <div className="icon-container">
                            <a href="http://github.com/keshavshivkumar" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
                            <span className='link-text'>GitHub</span>
                        </div>
                        <div className="icon-container">
                            <a href="http://www.linkedin.com/in/keshavshivkumar" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
                            <span className='link-text'>LinkedIn</span>
                        </div>
                        <div className="icon-container">
                            <a href="http://www.instagram.com/jadedblues0" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                            <span className='link-text'>Instagram</span>
                        </div>
                        <div className="icon-container">
                            <a href="/Keshav_Shivkumar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button"><FaFilePdf size={30} /></a>
                            <span className='link-text'>Resume</span>
                        </div>
                    </div>
                </div>
                <div className="image-section">
                    <img src="/Shivkumar_K_01_nobg.png" alt="Keshav's Picture" />
                </div>
            </div>
        </div>
    );
}

export default Home;
