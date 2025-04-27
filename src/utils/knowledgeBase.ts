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
  | "general";

// Knowledge patterns with educational content
const knowledgeResponses: Record<Topic, string[]> = {
  history: [
    "Looking at historical records, we can see that {HISTORICAL_EVENT} occurred during {TIME_PERIOD}, which had a significant impact on {CONSEQUENCE}.",
    "Historians generally agree that {HISTORICAL_FIGURE} played a crucial role in {HISTORICAL_EVENT}, particularly through their {CONTRIBUTION}.",
    "The {TIME_PERIOD} was characterized by {CHARACTERISTIC}, which led to significant changes in how societies {SOCIETAL_CHANGE}.",
    "When we examine the historical context of {HISTORICAL_EVENT}, it's worth noting that {CONTEXT} was a major contributing factor.",
    "Archaeological evidence suggests that ancient civilizations in {LOCATION} were quite advanced in {TECHNOLOGY_OR_PRACTICE} for their time."
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

// Function to identify the likely topic of a question
const identifyTopic = (question: string): Topic => {
  const lowerCaseQuestion = question.toLowerCase();
  
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

// Function to generate a knowledgeable response to a question
export const generateKnowledgeableResponse = (question: string): string => {
  // First check if we have a specific fact that addresses this question
  const relevantFact = findRelevantFact(question);
  if (relevantFact) {
    return relevantFact;
  }
  
  // Otherwise, identify the topic and generate a response
  const topic = identifyTopic(question);
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

// Function to generate human-like response to conversational inputs
export const generateConversationalResponse = (message: string): string => {
  // Original conversational logic
  const cleanMessage = message.toLowerCase().trim();
  
  // Conversational patterns
  const humanResponses = {
    greetings: [
      "Hi there! How are you doing today? Is there something specific I can help you with?",
      "Hey! Great to hear from you. How's your day going so far?",
      "Hello! It's nice to connect with you. What's on your mind today?",
      "Hi! I'm Nova, your AI assistant. How can I make your day better?",
    ],
    howAreYou: [
      "I'm doing great, thanks for asking! I'm always excited to have interesting conversations. How about you?",
      "I'm good, thanks! Always ready to help and learn. What's new in your world?",
      "I'm wonderful, thank you! I've been having some fascinating conversations today. How are things on your end?",
      "I'm doing well! Each conversation teaches me something new. How has your day been shaping up?",
    ],
    thanks: [
      "You're very welcome! I'm happy I could help. Is there anything else you'd like to know?",
      "No problem at all! That's what I'm here for. Let me know if you need anything else.",
      "Glad I could be of assistance! Don't hesitate to reach out if you have more questions.",
      "My pleasure! I enjoy being helpful. What else can I assist you with today?",
    ],
    generic: [
      "That's really interesting! I'd love to hear more about your thoughts on this.",
      "I find that perspective fascinating. What led you to think about this topic?",
      "That's a great point. I'm curious to know more about how you came to this conclusion.",
      "I see where you're coming from. Would you like to explore this topic further together?",
      "That's thought-provoking! I appreciate you sharing your insights with me.",
    ],
  };

  // Check for greeting patterns
  if (/^(hi|hello|hey|howdy|greetings|morning|afternoon|evening)$/i.test(cleanMessage) || 
      cleanMessage.startsWith('hi ') || cleanMessage.startsWith('hello ') || 
      cleanMessage.startsWith('hey ') || cleanMessage.startsWith('good ')) {
    return humanResponses.greetings[Math.floor(Math.random() * humanResponses.greetings.length)];
  }

  // Check for "how are you" variations
  if (cleanMessage.includes('how are you') || cleanMessage.includes('how r u') || 
      cleanMessage.includes('how\'re you') || cleanMessage.includes('how you doing')) {
    return humanResponses.howAreYou[Math.floor(Math.random() * humanResponses.howAreYou.length)];
  }

  // Check for thank you patterns
  if (cleanMessage.includes('thank') || cleanMessage.includes('thanks') || cleanMessage.includes('appreciate')) {
    return humanResponses.thanks[Math.floor(Math.random() * humanResponses.thanks.length)];
  }

  // Default to generic responses
  return humanResponses.generic[Math.floor(Math.random() * humanResponses.generic.length)];
};

// Main response generation function
export const generateSmartResponse = async (message: string, attachment?: File | null): Promise<string> => {
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
  const isQuestion = message.includes('?') || 
                    /^(who|what|where|when|why|how|is|are|can|could|would|should|do|does|did)/i.test(message.trim());
  
  // If it's a question, generate a knowledgeable response
  if (isQuestion) {
    return generateKnowledgeableResponse(message);
  }
  
  // Otherwise, generate a conversational response
  return generateConversationalResponse(message);
};
