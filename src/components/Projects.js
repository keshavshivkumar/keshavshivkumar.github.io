import React from 'react';
import Navbar from './Navbar';
import projectDetails from './projectdetails.js';
import '../styles/projects.css';
import { FaGithub, FaFileAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <div>
            <Navbar/>
            <div className="projects-section">
                <h1 className="section-title">Projects</h1>
                <div className="projects-container">
                    {projectDetails.map((project, index) => (
                        <div className="project-block" key={index}>
                            <div className="project-details">
                                <h2 className="project-title">{project.title}</h2>
                                <p>{project.description}</p>
                                <p>Technologies Used: {project.technologies}</p>
                                <div className="project-links">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub size={30} />
                                        </a>
                                    )}
                                    {project.paperUrl && (
                                        <a href={project.paperUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaFileAlt size={30} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
