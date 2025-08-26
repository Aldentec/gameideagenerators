import React, { useState } from 'react';
import './RandomizerCard.css';

/* global gtag, ga */

const RandomizerCard = ({ title, icon, description, generator, color, category }) => {
  const [result, setResult] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to track generator usage
  const trackGeneratorUsage = (generatorName, generatorCategory) => {
    // Check if gtag is available (Google Analytics 4)
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      // Track the specific generator used
      window.gtag('event', 'generator_used', {
        event_category: 'Generator Interaction',
        event_label: generatorName,
        generator_type: generatorName.toLowerCase().replace(/\s+/g, '_'),
        generator_category: generatorCategory || 'Unknown',
        custom_parameter_1: 'idea_generated'
      });

      // Track general generator engagement
      window.gtag('event', 'generate_idea', {
        event_category: 'User Engagement',
        event_label: 'Idea Generation',
        value: 1
      });

      // Track for conversion goals (if someone uses multiple generators)
      window.gtag('event', 'creative_engagement', {
        event_category: 'Creative Tools',
        event_label: generatorName,
        engagement_type: 'active_use'
      });
    }

    // Fallback for older Google Analytics (gtag should be available with GA4)
    if (typeof window !== 'undefined' && typeof window.ga !== 'undefined') {
      window.ga('send', 'event', 'Generator', 'Generate', generatorName, 1);
    }

    // Console log for development/debugging
    if (process.env.NODE_ENV === 'development') {
      console.log(`Analytics: Generator used - ${generatorName}`);
    }
  };

  const handleGenerate = () => {
    setIsAnimating(true);
    
    // Track the generator usage
    trackGeneratorUsage(title, category);
    
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