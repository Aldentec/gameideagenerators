import React from 'react';
import RandomizerCard from '../RandomizerCard/RandomizerCard';
import generators from '../../data/generators';
import './GeneratorsSection.css';

const GeneratorsSection = () => {
  const randomizerData = [
    // Original 9 generators
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
    },
    {
      title: 'Game Jam Theme',
      icon: '🏆',
      description: 'Thematic constraints for game jams',
      generator: generators.gameJamTheme,
      color: '#FFDAB9'
    },
    // New 7 generators
    {
      title: 'Art Style',
      icon: '🎨',
      description: 'Visual aesthetics and artistic direction',
      generator: generators.artStyle,
      color: '#FFB347'
    },
    {
      title: 'Gameplay Loop',
      icon: '🔄',
      description: 'Core game flow and progression patterns',
      generator: generators.gameplayLoop,
      color: '#87CEEB'
    },
    {
      title: 'Emotional Theme',
      icon: '❤️',
      description: 'Deep narrative themes and emotional arcs',
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
      title: 'Power-Up Ideas',
      icon: '⚡',
      description: 'Temporary abilities and power boosts',
      generator: generators.powerUp,
      color: '#F0E68C'
    },
    {
      title: 'Game Feel',
      icon: '✨',
      description: 'Polish elements and satisfying interactions',
      generator: generators.gameFeel,
      color: '#FFA07A'
    },
    {
      title: 'Monetization',
      icon: '💰',
      description: 'Business models and revenue strategies',
      generator: generators.monetization,
      color: '#20B2AA'
    }
  ];

  return (
    <section id="generators" className="generators-section">
      <div className="section-header">
        <h2>Inspiration Generators</h2>
        <p>Click any generator to spark your next game idea</p>
      </div>
      
      <div className="randomizer-grid">
        {randomizerData.map((randomizer, index) => (
          <RandomizerCard key={index} {...randomizer} />
        ))}
      </div>
    </section>
  );
};

export default GeneratorsSection;