const generators = {
  genreMashup: () => {
    const genres1 = [
      'Roguelike', 'Platformer', 'RPG', 'Puzzle', 'Racing', 'Strategy', 'Shooter', 
      'Survival', 'Stealth', 'Metroidvania', 'Soulslike', 'Battle Royale', 'MOBA', 
      'Fighting', 'Visual Novel', 'Bullet Hell', 'Auto-battler', 'Idle'
    ];
    const genres2 = [
      'Farming Sim', 'Dating Sim', 'Tower Defense', 'Rhythm Game', 'Card Game', 
      'City Builder', 'Horror', 'Cooking Sim', 'Physics Sandbox', 'Real-time Strategy',
      'Turn-based Tactics', 'Resource Management', 'Social Deduction', 'Trivia',
      'Match-3', 'Hidden Object', 'Escape Room', 'Life Sim'
    ];
    return `${genres1[Math.floor(Math.random() * genres1.length)]} + ${genres2[Math.floor(Math.random() * genres2.length)]}`;
  },
  
  mechanic: () => {
    const mechanics = [
      'Time rewind with limited uses',
      'Aging accelerates with each action',
      'Past and future coexist in same space',
      'Actions create temporal echoes',
      'Time moves only when you move',
      'Gravity inversion on command',
      'Momentum-based combat system',
      'Magnetic attraction/repulsion powers',
      'Density manipulation of objects',
      'Surface tension walking',
      'Clone yourself but share health',
      'Swap bodies with any character',
      'Shape-shifting with mass conservation',
      'Emotional state affects abilities',
      'Memory transfer between characters',
      'Environmental possession of objects',
      'Drawing platforms in real-time',
      'Sound-based stealth and interaction',
      'Temperature manipulation affects world',
      'Light/shadow dimensional shifting',
      'Resource sacrifice for temporary power',
      'Enemy abilities steal on defeat',
      'Damage dealt heals nearby allies',
      'Weapons evolve based on usage',
      'Combat effectiveness tied to music rhythm',
      'Everything you touch becomes brittle',
      'Communication only through color changes',
      'Size changes based on confidence level',
      'Actions consume literal words from dictionary',
      'Reality bends around emotional outbursts'
    ];
    return mechanics[Math.floor(Math.random() * mechanics.length)];
  },
  
  enemy: () => {
    const types = [
      'Flying', 'Burrowing', 'Ethereal', 'Armored', 'Swift', 'Massive', 'Tiny', 
      'Invisible', 'Crystalline', 'Liquid', 'Gaseous', 'Magnetic', 'Psychic', 
      'Dimensional', 'Temporal', 'Biomechanical', 'Parasitic', 'Symbiotic'
    ];
    const creatures = [
      'Slime', 'Golem', 'Wraith', 'Construct', 'Beast', 'Elemental', 'Swarm', 
      'Sentinel', 'Parasite', 'Mimic', 'Shade', 'Wisp', 'Crawler', 'Stalker',
      'Vessel', 'Echo', 'Fragment', 'Anomaly', 'Hybrid', 'Collective'
    ];
    const abilities = [
      'splits when damaged',
      'multiplies over time',
      'creates decoy copies',
      'fragments into smaller versions',
      'spawns on player death',
      'adapts to damage types',
      'learns player patterns',
      'evolves mid-combat',
      'mimics last spell cast',
      'grows stronger near allies',
      'steals player abilities temporarily',
      'reverses player controls',
      'phases between dimensions',
      'possesses other enemies',
      'corrupts nearby environment',
      'reflects projectiles randomly',
      'becomes invisible when still',
      'absorbs and redirects damage',
      'heals other enemies constantly',
      'creates protective barriers',
      'explodes on death',
      'teleports behind player',
      'drains mana through proximity',
      'curses equipment on contact',
      'weaponizes player healing items'
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    const creature = creatures[Math.floor(Math.random() * creatures.length)];
    const ability = abilities[Math.floor(Math.random() * abilities.length)];
    return `${type} ${creature} that ${ability}`;
  },
  
  boss: () => {
    const adjectives = [
      'Ancient', 'Corrupted', 'Mechanical', 'Ethereal', 'Crystalline', 'Forgotten', 
      'Celestial', 'Abyssal', 'Fractured', 'Sentient', 'Void-touched', 'Dream-eating',
      'Time-lost', 'Reality-warping', 'Soul-bound', 'Quantum', 'Prismatic', 'Nightmare'
    ];
    const types = [
      'Dragon', 'Titan', 'Hydra', 'Phoenix', 'Leviathan', 'Colossus', 'Sphinx', 
      'Behemoth', 'Archon', 'Demiurge', 'Chimera', 'Kraken', 'Wyrm', 'Avatar',
      'Harbinger', 'Overseer', 'Guardian', 'Sovereign', 'Manifestation', 'Entity'
    ];
    const powers = [
      'manipulates gravity fields',
      'controls time flow around arena',
      'phases between dimensions mid-fight',
      'rewinds battle to advantageous moments',
      'creates temporal loops',
      'summons elemental storms',
      'corrupts the battlefield over time',
      'changes arena layout each phase',
      'weaponizes the environment',
      'merges with the level architecture',
      'reverses player controls',
      'weaponizes player healing',
      'forces player to attack allies',
      'steals and mimics player abilities',
      'feeds on player emotions',
      'splits into multiple forms',
      'absorbs and redirects damage',
      'evolves based on damage taken',
      'shapeshifts to counter strategies',
      'reconstructs from environmental debris',
      'exists simultaneously in past/present/future',
      'attacks through reflections and shadows',
      'requires specific story knowledge to defeat',
      'grows stronger as players cooperate',
      'victory conditions change mid-fight'
    ];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const power = powers[Math.floor(Math.random() * powers.length)];
    return `${adjective} ${type} that ${power}`;
  },
  
  biome: () => {
    const settings = [
      'Floating crystal caverns with singing stones',
      'Underwater ancient ruins with air pockets',
      'Forest of giant mushrooms with glowing spores',
      'Sky islands connected by rainbow bridges',
      'Endless library dimension with living books',
      'Dreamscape realm that shifts with emotions',
      'Desert of glass shards and mirror mirages',
      'Frozen volcanic wasteland with lava veins',
      'Storm-locked archipelago with lightning trees',
      'Gravity-defying mountains that grow sideways',
      'Crystallized time bubbles in space',
      'Inverted underground sky with floating rocks',
      'Biomechanical hive network with organic tech',
      'Living organism interior with beating walls',
      'Coral cities that sing with the tides',
      'Sentient maze that rearranges itself',
      'Symbiotic jungle where plants and animals merge',
      'Breathing cave system with lung-like chambers',
      'Mirror dimension city with reversed physics',
      'Corrupted digital landscape with glitch storms',
      'Temporal anomaly zones with layered eras',
      'Fractal reality with infinite recursive depths',
      'Probability fields where possibilities coexist',
      'Memory palace built from collective unconscious',
      'Sound-based ecosystem where music shapes terrain',
      'Origami world that folds and unfolds',
      'Clockwork realm with mechanical weather',
      'Painted landscape where colors have substance',
      'Shadow realm where darkness is tangible',
      'Quantum garden where observation changes reality'
    ];
    return settings[Math.floor(Math.random() * settings.length)];
  },
  
  item: () => {
    const prefixes = [
      'Cursed', 'Blessed', 'Ancient', 'Unstable', 'Sentient', 'Crystallized', 
      'Ethereal', 'Corrupted', 'Living', 'Forgotten', 'Dimensional', 'Temporal',
      'Quantum', 'Symbiotic', 'Evolving', 'Resonant', 'Fractured', 'Harmonic'
    ];
    const items = [
      'Sword', 'Shield', 'Bow', 'Staff', 'Amulet', 'Ring', 'Tome', 'Gauntlet', 
      'Orb', 'Cloak', 'Crown', 'Pendant', 'Blade', 'Wand', 'Chalice', 'Mirror',
      'Key', 'Mask', 'Bell', 'Compass', 'Lens', 'Hourglass', 'Prism'
    ];
    const effects = [
      'heals enemies but doubles damage',
      'grows stronger with each miss',
      'becomes more powerful at low health',
      'shares damage with attacker',
      'consumes memories for power',
      'changes element each use',
      'transforms based on enemy type',
      'adapts to wielder emotional state',
      'evolves based on combat style',
      'mirrors abilities of nearby allies',
      'randomly teleports the user',
      'reverses time on critical hits',
      'phases user between dimensions',
      'creates temporal echoes of actions',
      'bends probability in user favor',
      'duplicates other items temporarily',
      'splits damage between all enemies',
      'creates phantom copies of wielder',
      'multiplies effect based on fear level',
      'clones itself when thrown',
      'only works when no one is watching',
      'powers up by absorbing compliments',
      'requires singing to activate',
      'functions only in complete darkness',
      'grows weaker with each successful use',
      'feeds on the wielder regrets',
      'activates randomly during conversations'
    ];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const item = items[Math.floor(Math.random() * items.length)];
    const effect = effects[Math.floor(Math.random() * effects.length)];
    return `${prefix} ${item} that ${effect}`;
  },
  
  quest: () => {
    const objectives = [
      'Retrieve', 'Destroy', 'Protect', 'Investigate', 'Escort', 'Collect', 
      'Survive', 'Infiltrate', 'Purify', 'Awaken', 'Seal', 'Restore', 
      'Decode', 'Unite', 'Separate', 'Transform', 'Commune with'
    ];
    const targets = [
      'ancient artifact', 'sealed portal', 'sleeping giant', 'reality tear',
      'lost caravan', 'cursed village', 'memory fragments', 'dream essence',
      'temporal anomaly', 'forgotten song', 'living constellation',
      'mysterious signal', 'collective nightmare', 'stolen emotions',
      'crystallized time', 'broken prophecy', 'echoing whisper',
      'fractal pattern', 'quantum shadow', 'impossible color',
      'shape-shifting spy', 'memory thief', 'dream walker',
      'time refugee', 'reality architect', 'void prophet',
      'probability witch', 'echo of yourself'
    ];
    const twists = [
      'but you cannot use weapons',
      'but you can only move in darkness',
      'but time moves backwards',
      'but gravity randomly shifts',
      'but you lose abilities over time',
      'but your health constantly drains',
      'but enemies become allies',
      'but success costs memories',
      'but death makes you stronger',
      'but the objective keeps moving',
      'but reality shifts with each action',
      'but completing it undoes your progress',
      'but you must convince the target to help',
      'but each attempt changes the rules',
      'but you can only communicate in questions',
      'but the solution becomes the new problem',
      'but success requires intentional failure',
      'but you age one year per minute',
      'but the quest exists only in dreams',
      'but you must solve it backwards',
      'but completion erases someone existence',
      'but you can only use items once'
    ];
    const objective = objectives[Math.floor(Math.random() * objectives.length)];
    const target = targets[Math.floor(Math.random() * targets.length)];
    const twist = twists[Math.floor(Math.random() * twists.length)];
    return `${objective} the ${target}, ${twist}`;
  },
  
  npc: () => {
    const roles = [
      'Merchant', 'Scholar', 'Guard', 'Healer', 'Blacksmith', 'Oracle', 'Bard', 
      'Alchemist', 'Explorer', 'Inventor', 'Librarian', 'Cartographer', 'Sage',
      'Chronicler', 'Dreamweaver', 'Time-keeper', 'Memory-keeper', 'Void-touched'
    ];
    const quirks = [
      'only speaks in riddles',
      'communicates through music',
      'speaks only in questions',
      'talks to invisible friends',
      'translates everything into colors',
      'whispers secrets that may be lies',
      'forgets everything after 5 minutes',
      'remembers only things that have not happened',
      'collects specific words',
      'ages backwards mentally',
      'exists in multiple timelines',
      'remembers everyone dreams',
      'mirrors player emotions',
      'changes personality with weather',
      'fears their own shadow',
      'sees the future but lies about it',
      'appears only in dreams',
      'phases in and out of reality',
      'trades only for stories',
      'accepts payment in compliments',
      'barters with temporal minutes',
      'exchanges items for emotions',
      'only deals during eclipses',
      'requires customers to solve riddles',
      'exists only when observed',
      'speaks through possessed objects',
      'ages rapidly during conversations',
      'leaves cryptic drawings instead of words',
      'can only tell absolute truths',
      'steals and redistributes luck',
      'feeds on awkward silences'
    ];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const quirk = quirks[Math.floor(Math.random() * quirks.length)];
    return `${role} who ${quirk}`;
  },
  
  gameJamTheme: () => {
    const themes = [
      'Growing Darkness', 'Alone, Together', 'Out of Control', 'The Last One',
      'Breaking the Rules', 'Everything is Connected', 'Sacrifice to Progress',
      'Built to Destroy', 'Echoes of the Past', 'One Room',
      'Helpful Hindrance', 'Fragile Strength', 'Organized Chaos', 
      'Crowded Solitude', 'Transparent Secrets', 'Gentle Violence',
      'Loud Silence', 'Frozen Fire', 'Heavy Lightness',
      'The Price of Power', 'Beneath the Surface', 'Role Reversal',
      'Minimalist Chaos', 'Cycles Within Cycles', 'Invisible Connections',
      'Borrowed Time', 'Shared Burden', 'Hidden in Plain Sight',
      'What Remains', 'The Space Between', 'Unintended Consequences',
      'The Weight of Nothing', 'Echoing Forward', 'Necessary Endings',
      'The Color of Sound', 'Almost Perfect',
      'Build to Break', 'Push and Pull', 'Rise and Fall',
      'Give to Receive', 'Trust the Process', 'Embrace the Glitch'
    ];
    return themes[Math.floor(Math.random() * themes.length)];
  },

  artStyle: () => {
    const styles = [
      'Low-poly with neon accents', 'Hand-drawn sketch with watercolor',
      'Pixel art with modern lighting', 'Minimalist geometric shapes',
      'Paper cutout stop-motion style', 'Stained glass window aesthetic',
      'Circuit board patterns', 'Oil painting with digital glitch',
      'Clay animation textures', 'Origami-folded environments',
      'Chalk on blackboard style', 'Magazine collage montage',
      'Holographic interference patterns', 'Woodcut print illustrations',
      'Microscopic organism magnification', 'Constellation star maps',
      'Technical blueprint drawings', 'Retro sci-fi poster art'
    ];
    return styles[Math.floor(Math.random() * styles.length)];
  },

  gameplayLoop: () => {
    const loops = [
      'Explore → Collect → Craft → Upgrade → Explore deeper',
      'Fight → Die → Learn pattern → Adapt → Overcome',
      'Gather intel → Plan heist → Execute → Escape → Upgrade',
      'Plant → Tend → Harvest → Sell → Expand farm',
      'Meet character → Build relationship → Unlock story → Repeat',
      'Create → Test → Fail → Iterate → Perfect',
      'Hunt creature → Study behavior → Craft trap → Capture → Tame',
      'Solve puzzle → Unlock door → Face challenge → Gain power → Next level',
      'Build → Defend → Repair → Upgrade → Expand',
      'Discover ability → Master technique → Teach others → Face final test'
    ];
    return loops[Math.floor(Math.random() * loops.length)];
  },

  emotionalTheme: () => {
    const themes = [
      'Finding hope in despair', 'The weight of responsibility',
      'Letting go of the past', 'Fear of growing up',
      'The courage to be vulnerable', 'Identity beyond achievement',
      'Forgiveness without forgetting', 'Strength in asking for help',
      'Beauty in imperfection', 'Connection across differences',
      'The price of ambition', 'Healing from betrayal',
      'Learning to trust again', 'Finding purpose after loss',
      'The art of saying goodbye', 'Choosing love over fear',
      'Embracing change and uncertainty', 'The power of second chances'
    ];
    return themes[Math.floor(Math.random() * themes.length)];
  },

  playerMotivation: () => {
    const motivations = [
      'Revenge against those who wronged your village',
      'Seeking a cure for your cursed transformation',
      'Racing against time to prevent an apocalypse',
      'Proving yourself worthy of an ancient legacy',
      'Protecting the last sanctuary of your kind',
      'Uncovering the truth about your forgotten past',
      'Reuniting with a loved one lost between worlds',
      'Breaking free from a predestined fate',
      'Collecting fragments of your shattered soul',
      'Earning redemption for a terrible mistake',
      'Mastering forbidden knowledge safely',
      'Building a bridge between warring cultures',
      'Awakening dormant magic in a mundane world',
      'Escaping an infinite time loop',
      'Finding your place in a world that changed without you'
    ];
    return motivations[Math.floor(Math.random() * motivations.length)];
  },

  powerUp: () => {
    const types = [
      'Ethereal', 'Blazing', 'Frozen', 'Electric', 'Toxic', 'Magnetic', 
      'Phantom', 'Primal', 'Quantum', 'Temporal', 'Viral', 'Crystalline',
      'Shadow', 'Divine', 'Chaotic', 'Harmonic', 'Void', 'Living'
    ];
    const effects = [
      'allows walking through walls for 30 seconds',
      'grants triple jump with slow-motion landing',
      'enables teleportation to any visible surface',
      'creates temporary platforms from pure energy',
      'lets you phase between dimensions briefly',
      'gives magnetic attraction to metal surfaces',
      'turns all attacks into area damage',
      'makes weapons shoot in all directions',
      'causes enemies to fight each other',
      'reflects all damage back to attackers',
      'grants immunity but halves movement speed',
      'doubles damage but weapons break after one hit',
      'reveals all hidden secrets and passages',
      'slows down time for everyone except you',
      'makes all sounds become visible colors',
      'allows communication with any creature',
      'turns thoughts into temporary reality',
      'lets you rewind the last 10 seconds',
      'shapeshifts you into the last enemy defeated',
      'splits you into three weaker copies',
      'makes you giant but fragile as glass',
      'turns your body into living lightning',
      'grants perfect mimicry of any sound heard',
      'allows possession of inanimate objects',
      'makes plants grow instantly where you walk',
      'causes your emotions to change weather',
      'turns shadows into solid platforms',
      'makes gravity work in any direction you choose',
      'creates mirror duplicates of the environment',
      'freezes time for everything you touch'
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    const effect = effects[Math.floor(Math.random() * effects.length)];
    return `${type} power-up that ${effect}`;
  },

  gameFeel: () => {
    const elements = [
      'Screen shake intensifies with combo multiplier',
      'Colors desaturate as health decreases',
      'Particle trails follow successful actions',
      'Screen edges glow when near important items',
      'Time briefly slows on perfect timing',
      'Camera zooms slightly on critical hits',
      'Musical notes play higher with consecutive successes',
      'Heartbeat audio intensifies during stealth sections',
      'Sound effects layer harmonically with actions',
      'Music tempo matches player movement speed',
      'Environmental audio responds to player emotions',
      'Silence punctuates moments of high tension',
      'Controller vibration matches on-screen rhythm',
      'Input delay varies with character fatigue',
      'Button presses feel heavier when carrying items',
      'Successful actions have satisfying button resistance',
      'Controller pulses gently during meditation moments',
      'Vibration creates texture for different surfaces',
      'Numbers pop up with bouncy animation',
      'Progress bars fill with liquid physics',
      'Achievement notifications have unique sounds per category',
      'Level-up effects cascade across the entire screen',
      'Skill unlocks are accompanied by screen-wide flashes',
      'Character animations become more confident with progression',
      'Objects respond slightly before being fully clicked',
      'UI elements glow warmly when hovered',
      'Buttons depress with realistic physics simulation',
      'Text appears with typewriter effects during dialogue',
      'Menus slide in with momentum-based easing',
      'Loading screens show progress through environmental changes',
      'Lighting shifts subtly with story mood',
      'Ambient sounds fade when focusing on puzzles',
      'Screen borders blur during intense concentration',
      'Color palette shifts based on time of day',
      'Dust particles dance in sunbeams realistically',
      'Weather effects respond to player actions'
    ];
    return elements[Math.floor(Math.random() * elements.length)];
  },

  monetization: () => {
    const models = [
      'One-time purchase with free content updates',
      'Deluxe edition includes soundtrack and art book',
      'Early access with gradual feature rollout',
      'Season pass for episodic story content',
      'Physical collectors edition with unique items',
      'Monthly subscription unlocks all cosmetics',
      'Premium tier removes ads and adds cloud saves',
      'VIP membership includes beta access and developer commentary',
      'Seasonal battle pass with exclusive rewards',
      'Creator subscription supports ongoing development',
      'Cosmetic-only microtransactions',
      'Time-saver purchases for impatient players',
      'Optional donation system with thank-you rewards',
      'Ad-supported with premium ad removal option',
      'Freemium with optional story expansions',
      'Pay-what-you-want with suggested minimum',
      'Crowdfunded development with backer rewards',
      'Community voting determines next paid content',
      'Player-created content marketplace with revenue sharing',
      'Tip jar system for exceptional experiences',
      'Educational license for schools and libraries',
      'Workshop version with modding tools included',
      'Developer commentary track as separate purchase',
      'Behind-the-scenes documentary bundled with game',
      'Masterclass series on game development techniques',
      'Time-based pricing that decreases over time',
      'Regional pricing adjusted for local economics',
      'Rent-to-own system with partial payments',
      'Trade-in system for other games in your library',
      'Social discount for playing with friends',
      'Achievement-based pricing reductions'
    ];
    return models[Math.floor(Math.random() * models.length)];
  }
};

export default generators;