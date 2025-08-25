import React, { useState } from 'react';
import './RandomizerCard.css';

const RandomizerCard = ({ title, icon, description, generator, color }) => {
  const [result, setResult] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGenerate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const newResult = generator();
      setResult(newResult);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="randomizer-card" style={{ '--accent-color': color }}>
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <p className="card-description">{description}</p>
      
      <div className={`result-box ${isAnimating ? 'animating' : ''} ${result ? 'has-result' : ''}`}>
        {result || 'Click generate to get started...'}
      </div>
      
      <button className="generate-btn" onClick={handleGenerate}>
        <span>Generate</span>
        <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 4v6h6M23 20v-6h-6M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
        </svg>
      </button>
    </div>
  );
};

export default RandomizerCard;