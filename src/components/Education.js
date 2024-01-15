import React from 'react';
import Navbar from './Navbar';
import '../styles/education.css';

const Education = () => {
    return (
        <div>
            <Navbar/>
            <div className="education-container">
                <h1 className="section-title">Education</h1>
                <div className="education-block">
                    <img src="/RUNB_S_RED.png" alt="Rutgers University Logo" className="university-logo" />
                    <div className="education-details">
                        <div className="university-and-date">
                            <span className="university-name">Rutgers University, New Brunswick</span>
                            <span className="date-range">Sept 2022 - May 2024</span>
                        </div>
                        <h2 className="degree">Master of Science (M.S.) in Computer Science</h2>
                        <p className="gpa">GPA: 3.85/4.00</p>
                        {/* <p className="coursework">Relevant Coursework: </p> */}
                    </div>
                </div>
                <div className="education-block">
                    <img src="/pes.png" alt="PES University Logo" className="university-logo" />
                    <div className="education-details">
                        <div className="university-and-date">
                            <span className="university-name">PES University, Bangalore</span>
                            <span className="date-range">August 2018 - June 2022</span>
                        </div>
                        <h2 className="degree">Bachelor of Technology in Computer Science Engineering</h2>
                        <p className="gpa">GPA: 8.11/10.00</p>
                        {/* <p className="coursework">Relevant Coursework: </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
