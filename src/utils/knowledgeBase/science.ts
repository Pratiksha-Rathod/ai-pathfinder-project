
// Science knowledge base

// Scientific concepts database
const scientificConcepts = {
  'gravity': {
    definition: 'The force that attracts objects toward one another, particularly the force that attracts objects toward the center of the Earth',
    discoverer: 'Formalized by Sir Isaac Newton in 1687',
    keyPrinciples: [
      'Objects attract each other with a force proportional to their masses',
      'The force decreases with the square of the distance between objects',
      'Einstein\'s General Relativity later described gravity as a curvature of spacetime'
    ],
    formula: 'F = G(m₁m₂/r²), where F is force, G is gravitational constant, m₁ and m₂ are masses, and r is distance',
    applications: 'Planetary motion, satellite orbits, tides, everyday movement on Earth'
  },
  'photosynthesis': {
    definition: 'The process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water',
    discoverer: 'First described by Jan Ingenhousz in 1779',
    keyPrinciples: [
      'Plants capture light energy using chlorophyll',
      'Carbon dioxide and water are converted to glucose and oxygen',
      'Takes place primarily in the chloroplasts of plant cells'
    ],
    formula: '6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂',
    significance: 'Fundamental for life on Earth by producing oxygen and serving as the base of food chains'
  },
  // More scientific concepts can be added here
};

// Scientists database
const scientists = {
  'einstein': {
    fullName: 'Albert Einstein',
    lifespan: '1879-1955',
    fields: 'Physics, specifically relativity and quantum mechanics',
    keyContributions: [
      'Theory of Special Relativity (1905)',
      'Theory of General Relativity (1915)',
      'Explanation of the photoelectric effect',
      'Mass-energy equivalence formula E=mc²'
    ],
    awards: 'Nobel Prize in Physics (1921) for his explanation of the photoelectric effect',
    impact: 'Revolutionized our understanding of space, time, gravity, and the fundamental nature of the universe.'
  },
  // More scientists can be added here
};

// Scientific fields database
const scientificFields = {
  'quantum physics': {
    definition: 'A branch of physics dealing with the behavior of matter and light on the atomic and subatomic scale',
    keyPrinciples: [
      'Wave-particle duality',
      'Uncertainty principle',
      'Quantum entanglement',
      'Superposition'
    ],
    pioneers: 'Max Planck, Niels Bohr, Werner Heisenberg, Erwin Schrödinger, Albert Einstein',
    applications: 'Lasers, semiconductors, MRI, quantum computing, cryptography',
    significance: 'Provides the foundation for understanding the fundamental nature of reality at the smallest scales'
  },
  // More scientific fields can be added here
};

// Generate response based on science query
export const generateScienceResponse = async (query: string): Promise<string> => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check for scientific concept mentions
  for (const [key, concept] of Object.entries(scientificConcepts)) {
    if (lowercaseQuery.includes(key)) {
      return generateScientificConceptResponse(query, concept);
    }
  }
  
  // Check for scientist mentions
  for (const [key, scientist] of Object.entries(scientists)) {
    if (lowercaseQuery.includes(key)) {
      return generateScientistResponse(query, scientist);
    }
  }
  
  // Check for scientific field mentions
  for (const [key, field] of Object.entries(scientificFields)) {
    if (lowercaseQuery.includes(key)) {
      return generateScientificFieldResponse(query, field);
    }
  }
  
  // General science response if no specific match
  return `I'd be happy to discuss scientific topics with you. You can ask about specific concepts like gravity or photosynthesis, scientists like Einstein, or fields like quantum physics. What aspect of science interests you?`;
};

// Helper function for scientific concept responses
const generateScientificConceptResponse = (query: string, concept: any): string => {
  let response = `${concept.definition}. `;
  
  if (concept.discoverer) {
    response += `This concept was ${concept.discoverer}. `;
  }
  
  if (concept.keyPrinciples) {
    response += `\n\nKey principles:\n• ${concept.keyPrinciples.join('\n• ')}`;
  }
  
  if (concept.formula) {
    response += `\n\nFormula: ${concept.formula}`;
  }
  
  if (concept.applications) {
    response += `\n\nApplications: ${concept.applications}`;
  }
  
  if (concept.significance) {
    response += `\n\nSignificance: ${concept.significance}`;
  }
  
  return response;
};

// Helper function for scientist responses
const generateScientistResponse = (query: string, scientist: any): string => {
  let response = `${scientist.fullName} (${scientist.lifespan}) was a pioneering figure in ${scientist.fields}. `;
  
  if (scientist.keyContributions) {
    response += `\n\nKey contributions:\n• ${scientist.keyContributions.join('\n• ')}`;
  }
  
  if (scientist.awards) {
    response += `\n\nAwards: ${scientist.awards}`;
  }
  
  if (scientist.impact) {
    response += `\n\nImpact: ${scientist.impact}`;
  }
  
  return response;
};

// Helper function for scientific field responses
const generateScientificFieldResponse = (query: string, field: any): string => {
  let response = `${field.definition}. `;
  
  if (field.keyPrinciples) {
    response += `\n\nKey principles:\n• ${field.keyPrinciples.join('\n• ')}`;
  }
  
  if (field.pioneers) {
    response += `\n\nPioneers: ${field.pioneers}`;
  }
  
  if (field.applications) {
    response += `\n\nApplications: ${field.applications}`;
  }
  
  if (field.significance) {
    response += `\n\nSignificance: ${field.significance}`;
  }
  
  return response;
};
