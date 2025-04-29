
// Engineering knowledge base

// Engineering disciplines database
const engineeringDisciplines = {
  'mechanical engineering': {
    definition: 'Branch of engineering that applies physical principles to design, analyze, manufacture, and maintain mechanical systems',
    subfields: [
      'Thermodynamics',
      'Fluid mechanics',
      'Robotics',
      'Manufacturing engineering',
      'Automotive engineering',
      'Aerospace engineering'
    ],
    applications: 'Engines, power plants, HVAC systems, manufacturing equipment, vehicles, aerospace',
    skills: 'CAD/CAM, materials science, mechanics, thermodynamics, manufacturing processes',
    careers: 'Design engineer, project manager, manufacturing engineer, automation specialist, research engineer'
  },
  // More engineering disciplines can be added here
};

// Engineering innovations database
const engineeringInnovations = {
  'transistor': {
    definition: 'Semiconductor device used to amplify or switch electronic signals',
    inventors: 'John Bardeen, Walter Brattain, and William Shockley at Bell Labs in 1947',
    impact: [
      'Enabled modern computing by replacing vacuum tubes',
      'Led to microprocessors and integrated circuits',
      'Made possible virtually all modern electronics',
      'Fundamental to the information age'
    ],
    evolution: 'From the original point-contact transistor to modern nanometer-scale MOSFETs in computer chips',
    significance: 'Often considered one of the most important inventions of the 20th century'
  },
  // More engineering innovations can be added here
};

// Engineering concepts database
const engineeringConcepts = {
  'bridge design': {
    types: [
      'Beam bridge: Simplest type supported by piers at each end',
      'Arch bridge: Uses curved structure to transfer load to supports',
      'Suspension bridge: Main cables suspended between towers support the deck',
      'Cable-stayed bridge: Deck supported by diagonal cables from towers',
      'Truss bridge: Uses triangular units to disperse forces'
    ],
    considerations: [
      'Span length',
      'Load requirements',
      'Environmental conditions',
      'Material properties',
      'Cost and construction methods',
      'Aesthetics'
    ],
    materials: 'Steel, reinforced concrete, pre-stressed concrete, composites, timber',
    famous: 'Golden Gate Bridge (suspension), Sydney Harbour Bridge (arch), Brooklyn Bridge (hybrid)'
  },
  // More engineering concepts can be added here
};

// Generate response based on engineering query
export const generateEngineeringResponse = async (query: string): Promise<string> => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check for engineering discipline mentions
  for (const [key, discipline] of Object.entries(engineeringDisciplines)) {
    if (lowercaseQuery.includes(key)) {
      return generateEngineeringDisciplineResponse(query, discipline);
    }
  }
  
  // Check for engineering innovation mentions
  for (const [key, innovation] of Object.entries(engineeringInnovations)) {
    if (lowercaseQuery.includes(key)) {
      return generateEngineeringInnovationResponse(query, innovation);
    }
  }
  
  // Check for engineering concept mentions
  for (const [key, concept] of Object.entries(engineeringConcepts)) {
    if (lowercaseQuery.includes(key)) {
      return generateEngineeringConceptResponse(query, concept);
    }
  }
  
  // General engineering response if no specific match
  return `I'd be happy to discuss engineering with you. You can ask about specific disciplines like mechanical engineering, innovations like the transistor, or concepts like bridge design. What engineering topic interests you?`;
};

// Helper function for engineering discipline responses
const generateEngineeringDisciplineResponse = (query: string, discipline: any): string => {
  let response = `${discipline.definition}. `;
  
  if (discipline.subfields) {
    response += `\n\nSubfields:\n• ${discipline.subfields.join('\n• ')}`;
  }
  
  if (discipline.applications) {
    response += `\n\nApplications: ${discipline.applications}`;
  }
  
  if (discipline.skills) {
    response += `\n\nKey skills: ${discipline.skills}`;
  }
  
  if (discipline.careers) {
    response += `\n\nCareer paths: ${discipline.careers}`;
  }
  
  return response;
};

// Helper function for engineering innovation responses
const generateEngineeringInnovationResponse = (query: string, innovation: any): string => {
  let response = `${innovation.definition}. `;
  
  if (innovation.inventors) {
    response += `It was invented by ${innovation.inventors}. `;
  }
  
  if (innovation.impact) {
    response += `\n\nImpact:\n• ${innovation.impact.join('\n• ')}`;
  }
  
  if (innovation.evolution) {
    response += `\n\nEvolution: ${innovation.evolution}`;
  }
  
  if (innovation.significance) {
    response += `\n\nHistorical significance: ${innovation.significance}`;
  }
  
  return response;
};

// Helper function for engineering concept responses
const generateEngineeringConceptResponse = (query: string, concept: any): string => {
  let response = '';
  
  if (concept.types) {
    response += `Types:\n• ${concept.types.join('\n• ')}`;
  }
  
  if (concept.considerations) {
    response += `\n\nKey considerations:\n• ${concept.considerations.join('\n• ')}`;
  }
  
  if (concept.materials) {
    response += `\n\nCommon materials: ${concept.materials}`;
  }
  
  if (concept.famous) {
    response += `\n\nFamous examples: ${concept.famous}`;
  }
  
  return response;
};
