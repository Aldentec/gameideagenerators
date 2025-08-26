import React, { useState } from 'react';
import generators from '../../data/generators';
import { trackGeneratorUsage, trackUserEngagement } from '../../utils/analytics';
import './FeelingLucky.css';

const FeelingLucky = () => {
  const [results, setResults] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);

  const categories = {
    core: {
      name: 'Core Elements',
      generators: [
        { name: 'Genre Mashup', generator: generators.genreMashup },
        { name: 'Game Mechanic', generator: generators.mechanic },
        { name: 'Enemy Generator', generator: generators.enemy },
        { name: 'Boss Ideas', generator: generators.boss },
        { name: 'Power-Up Ideas', generator: generators.powerUp }
      ]
    },
    world: {
      name: 'World Building',
      generators: [
        { name: 'World Biomes', generator: generators.biome },
        { name: 'Item Generator', generator: generators.item },
        { name: 'Quest Ideas', generator: generators.quest },
        { name: 'NPC Quirks', generator: generators.npc }
      ]
    },
    creative: {
      name: 'Creative Direction',
      generators: [
        { name: 'Art Style', generator: generators.artStyle },
        { name: 'Sound Design', generator: generators.soundDesign },
        { name: 'Emotional Theme', generator: generators.emotionalTheme },
        { name: 'Player Motivation', generator: generators.playerMotivation },
        { name: 'Narrative Structure', generator: generators.narrativeStructure }
      ]
    },
    advanced: {
      name: 'Advanced Concepts',
      generators: [
        { name: 'Game Feel', generator: generators.gameFeel },
        { name: 'Control Scheme', generator: generators.controlScheme },
        { name: 'Multiplayer', generator: generators.multiplayer },
        { name: 'Accessibility', generator: generators.accessibility },
        { name: 'Core Feeling', generator: generators.coreFeeling }
      ]
    }
  };

  const getRandomFromCategory = (categoryGenerators) => {
    const randomIndex = Math.floor(Math.random() * categoryGenerators.length);
    const selectedGenerator = categoryGenerators[randomIndex];
    return {
      generatorName: selectedGenerator.name,
      result: selectedGenerator.generator()
    };
  };

  const handleFeelingLucky = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const newResults = {};
      
      Object.entries(categories).forEach(([categoryKey, categoryData]) => {
        const randomSelection = getRandomFromCategory(categoryData.generators);
        newResults[categoryKey] = {
          categoryName: categoryData.name,
          generatorName: randomSelection.generatorName,
          result: randomSelection.result
        };
        
        // Track each generator usage
        trackGeneratorUsage(randomSelection.generatorName, categoryData.name, randomSelection.result);
      });
      
      setResults(newResults);
      setIsGenerating(false);
      
      // Track the feeling lucky action as high-value engagement
      trackUserEngagement('feeling_lucky_used', {
        categories_generated: Object.keys(categories).length,
        total_generators_used: Object.keys(categories).length
      });
      
    }, 800); // Slightly longer animation for dramatic effect
  };

  return (
    <section className="feeling-lucky-section">
      <div className="feeling-lucky-content">
        <div className="feeling-lucky-header">
          <h2>I'm Feeling Lucky</h2>
          <p>Get one random idea from each category to spark a complete game concept</p>
        </div>
        
        <div className="lucky-button-container">
          <button 
            className={`lucky-button ${isGenerating ? 'generating' : ''}`}
            onClick={handleFeelingLucky}
            disabled={isGenerating}
          >
            <span className={`lucky-icon ${isGenerating ? 'rolling' : ''}`}>
              {isGenerating ? '🎲' : '🎲'}
            </span>
            <span className="lucky-text">
              {isGenerating ? 'Rolling the dice...' : 'Generate Complete Game Idea'}
            </span>
            <span className="lucky-sparkles">✨</span>
          </button>
        </div>

        {Object.keys(results).length > 0 && (
          <div className={`results-grid ${isGenerating ? 'generating' : 'visible'}`}>
            {Object.entries(results).map(([categoryKey, data]) => (
              <div key={categoryKey} className="lucky-result-card">
                <div className="result-header">
                  <h3>{data.categoryName}</h3>
                  <span className="generator-name">{data.generatorName}</span>
                </div>
                <div className="result-content">
                  <p>{data.result}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {Object.keys(results).length > 0 && !isGenerating && (
          <div className="lucky-actions">
            <button className="regenerate-button" onClick={handleFeelingLucky}>
              <span>🎯</span>
              Try Another Combination
            </button>
            <button 
              className="share-button"
              onClick={() => {
                const gameIdea = Object.entries(results)
                  .map(([, data]) => `${data.categoryName}: ${data.result}`)
                  .join('\n\n');
                
                if (navigator.share) {
                  navigator.share({
                    title: 'My Generated Game Idea',
                    text: gameIdea
                  });
                } else {
                  navigator.clipboard.writeText(gameIdea);
                  alert('Game idea copied to clipboard!');
                }
                
                trackUserEngagement('game_idea_shared', {
                  share_method: navigator.share ? 'native_share' : 'clipboard'
                });
              }}
            >
              <span>📋</span>
              Share This Idea
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeelingLucky;