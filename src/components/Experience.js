import React, { useState } from "react";
import Navbar from "./Navbar";
import '../styles/experience.css';

const Experience = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <Navbar/>
            <h1 className="section-title">Experience</h1>
            <div className="experience-container">
                <div 
                    className="experience-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="experience-details">
                        <img src="/bloomenergy.png" alt="Bloom Energy Logo" className="company-logo" />
                        <div className="company-and-date">
                            <span className="company-name">Bloom Energy</span>
                            <span className="date-range">Sept 2021 - Mar 2022</span>
                        </div>
                        <h2 className="role">Software Engineer Intern</h2>
                        {isHovered && (
                            <p className="experience-description">
                            • Developed a real-time monitoring system for manufactured fuel cell maintenance using ReactJS to engineer a
                            dynamic front-end dashboard that displayed live data streams and Flask to serve as the back-end framework to
                            handle API integration and monitor cell performance metrics for authorized users.
                            • Transitioned the monitoring web application on an AWS EC2 instance to accommodate the growing influx of
                            data.
                            • Engineered and launched a MariaDB database on AWS RDS to archive test data, improving the
                            application\’s efficiency by 52%, to ensure a comprehensive tracking of fuel cell performance over time.
                            • Implemented data ingestion routines using pre-existing APIs to retrieve real-time fuel cell metrics such as
                            electrical output, fuel utilization rate, system efficiency, emission levels into a status table UI.
                            • Integrated Jenkins and GitLab CI/CD pipelines to automate the deployment process and facilitate continuous
                            delivery of application updates and new features onto EC2.    
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
