
// Geography knowledge base

// Countries database
const countries = {
  'india': {
    capital: 'New Delhi',
    population: 'Approximately 1.4 billion (2023 estimate)',
    languages: 'Hindi, English (both official), and 21 other officially recognized languages',
    geography: [
      'Borders: Pakistan, China, Nepal, Bhutan, Bangladesh, Myanmar',
      'Features: Himalayan Mountains, Indo-Gangetic Plain, Thar Desert, Deccan Plateau',
      'Rivers: Ganges, Brahmaputra, Yamuna, Godavari, Krishna'
    ],
    culture: 'Incredibly diverse with various religions, languages, dance, music, cuisine, and festivals',
    significance: 'World\'s largest democracy and one of the oldest civilizations with rich history and cultural heritage'
  },
  // More countries can be added here
};

// Geographical features database
const geographicalFeatures = {
  'everest': {
    name: 'Mount Everest',
    location: 'Border of Nepal and Tibet (China)',
    elevation: '8,848.86 meters (29,031.7 feet) above sea level',
    facts: [
      'Tallest mountain above sea level on Earth',
      'First successfully summited by Edmund Hillary and Tenzing Norgay in 1953',
      'Known as "Sagarmatha" in Nepal and "Chomolungma" in Tibet',
      'Part of the Mahalangur Himal sub-range of the Himalayas'
    ],
    challenges: 'Extreme altitude, weather conditions, and "death zone" above 8,000 meters where oxygen levels are insufficient for human survival'
  },
  // More geographical features can be added here
};

// Generate response based on geography query
export const generateGeographyResponse = async (query: string): Promise<string> => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check for country mentions
  for (const [key, country] of Object.entries(countries)) {
    if (lowercaseQuery.includes(key)) {
      return generateCountryResponse(query, country);
    }
  }
  
  // Check for geographical feature mentions
  for (const [key, feature] of Object.entries(geographicalFeatures)) {
    if (lowercaseQuery.includes(key)) {
      return generateGeographicalFeatureResponse(query, feature);
    }
  }
  
  // General geography response if no specific match
  return `I'd be happy to discuss geography with you. You can ask about specific countries like India or geographical features like Mount Everest. What aspect of geography would you like to learn about?`;
};

// Helper function for country responses
const generateCountryResponse = (query: string, country: any): string => {
  let response = `The capital of this country is ${country.capital} with a population of ${country.population}. `;
  
  if (country.languages) {
    response += `Main languages spoken include ${country.languages}. `;
  }
  
  if (country.geography) {
    response += `\n\nGeography:\n• ${country.geography.join('\n• ')}`;
  }
  
  if (country.culture) {
    response += `\n\nCulture: ${country.culture}`;
  }
  
  if (country.significance) {
    response += `\n\nGlobal significance: ${country.significance}`;
  }
  
  return response;
};

// Helper function for geographical feature responses
const generateGeographicalFeatureResponse = (query: string, feature: any): string => {
  let response = `${feature.name} is located at ${feature.location}. `;
  
  if (feature.elevation) {
    response += `It has an elevation of ${feature.elevation}. `;
  }
  
  if (feature.facts) {
    response += `\n\nFacts:\n• ${feature.facts.join('\n• ')}`;
  }
  
  if (feature.challenges) {
    response += `\n\nChallenges: ${feature.challenges}`;
  }
  
  return response;
};
