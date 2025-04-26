import { useRef, useEffect, useState } from "react";
import { ChatMessage, Message, MessageRole } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@/components/ui/card";

const generateResponse = async (message: string): Promise<string> => {
  // Simulate an API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // More natural, conversational responses
  const conversations = {
    greetings: [
      "Hey there! How are you doing today?",
      "Hi! It's great to chat with you. What's on your mind?",
      "Hello! I'm all ears and ready to help you out."
    ],
    questions: [
      "That's a thought-provoking question! Let me break it down for you...",
      "Great question! Let me share some insights I have.",
      "Hmm, interesting point. Here's what I think about that..."
    ],
    generic: [
      "I totally get what you mean. Let me help you with that.",
      "I've been thinking about your request, and here's my take...",
      "You know, that reminds me of something important...",
      "Let me walk you through this step by step.",
      "Ah, I see exactly what you're getting at!"
    ]
  };

  // Clean and lowercase the message for easier matching
  const cleanMessage = message.toLowerCase().trim();

  // Check for greetings
  if (/^(hi|hello|hey|howdy)/.test(cleanMessage)) {
    return conversations.greetings[Math.floor(Math.random() * conversations.greetings.length)];
  }

  // Check for questions
  if (cleanMessage.includes('?')) {
    return conversations.questions[Math.floor(Math.random() * conversations.questions.length)] + 
           " " + 
           conversations.generic[Math.floor(Math.random() * conversations.generic.length)];
  }

  // Default conversational response
  return conversations.generic[Math.floor(Math.random() * conversations.generic.length)];
};

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      role: "user",
      content: content,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Get AI response
      const responseContent = await generateResponse(content);
      
      const aiResponse: Message = {
        id: uuidv4(),
        role: "assistant",
        content: responseContent,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error generating response:", error);
      
      // Add error message
      const errorMessage: Message = {
        id: uuidv4(),
        role: "assistant",
        content: "Sorry, I'm having trouble processing your request right now. Please try again later.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex flex-col h-[80vh] md:h-[85vh] max-w-4xl mx-auto overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg rounded-2xl">
      <div className="bg-gradient-to-r from-ai-light to-ai p-4 text-white">
        <h2 className="text-xl font-semibold">AI Assistant</h2>
        <p className="text-sm opacity-80">Powered by advanced AI technology</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-gray-500 animate-pulse-light ml-2">
            <div className="h-2 w-2 rounded-full bg-ai"></div>
            <div className="h-2 w-2 rounded-full bg-ai"></div>
            <div className="h-2 w-2 rounded-full bg-ai"></div>
            <span className="text-sm">AI is thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </Card>
  );
};
