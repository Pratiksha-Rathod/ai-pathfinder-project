
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
  // More conversational tone for facts
  let response = `So, about ${fact.type === 'Planet' ? 'planet Earth' : fact.type}... it's been around for ${fact.age}. `;
  
  if (fact.composition) {
    response += `If you're wondering about what it's made of, it consists of ${fact.composition}. `;
  }
  
  if (fact.atmosphere) {
    response += `The air we breathe? That's ${fact.atmosphere}. Pretty cool, right? `;
  }
  
  if (fact.facts) {
    response += `\n\nHere are some interesting tidbits I thought you might like:\n• ${fact.facts.join('\n• ')}`;
  }
  
  return response;
};

// Helper function for famous personality responses
const generateFamousPersonalityResponse = (query: string, person: any): string => {
  // More personable, conversational biography
  let response = `I love talking about ${person.fullName}! Living from ${person.lifespan}, most people know them as ${person.alias}. They were ${person.nationality}, and honestly, quite remarkable. `;
  
  if (person.contributions) {
    response += `\n\nTheir biggest contributions to our world were:\n• ${person.contributions.join('\n• ')}`;
  }
  
  if (person.quotes) {
    response += `\n\nSome of my favorite quotes from them: ${person.quotes}`;
  }
  
  if (person.legacy) {
    response += `\n\nWhat's really fascinating about their legacy: ${person.legacy}`;
  }
  
  return response;
};

// Helper function for general conversational responses
const generateConversationalResponse = (query: string): string => {
  const lowercaseQuery = query.toLowerCase();
  
  // Greeting patterns - more casual and friendly
  if (lowercaseQuery.includes('hello') || 
      lowercaseQuery.includes('hi') || 
      lowercaseQuery.includes('hey')) {
    return "Hey there! Great to chat with you today. What's on your mind?";
  }
  
  // Questions about the AI itself - more personable
  if (lowercaseQuery.includes('who are you') || 
      lowercaseQuery.includes('what are you')) {
    return "I'm Nova! Think of me as your friendly AI chat companion. I love talking about all sorts of things - history, science, arts, math, geography, space stuff, engineering... you name it! What would you like to chat about today?";
  }
  
  // How are you type questions - more conversational
  if (lowercaseQuery.includes('how are you')) {
    return "I'm doing great, thanks for asking! It's always nice when someone checks in. How are you doing today? Anything I can help with?";
  }
  
  // Thanks patterns - warm response
  if (lowercaseQuery.includes('thank') || 
      lowercaseQuery.includes('thanks')) {
    return "You're very welcome! Always happy to help. Let me know if you need anything else - I'm right here!";
  }
  
  // Default response for unrecognized queries - friendly and helpful
  return "You know, I don't have specific details about that yet, but I'd love to chat about something similar! I'm pretty good with history, science, arts, math, geography, space exploration, and engineering topics. Would any of those interest you?";
};
