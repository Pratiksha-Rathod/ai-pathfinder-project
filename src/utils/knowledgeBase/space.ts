
// Space knowledge base

// Celestial bodies database
const celestialBodies = {
  'mars': {
    type: 'Planet',
    location: '4th planet from the Sun in our Solar System',
    diameter: '6,779 km (about half the diameter of Earth)',
    facts: [
      'Also known as the "Red Planet" due to iron oxide on its surface',
      'Has two small moons: Phobos and Deimos',
      'Features the largest volcano in the solar system, Olympus Mons',
      'Has polar ice caps made of water and carbon dioxide ice',
      'Has a thin atmosphere composed primarily of carbon dioxide'
    ],
    exploration: 'Numerous missions including NASA\'s Perseverance rover, Curiosity rover, and Ingenuity helicopter',
    significance: 'Major target for human exploration and potential future colonization'
  },
  // More celestial bodies can be added here
};

// Space missions database
const spaceMissions = {
  'apollo 11': {
    agency: 'NASA',
    date: 'July 16-24, 1969',
    crew: 'Neil Armstrong, Buzz Aldrin, Michael Collins',
    objective: 'First crewed mission to land on the Moon',
    achievements: [
      'First humans to walk on the lunar surface (Armstrong and Aldrin)',
      'Collection of 21.5 kg of lunar material returned to Earth',
      'Deployment of scientific experiments on the lunar surface',
      'Fulfilled President Kennedy\'s goal of landing humans on the Moon before the end of the 1960s'
    ],
    legacy: 'Represented a major achievement in human spaceflight and demonstrated U.S. technological prowess during the Cold War'
  },
  // More space missions can be added here
};

// Astronomical phenomena database
const astronomicalPhenomena = {
  'black hole': {
    definition: 'A region of spacetime where gravity is so strong that nothing, not even light, can escape from it',
    formation: 'Typically formed from the remnants of massive stars after a supernova explosion',
    components: [
      'Event horizon: boundary beyond which nothing can escape',
      'Singularity: point of infinite density at the center',
      'Accretion disk: material orbiting and falling into the black hole'
    ],
    discoveries: 'First directly imaged in 2019 (M87 galaxy black hole) by the Event Horizon Telescope collaboration',
    significance: 'Represent the most extreme environments in the universe and are key to understanding fundamental physics'
  },
  // More astronomical phenomena can be added here
};

// Generate response based on space query
export const generateSpaceResponse = async (query: string): Promise<string> => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check for celestial body mentions
  for (const [key, body] of Object.entries(celestialBodies)) {
    if (lowercaseQuery.includes(key)) {
      return generateCelestialBodyResponse(query, body);
    }
  }
  
  // Check for space mission mentions
  for (const [key, mission] of Object.entries(spaceMissions)) {
    if (lowercaseQuery.includes(key)) {
      return generateSpaceMissionResponse(query, mission);
    }
  }
  
  // Check for astronomical phenomena mentions
  for (const [key, phenomenon] of Object.entries(astronomicalPhenomena)) {
    if (lowercaseQuery.includes(key)) {
      return generateAstronomicalPhenomenonResponse(query, phenomenon);
    }
  }
  
  // General space response if no specific match
  return `I'd be happy to discuss space and astronomy with you. You can ask about specific celestial bodies like Mars, space missions like Apollo 11, or astronomical phenomena like black holes. What aspect of space science would you like to explore?`;
};

// Helper function for celestial body responses
const generateCelestialBodyResponse = (query: string, body: any): string => {
  let response = `${body.type} ${body.location}. `;
  
  if (body.diameter) {
    response += `It has a diameter of ${body.diameter}. `;
  }
  
  if (body.facts) {
    response += `\n\nFacts:\n• ${body.facts.join('\n• ')}`;
  }
  
  if (body.exploration) {
    response += `\n\nExploration: ${body.exploration}`;
  }
  
  if (body.significance) {
    response += `\n\nSignificance: ${body.significance}`;
  }
  
  return response;
};

// Helper function for space mission responses
const generateSpaceMissionResponse = (query: string, mission: any): string => {
  let response = `${mission.agency}'s mission launched on ${mission.date}. `;
  
  if (mission.crew) {
    response += `The crew consisted of ${mission.crew}. `;
  }
  
  if (mission.objective) {
    response += `\n\nObjective: ${mission.objective}`;
  }
  
  if (mission.achievements) {
    response += `\n\nAchievements:\n• ${mission.achievements.join('\n• ')}`;
  }
  
  if (mission.legacy) {
    response += `\n\nLegacy: ${mission.legacy}`;
  }
  
  return response;
};

// Helper function for astronomical phenomenon responses
const generateAstronomicalPhenomenonResponse = (query: string, phenomenon: any): string => {
  let response = `${phenomenon.definition}. `;
  
  if (phenomenon.formation) {
    response += `\n\nFormation: ${phenomenon.formation}`;
  }
  
  if (phenomenon.components) {
    response += `\n\nComponents:\n• ${phenomenon.components.join('\n• ')}`;
  }
  
  if (phenomenon.discoveries) {
    response += `\n\nKey discoveries: ${phenomenon.discoveries}`;
  }
  
  if (phenomenon.significance) {
    response += `\n\nSignificance: ${phenomenon.significance}`;
  }
  
  return response;
};
