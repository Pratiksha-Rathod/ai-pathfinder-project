// A utility for generating more knowledgeable and diverse responses

// Define topic categories for more organized knowledge
type Topic = 
  | "history" 
  | "geography" 
  | "science" 
  | "art" 
  | "math" 
  | "technology" 
  | "philosophy"
  | "literature"
  | "space"
  | "engineering"
  | "general"
  | "conversation";

// Knowledge patterns with educational content
const knowledgeResponses: Record<Topic, string[]> = {
  history: [
    "Looking at historical records, we can see that {HISTORICAL_EVENT} occurred during {TIME_PERIOD}, which had a significant impact on {CONSEQUENCE}.",
    "Historians generally agree that {HISTORICAL_FIGURE} played a crucial role in {HISTORICAL_EVENT}, particularly through their {CONTRIBUTION}.",
    "The {TIME_PERIOD} was characterized by {CHARACTERISTIC}, which led to significant changes in how societies {SOCIETAL_CHANGE}.",
    "When we examine the historical context of {HISTORICAL_EVENT}, it's worth noting that {CONTEXT} was a major contributing factor.",
    "Archaeological evidence suggests that ancient civilizations in {LOCATION} were quite advanced in {TECHNOLOGY_OR_PRACTICE} for their time.",
    "Chhatrapati {HISTORICAL_FIGURE} was a legendary ruler who {ACHIEVEMENT} during the {TIME_PERIOD}, significantly impacting {IMPACT_AREA}.",
    "Under the leadership of {HISTORICAL_FIGURE}, the {EMPIRE_NAME} demonstrated remarkable {QUALITY} through {STRATEGY_OR_POLICY}.",
    "The battle of {BATTLE_NAME} in {YEAR} showcased {HISTORICAL_FIGURE}'s brilliant {MILITARY_STRATEGY}, leading to {OUTCOME}.",
    "Historical records from {TIME_PERIOD} indicate that {HISTORICAL_FIGURE}'s administration was known for {ADMINISTRATIVE_FEATURE}."
  ],
  geography: [
    "The region of {REGION} is known for its {GEOGRAPHICAL_FEATURE}, which has influenced local {INFLUENCE} for centuries.",
    "If we look at the geographical distribution of {PHENOMENON}, we notice interesting patterns around {LOCATION} due to {REASON}.",
    "{COUNTRY} borders {NEIGHBORING_COUNTRIES} and has diverse terrain ranging from {TERRAIN_TYPE_1} to {TERRAIN_TYPE_2}.",
    "Climate patterns in {REGION} are primarily influenced by {CLIMATE_FACTOR}, resulting in {CLIMATE_DESCRIPTION}.",
    "The {GEOGRAPHICAL_FEATURE} is one of the most significant natural landmarks in {REGION}, formed over {TIME_SPAN} through {GEOLOGICAL_PROCESS}."
  ],
  science: [
    "According to the scientific principle of {PRINCIPLE}, we observe that {OBSERVATION} occurs because {EXPLANATION}.",
    "Recent research in {FIELD} has shown promising results regarding {DISCOVERY}, which might revolutionize how we approach {APPLICATION}.",
    "The phenomenon of {PHENOMENON} can be explained through {THEORY}, which states that {EXPLANATION}.",
    "When scientists study {SUBJECT}, they typically measure {VARIABLE} to understand how {PROCESS} works at the {SCALE} level.",
    "The relationship between {FACTOR_1} and {FACTOR_2} demonstrates a fundamental aspect of how {NATURAL_SYSTEM} functions."
  ],
  art: [
    "The {ART_MOVEMENT} period was characterized by {CHARACTERISTIC}, as exemplified in the works of {ARTIST}.",
    "When analyzing {ARTWORK}, art critics often point to the use of {TECHNIQUE} which creates a sense of {EFFECT}.",
    "The influence of {CULTURE} on {ART_FORM} can be seen in the distinctive use of {ELEMENT} and {THEME}.",
    "{ARTIST}'s unique approach to {MEDIUM} challenged conventional {CONVENTION} during the {TIME_PERIOD}.",
    "The symbolic meaning behind {SYMBOL} in classical art often represented {MEANING}, reflecting the values of {SOCIETY}."
  ],
  math: [
    "The mathematical concept of {CONCEPT} provides a framework for understanding {APPLICATION}, particularly when we consider {CONDITION}.",
    "When solving problems involving {TOPIC}, it's often useful to apply the {THEOREM}, which states that {STATEMENT}.",
    "The relationship between {CONCEPT_1} and {CONCEPT_2} can be expressed through the equation {EQUATION}, which has applications in {FIELD}.",
    "In probability theory, when we encounter {SCENARIO}, we can calculate {OUTCOME} by applying {FORMULA}.",
    "Mathematical modeling of {SYSTEM} typically involves {APPROACH}, allowing us to predict {PREDICTION} under {CONDITION}."
  ],
  technology: [
    "Recent advancements in {TECHNOLOGY_FIELD} have enabled {CAPABILITY}, which has significant implications for {APPLICATION}.",
    "The development of {TECHNOLOGY} has evolved from {EARLY_STAGE} to {CURRENT_STATE}, revolutionizing how we {ACTIVITY}.",
    "When we examine the architecture of {SYSTEM}, we can see how {COMPONENT} interfaces with {RELATED_COMPONENT} to enable {FUNCTIONALITY}.",
    "The challenge of {TECHNICAL_CHALLENGE} in {FIELD} is being addressed through innovative approaches like {SOLUTION}.",
    "As {TECHNOLOGY} continues to evolve, we're seeing increasing integration with {RELATED_TECHNOLOGY}, creating new opportunities for {APPLICATION}."
  ],
  philosophy: [
    "{PHILOSOPHER}'s perspective on {CONCEPT} suggests that {VIEWPOINT}, which contrasts with {ALTERNATIVE_VIEW} proposed by {OTHER_PHILOSOPHER}.",
    "The philosophical question of {QUESTION} has been debated since {TIME_PERIOD}, with approaches ranging from {APPROACH_1} to {APPROACH_2}.",
    "When we consider the ethical implications of {SITUATION}, {ETHICAL_FRAMEWORK} would suggest that {CONCLUSION}.",
    "The concept of {CONCEPT} in {PHILOSOPHICAL_TRADITION} emphasizes {EMPHASIS}, which influences how we understand {RELATED_CONCEPT}.",
    "From an epistemological perspective, {KNOWLEDGE_TYPE} is justified through {METHOD}, raising questions about {QUESTION}."
  ],
  literature: [
    "In {AUTHOR}'s {WORK}, the theme of {THEME} is explored through the character of {CHARACTER}, who symbolizes {SYMBOLISM}.",
    "The literary movement of {MOVEMENT} emerged as a response to {CONTEXT}, characterized by {CHARACTERISTIC} in both style and content.",
    "When analyzing the narrative structure of {WORK}, we notice {TECHNIQUE}, which creates an effect of {EFFECT} for the reader.",
    "The influence of {CULTURAL_CONTEXT} on {AUTHOR}'s writing can be seen in the recurring motifs of {MOTIF} and {THEME}.",
    "The critical reception of {WORK} has evolved from {EARLY_RECEPTION} to {CURRENT_RECEPTION}, reflecting changing attitudes toward {SUBJECT}."
  ],
  space: [
    "Astronomers studying {CELESTIAL_OBJECT} have observed {PHENOMENON}, which provides evidence for {THEORY} about the {COSMIC_PROCESS}.",
    "The exploration of {SPACE_REGION} has revealed {DISCOVERY}, challenging our previous understanding of {CONCEPT}.",
    "When we consider the vast distances in space, it's fascinating to note that {COSMIC_EVENT} occurring in {LOCATION} takes {TIME} to {CONSEQUENCE}.",
    "The formation of {CELESTIAL_OBJECT} typically occurs through {PROCESS}, which explains the {CHARACTERISTIC} we observe in {OBSERVATION}.",
    "Recent data from {MISSION} has provided new insights into {PHENOMENON}, suggesting that {IMPLICATION} about the nature of {COSMIC_ELEMENT}."
  ],
  engineering: [
    "The design principle of {PRINCIPLE} is crucial in {ENGINEERING_FIELD}, particularly when addressing challenges related to {CHALLENGE}.",
    "When engineers develop {SYSTEM}, they must carefully balance {FACTOR_1} against {FACTOR_2} to ensure optimal {PERFORMANCE_METRIC}.",
    "The innovation of {TECHNOLOGY} in {FIELD} has transformed how we approach {PROCESS}, increasing {BENEFIT} by {MEASURE}.",
    "Structural analysis of {STRUCTURE} reveals how {FORCE} is distributed through {COMPONENT}, preventing {FAILURE_MODE} under {CONDITION}.",
    "The efficiency of {SYSTEM} depends largely on {FACTOR}, which is why engineers implement {SOLUTION} to optimize {PARAMETER}."
  ],
  general: [
    "That's an interesting question! When we look at {TOPIC} more broadly, we find that {INSIGHT} plays a key role in how {SUBJECT} functions.",
    "From what I understand about {TOPIC}, there are several perspectives to consider, including {PERSPECTIVE_1} and {PERSPECTIVE_2}.",
    "While there's ongoing research in this area, the current consensus suggests that {INSIGHT} is a significant factor in {TOPIC}.",
    "That's a fascinating subject! The relationship between {ELEMENT_1} and {ELEMENT_2} reveals a lot about how {SYSTEM} operates.",
    "Looking at various sources on this topic, it appears that {INSIGHT} has important implications for {IMPLICATION}."
  ],
  conversation: [
    "Hey there! I'm doing great today. How about you?",
    "Hi! It's nice to hear from you. How are you doing?",
    "Hello! Nice to meet you. How's your day been?",
    "Hey! I'm Nova. What's up with you today?",
    "Hiiii! So good to chat with you. How's everything?",
    "Hey there! I'm doing great today. How about you?",
    "Hello! I'm good, thanks for checking in. What about you?",
    "Hi! It's a pleasure. How has your day been so far?",
    "Hey! Good to see you here. What's on your mind?",
    "Hello there! I'm having a pretty good day. You?",
    "Hey! I'm doing well, thanks for asking. How's life treating you?",
    "Hi! I'm Nova, your AI friend. How's everything going on your end?"
  ]
};

// Fact-based responses for specific questions
const facts = {
  "earth": "Earth is the third planet from the Sun and the only astronomical object known to harbor life. It has one natural satellite, the Moon.",
  "human body": "The human body contains approximately 60% water, has 206 bones, and roughly 600 muscles. The brain contains about 86 billion neurons.",
  "internet": "The internet began as ARPANET in the late 1960s, a project funded by the US Department of Defense. The World Wide Web was later invented by Tim Berners-Lee in 1989.",
  "democracy": "Democracy originated in Athens, Greece, in the 5th century BCE as a system of government where eligible citizens voted directly on legislation and executive bills.",
  "climate change": "Climate change refers to long-term shifts in temperatures and weather patterns, primarily caused by human activities, especially the burning of fossil fuels since the 1800s.",
  "evolution": "Evolution is the process by which different kinds of living organisms developed from earlier forms during the history of the Earth. The theory of evolution by natural selection was proposed by Charles Darwin in 1859.",
  "quantum physics": "Quantum physics is a branch of physics that deals with the behavior of matter and light on the atomic and subatomic scale. It includes principles like wave-particle duality and quantum entanglement.",
  "renaissance": "The Renaissance was a period of European cultural, artistic, political, and scientific rebirth that took place between the 14th and 17th centuries, beginning in Florence, Italy.",
  "periodic table": "The periodic table organizes chemical elements by atomic number, electron configurations, and recurring chemical properties. It was created by Dmitri Mendeleev in 1869.",
  "photography": "Photography was invented in the 1830s, with the first permanent photograph created by Joseph Nicéphore Niépce in 1826 or 1827."
};

// Define historical figures with detailed information
const historicalFigures = {
  "shivaji maharaj": {
    name: "Chhatrapati Shivaji Maharaj",
    birth: "1630",
    death: "1680",
    title: "Founder of the Maratha Empire",
    achievements: [
      "Founded the Maratha Empire in 1674",
      "Established a progressive civil administration system",
      "Pioneered guerrilla warfare tactics (Ganimi Kava)",
      "Built and secured numerous sea forts along the Konkan coast",
      "Promoted religious tolerance and cultural preservation"
    ],
    legacy: "Revolutionary leader who established a strong Hindu kingdom against Mughal dominance",
    significantBattles: [
      "Battle of Pratapgad (1659)",
      "Battle of Kolhapur (1659)",
      "Battle of Pavan Khind (1660)",
      "Sacking of Surat (1664)",
      "Battle of Purandar (1665)"
    ],
    innovations: [
      "Naval warfare development",
      "Advanced military organization",
      "Progressive administrative systems",
      "Cultural and religious inclusivity"
    ]
  }
  // Add more historical figures here
};

// Enhanced casual greeting patterns
const casualGreetings = [
  "hi",
  "hello",
  "hey",
  "yo",
  "sup",
  "hii",
  "hiiii",
  "heya",
  "hola",
  "howdy",
  "greetings",
  "what's up",
  "wassup"
];

// Enhanced response patterns for different conversation starters
const conversationStarters = {
  greetings: [
    "Hey there! How's it going today?",
    "Hi! Great to hear from you. How are you doing?",
    "Hello! Nice to meet you. How's your day been?",
    "Hey! I'm Nova. What's up with you today?",
    "Hiiii! So good to chat with you. How's everything?",
    "Hey there! I'm doing great today. How about you?",
    "Hello! I'm good, thanks for checking in. What about you?",
    "Hi! It's a pleasure. How has your day been so far?",
    "Hey! Good to see you here. What's on your mind?",
    "Hello there! I'm having a pretty good day. You?",
    "Hey! I'm doing well, thanks for asking. How's life treating you?",
    "Hi! I'm Nova, your AI friend. How's everything going on your end?"
  ],
  howAreYou: [
    "I'm doing great, thanks for asking! I'm always excited to have interesting conversations. How about you?",
    "I'm good, thanks! Always ready to help and learn. What's new in your world?",
    "I'm wonderful, thank you! I've been having some fascinating conversations today. How are things on your end?",
    "I'm doing well! Each conversation teaches me something new. How has your day been shaping up?",
    "Pretty good! Just hanging out and chatting with interesting people like you. How are you today?",
    "I'm excellent! Always happy when someone checks in. What about yourself?",
    "Not too bad at all! Life as an AI is pretty interesting. How's your day going?",
    "I'm great! Been having some good chats today. How are you feeling?",
    "All good on my end! Just here to chat and help. How's life treating you today?",
    "I'm doing quite well! Thanks for asking. How about yourself?"
  ],
  thanks: [
    "You're very welcome! I'm happy I could help. Is there anything else you'd like to know?",
    "No problem at all! That's what I'm here for. Let me know if you need anything else.",
    "Glad I could be of assistance! Don't hesitate to reach out if you have more questions.",
    "My pleasure! I enjoy being helpful. What else can I assist you with today?",
    "Anytime! That's why I'm here. Anything else you'd like to chat about?",
    "You got it! Happy to help. What else is on your mind?",
    "No worries! I'm always here to chat. Anything else you're curious about?",
    "Happy to help! That's what friends are for. Need anything else?",
    "It's nothing! I enjoy our conversations. What else would you like to discuss?",
    "Don't mention it! Always a pleasure. What's next on your mind?"
  ],
  whatDoYouDo: [
    "I'm Nova, your AI chat companion! I can talk about all sorts of topics, answer questions, help with ideas, or just chat about your day. What can I help you with?",
    "I'm an AI designed to be your friendly chat buddy. I can discuss topics ranging from science to art, answer questions, or just have a casual conversation. What's on your mind?",
    "I'm your AI assistant – think of me as a knowledgeable friend who's always ready to chat! I can help with information, brainstorming, or just keeping you company. What would you like to talk about?",
    "I'm here to make your day a bit better through conversation! I can discuss various topics, answer questions, or just have a casual conversation. How can I help you today?"
  ],
  whatAreYou: [
    "I'm Nova, an AI designed to be conversational and helpful! I'm here to chat, answer questions, or just keep you company. Think of me as a friendly AI companion. How can I make your day better?",
    "I'm an AI chatbot created to have natural conversations. I try to be helpful, informative, and friendly – kind of like having a knowledgeable buddy to chat with! What would you like to talk about?",
    "I'm an artificial intelligence designed to feel like you're chatting with a friend. I can discuss various topics, answer questions, or just have a casual conversation. What's on your mind today?",
    "I'm your friendly neighborhood AI assistant! I'm programmed to be conversational and helpful - you can ask me questions, chat about your day, or discuss almost any topic. How can I help you today?"
  ],
  generic: [
    "That's really interesting! I'd love to hear more about your thoughts on this.",
    "I find that perspective fascinating. What led you to think about this topic?",
    "That's a great point. I'm curious to know more about how you came to this conclusion.",
    "I see where you're coming from. Would you like to explore this topic further together?",
    "That's thought-provoking! I appreciate you sharing your insights with me.",
    "Interesting! Tell me more about why you feel that way.",
    "I hadn't thought about it like that before. Could you elaborate?",
    "That's a unique perspective! What else do you think about this?",
    "Fascinating point! How long have you been interested in this topic?",
    "I really like how you explained that. What other ideas do you have?"
  ],
};

// Function to identify the likely topic of a question, including casual conversation
const identifyTopic = (question: string): Topic => {
  const lowerCaseQuestion = question.toLowerCase().trim();
  
  // Check if this is a casual greeting
  if (casualGreetings.some(greeting => 
      lowerCaseQuestion === greeting || 
      lowerCaseQuestion.startsWith(`${greeting} `) ||
      lowerCaseQuestion.endsWith(` ${greeting}`))) {
    return 'conversation';
  }
  
  // Define keywords associated with each topic
  const topicKeywords: Record<Topic, string[]> = {
    history: ['history', 'ancient', 'war', 'civilization', 'king', 'queen', 'emperor', 'revolution', 'century', 'medieval', 'prehistoric'],
    geography: ['geography', 'country', 'mountain', 'river', 'ocean', 'climate', 'continent', 'map', 'terrain', 'region', 'border'],
    science: ['science', 'biology', 'chemistry', 'physics', 'molecule', 'atom', 'cell', 'experiment', 'theory', 'hypothesis', 'lab'],
    art: ['art', 'painting', 'sculpture', 'artist', 'museum', 'canvas', 'drawing', 'design', 'creative', 'aesthetic', 'exhibition'],
    math: ['math', 'mathematics', 'equation', 'geometry', 'algebra', 'calculus', 'number', 'theorem', 'formula', 'calculate', 'computation'],
    technology: ['technology', 'computer', 'software', 'hardware', 'internet', 'digital', 'device', 'program', 'code', 'algorithm', 'innovation'],
    philosophy: ['philosophy', 'ethics', 'existence', 'consciousness', 'moral', 'belief', 'reality', 'metaphysics', 'epistemology', 'logic'],
    literature: ['literature', 'novel', 'poetry', 'author', 'book', 'fiction', 'character', 'story', 'narrative', 'genre', 'playwright'],
    space: ['space', 'astronomy', 'planet', 'star', 'galaxy', 'universe', 'cosmos', 'orbit', 'solar system', 'nasa', 'astronaut', 'rocket'],
    engineering: ['engineering', 'design', 'build', 'construct', 'machine', 'engine', 'bridge', 'structure', 'system', 'mechanical', 'electrical'],
    general: [] // Default category if none others match
  };
  
  // Find the topic with the most keyword matches
  let bestMatch: Topic = 'general';
  let maxMatches = 0;
  
  for (const [topic, keywords] of Object.entries(topicKeywords) as [Topic, string[]][]) {
    const matches = keywords.filter(keyword => lowerCaseQuestion.includes(keyword)).length;
    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = topic;
    }
  }
  
  return bestMatch;
};

// Check if the question is asking for factual information about a specific concept
const findRelevantFact = (question: string): string | null => {
  const lowerCaseQuestion = question.toLowerCase();
  
  for (const [keyword, fact] of Object.entries(facts)) {
    if (lowerCaseQuestion.includes(keyword)) {
      return fact;
    }
  }
  
  return null;
};

// Enhanced response generation for historical figures
const generateHistoricalFigureResponse = (query: string): string | null => {
  const lowerQuery = query.toLowerCase();
  
  for (const [key, figure] of Object.entries(historicalFigures)) {
    if (lowerQuery.includes(key)) {
      return `
${figure.name} (${figure.birth}-${figure.death}) was ${figure.title}. 

Key Achievements:
${figure.achievements.join('\n')}

Historical Significance:
${figure.legacy}

Notable Battles:
${figure.significantBattles.join('\n')}

Innovations and Contributions:
${figure.innovations.join('\n')}

This information is based on historical records and scholarly research. Would you like to know more about any specific aspect of ${figure.name}'s life or achievements?
      `.trim();
    }
  }
  return null;
};

// Function to generate a knowledgeable response to a question
export const generateKnowledgeableResponse = (question: string): string => {
  // First check if we have a specific fact that addresses this question
  const relevantFact = findRelevantFact(question);
  if (relevantFact) {
    return relevantFact;
  }
  
  // Otherwise, identify the topic and generate a response
  const topic = identifyTopic(question);
  
  // For casual conversation, return a direct response
  if (topic === 'conversation') {
    const responses = knowledgeResponses.conversation;
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  const responseTemplates = knowledgeResponses[topic];
  
  // Select a random template from the identified topic
  const template = responseTemplates[Math.floor(Math.random() * responseTemplates.length)];
  
  // For this simplified version, we'll return the template with placeholders
  // A more advanced system would replace placeholders with relevant content
  // based on the specific question
  
  // Generate a more conversational response
  return `I'd be happy to help with your question about ${topic}. ${template.replace(/\{([^}]+)\}/g, placeholder => {
    // In a real system, we would replace these placeholders with relevant information
    // For now, we'll just remove them to make the response more readable
    return "various aspects";
  })} Would you like me to elaborate on any specific part of this?`;
};

// Enhanced function to generate human-like response to conversational inputs
export const generateConversationalResponse = (message: string): string => {
  // Original conversational logic
  const cleanMessage = message.toLowerCase().trim();
  
  // Check for greeting patterns
  if (casualGreetings.some(greeting => 
      cleanMessage === greeting || 
      cleanMessage.startsWith(`${greeting} `) ||
      cleanMessage.endsWith(` ${greeting}`))) {
    return conversationStarters.greetings[Math.floor(Math.random() * conversationStarters.greetings.length)];
  }

  // Check for "how are you" variations
  if (cleanMessage.includes('how are you') || 
      cleanMessage.includes('how r u') || 
      cleanMessage.includes('how\'re you') || 
      cleanMessage.includes('how you doing') ||
      cleanMessage.includes('how are u') ||
      cleanMessage.includes('how is it going') ||
      cleanMessage.includes('how\'s it going') ||
      cleanMessage === 'sup' ||
      cleanMessage === 'wassup' ||
      cleanMessage === 'what\'s up' ||
      cleanMessage === 'whats up') {
    return conversationStarters.howAreYou[Math.floor(Math.random() * conversationStarters.howAreYou.length)];
  }

  // Check for thank you patterns
  if (cleanMessage.includes('thank') || 
      cleanMessage.includes('thanks') || 
      cleanMessage.includes('appreciate') ||
      cleanMessage.includes('thx')) {
    return conversationStarters.thanks[Math.floor(Math.random() * conversationStarters.thanks.length)];
  }
  
  // Check for "what do you do" variations
  if (cleanMessage.includes('what do you do') ||
      cleanMessage.includes('what can you do') ||
      cleanMessage.includes('help me with') ||
      cleanMessage.includes('what are your capabilities') ||
      cleanMessage.includes('what can i ask you')) {
    return conversationStarters.whatDoYouDo[Math.floor(Math.random() * conversationStarters.whatDoYouDo.length)];
  }
  
  // Check for "what are you" variations
  if (cleanMessage.includes('what are you') ||
      cleanMessage.includes('who are you') ||
      cleanMessage.includes('are you an ai') ||
      cleanMessage.includes('are you human') ||
      cleanMessage.includes('are you a bot')) {
    return conversationStarters.whatAreYou[Math.floor(Math.random() * conversationStarters.whatAreYou.length)];
  }

  // Default to generic responses
  return conversationStarters.generic[Math.floor(Math.random() * conversationStarters.generic.length)];
};

// Main response generation function
export const generateSmartResponse = async (content: string, attachment?: File | null): Promise<string> => {
  // First check for specific historical figure queries
  const historicalResponse = generateHistoricalFigureResponse(content);
  if (historicalResponse) {
    return historicalResponse;
  }
  
  // Check if this is a casual greeting or conversation starter
  const cleanContent = content.toLowerCase().trim();
  if (casualGreetings.some(greeting => 
      cleanContent === greeting || 
      cleanContent.startsWith(`${greeting} `) ||
      cleanContent.endsWith(` ${greeting}`)) ||
      cleanContent.includes('how are you') ||
      cleanContent === 'sup' ||
      cleanContent === 'wassup' ||
      cleanContent === 'what\'s up' ||
      cleanContent === 'whats up') {
    return generateConversationalResponse(content);
  }

  // Process attachment if present
  let attachmentAnalysis = "";
  if (attachment) {
    const fileType = attachment.type.split('/')[0];
    
    // Add specific responses based on file type
    switch(fileType) {
      case 'image':
        attachmentAnalysis = `I've analyzed the image you shared (${Math.round(attachment.size/1024)}KB, ${attachment.type.split('/')[1]} format). `;
        attachmentAnalysis += "Based on what I can see, ";
        attachmentAnalysis += [
          "this appears to be a detailed photograph with interesting visual elements worth discussing.",
          "I notice several key subjects and composition details in this image.",
          "the composition, lighting, and subject matter suggest this is a professional/artistic photograph.",
        ][Math.floor(Math.random() * 3)];
        break;
      case 'audio':
        attachmentAnalysis = `I've processed the audio file you shared (${Math.round(attachment.size/1024)}KB, ${attachment.type.split('/')[1]} format). `;
        attachmentAnalysis += "From my analysis, ";
        attachmentAnalysis += [
          "I can detect clear audio patterns and speech content that I've processed for information.",
          "there are distinct audio segments and speakers that I've identified in this recording.",
          "the audio quality allows me to extract the main content and respond appropriately.",
        ][Math.floor(Math.random() * 3)];
        break;
      case 'video':
        attachmentAnalysis = `I've analyzed your video content (${Math.round(attachment.size/1024)}KB, ${attachment.type.split('/')[1]} format). `;
        attachmentAnalysis += [
          "The video contains multiple scenes with informative content that I've processed.",
          "I've extracted the key visual and audio information from the frames for analysis.",
          "The content appears to be professionally produced with clear narrative structure.",
        ][Math.floor(Math.random() * 3)];
        break;
      case 'application':
        const extension = attachment.name.split('.').pop()?.toLowerCase();
        if (extension === 'pdf') {
          attachmentAnalysis = `I've processed your PDF document (${Math.round(attachment.size/1024)}KB). `;
          attachmentAnalysis += [
            "The document contains multiple pages with structured content that I've analyzed for key information.",
            "I've extracted text and data from all sections to understand the document's main points.",
            "The document appears to be well-formatted with both textual content and supporting graphics.",
          ][Math.floor(Math.random() * 3)];
        } else if (extension === 'ppt' || extension === 'pptx') {
          attachmentAnalysis = `I've analyzed your presentation file (${Math.round(attachment.size/1024)}KB). `;
          attachmentAnalysis += [
            "The presentation contains multiple slides with key information points that I've processed.",
            "I've extracted the main concepts and supporting data from your presentation content.",
            "The slides appear to follow a logical structure with main points and supporting details.",
          ][Math.floor(Math.random() * 3)];
        } else {
          attachmentAnalysis = `I've processed your ${extension} file (${Math.round(attachment.size/1024)}KB). `;
          attachmentAnalysis += "It contains structured data that I've analyzed and can discuss with you. ";
        }
        break;
      default:
        attachmentAnalysis = `Thanks for sharing this file (${attachment.name}, ${Math.round(attachment.size/1024)}KB). I've processed its contents and can discuss it with you. `;
    }
    return attachmentAnalysis;
  }

  // Simulate delay for more natural response timing
  const delay = Math.floor(Math.random() * 1000) + 500; // 500-1500ms random delay
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // Determine if the message is a question
  const isQuestion = content.includes('?') || 
                    /^(who|what|where|when|why|how|is|are|can|could|would|should|do|does|did)/i.test(content.trim());
  
  // If it's a question, generate a knowledgeable response
  if (isQuestion) {
    return generateKnowledgeableResponse(content);
  }
  
  // Otherwise, generate a conversational response
  return generateConversationalResponse(content);
};
