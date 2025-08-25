import React from 'react';
import RandomizerCard from '../RandomizerCard/RandomizerCard';
import generators from '../../data/generators';
import './GeneratorsSection.css';

const GeneratorsSection = () => {
  const randomizerData = [
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