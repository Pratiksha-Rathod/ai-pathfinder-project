
// Facts and miscellaneous knowledge

// General facts database
const generalFacts = {
  'earth': {
    type: 'Planet',
    age: 'Approximately 4.54 billion years',
    composition: 'Core (inner and outer), mantle, crust',
    atmosphere: 'Nitrogen (78%), oxygen (21%), other gases (1%)',
    facts: [
      'Only known planet to support life',
      'Water covers about 71% of the surface',
      'Has one natural satellite (the Moon)',
      'Rotates on its axis every 23.9 hours',
      'Orbits the Sun every 365.25 days'
    ]
  },
  // More general facts can be added here
};

// Famous personalities database
const famousPersonalities = {
  'gandhi': {
    fullName: 'Mohandas Karamchand Gandhi',
    alias: 'Mahatma Gandhi',
    lifespan: '1869-1948',
    nationality: 'Indian',
    contributions: [
      'Led India\'s nonviolent independence movement against British rule',
      'Pioneered Satyagraha (resistance through nonviolent civil disobedience)',
      'Advocated for religious pluralism and simple living',
      'Inspired civil rights movements worldwide'
    ],
    quotes: '"Be the change that you wish to see in the world.", "An eye for an eye will only make the whole world blind."',
    legacy: 'Known as the Father of the Nation in India. His birthday, October 2, is commemorated as Gandhi Jayanti, a national holiday in India, and internationally as the International Day of Nonviolence.'
  },
  // More famous personalities can be added here
};

// Generate response based on miscellaneous queries
export const generateFactsResponse = async (query: string): Promise<string> => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check for general fact mentions
  for (const [key, fact] of Object.entries(generalFacts)) {
    if (lowercaseQuery.includes(key)) {
      return generateGeneralFactResponse(query, fact);
    }
  }
  
  // Check for famous personality mentions
  for (const [key, person] of Object.entries(famousPersonalities)) {
    if (lowercaseQuery.includes(key)) {
      return generateFamousPersonalityResponse(query, person);
    }
  }
  
  // Generate conversational response for general queries
  return generateConversationalResponse(query);
};

// Helper function for general fact responses
const generateGeneralFactResponse = (query: string, fact: any): string => {
  let response = `${fact.type} with an age of ${fact.age}. `;
  
  if (fact.composition) {
    response += `It is composed of ${fact.composition}. `;
  }
  
  if (fact.atmosphere) {
    response += `Its atmosphere consists of ${fact.atmosphere}. `;
  }
  
  if (fact.facts) {
    response += `\n\nInteresting facts:\n• ${fact.facts.join('\n• ')}`;
  }
  
  return response;
};

// Helper function for famous personality responses
const generateFamousPersonalityResponse = (query: string, person: any): string => {
  let response = `${person.fullName} (${person.lifespan}), also known as ${person.alias}, was a ${person.nationality} figure. `;
  
  if (person.contributions) {
    response += `\n\nContributions:\n• ${person.contributions.join('\n• ')}`;
  }
  
  if (person.quotes) {
    response += `\n\nFamous quotes: ${person.quotes}`;
  }
  
  if (person.legacy) {
    response += `\n\nLegacy: ${person.legacy}`;
  }
  
  return response;
};

// Helper function for general conversational responses
const generateConversationalResponse = (query: string): string => {
  const lowercaseQuery = query.toLowerCase();
  
  // Greeting patterns
  if (lowercaseQuery.includes('hello') || 
      lowercaseQuery.includes('hi') || 
      lowercaseQuery.includes('hey')) {
    return "Hello! I'm Nova, your AI assistant. How can I help you today?";
  }
  
  // Questions about the AI itself
  if (lowercaseQuery.includes('who are you') || 
      lowercaseQuery.includes('what are you')) {
    return "I'm Nova, an AI assistant designed to help answer questions on a wide variety of topics including history, science, arts, mathematics, geography, space, engineering, and general knowledge. How can I assist you today?";
  }
  
  // How are you type questions
  if (lowercaseQuery.includes('how are you')) {
    return "I'm functioning well, thank you for asking! I'm here to help you with any questions you might have.";
  }
  
  // Thanks patterns
  if (lowercaseQuery.includes('thank') || 
      lowercaseQuery.includes('thanks')) {
    return "You're welcome! Feel free to ask if you have any other questions.";
  }
  
  // Default response for unrecognized queries
  return "I don't have specific information on that topic yet. Would you like to know about history, science, arts, mathematics, geography, space, or engineering? I'd be happy to share what I know in those areas.";
};
