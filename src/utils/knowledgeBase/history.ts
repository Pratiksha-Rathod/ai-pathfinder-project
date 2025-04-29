
// History knowledge base

// Historical figures database
const historicalFigures = {
  // Indian historical figures
  'shivaji maharaj': {
    fullName: 'Chhatrapati Shivaji Maharaj',
    birth: '1630',
    death: '1680',
    title: 'Founder of the Maratha Empire',
    keyAchievements: [
      'Established Hindavi Swarajya (self-rule of Hindu people)',
      'Created an independent Maratha kingdom with Raigad as its capital',
      'Implemented progressive civil rule with modern administrative systems',
      'Developed innovative military tactics including guerrilla warfare'
    ],
    significance: 'Shivaji Maharaj is renowned for his military genius, progressive governance, and resistance against the Mughal Empire. He revived Hindu political traditions and established a competent and progressive civil rule with well-structured administrative organizations.',
    battles: 'Battle of Pratapgad (1659), Battle of Kolhapur (1659), Battle of Pavan Khind (1660), Battle of Surat (1664, 1670)',
    innovations: 'Naval developments, guerrilla warfare tactics, fort architecture innovations',
  },
  'ashoka': {
    fullName: 'Ashoka the Great',
    birth: '304 BCE',
    death: '232 BCE',
    title: 'Emperor of the Mauryan Dynasty',
    keyAchievements: [
      'Unified most of the Indian subcontinent',
      'Converted to Buddhism after witnessing the bloodshed of the Kalinga War',
      'Spread Buddhist principles throughout his empire and beyond',
      'Established pillars with edicts promoting dharma (moral virtue)'
    ],
    significance: 'After the devastating Kalinga War, Ashoka embraced Buddhism and renounced violence, dedicating his life to spreading dharma. His lion capital from the Sarnath pillar became the national emblem of India.',
    rule: 'Ruled from 268 BCE to 232 BCE',
    edicts: 'Created rock and pillar edicts that spread his message of dharma across his empire',
  },
  // More historical figures can be added here
};

// Historical events database
const historicalEvents = {
  'world war 2': {
    period: '1939-1945',
    participants: 'Allied Powers (led by UK, USA, USSR) vs Axis Powers (led by Nazi Germany, Italy, Japan)',
    keyEvents: [
      'German invasion of Poland (1939)',
      'Battle of Britain (1940)',
      'Attack on Pearl Harbor (1941)',
      'D-Day landings (1944)',
      'Atomic bombings of Hiroshima and Nagasaki (1945)'
    ],
    consequences: 'Approximately 70-85 million fatalities, foundation of United Nations, beginning of the Cold War, decolonization movements',
    significance: 'Deadliest conflict in human history that shaped geopolitical boundaries and international relations for decades to follow.'
  },
  // More historical events can be added here
};

// Historical periods database
const historicalPeriods = {
  'renaissance': {
    period: '14th to 17th century',
    location: 'Europe (started in Italy)',
    keyFeatures: [
      'Revival of classical learning and values',
      'Emphasis on humanism',
      'Advancements in art, architecture, science, and literature',
      'Growth of secular thinking'
    ],
    keyFigures: 'Leonardo da Vinci, Michelangelo, Raphael, Niccolò Machiavelli, Galileo Galilei',
    significance: 'Bridge between the Middle Ages and Modern history, laid foundations for the Scientific Revolution and Enlightenment.'
  },
  // More historical periods can be added here
};

// Generate response based on historical query
export const generateHistoryResponse = async (query: string): Promise<string> => {
  const lowercaseQuery = query.toLowerCase();
  
  // Check for historical figure mentions
  for (const [key, figure] of Object.entries(historicalFigures)) {
    if (lowercaseQuery.includes(key)) {
      return generateHistoricalFigureResponse(query, figure);
    }
  }
  
  // Check for historical event mentions
  for (const [key, event] of Object.entries(historicalEvents)) {
    if (lowercaseQuery.includes(key)) {
      return generateHistoricalEventResponse(query, event);
    }
  }
  
  // Check for historical period mentions
  for (const [key, period] of Object.entries(historicalPeriods)) {
    if (lowercaseQuery.includes(key)) {
      return generateHistoricalPeriodResponse(query, period);
    }
  }
  
  // General history response if no specific match
  return `Based on your interest in history, I'd be happy to explore historical topics with you. You can ask about specific historical figures like Shivaji Maharaj or Ashoka the Great, events like World War II, or periods like the Renaissance. What aspect of history would you like to learn more about?`;
};

// Helper function for historical figure responses
const generateHistoricalFigureResponse = (query: string, figure: any): string => {
  let response = `${figure.fullName} (${figure.birth}-${figure.death}) was ${figure.title}. `;
  
  response += `\n\nKey achievements:\n• ${figure.keyAchievements.join('\n• ')}`;
  
  if (figure.significance) {
    response += `\n\nHistorical significance: ${figure.significance}`;
  }
  
  if (figure.battles) {
    response += `\n\nNotable battles: ${figure.battles}`;
  }
  
  if (figure.innovations) {
    response += `\n\nInnovations and contributions: ${figure.innovations}`;
  }
  
  if (figure.rule) {
    response += `\n\nRule: ${figure.rule}`;
  }
  
  if (figure.edicts) {
    response += `\n\nEdicts: ${figure.edicts}`;
  }
  
  return response;
};

// Helper function for historical event responses
const generateHistoricalEventResponse = (query: string, event: any): string => {
  let response = `This historical event occurred during ${event.period} and involved ${event.participants}. `;
  
  response += `\n\nKey developments:\n• ${event.keyEvents.join('\n• ')}`;
  
  if (event.consequences) {
    response += `\n\nConsequences: ${event.consequences}`;
  }
  
  if (event.significance) {
    response += `\n\nHistorical significance: ${event.significance}`;
  }
  
  return response;
};

// Helper function for historical period responses
const generateHistoricalPeriodResponse = (query: string, period: any): string => {
  let response = `This historical period occurred during the ${period.period} in ${period.location}. `;
  
  response += `\n\nKey features:\n• ${period.keyFeatures.join('\n• ')}`;
  
  if (period.keyFigures) {
    response += `\n\nNotable figures: ${period.keyFigures}`;
  }
  
  if (period.significance) {
    response += `\n\nHistorical significance: ${period.significance}`;
  }
  
  return response;
};
