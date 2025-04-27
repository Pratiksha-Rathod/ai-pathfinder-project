
import { useRef, useEffect, useState } from "react";
import { ChatMessage, Message, MessageRole } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@/components/ui/card";
import ChatHistory from "./ChatHistory";
import { FileUploadPreview } from "./FileUploadPreview";

// Improved, more natural responses
const generateResponse = async (message: string, attachment?: File | null): Promise<string> => {
  // Simulate an API call delay with variable timing for more natural feel
  const delay = Math.floor(Math.random() * 1000) + 500; // 500-1500ms random delay
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // Process attachment if present
  let attachmentAnalysis = "";
  if (attachment) {
    const fileType = attachment.type.split('/')[0];
    
    // Add specific responses based on file type
    switch(fileType) {
      case 'image':
        attachmentAnalysis = `I can see the image you shared. It appears to be ${attachment.type.split('/')[1]} format, ${Math.round(attachment.size/1024)}KB in size. `;
        attachmentAnalysis += "Based on what I can analyze, ";
        attachmentAnalysis += [
          "this looks like an interesting photo! I can see the details in the composition.",
          "this image has some compelling visual elements worth noting.",
          "I notice the color patterns and composition in this image.",
        ][Math.floor(Math.random() * 3)];
        break;
      case 'audio':
        attachmentAnalysis = `I've processed the audio file you shared (${Math.round(attachment.size/1024)}KB, ${attachment.type.split('/')[1]} format). `;
        attachmentAnalysis += "Based on my analysis, ";
        attachmentAnalysis += [
          "the audio quality is good and I can detect clear speech patterns.",
          "there are several distinct audio segments that I've processed.",
          "I can identify the main speaker and some background elements.",
        ][Math.floor(Math.random() * 3)];
        break;
      case 'video':
        attachmentAnalysis = `I've analyzed your video file (${Math.round(attachment.size/1024)}KB, ${attachment.type.split('/')[1]} format). `;
        attachmentAnalysis += [
          "The video contains multiple scenes with interesting transitions.",
          "I can detect several people and objects in the frames I analyzed.",
          "The lighting and composition suggest this was professionally shot.",
        ][Math.floor(Math.random() * 3)];
        break;
      case 'application':
        const extension = attachment.name.split('.').pop()?.toLowerCase();
        if (extension === 'pdf') {
          attachmentAnalysis = `I've processed your PDF document (${Math.round(attachment.size/1024)}KB). `;
          attachmentAnalysis += [
            "The document appears to be well-structured with multiple sections.",
            "I can see this contains several pages with both text and graphic elements.",
            "This looks like a detailed document with various formatting styles.",
          ][Math.floor(Math.random() * 3)];
        } else if (extension === 'ppt' || extension === 'pptx') {
          attachmentAnalysis = `I've analyzed your presentation file (${Math.round(attachment.size/1024)}KB). `;
          attachmentAnalysis += [
            "The presentation has a consistent design theme across slides.",
            "I noticed several charts and visual elements that enhance the content.",
            "The structure includes a title slide, content slides, and a conclusion.",
          ][Math.floor(Math.random() * 3)];
        } else {
          attachmentAnalysis = `I've processed your ${extension} file (${Math.round(attachment.size/1024)}KB). `;
          attachmentAnalysis += "It contains structured data that I've analyzed. ";
        }
        break;
      default:
        attachmentAnalysis = `Thanks for sharing this file (${attachment.name}, ${Math.round(attachment.size/1024)}KB). I've processed its contents. `;
    }
    return attachmentAnalysis;
  }
  
  // Enhanced conversational response patterns
  const humanResponses = {
    greetings: [
      "Hi there! How are you doing today? Is there anything specific I can help you with?",
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
    questions: [
      "That's a great question! Let me think about that for a moment...",
      "I'm glad you asked about that. Here's what I know...",
      "Interesting question! From my understanding...",
      "That's something I've thought about too. Based on what I know...",
    ]
  };

  // Analyze message content to determine response type
  const cleanMessage = message.toLowerCase().trim();
  
  // Check for question patterns
  if (cleanMessage.endsWith('?') || cleanMessage.includes('how') || cleanMessage.includes('what') || 
      cleanMessage.includes('why') || cleanMessage.includes('when') || cleanMessage.includes('where')) {
    return humanResponses.questions[Math.floor(Math.random() * humanResponses.questions.length)];
  }
  
  // Check for thank you patterns
  if (cleanMessage.includes('thank') || cleanMessage.includes('thanks') || cleanMessage.includes('appreciate')) {
    return humanResponses.thanks[Math.floor(Math.random() * humanResponses.thanks.length)];
  }
  
  // Check for initial greetings
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

  // Default to generic engaging responses
  return humanResponses.generic[Math.floor(Math.random() * humanResponses.generic.length)];
};

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      role: "assistant",
      content: "Hello! I'm Nova, your AI assistant. I can help answer questions, have a conversation, or analyze files you share. How can I assist you today?",
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
      const typingDelay = Math.min(1500, Math.max(800, content.length * 10));
      await new Promise(resolve => setTimeout(resolve, typingDelay));
      
      // Get AI response
      const responseContent = await generateResponse(content, attachment);
      
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
      
      // Add error message
      const errorMessage: Message = {
        id: uuidv4(),
        role: "assistant",
        content: "I'm sorry, I encountered an issue processing your request. Could we try again?",
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
          <p className="text-sm text-purple-100">Your AI Companion</p>
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
