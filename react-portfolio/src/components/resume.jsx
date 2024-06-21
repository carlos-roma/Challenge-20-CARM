// src/components/Resume.jsx
import React from 'react';
import resume from '../assets/CV.pdf'; 

const Resume = () => (
  <section className="content-section">
    <h2>Resume</h2>
    <a href={resume} download>Download Resume</a>
    <h3>Proficiencies</h3>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>CSS</li>
      <li>HTML</li>

    </ul>
  </section>
);

export default Resume;
