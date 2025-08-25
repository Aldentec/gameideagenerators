import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🎲</span>
          <h1>DevRandom</h1>
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