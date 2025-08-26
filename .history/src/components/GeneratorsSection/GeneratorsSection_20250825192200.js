import React, { useState } from 'react';
import RandomizerCard from '../RandomizerCard/RandomizerCard';
import generators from '../../data/generators';
import './GeneratorsSection.css';

const GeneratorsSection = () => {
  const [activeCategory, setActiveCategory] = useState('core');

  const categories = {
    core: {
      name: 'Core Elements',
      icon: '🎮',
      description: 'Essential game components',
      generators: [
        {
          title: 'Genre Mashup',
          icon: '🎮',
          description: 'Combine unexpected genres for unique gameplay',
          generator: generators.genreMashup,
          color: '#FF6B6B'
        },
        {
          title: 'Game Mechanic',
          icon: '⚙️',
          description: 'Core gameplay mechanics to build around',
          generator: generators.mechanic,
          color: '#4ECDC4'
        },
        {
          title: 'Enemy Generator',
          icon: '👾',
          description: 'Unique enemy types with special abilities',
          generator: generators.enemy,
          color: '#95E77E'
        },
        {
          title: 'Boss Ideas',
          icon: '🐉',
          description: 'Epic boss concepts with unique mechanics',
          generator: generators.boss,
          color: '#FFE66D'
        },
        {
          title: 'Power-Up Ideas',
          icon: '⚡',
          description: 'Temporary abilities and power boosts',
          generator: generators.powerUp,
          color: '#F0E68C'
        }
      ]
    },
    world: {
      name: 'World Building',
      icon: '🌍',
      description: 'Environments and settings',
      generators: [
        {
          title: 'World Biomes',
          icon: '🌍',
          description: 'Atmospheric settings and environments',
          generator: generators.biome,
          color: '#A8E6CF'
        },
        {
          title: 'Item Generator',
          icon: '⚔️',
          description: 'Weapons and items with interesting twists',
          generator: generators.item,
          color: '#C7B3FF'
        },
        {
          title: 'Quest Ideas',
          icon: '📜',
          description: 'Mission objectives with unexpected twists',
          generator: generators.quest,
          color: '#FF8B94'
        },
        {
          title: 'NPC Quirks',
          icon: '🧙',
          description: 'Memorable NPCs with unique traits',
          generator: generators.npc,
          color: '#B4E7CE'
        }
      ]
    },
    creative: {
      name: 'Creative Direction',
      icon: '🎨',
      description: 'Style and narrative elements',
      generators: [
        {
          title: 'Art Style',
          icon: '🎨',
          description: 'Visual aesthetic and design approaches',
          generator: generators.artStyle,
          color: '#FFB3BA'
        },
        {
          title: 'Sound Design',
          icon: '🎵',
          description: 'Audio concepts and musical approaches',
          generator: generators.soundDesign,
          color: '#BAFFC9'
        },
        {
          title: 'Emotional Theme',
          icon: '💭',
          description: 'Deep feelings and human experiences',
          generator: generators.emotionalTheme,
          color: '#DDA0DD'
        },
        {
          title: 'Player Motivation',
          icon: '🎯',
          description: 'Character-driven story motivations',
          generator: generators.playerMotivation,
          color: '#98FB98'
        },
        {
          title: 'Narrative Structure',
          icon: '📖',
          description: 'Unique storytelling methods',
          generator: generators.narrativeStructure,
          color: '#E6E6FA'
        }
      ]
    },
    advanced: {
      name: 'Advanced Concepts',
      icon: '🚀',
      description: 'Complex systems and features',
      generators: [
        {
          title: 'Game Feel',
          icon: '✨',
          description: 'Polish elements and satisfying interactions',
          generator: generators.gameFeel,
          color: '#FFA07A'
        },
        {
          title: 'Control Scheme',
          icon: '🎮',
          description: 'Innovative input methods',
          generator: generators.controlScheme,
          color: '#20B2AA'
        },
        {
          title: 'Multiplayer',
          icon: '👥',
          description: 'Creative co-op and competitive concepts',
          generator: generators.multiplayer,
          color: '#DEB887'
        },
        {
          title: 'Accessibility',
          icon: '♿',
          description: 'Inclusive design features',
          generator: generators.accessibility,
          color: '#F0E68C'
        },
        {
          title: 'Core Feeling',
          icon: '💫',
          description: 'The emotional heart of your game',
          generator: generators.coreFeeling,
          color: '#FFB6C1'
        }
      ]
    },

  };

  return (
    <section id="generators" className="generators-section">
      <div className="section-header">
        <h2>Inspiration Generators</h2>
        <p>Choose a category to explore different aspects of game development</p>
      </div>
      
      {/* Category Navigation */}
      <div className="category-nav">
        {Object.entries(categories).map(([key, category]) => (
          <button
            key={key}
            className={`category-tab ${activeCategory === key ? 'active' : ''}`}
            onClick={() => setActiveCategory(key)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
            <span className="category-count">({category.generators.length})</span>
          </button>
        ))}
      </div>

      {/* Active Category Description */}
      <div className="category-description">
        <h3>{categories[activeCategory].name}</h3>
        <p>{categories[activeCategory].description}</p>
      </div>

      {/* Generator Grid for Active Category */}
      <div className="randomizer-grid">
        {categories[activeCategory].generators.map((randomizer, index) => (
          <RandomizerCard 
            key={`${activeCategory}-${index}`} 
            {...randomizer} 
          />
        ))}
      </div>
    </section>
  );
};

export default GeneratorsSection;