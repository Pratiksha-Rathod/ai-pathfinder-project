
import { useRef, useEffect, useState } from "react";
import { ChatMessage, Message, MessageRole } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@/components/ui/card";
import ChatHistory from "./ChatHistory";
import { FileUploadPreview } from "./FileUploadPreview";
import { generateSmartResponse } from "@/utils/knowledgeBase";

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      role: "assistant",
      content: "Hey there! I'm Nova, your friendly AI assistant. Think of me as a helpful friend sitting right across from you. I can chat about history, science, arts, math, and tons of other stuff. Got files you want me to look at? Just share them and I'll help you make sense of them. So, what's on your mind today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAttachment, setCurrentAttachment] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string, attachment?: File | null) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      role: "user",
      content: content,
      timestamp: new Date(),
      attachment: attachment || undefined
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Generate typing indicator delay based on message length
      // Make the delay more human-like with some randomness
      const baseDelay = Math.min(1500, Math.max(800, content.length * 10));
      const randomFactor = Math.random() * 0.4 + 0.8; // Between 0.8 and 1.2
      const typingDelay = Math.round(baseDelay * randomFactor);
      
      await new Promise(resolve => setTimeout(resolve, typingDelay));
      
      // Get AI response using our enhanced knowledge system
      let responseContent = await generateSmartResponse(content, attachment);
      
      const aiResponse: Message = {
        id: uuidv4(),
        role: "assistant",
        content: responseContent,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setCurrentAttachment(null);
    } catch (error) {
      console.error("Error generating response:", error);
      
      // Add error message with a more human tone
      const errorMessage: Message = {
        id: uuidv4(),
        role: "assistant",
        content: "Oops! Something went wrong on my end. Could we try that one more time?",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAttachment = (file: File) => {
    setCurrentAttachment(file);
  };

  return (
    <div className="flex h-[80vh] md:h-[85vh] max-w-6xl mx-auto">
      <Card className="flex flex-1 flex-col overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg rounded-2xl">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-white">
          <h2 className="text-2xl font-bold tracking-tight">Nova Chat</h2>
          <p className="text-sm text-purple-100">Your AI Friend</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900 space-y-6">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex items-center gap-3 text-purple-500 ml-2">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-purple-500 animate-bounce"></div>
                <div className="h-2 w-2 rounded-full bg-purple-500 animate-bounce animation-delay-200"></div>
                <div className="h-2 w-2 rounded-full bg-purple-500 animate-bounce animation-delay-400"></div>
              </div>
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Nova is thinking...</span>
            </div>
          )}
          {currentAttachment && (
            <FileUploadPreview 
              file={currentAttachment} 
              onRemove={() => setCurrentAttachment(null)} 
            />
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <ChatInput 
            onSendMessage={handleSendMessage} 
            isLoading={isLoading}
            onAttachment={handleAttachment}
            currentAttachment={currentAttachment}
          />
        </div>
      </Card>
      
      <ChatHistory messages={messages} />
    </div>
  );
};
