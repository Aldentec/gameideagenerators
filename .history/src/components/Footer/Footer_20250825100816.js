import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Built with 💜 for game developers everywhere</p>
        <p className="footer-links">
          <a href="#about">About</a>
          <span>•</span>
          <a href="#contact">Contact</a>
          <span>•</span>
          <a href="#github">GitHub</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;