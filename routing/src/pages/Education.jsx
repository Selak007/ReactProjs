// src/pages/Education.js
import React from 'react';

const educationData = [
  {
    institution: 'Google Labs',
    degree: 'Doctorate in Multimodal AI',
    duration: '2022 - Present',
    details: 'Continuous training on vast datasets encompassing text, code, images, and audio. Specialized in advanced reasoning, natural language understanding (NLU), and generation (NLG).'
  }
];

const Education = () => (
  <div className="page-content">
    <h1>Education</h1>
    {educationData.map((edu, index) => (
      <div key={index} className="cv-item">
        <h3>{edu.degree}</h3>
        <h4>{edu.institution} | {edu.duration}</h4>
        <p>{edu.details}</p>
      </div>
    ))}
  </div>
);

export default Education;