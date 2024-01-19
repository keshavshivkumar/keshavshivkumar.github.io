import React from 'react';
import { Link } from 'react-router-dom';
import { useMantineTheme } from '@mantine/core';
import ToggleMode from './ToggleMode';
import '../styles/navbar.css';

const Navbar = () => {
    const theme = useMantineTheme();
    const isDark = theme.colorScheme === 'dark';

    const navbarStyle = {
        backgroundColor: isDark ? theme.colors.dark[8] : theme.colors.gray[1], 
        color: isDark ? theme.colors.gray[0] : theme.colors.dark[9]
    };

    return (
        <nav className="navbar" style={navbarStyle}>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ToggleMode />
        </nav>
    );
};

export default Navbar;
