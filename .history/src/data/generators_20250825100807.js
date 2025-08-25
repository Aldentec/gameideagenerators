const generators = {
  genreMashup: () => {
    const genres1 = ['Roguelike', 'Platformer', 'RPG', 'Puzzle', 'Racing', 'Strategy', 'Shooter', 'Survival', 'Stealth'];
    const genres2 = ['Farming Sim', 'Dating Sim', 'Tower Defense', 'Battle Royale', 'Rhythm Game', 'Card Game', 'City Builder', 'Horror'];
    return `${genres1[Math.floor(Math.random() * genres1.length)]} + ${genres2[Math.floor(Math.random() * genres2.length)]}`;
  },
  
  mechanic: () => {
    const mechanics = [
      'Gravity inversion on command',
      'Time rewind with limited uses',
      'Clone yourself but share health',
      'Resource sacrifice for power',
      'Momentum-based combat',
      'Environmental possession',
      'Emotional state affects abilities',
      'Sound-based stealth system',
      'Temperature manipulation',
      'Magnetic attraction/repulsion',
      'Shape-shifting with mass conservation',
      'Parallel dimension swapping',
      'Enemy abilities steal on defeat',
      'Drawing platforms in real-time',
      'Light/shadow based puzzles'
    ];
    return mechanics[Math.floor(Math.random() * mechanics.length)];
  },
  
  enemy: () => {
    const types = ['Flying', 'Burrowing', 'Ethereal', 'Armored', 'Swift', 'Massive', 'Tiny', 'Invisible', 'Crystalline'];
    const creatures = ['Slime', 'Golem', 'Wraith', 'Construct', 'Beast', 'Elemental', 'Swarm', 'Sentinel', 'Parasite'];
    const abilities = [
      'splits when damaged',
      'reflects projectiles',
      'becomes invisible when still',
      'explodes on death',
      'steals player abilities',
      'multiplies over time',
      'heals other enemies',
      'creates decoy copies',
      'adapts to damage types',
      'teleports behind player'
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    const creature = creatures[Math.floor(Math.random() * creatures.length)];
    const ability = abilities[Math.floor(Math.random() * abilities.length)];
    return `${type} ${creature} that ${ability}`;
  },
  
  boss: () => {
    const adjectives = ['Ancient', 'Corrupted', 'Mechanical', 'Ethereal', 'Crystalline', 'Forgotten', 'Celestial', 'Abyssal'];
    const types = ['Dragon', 'Titan', 'Hydra', 'Phoenix', 'Leviathan', 'Colossus', 'Sphinx', 'Behemoth', 'Archon'];
    const powers = [
      'manipulates gravity fields',
      'controls time flow',
      'summons elemental storms',
      'phases between dimensions',
      'absorbs and redirects damage',
      'corrupts the battlefield',
      'splits into multiple forms',
      'reverses player controls',
      'creates temporal loops',
      'weaponizes player healing'
    ];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const power = powers[Math.floor(Math.random() * powers.length)];
    return `${adjective} ${type} that ${power}`;
  },
  
  biome: () => {
    const settings = [
      'Floating crystal caverns',
      'Underwater ancient ruins',
      'Desert of glass shards',
      'Forest of giant mushrooms',
      'Frozen volcanic wasteland',
      'Sky islands with waterfalls',
      'Biomechanical hive network',
      'Temporal anomaly zones',
      'Mirror dimension city',
      'Corrupted digital landscape',
      'Living organism interior',
      'Gravity-defying mountains',
      'Endless library dimension',
      'Storm-locked archipelago',
      'Crystallized time bubbles'
    ];
    return settings[Math.floor(Math.random() * settings.length)];
  },
  
  item: () => {
    const prefixes = ['Cursed', 'Blessed', 'Ancient', 'Unstable', 'Sentient', 'Crystallized', 'Ethereal', 'Corrupted', 'Living'];
    const items = ['Sword', 'Shield', 'Bow', 'Staff', 'Amulet', 'Ring', 'Tome', 'Gauntlet', 'Orb', 'Cloak'];
    const effects = [
      'heals enemies but doubles damage',
      'grows stronger with each miss',
      'randomly teleports the user',
      'shares damage with attacker',
      'changes element each use',
      'becomes more powerful at low health',
      'consumes memories for power',
      'reverses time on critical hits',
      'duplicates other items temporarily',
      'transforms based on enemy type'
    ];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const item = items[Math.floor(Math.random() * items.length)];
    const effect = effects[Math.floor(Math.random() * effects.length)];
    return `${prefix} ${item} that ${effect}`;
  },
  
  quest: () => {
    const objectives = ['Retrieve', 'Destroy', 'Protect', 'Investigate', 'Escort', 'Collect', 'Survive', 'Infiltrate', 'Purify'];
    const targets = [
      'ancient artifact',
      'mysterious signal',
      'lost caravan',
      'sealed portal',
      'cursed village',
      'time anomaly',
      'sleeping giant',
      'memory fragments',
      'reality tear'
    ];
    const twists = [
      'but you cannot use weapons',
      'but time moves backwards',
      'but your health constantly drains',
      'but enemies become allies',
      'but the objective keeps moving',
      'but you lose abilities over time',
      'but gravity randomly shifts',
      'but you can only move in darkness',
      'but death makes you stronger',
      'but success costs memories'
    ];
    const objective = objectives[Math.floor(Math.random() * objectives.length)];
    const target = targets[Math.floor(Math.random() * targets.length)];
    const twist = twists[Math.floor(Math.random() * twists.length)];
    return `${objective} the ${target}, ${twist}`;
  },
  
  npc: () => {
    const roles = ['Merchant', 'Scholar', 'Guard', 'Healer', 'Blacksmith', 'Oracle', 'Bard', 'Alchemist', 'Explorer'];
    const quirks = [
      'only speaks in riddles',
      'forgets everything after 5 minutes',
      'mirrors player emotions',
      'trades only for stories',
      'appears only in dreams',
      'ages backwards',
      'communicates through music',
      'exists in multiple timelines',
      'sees the future but lies about it',
      'collects specific words',
      'fears their own shadow',
      'speaks only in questions',
      'changes personality with weather'
    ];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const quirk = quirks[Math.floor(Math.random() * quirks.length)];
    return `${role} who ${quirk}`;
  },
  
  gameJamTheme: () => {
    const themes = [
      'Growing Darkness',
      'Alone, Together',
      'Out of Control',
      'The Last One',
      'Breaking the Rules',
      'Everything is Connected',
      'Sacrifice to Progress',
      'Built to Destroy',
      'The Price of Power',
      'Echoes of the Past',
      'Beneath the Surface',
      'One Room',
      'Role Reversal',
      'Minimalist Chaos',
      'Cycles Within Cycles'
    ];
    return themes[Math.floor(Math.random() * themes.length)];
  }
};

export default generators;