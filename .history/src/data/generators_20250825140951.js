const generators = {
  genreMashup: () => {
    const genres1 = [
      'Roguelike', 'Platformer', 'RPG', 'Puzzle', 'Racing', 'Strategy', 'Shooter', 
      'Survival', 'Stealth', 'Metroidvania', 'Soulslike', 'Battle Royale', 'MOBA', 
      'Fighting', 'Visual Novel', 'Bullet Hell', 'Auto-battler', 'Idle', 'Sandbox',
      'Arena Fighter', 'Extraction Shooter', 'Immersive Sim', 'Walking Simulator'
    ];
    const genres2 = [
      'Farming Sim', 'Dating Sim', 'Tower Defense', 'Rhythm Game', 'Card Game', 
      'City Builder', 'Horror', 'Cooking Sim', 'Physics Sandbox', 'Real-time Strategy',
      'Turn-based Tactics', 'Resource Management', 'Social Deduction', 'Trivia',
      'Match-3', 'Hidden Object', 'Escape Room', 'Life Sim', 'Pet Raising', 'Fishing Sim',
      'Space Trading', 'Court Drama', 'Archaeology Sim', 'Ghost Hunting'
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
      'Reality bends around emotional outbursts',
      'Ink-based reality painting system',
      'Breathing controls world wind patterns',
      'Heartbeat synchronization unlocks doors',
      'Dreams become explorable locations',
      'Memories can be physically collected',
      'Death transforms you into different species',
      'Backwards movement through time zones',
      'Scent tracking reveals hidden information',
      'Voice pitch controls object weight',
      'Eye contact creates temporary alliances',
      'Laughter literally brightens dark areas',
      'Tears can extinguish fires or fill containers',
      'Hunger affects the size of game world',
      'Sleep deprivation blurs reality boundaries',
      'Photography captures souls or essences'
    ];
    return mechanics[Math.floor(Math.random() * mechanics.length)];
  },
  
  enemy: () => {
    const types = [
      'Flying', 'Burrowing', 'Ethereal', 'Armored', 'Swift', 'Massive', 'Tiny', 
      'Invisible', 'Crystalline', 'Liquid', 'Gaseous', 'Magnetic', 'Psychic', 
      'Dimensional', 'Temporal', 'Biomechanical', 'Parasitic', 'Symbiotic',
      'Prismatic', 'Volcanic', 'Frozen', 'Acidic', 'Radioactive', 'Holographic',
      'Shapeshifting', 'Mechanical', 'Organic', 'Digital', 'Nightmare', 'Musical'
    ];
    const creatures = [
      'Slime', 'Golem', 'Wraith', 'Construct', 'Beast', 'Elemental', 'Swarm', 
      'Sentinel', 'Parasite', 'Mimic', 'Shade', 'Wisp', 'Crawler', 'Stalker',
      'Vessel', 'Echo', 'Fragment', 'Anomaly', 'Hybrid', 'Collective',
      'Spider', 'Mantis', 'Serpent', 'Ooze', 'Crystal', 'Drone', 'Hive',
      'Ghost', 'Demon', 'Angel', 'Virus', 'Plant', 'Fungus', 'Coral'
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
      'weaponizes player healing items',
      'only appears in peripheral vision',
      'exists only in mirrors and reflections',
      'feeds on player fear and grows larger',
      'duplicates player movements with delay',
      'phases through walls but not floors',
      'becomes stronger when ignored',
      'only dies when acknowledged verbally',
      'splits personality between multiple bodies',
      'exists in past/present/future simultaneously',
      'takes on appearance of deceased allies',
      'communicates through environmental changes',
      'grows weaker in direct light',
      'can only move when player isn\'t looking'
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
      'Time-lost', 'Reality-warping', 'Soul-bound', 'Quantum', 'Prismatic', 'Nightmare',
      'Symbiotic', 'Parasitic', 'Evolved', 'Mutated', 'Transcendent', 'Primordial',
      'Digitized', 'Biomechanical', 'Eldritch', 'Cosmic', 'Interdimensional', 'Collective'
    ];
    const types = [
      'Dragon', 'Titan', 'Hydra', 'Phoenix', 'Leviathan', 'Colossus', 'Sphinx', 
      'Behemoth', 'Archon', 'Demiurge', 'Chimera', 'Kraken', 'Wyrm', 'Avatar',
      'Harbinger', 'Overseer', 'Guardian', 'Sovereign', 'Manifestation', 'Entity',
      'Swarm-Queen', 'Hive-Mind', 'War-Machine', 'Tree-Consciousness', 'Star-Spawn',
      'Memory-Eater', 'Dream-Walker', 'Reality-Weaver', 'Time-Lord', 'Void-Crawler'
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
      'victory conditions change mid-fight',
      'turns player memories against them',
      'creates false victory scenarios',
      'exists only in player peripheral vision',
      'controls the game\'s soundtrack and sound effects',
      'manipulates the UI and HUD elements',
      'breaks the fourth wall and addresses player directly',
      'spawns from player\'s previous deaths',
      'learns from player\'s gaming history',
      'adapts to player\'s preferred strategies',
      'becomes stronger based on player\'s achievements'
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
      'Quantum garden where observation changes reality',
      'City built inside a sleeping giant\'s dreams',
      'Ocean of liquid starlight with phosphorescent creatures',
      'Backwards waterfall flowing up into cloud cities',
      'Graveyard of decommissioned robots growing metal flowers',
      'Ice caves filled with frozen moments in time',
      'Desert where each grain of sand holds a tiny world',
      'Forest where trees grow downward from sky canopy',
      'Volcanic islands connected by bridges of hardened lava',
      'Abandoned space station overrun by cosmic plants',
      'City carved into the inside of a massive geode',
      'Swamp where the water reflects other dimensions',
      'Mountain range made entirely of stacked books',
      'Arctic tundra where auroras have become solid',
      'Underwater volcano with cities in air bubbles',
      'Maze of giant musical instruments that play when traversed'
    ];
    return settings[Math.floor(Math.random() * settings.length)];
  },
  
  item: () => {
    const prefixes = [
      'Cursed', 'Blessed', 'Ancient', 'Unstable', 'Sentient', 'Crystallized', 
      'Ethereal', 'Corrupted', 'Living', 'Forgotten', 'Dimensional', 'Temporal',
      'Quantum', 'Symbiotic', 'Evolving', 'Resonant', 'Fractured', 'Harmonic',
      'Dreaming', 'Singing', 'Weeping', 'Laughing', 'Whispering', 'Screaming',
      'Dancing', 'Floating', 'Melting', 'Freezing', 'Burning', 'Shocking'
    ];
    const items = [
      'Sword', 'Shield', 'Bow', 'Staff', 'Amulet', 'Ring', 'Tome', 'Gauntlet', 
      'Orb', 'Cloak', 'Crown', 'Pendant', 'Blade', 'Wand', 'Chalice', 'Mirror',
      'Key', 'Mask', 'Bell', 'Compass', 'Lens', 'Hourglass', 'Prism', 'Lantern',
      'Dice', 'Coin', 'Feather', 'Scale', 'Tooth', 'Claw', 'Horn', 'Wing'
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
      'feeds on the wielder\'s regrets',
      'activates randomly during conversations',
      'becomes stronger when shared with others',
      'works only for left-handed users',
      'responds to the wielder\'s heartbeat rhythm',
      'changes color based on moral choices',
      'whispers secrets about nearby enemies',
      'becomes invisible during full moons',
      'only functions when the user is laughing',
      'grows larger with each lie told while holding it',
      'grants wishes but interprets them literally',
      'works backwards from user\'s intention',
      'requires a different activation phrase each time',
      'bonds permanently with first user\'s DNA',
      'only activates during moments of genuine kindness'
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
      'Decode', 'Unite', 'Separate', 'Transform', 'Commune with', 'Banish',
      'Resurrect', 'Freeze', 'Melt', 'Cultivate', 'Harvest', 'Forge'
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
      'probability witch', 'echo of yourself', 'singing tree',
      'weeping stone', 'laughing river', 'dancing flame',
      'frozen scream', 'liquid music', 'solid rainbow',
      'backwards clock', 'upside-down tower', 'inside-out maze'
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
      'but completion erases someone\'s existence',
      'but you can only use items once',
      'but you must complete it while singing',
      'but success depends on making others laugh',
      'but you can only move when others aren\'t watching',
      'but you must tell the truth at all times',
      'but you forget the objective every five minutes',
      'but you can only act on rhyming commands',
      'but the world becomes more surreal with each step',
      'but you must maintain perfect balance or restart'
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
      'Chronicler', 'Dreamweaver', 'Time-keeper', 'Memory-keeper', 'Void-touched',
      'Chef', 'Artist', 'Musician', 'Dancer', 'Poet', 'Philosopher', 'Mystic',
      'Gardener', 'Architect', 'Weaver', 'Potter', 'Jeweler', 'Storyteller'
    ];
    const quirks = [
      'only speaks in riddles',
      'communicates through music',
      'speaks only in questions',
      'talks to invisible friends',
      'translates everything into colors',
      'whispers secrets that may be lies',
      'forgets everything after 5 minutes',
      'remembers only things that haven\'t happened yet',
      'collects specific words',
      'ages backwards mentally',
      'exists in multiple timelines',
      'remembers everyone\'s dreams',
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
      'feeds on awkward silences',
      'only appears to people who are lost',
      'speaks in haikus exclusively',
      'communicates only through interpretive dance',
      'appears as different person to each visitor',
      'exists only in reflective surfaces',
      'speaks backwards but makes perfect sense',
      'trades memories for physical objects',
      'only appears during thunderstorms',
      'communicates through scent and taste',
      'exists in two places simultaneously',
      'speaks only when others are singing',
      'appears younger when telling lies',
      'only helps those who make them laugh'
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
      'The Color of Sound', 'Almost Perfect', 'Build to Break', 
      'Push and Pull', 'Rise and Fall', 'Give to Receive', 
      'Trust the Process', 'Embrace the Glitch', 'Backwards Progress',
      'Sleeping Giants', 'Digital Dreams', 'Analog Hearts',
      'Perfect Imperfection', 'Controlled Chaos', 'Ordered Randomness',
      'Infinite Finite', 'Temporary Forever', 'Silent Symphony',
      'Blind Sight', 'Deaf Music', 'Tasteless Flavor'
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
      'Technical blueprint drawings', 'Retro sci-fi poster art',
      'Embroidered textile patterns', 'Melting wax sculpture aesthetic',
      'Polaroid photography with lens flares', 'Cave painting primitive style',
      'Neon sign buzzword art', 'Marble sculpture with gold veins',
      'Ink blot psychological test imagery', 'Kaleidoscope fractals',
      'Shadow puppet theater silhouettes', 'Graffiti street art style',
      'Medical diagram cross-sections', 'Topographical map contours',
      'Comic book dot-matrix printing', 'Mosaic tile arrangements'
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
      'Discover ability → Master technique → Teach others → Face final test',
      'Dream → Wake → Act on dream → Sleep → Dream deeper',
      'Observe → Hypothesize → Experiment → Record → Theorize',
      'Listen → Compose → Perform → React → Improvise',
      'Cook → Serve → Receive feedback → Improve recipe → Cook better',
      'Paint → Display → Critique → Revise → Paint with new perspective',
      'Swim → Dive → Discover → Surface → Plan deeper expedition',
      'Climb → Fall → Analyze failure → Adapt technique → Climb higher',
      'Dance → Stumble → Learn rhythm → Practice → Dance gracefully'
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
      'Embracing change and uncertainty', 'The power of second chances',
      'Overcoming inherited trauma', 'Finding voice in silence',
      'The loneliness of leadership', 'Courage in the face of impossibility',
      'The burden of genius', 'Finding family in strangers',
      'The weight of unspoken words', 'Healing through creation',
      'The cost of perfection', 'Finding light in others\' darkness',
      'The pain of growing apart', 'Strength through vulnerability',
      'The fear of being truly seen', 'Love beyond understanding'
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
      'Finding your place in a world that changed without you',
      'Restoring color to a world drained of hue',
      'Teaching an AI to understand human emotion',
      'Saving your planet from heat death',
      'Becoming the guardian of interdimensional balance',
      'Finding the source of everyone\'s shared nightmares',
      'Proving that pacifism can triumph over violence',
      'Rescuing creativity from a world of conformity',
      'Uniting fractured pieces of a god\'s consciousness',
      'Breaking the cycle of generational trauma'
    ];
    return motivations[Math.floor(Math.random() * motivations.length)];
  },

  powerUp: () => {
    const types = [
      'Ethereal', 'Blazing', 'Frozen', 'Electric', 'Toxic', 'Magnetic', 
      'Phantom', 'Primal', 'Quantum', 'Temporal', 'Viral', 'Crystalline',
      'Shadow', 'Divine', 'Chaotic', 'Harmonic', 'Void', 'Living',
      'Cosmic', 'Digital', 'Organic', 'Mechanical', 'Psychic', 'Astral'
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
      'freezes time for everything you touch',
      'allows you to taste colors and see flavors',
      'makes your footsteps create musical notes',
      'turns your breath into solid ice sculptures',
      'allows you to swim through solid matter',
      'makes your tears heal wounds',
      'turns your laughter into explosive energy',
      'allows you to paint doorways that actually open',
      'makes your heartbeat visible as light pulses',
      'turns your voice into a physical force',
      'allows you to fold space like origami'
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
      'Weather effects respond to player actions',
      'Footsteps echo differently based on surface material',
      'Breathing sounds synchronize with player heartrate',
      'Wind direction affects cloth and hair physics',
      'Temperature changes create visible breath in cold areas',
      'Proximity to danger increases screen grain and noise',
      'Success streaks add golden particles to movements',
      'Mistakes cause brief screen distortion effects',
      'Emotional moments desaturate everything except key objects',
      'Combat hits pause briefly before impact for emphasis',
      'Critical decisions slow time and highlight consequences'
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
      'Achievement-based pricing reductions',
      'Name-your-price with revenue transparency reports',
      'Subscription includes access to developer\'s entire catalog',
      'Limited edition releases with artificial scarcity',
      'Patron tier with monthly exclusive content drops',
      'Community-funded feature voting system',
      'Merchandise bundle deals with physical/digital hybrid',
      'Streaming-friendly license for content creators',
      'Corporate team-building license packages',
      'Accessibility-focused premium features for disabled players',
      'Carbon-neutral gaming initiative with environmental offset fees',
      'Blockchain-based ownership with resale marketplace',
      'Social impact purchasing where profits fund charitable causes'
    ];
    return models[Math.floor(Math.random() * models.length)];
  },

  // New generators added to expand the collection:

  soundDesign: () => {
    const approaches = [
      'Musical instruments recorded underwater',
      'Everyday objects played as percussion',
      'Reverse-engineered animal calls',
      'Processed human whispers and breath',
      'Mechanical sounds given organic warmth',
      'Classical instruments heavily distorted',
      'Field recordings from abandoned places',
      'Synthesized approximations of extinct animals',
      'Layered recordings of breaking/building things',
      'Human voices pitched beyond recognition',
      'Environmental sounds slowed to reveal hidden melodies',
      'Contact microphones on unusual surfaces',
      'Binaural beats designed to induce specific emotions',
      'Granular synthesis of childhood toy sounds',
      'Spectral analysis of colors converted to audio',
      'Mathematical sequences translated into music',
      'Recordings of silence from different locations',
      'AI-generated soundscapes trained on player behavior'
    ];
    return approaches[Math.floor(Math.random() * approaches.length)];
  },

  narrativeStructure: () => {
    const structures = [
      'Story told entirely through environmental storytelling',
      'Multiple unreliable narrators with conflicting accounts',
      'Narrative unfolds backwards from ending to beginning',
      'Player choices determine which genre the story becomes',
      'Story exists only in the spaces between dialogue',
      'Narrative told through recurring dreams and nightmares',
      'Plot revealed through overheard conversations only',
      'Story branches based on player\'s emotional responses',
      'Narrative unfolds through collaborative storytelling with AI',
      'Plot exists in parallel timelines that occasionally intersect',
      'Story told entirely through found documents and artifacts',
      'Narrative emerges from procedurally generated events',
      'Plot unfolds through cause-and-effect environmental puzzles',
      'Story told through the evolution of an ecosystem',
      'Narrative exists only in player\'s peripheral vision',
      'Plot revealed through musical themes and variations',
      'Story unfolds through architectural changes in game space'
    ];
    return structures[Math.floor(Math.random() * structures.length)];
  },

  controlScheme: () => {
    const schemes = [
      'Eye-tracking controls character movement',
      'Breathing patterns control game rhythm',
      'Voice pitch determines jump height',
      'Hand temperature affects magical abilities',
      'Posture changes alter character\'s confidence level',
      'Facial expressions control NPC reactions',
      'Heartrate variability influences stealth effectiveness',
      'Typing rhythm creates musical spells',
      'Mouse pressure determines attack strength',
      'Time between inputs affects character mood',
      'Multiple players share control of single character',
      'Controls randomly reassign every few minutes',
      'Interface responds only to gentle, patient inputs',
      'Aggressive inputs cause character to become afraid',
      'Controls work better when player is calm and centered',
      'Input timing must match environmental audio cues',
      'Character responds to player\'s actual movement via webcam',
      'Controls become more responsive as player improves emotionally'
    ];
    return schemes[Math.floor(Math.random() * schemes.length)];
  },

  multiplayer: () => {
    const concepts = [
      'Asymmetric co-op where players have completely different games',
      'One player exists in dreams, other in waking world',
      'Players take turns controlling the same character\'s different aspects',
      'Competitive cooperation where helping others helps yourself more',
      'Players can only communicate through environmental changes',
      'One player controls time, other controls space',
      'Players exist in different time periods of same location',
      'Co-op where players must maintain physical contact in real life',
      'Players alternately create and solve puzzles for each other',
      'One player sees the world, other hears it, must cooperate',
      'Players control emotional and logical sides of same character',
      'Multiplayer where joining mid-game changes everyone\'s reality',
      'Players compete by creating better worlds for others to explore',
      'One player is mortal, others are spirits who can only suggest actions',
      'Players take turns being protagonist in shared narrative',
      'Cooperative play where conflict resolution requires real conversation'
    ];
    return concepts[Math.floor(Math.random() * concepts.length)];
  },

  accessibility: () => {
    const features = [
      'Colorblind-friendly visual language using patterns and shapes',
      'Audio cues that create spatial understanding for blind players',
      'Simplified control schemes for players with motor difficulties',
      'Cognitive load options that adjust puzzle complexity dynamically',
      'Subtitle system with emotional context and speaker identification',
      'Visual sound indicators for deaf and hard-of-hearing players',
      'Customizable UI scaling and contrast for vision impairments',
      'One-handed control schemes that don\'t compromise gameplay',
      'Audio descriptions of visual elements and environmental details',
      'Seizure-safe options that maintain visual impact',
      'Dyslexia-friendly fonts and text presentation options',
      'Anxiety-management features like safe spaces and pacing controls',
      'Memory assistance tools for players with cognitive impairments',
      'Social anxiety accommodations for multiplayer interactions',
      'Attention management tools for ADHD players',
      'Depression-aware design that avoids triggering negative cycles'
    ];
    return features[Math.floor(Math.random() * features.length)];
  },

  coreFeeling: () => {
    const feelings = [
      'The satisfaction of solving something through pure patience',
      'The melancholy of beautiful things ending',
      'The wonder of discovering something no one has seen before',
      'The comfort of coming home after a long journey',
      'The bittersweet joy of helping someone you\'ll never see again',
      'The quiet pride of mastering something difficult',
      'The warmth of being truly understood by another consciousness',
      'The peaceful exhaustion after meaningful work',
      'The excitement of potential just before it\'s realized',
      'The gentle sadness of saying goodbye to imaginary friends',
      'The deep contentment of being exactly where you belong',
      'The thrilling terror of facing something greater than yourself',
      'The profound loneliness of being the only one who remembers',
      'The overwhelming gratitude for unexpected kindness',
      'The fierce protectiveness of something fragile and precious',
      'The dizzy exhilaration of breaking your own limitations'
    ];
    return feelings[Math.floor(Math.random() * feelings.length)];
  }
};

export default generators;