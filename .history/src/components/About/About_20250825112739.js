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
            Game Idea Generators was born from the frustration of staring at a blank screen, 
            knowing you want to create something amazing but not knowing where to start. 
            We've all been there - whether it's 2 AM during a game jam or the beginning of 
            a new project when the possibilities feel both infinite and overwhelming.
          </p>
          <p>
            This tool doesn't replace your creativity - it amplifies it. Each generated idea 
            is a seed that you can grow into something uniquely yours. Sometimes the best 
            ideas come from unexpected combinations, and that's exactly what we specialize in.
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