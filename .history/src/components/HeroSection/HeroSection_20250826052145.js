import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const words = [
    'Mechanics', 'Enemies', 'Worlds', 'Quests', 'Items', 'Bosses',
    'Genres', 'NPCs', 'Themes', 'Art Styles', 'Power-Ups', 'Motivations',
    'Loops', 'Emotions', 'Strategies'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade out
      
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsVisible(true); // Start fade in
      }, 300); // Wait for fade out to complete
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">
          Generate Random{' '}
          <span className={`rotating-word ${isVisible ? 'visible' : 'hidden'}`}>
            {words[currentWord]}
          </span>
        </h2>
        <p className="hero-subtitle">
          Break through creative blocks with instant game development inspiration
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Generators</span>
          </div>
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Possibilities</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Free</span>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  );
};

export default HeroSection;