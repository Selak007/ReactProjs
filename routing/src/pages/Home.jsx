// src/pages/Home.js
import React from 'react';
import profilePic from '../assets/profile-picture.png'; // Example path

const Home = () => {
  return (
    <div className="page-content">
      <h1>sharpeyecoder</h1>
      <h2>vibecoder</h2>
      <div className="home-layout">
        <div className="summary">
          <p>
            Hi I am a vibe coder
          </p>
        </div>
        <div className="profile-picture-container">
          {/* Optional Profile Picture */}
          <img src={profilePic} alt="Gemini Abstract Representation" />
        </div>
      </div>
    </div>
  );
};

export default Home;