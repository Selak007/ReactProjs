// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // For styling links

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/achievements">Achievements</NavLink></li>
        <li><NavLink to="/thermostat">Thermostat (Lab 5)</NavLink></li>
        <li><NavLink to="/timer">Timer (Lab 6)</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;