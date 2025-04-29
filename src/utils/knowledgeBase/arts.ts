
// Arts knowledge base

// Art movements database
const artMovements = {
  'renaissance': {
    period: '14th to 17th century',
    origin: 'Italy',
    characteristics: [
      'Realistic representation of the human form',
      'Use of perspective and depth',
      'Classical themes and references',
      'Emphasis on humanism and human potential'
    ],
    keyArtists: 'Leonardo da Vinci, Michelangelo, Raphael, Sandro Botticelli',
    significantWorks: 'Mona Lisa, The Last Supper, Sistine Chapel ceiling, The Birth of Venus',
    influence: 'Formed the foundation of Western art tradition and influenced subsequent art movements'
  },
  // More art movements can be added here
};

// Artists database
const artists = {
  'picasso': {
    fullName: 'Pablo Picasso',
    lifespan: '1881-1973',
    nationality: 'Spanish',
    movements: 'Cubism, Surrealism, among others',
    periods: [
      'Blue Period (1901-1904)',
      'Rose Period (1904-1906)',
      'African-influenced Period (1907-1909)',
      'Analytic Cubism (1909-1912)',
      'Synthetic Cubism (1912-1919)'
    ],
    famousWorks: 'Guernica, Les Demoiselles d\'Avignon, The Old Guitarist',
    influence: 'Revolutionized modern art and is considered one of the most influential artists of the 20th century'
  },
  // More artists can be added here
};

// Literary works database
const literaryWorks = {
  'hamlet': {
    title: 'Hamlet',
    author: 'William Shakespeare',
    publishedYear: 'c. 1600',
    genre: 'Tragedy',
    keyThemes: [
      'Revenge',
      'Moral corruption',
      'The impossibility of certainty',
      'Death and the afterlife'
    ],
    famousQuotes: '"To be, or not to be, that is the question", "The lady doth protest too much, methinks"',
    significance: 'Considered one of the most powerful and influential works of world literature'
  },
  // More literary works can be added here
};

// Generate response based on arts query
export const generateArtsResponse = async (query: string): Promise<string> => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check for art movement mentions
  for (const [key, movement] of Object.entries(artMovements)) {
    if (lowercaseQuery.includes(key)) {
      return generateArtMovementResponse(query, movement);
    }
  }
  
  // Check for artist mentions
  for (const [key, artist] of Object.entries(artists)) {
    if (lowercaseQuery.includes(key)) {
      return generateArtistResponse(query, artist);
    }
  }
  
  // Check for literary work mentions
  for (const [key, work] of Object.entries(literaryWorks)) {
    if (lowercaseQuery.includes(key)) {
      return generateLiteraryWorkResponse(query, work);
    }
  }
  
  // General arts response if no specific match
  return `I'd be happy to discuss arts with you. You can ask about specific art movements like the Renaissance, artists like Picasso, or literary works like Hamlet. What aspect of arts interests you?`;
};

// Helper function for art movement responses
const generateArtMovementResponse = (query: string, movement: any): string => {
  let response = `The ${movement.period} art movement originated in ${movement.origin}. `;
  
  if (movement.characteristics) {
    response += `\n\nKey characteristics:\n• ${movement.characteristics.join('\n• ')}`;
  }
  
  if (movement.keyArtists) {
    response += `\n\nKey artists: ${movement.keyArtists}`;
  }
  
  if (movement.significantWorks) {
    response += `\n\nSignificant works: ${movement.significantWorks}`;
  }
  
  if (movement.influence) {
    response += `\n\nInfluence: ${movement.influence}`;
  }
  
  return response;
};

// Helper function for artist responses
const generateArtistResponse = (query: string, artist: any): string => {
  let response = `${artist.fullName} (${artist.lifespan}) was a ${artist.nationality} artist associated with ${artist.movements}. `;
  
  if (artist.periods) {
    response += `\n\nArtistic periods:\n• ${artist.periods.join('\n• ')}`;
  }
  
  if (artist.famousWorks) {
    response += `\n\nFamous works: ${artist.famousWorks}`;
  }
  
  if (artist.influence) {
    response += `\n\nInfluence and legacy: ${artist.influence}`;
  }
  
  return response;
};

// Helper function for literary work responses
const generateLiteraryWorkResponse = (query: string, work: any): string => {
  let response = `"${work.title}" is a ${work.genre} written by ${work.author} and published around ${work.publishedYear}. `;
  
  if (work.keyThemes) {
    response += `\n\nKey themes:\n• ${work.keyThemes.join('\n• ')}`;
  }
  
  if (work.famousQuotes) {
    response += `\n\nFamous quotes: ${work.famousQuotes}`;
  }
  
  if (work.significance) {
    response += `\n\nSignificance: ${work.significance}`;
  }
  
  return response;
};
