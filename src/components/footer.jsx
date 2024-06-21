// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me on:</p>
      <div className="social-links">
        <a href="https://github.com/carlos-roma/" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="www.linkedin.com/in/carlos-rodriguez-186701209" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
