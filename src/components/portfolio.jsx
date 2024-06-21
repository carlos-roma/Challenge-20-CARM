// src/components/Portfolio.jsx
import React from 'react';
import API from '../assets/API.png';
import CSS from '../assets/CSS.png';
import FMD from '../assets/FMD.png';
import NT from '../assets/NT.png';
import SQL from '../assets/SQL.png';
import SVG from '../assets/SVG.png';
import reactLogo from '../assets/react.svg';

const projects = [
  {
    title: 'E-commerce API',
    image: API,
    deployedLink: null,
    githubLink: 'https://github.com/carlos-roma/ecomerce-backend'
  },
  {
    title: 'Portfolio 1',
    image: CSS,
    deployedLink: 'https://carlos-roma.github.io/Portfolio-1/',
    githubLink: 'https://github.com/carlos-roma/Portfolio-1'
  },
  {
    title: 'Currency Converter',
    image: FMD,
    deployedLink: 'https://lage356.github.io/findMyDivvy/',
    githubLink: 'https://github.com/lage356/findMyDivvy'
  },
  {
    title: 'Note taker',
    image: NT,
    deployedLink: 'https://notes-app-carm-ac1c2a3a2652.herokuapp.com/',
    githubLink: 'https://github.com/carlos-roma/Note_taker'
  },
  {
    title: 'SQL Employee tracker',
    image: SQL,
    deployedLink: null,
    githubLink: 'https://github.com/carlos-roma/SVG_generator'
  },
  {
    title: 'SVG CLI Generator',
    image: SVG,
    deployedLink: null,
    githubLink: 'https://github.com/carlos-roma/SVG_generator'
  }
];

const Portfolio = () => (
  <section className="portfolio-section content-section">
    <h2>Portfolio</h2>
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>
            {project.deployedLink ? (
              <>
                <a href={project.deployedLink}>Deployed Application</a> | <a href={project.githubLink}>GitHub Repository</a>
              </>
            ) : (
              <a href={project.githubLink}>GitHub Repository</a>
            )}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
