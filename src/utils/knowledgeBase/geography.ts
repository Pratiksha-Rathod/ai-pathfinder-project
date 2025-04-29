
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
  'japan': {
    capital: 'Tokyo',
    population: 'Approximately 125 million (2023 estimate)',
    languages: 'Japanese',
    geography: [
      'Archipelago consisting of 6,852 islands',
      'Features: Mount Fuji, Japanese Alps, numerous volcanic zones',
      'Four main islands: Honshu, Hokkaido, Kyushu, and Shikoku'
    ],
    culture: 'Blend of traditional and modern elements, known for anime, manga, martial arts, and cuisine',
    significance: 'World\'s third-largest economy and leader in technological innovation and manufacturing'
  },
  'brazil': {
    capital: 'Brasília',
    population: 'Approximately 214 million (2023 estimate)',
    languages: 'Portuguese',
    geography: [
      'Borders: All South American countries except Chile and Ecuador',
      'Features: Amazon Rainforest, Brazilian Highlands, Pantanal wetlands',
      'Rivers: Amazon, São Francisco, Paraná'
    ],
    culture: 'Rich blend of indigenous, European, African, and Asian influences reflected in music, dance, and festivals',
    significance: 'Largest country in South America and home to the Amazon, the world\'s most biodiverse rainforest'
  },
  'egypt': {
    capital: 'Cairo',
    population: 'Approximately 110 million (2023 estimate)',
    languages: 'Arabic',
    geography: [
      'Transcontinental country spanning northeast Africa and southwest Asia via Sinai Peninsula',
      'Features: Nile River and valley, Sahara Desert, Sinai Peninsula',
      'Notable: 97% of population lives on just 3% of land area along the Nile'
    ],
    culture: 'One of the world\'s oldest civilizations with rich history in art, architecture, and literature',
    significance: 'Home to ancient wonders including the Great Pyramids of Giza and the Sphinx'
  },
  'australia': {
    capital: 'Canberra',
    population: 'Approximately 26 million (2023 estimate)',
    languages: 'English',
    geography: [
      'World\'s largest island and smallest continent',
      'Features: Great Barrier Reef, Outback, Great Dividing Range',
      'Unique wildlife including marsupials and monotremes'
    ],
    culture: 'Blend of indigenous Aboriginal traditions and Western influences with outdoor lifestyle',
    significance: 'Only nation to govern an entire continent and known for unique ecosystems and wildlife'
  }
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
  'amazon': {
    name: 'Amazon River',
    location: 'South America, flowing through Peru, Colombia, and Brazil',
    length: 'Approximately 6,400 kilometers (4,000 miles)',
    facts: [
      'Largest river by discharge volume of water in the world',
      'Contains approximately 20% of Earth\'s fresh water',
      'Home to over 3,000 species of fish',
      'Basin covers about 40% of South America'
    ],
    significance: 'Vital for biodiversity, indigenous communities, and regional climate regulation'
  },
  'sahara': {
    name: 'Sahara Desert',
    location: 'Northern Africa, spanning 11 countries',
    area: 'Approximately 9.2 million square kilometers (3.6 million square miles)',
    facts: [
      'World\'s largest hot desert',
      'Has experienced cycles of humid and arid periods over millions of years',
      'Contains sand dunes reaching heights of 180 meters (590 feet)',
      'Temperature extremes ranging from -6°C (21°F) to 59°C (138°F)'
    ],
    features: 'Sand seas (ergs), stone plateaus (hamadas), gravel plains (regs), dry valleys, and salt flats'
  },
  'great_barrier_reef': {
    name: 'Great Barrier Reef',
    location: 'Off the coast of Queensland, Australia',
    size: 'Approximately 2,300 kilometers (1,400 miles) in length',
    facts: [
      'World\'s largest coral reef system composed of over 2,900 individual reefs',
      'Visible from outer space and listed as a UNESCO World Heritage site',
      'Home to over 1,500 species of fish and 400 types of coral',
      'Formed over millions of years from tiny organisms called coral polyps'
    ],
    challenges: 'Facing threats from climate change, coral bleaching, poor water quality, and coastal development'
  },
  'grand_canyon': {
    name: 'Grand Canyon',
    location: 'Arizona, United States',
    dimensions: '446 kilometers (277 miles) long, up to 29 kilometers (18 miles) wide, and over 1.6 kilometers (1 mile) deep',
    facts: [
      'Carved by the Colorado River over an estimated 5-6 million years',
      'Contains rock layers that record 2 billion years of Earth\'s geological history',
      'Home to five Native American tribes: Hopi, Navajo, Havasupai, Paiute, and Hualapai',
      'Receives approximately 6 million visitors annually'
    ],
    geology: 'Features various rock types including limestone, sandstone, shale, granite, and schist exposed in distinct layers'
  }
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
  return `I'd be happy to discuss geography with you. You can ask about specific countries like India, Japan, Brazil, Egypt, or Australia, or geographical features like Mount Everest, the Amazon River, the Sahara Desert, the Great Barrier Reef, or the Grand Canyon. What aspect of geography would you like to learn about?`;
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
  
  if (feature.length) {
    response += `It spans a length of ${feature.length}. `;
  }
  
  if (feature.area) {
    response += `It covers an area of ${feature.area}. `;
  }
  
  if (feature.size) {
    response += `It has a size of ${feature.size}. `;
  }
  
  if (feature.dimensions) {
    response += `Its dimensions are ${feature.dimensions}. `;
  }
  
  if (feature.facts) {
    response += `\n\nFacts:\n• ${feature.facts.join('\n• ')}`;
  }
  
  if (feature.challenges) {
    response += `\n\nChallenges: ${feature.challenges}`;
  }
  
  if (feature.significance) {
    response += `\n\nSignificance: ${feature.significance}`;
  }
  
  if (feature.geology) {
    response += `\n\nGeology: ${feature.geology}`;
  }
  
  if (feature.features) {
    response += `\n\nFeatures: ${feature.features}`;
  }
  
  return response;
};
