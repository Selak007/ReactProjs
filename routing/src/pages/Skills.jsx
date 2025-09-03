// src/pages/Skills.js
import React from 'react';

const skillsData = {
  'Programming Languages': ['Python', 'JavaScript/TypeScript', 'C++', 'Java', 'SQL'],
  'AI/ML Frameworks': ['TensorFlow', 'PyTorch', 'JAX', 'Scikit-learn'],
  'Natural Language Processing': ['Transformers', 'BERT', 'T5', 'Attention Mechanisms', 'Vector Embeddings'],
  'Data Processing': ['Apache Beam', 'Pandas', 'NumPy', 'Large-scale Data Pipelines'],
  'Cloud & DevOps': ['Google Cloud Platform (GCP)', 'Kubernetes', 'Docker'],
};

const Skills = () => (
  <div className="page-content">
    <h1>Skills</h1>
    {Object.entries(skillsData).map(([category, skills]) => (
      <div key={category} className="skill-category">
        <h3>{category}</h3>
        <ul>
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

export default Skills;