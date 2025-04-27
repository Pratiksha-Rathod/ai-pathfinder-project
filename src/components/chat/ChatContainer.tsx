import { useRef, useEffect, useState } from "react";
import { ChatMessage, Message, MessageRole } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@/components/ui/card";
import ChatHistory from "./ChatHistory";

const generateResponse = async (message: string): Promise<string> => {
  // Simulate an API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const humanResponses = {
    greetings: [
      "Hi! How are you today?",
      "Hey there! How's it going?",
      "Hello! How are you doing?",
      "Hi! Nice to meet you! How's your day going?",
    ],
    howAreYou: [
      "I'm doing great, thanks for asking! How about you?",
      "I'm good, thanks! How has your day been so far?",
      "I'm wonderful, thank you! How are you feeling today?",
    ],
    generic: [
      "Oh, that's interesting! Tell me more about it.",
      "Really? I'd love to hear more about that!",
      "That sounds fascinating! Can you share more details?",
      "Interesting perspective! What made you think about this?",
    ]
  };

  // Clean and lowercase the message for matching
  const cleanMessage = message.toLowerCase().trim();

  // Check for initial greetings
  if (/^(hi|hello|hey|howdy)$/i.test(cleanMessage)) {
    return humanResponses.greetings[Math.floor(Math.random() * humanResponses.greetings.length)];
  }

  // Check for "how are you" variations
  if (cleanMessage.includes('how are you') || cleanMessage.includes('how r u')) {
    return humanResponses.howAreYou[Math.floor(Math.random() * humanResponses.howAreYou.length)];
  }

  // Default to generic engaging responses
  return humanResponses.generic[Math.floor(Math.random() * humanResponses.generic.length)];
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
    <div className="flex h-[80vh] md:h-[85vh] max-w-6xl mx-auto">
      <Card className="flex flex-1 flex-col overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg rounded-2xl">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Nova Chat</h2>
          <p className="text-sm text-purple-100">Your AI Companion</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900 space-y-6">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex items-center gap-3 text-purple-500 animate-pulse ml-2">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <div className="h-2 w-2 rounded-full bg-purple-500 animation-delay-200"></div>
              <div className="h-2 w-2 rounded-full bg-purple-500 animation-delay-400"></div>
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Nova is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </Card>
      
      <ChatHistory messages={messages} />
    </div>
  );
};
