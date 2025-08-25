import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="https://gameideagenerators.com" className="logo-link">
            <span className="logo-icon">🎲</span>
            <h1>Game Idea Generators</h1>
            <span className="domain-text">gameideagenerators.com</span>
          </a>
        </div>
        <nav className="nav">
          <a href="#generators">Generators</a>
          <a href="#about">About</a>
          <a href="#saved">Saved Ideas</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;