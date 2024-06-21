// src/components/AboutMe.jsx
import React from 'react';
import legoAvatar from '../assets/Lego.png'; 

const AboutMe = () => {
  return (
    <section id="about-me" className="content-section">
      <h2>About Me</h2>
      <div className="bio">
        <img src={legoAvatar} alt="Developer's Avatar" className="avatar"/>
        <p>
          I am a 28-year-old cognitive science graduate from Simon Fraser University on Vancouver BC, currently residing in Mexico City (CDMX).
          Passionate about technology and its transformative potential, I am embarking on a career transition into the world of development.
          With a strong foundation in cognitive science, I bring a unique perspective to problem-solving and a keen interest in software development.
          I am eager to contribute my skills and continue learning in this dynamic field.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
