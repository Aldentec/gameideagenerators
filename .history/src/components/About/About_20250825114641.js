import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-header">
          <h2>About Game Idea Generators</h2>
          <p className="about-tagline">Breaking creative blocks, one click at a time</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h3>What We Do</h3>
            <p>
              Game Idea Generators is a creative toolkit designed specifically for game developers 
              who need inspiration. Our 16 unique generators create thousands of combinations to 
              spark your next breakthrough idea.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">👥</div>
            <h3>Who It's For</h3>
            <div className="target-list">
              <span className="target-item">• Solo indie developers</span>
              <span className="target-item">• Game jam participants</span>
              <span className="target-item">• Game design students</span>
              <span className="target-item">• Creative teams seeking inspiration</span>
              <span className="target-item">• Anyone experiencing creative blocks</span>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">🚀</div>
            <h3>How It Works</h3>
            <p>
              Simply click any generator card to get instant inspiration. Each generator 
              combines carefully curated elements to create unique, thought-provoking ideas 
              that can serve as starting points for your next game project.
            </p>
          </div>
        </div>

        <div className="features-section">
          <h3>What Makes Us Different</h3>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎲</div>
              <div className="feature-content">
                <h4>Quality Over Quantity</h4>
                <p>Every suggestion is carefully crafted to be specific, actionable, and inspiring</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-content">
                <h4>Instant Inspiration</h4>
                <p>No sign-ups, no delays - just click and get creative ideas immediately</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <div className="feature-content">
                <h4>Developer-Focused</h4>
                <p>Built by developers, for developers - we understand your creative challenges</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <div className="feature-content">
                <h4>Holistic Approach</h4>
                <p>From mechanics to monetization - we cover every aspect of game development</p>
              </div>
            </div>
          </div>
        </div>

        <div className="story-section">
            <h3>Our Story</h3>
            <p>
            Look, we've all been there. You're sitting there with a blank Unity project or a fresh 
            Godot scene, and your brain just... nopes out. Maybe it's 3 AM during Ludum Dare, 
            maybe it's day one of your next big indie project. Either way, you know you want to 
            build something cool, but the ideas just aren't flowing.
            </p>
            <p>
            That's where we come in. This isn't some magic creativity machine that's going to 
            design your game for you - that's still your job (and honestly, that's the fun part). 
            Think of these generators more like that friend who throws out random "what if" 
            scenarios until something clicks. Sometimes the weirdest combinations end up being 
            pure gold.
            </p>
        </div>

        <div className="cta-section">
          <h3>Ready to Get Inspired?</h3>
          <p>Join thousands of developers who use our generators to overcome creative blocks and discover their next great game idea.</p>
          <a href="#generators" className="cta-button">
            <span>Start Generating Ideas</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;