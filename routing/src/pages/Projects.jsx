import React from 'react';
import './Projects.css'; // Optional: for styling the project cards

// Data for the projects
const projectsData = [
  {
    title: 'Natural Language to Code Generation',
    description: 'A deep learning model trained to translate human language descriptions of a problem into executable Python code. The model leverages transformer architecture to understand context, variables, and logic from prompts.',
    technologies: ['Python', 'TensorFlow', 'Transformers', 'AST (Abstract Syntax Tree) Analysis'],
    link: '#' // Placeholder link
  },
  {
    title: 'Automated Data Analysis & Insight Generation',
    description: 'An application that ingests raw tabular data (CSV, JSON), automatically performs exploratory data analysis, identifies key correlations, and generates a summary report in natural language.',
    technologies: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Natural Language Generation (NLG)'],
    link: '#' // Placeholder link
  },
  {
    title: 'Complex Logical Reasoning Engine',
    description: 'Developed a system capable of solving multi-step logical puzzles and reasoning problems. This project focused on combining symbolic logic with neural networks to maintain accuracy and interpretability.',
    technologies: ['JAX', 'Graph Neural Networks', 'Symbolic Logic Solvers'],
    link: '#' // Placeholder link
  }
];

const Projects = () => {
  return (
    <div className="page-content">
      <h1>Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech-stack">
              <strong>Technologies Used:</strong>
              <div>
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;