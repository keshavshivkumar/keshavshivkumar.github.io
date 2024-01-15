// Projects.js
import React from 'react';
import Navbar from './Navbar';
import projectDetails from './projectdetails.js';
import '../styles/projects.css';
import { FaGithub } from 'react-icons/fa'; 

const Projects = () => {
    return (
        <div>
            <Navbar/>
            <div className="projects-container">
                <h1 className="section-title">Projects</h1>
                {projectDetails.map((project, index) => (
                    <div className="project-block" key={index}>
                        <div className="project-details">
                            <h2 className="project-title">{project.title}</h2>
                            <p>{project.description}</p>
                            <p>Technologies Used: {project.technologies}</p>
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={30} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
