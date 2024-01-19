import React from 'react';
import '../styles/about.css';
import Navbar from './Navbar';

const About = () => {
    return (
        <div>
            <Navbar/>
            <h2 className='about-me-content'>About Me</h2>
            <div className="about-me-container">
                <div className="about-me-image">
                    <img src='/Shivkumar_K_02.jpg' alt="Keshav Shivkumar" />
                </div>
                <div className="about-me-text">
                    <p>
                        Hello! I'm Keshav Shivkumar, currently in the final stretch of my Master of Science in Computer Science at Rutgers University. 
                        My journey through university has been marked by a deep engagement with the world of technology, specializing in areas such as 
                        Software Engineering, Data Science, and Machine Learning. With a strong academic foundation, I've tackled courses ranging from 
                        AI and Machine Learning to Database Systems, all while maintaining a high GPA.
                    </p>
                    <p>
                        My professional path has given me the opportunity to serve as a Teaching Assistant, where I've shared knowledge on web technologies 
                        and Python programming, and an internship at Bloom Energy, where I played a pivotal role in developing and optimizing web applications with a DevOps baseline.
                    </p>
                    <p>
                        With graduation on the horizon, I'm actively exploring opportunities where I can apply my skills in web development, software development, 
                        and data-driven technologies. Recently, I've been honing my skills in FastAPI and brushing up on ReactJS, always with the aim of using 
                        programming as a tool for solving complex problems.
                    </p>
                    <p>
                        Outside the digital realm, I'm a curious soul with a penchant for music, history, and the perpetual quest to understand the 'why' behind things. 
                        Whether it's through code or in life, I'm on a constant journey of discovery and improvement.
                    </p>
                    </div>
            </div>
        </div>
    );
};

export default About;
