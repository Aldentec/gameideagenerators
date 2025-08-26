import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Built with 💜 for game developers everywhere</p>
        <p className="creator-credit">
          Created by <a href="https://doriansmith.dev" target="_blank" rel="noopener noreferrer">Dorian Smith</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;