
// Math knowledge base

// Mathematical concepts database
const mathematicalConcepts = {
  'calculus': {
    definition: 'A branch of mathematics focused on the study of rates of change and accumulation',
    branches: [
      'Differential calculus: Study of rates of change and slopes of curves',
      'Integral calculus: Study of accumulation of quantities and areas under curves'
    ],
    keyFigures: 'Isaac Newton and Gottfried Wilhelm Leibniz (independent inventors)',
    applications: 'Physics, engineering, economics, statistics, medicine, population dynamics',
    significance: 'Provides the mathematical framework for modeling systems that change over time or space'
  },
  'pythagoras theorem': {
    definition: 'In a right-angled triangle, the square of the length of the hypotenuse equals the sum of squares of the other two sides',
    formula: 'a² + b² = c², where c is the hypotenuse and a and b are the other two sides',
    discovery: 'Named after the Greek mathematician Pythagoras, though evidence suggests it was known earlier',
    applications: 'Construction, navigation, architecture, physics',
    significance: 'One of the fundamental theorems in geometry with countless practical applications'
  },
  // More mathematical concepts can be added here
};

// Mathematicians database
const mathematicians = {
  'ramanujan': {
    fullName: 'Srinivasa Ramanujan',
    lifespan: '1887-1920',
    nationality: 'Indian',
    contributions: [
      'Developed over 3,900 mathematical results and identities',
      'Made breakthroughs in infinite series, continued fractions, and number theory',
      'Discovered the Ramanujan prime and Ramanujan theta function'
    ],
    famousWork: 'Ramanujan conjecture, mock theta functions, taxicab number',
    legacy: 'Despite having no formal training, his intuitive mathematical genius continues to influence modern mathematics and physics'
  },
  // More mathematicians can be added here
};

// Generate response based on math query
export const generateMathResponse = async (query: string): Promise<string> => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check for mathematical concept mentions
  for (const [key, concept] of Object.entries(mathematicalConcepts)) {
    if (lowercaseQuery.includes(key)) {
      return generateMathConceptResponse(query, concept);
    }
  }
  
  // Check for mathematician mentions
  for (const [key, mathematician] of Object.entries(mathematicians)) {
    if (lowercaseQuery.includes(key)) {
      return generateMathematicianResponse(query, mathematician);
    }
  }
  
  // Check for calculation requests
  if (containsCalculation(lowercaseQuery)) {
    return calculateResult(query);
  }
  
  // General math response if no specific match
  return `I'd be happy to help with mathematics. You can ask about specific concepts like calculus or the Pythagorean theorem, mathematicians like Ramanujan, or even simple calculations. What mathematical topic would you like to explore?`;
};

// Helper function for math concept responses
const generateMathConceptResponse = (query: string, concept: any): string => {
  let response = `${concept.definition}. `;
  
  if (concept.branches) {
    response += `\n\nBranches:\n• ${concept.branches.join('\n• ')}`;
  }
  
  if (concept.formula) {
    response += `\n\nFormula: ${concept.formula}`;
  }
  
  if (concept.keyFigures) {
    response += `\n\nKey figures: ${concept.keyFigures}`;
  }
  
  if (concept.discovery) {
    response += `\n\nDiscovery: ${concept.discovery}`;
  }
  
  if (concept.applications) {
    response += `\n\nApplications: ${concept.applications}`;
  }
  
  if (concept.significance) {
    response += `\n\nSignificance: ${concept.significance}`;
  }
  
  return response;
};

// Helper function for mathematician responses
const generateMathematicianResponse = (query: string, mathematician: any): string => {
  let response = `${mathematician.fullName} (${mathematician.lifespan}) was a ${mathematician.nationality} mathematician. `;
  
  if (mathematician.contributions) {
    response += `\n\nContributions:\n• ${mathematician.contributions.join('\n• ')}`;
  }
  
  if (mathematician.famousWork) {
    response += `\n\nFamous work: ${mathematician.famousWork}`;
  }
  
  if (mathematician.legacy) {
    response += `\n\nLegacy: ${mathematician.legacy}`;
  }
  
  return response;
};

// Helper function to detect if the query contains a calculation request
const containsCalculation = (query: string): boolean => {
  // Check for basic arithmetic operators or calculation keywords
  return /[+\-*\/=]/.test(query) || 
         query.includes('calculate') || 
         query.includes('solve') || 
         query.includes('compute') ||
         query.includes('what is');
};

// Helper function to attempt to calculate a result
const calculateResult = (query: string): string => {
  try {
    // Extract numbers and operators from the query
    // This is a very basic implementation and would need to be enhanced for a real system
    const sanitizedQuery = query.replace(/[^0-9+\-*/().]/g, '');
    
    if (!sanitizedQuery) {
      return "I'd need more specific calculation details to help you solve that math problem.";
    }
    
    // Simple safety check against eval
    if (/[a-zA-Z$_]/.test(sanitizedQuery)) {
      return "I can't safely evaluate that expression.";
    }
    
    // Evaluate the expression
    // Note: In a production system, never use eval for user input
    // This is just for demonstration purposes
    const result = Function('"use strict";return (' + sanitizedQuery + ')')();
    
    return `The result of ${sanitizedQuery} is ${result}.`;
  } catch (error) {
    return "I couldn't parse that as a mathematical expression. Could you rephrase it?";
  }
};
