
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export type MessageRole = "system" | "user" | "assistant";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  attachment?: File;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";
  
  const renderAttachment = () => {
    if (!message.attachment) return null;
    
    const fileType = message.attachment.type.split('/')[0];
    const fileURL = URL.createObjectURL(message.attachment);
    
    switch (fileType) {
      case 'image':
        return (
          <div className="mt-2 rounded-lg overflow-hidden">
            <img 
              src={fileURL} 
              alt="User uploaded image" 
              className="max-h-60 object-contain rounded-lg"
              onLoad={() => URL.revokeObjectURL(fileURL)}
            />
          </div>
        );
      case 'video':
        return (
          <div className="mt-2">
            <video 
              controls 
              className="max-h-60 rounded-lg" 
              onLoad={() => URL.revokeObjectURL(fileURL)}
            >
              <source src={fileURL} type={message.attachment.type} />
              Your browser does not support video playback.
            </video>
          </div>
        );
      case 'audio':
        return (
          <div className="mt-2">
            <audio 
              controls 
              className="w-full" 
              onLoad={() => URL.revokeObjectURL(fileURL)}
            >
              <source src={fileURL} type={message.attachment.type} />
              Your browser does not support audio playback.
            </audio>
          </div>
        );
      default:
        return (
          <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm truncate">
              {message.attachment.name} ({Math.round(message.attachment.size/1024)}KB)
            </span>
          </div>
        );
    }
  };

  // Add personality to assistant messages with more human-like conversational patterns
  const addPersonalTouch = (content: string) => {
    if (isUser) return content;

    // Insert conversational cues and humanizing touches
    let humanizedContent = content;
    
    // Add thinking pauses and conversational fillers
    if (!content.includes("...") && content.length > 30 && Math.random() > 0.7) {
      const sentences = content.split(/(?<=[.!?])\s+/);
      if (sentences.length > 1) {
        const insertPosition = Math.floor(sentences.length / 2);
        const fillers = [
          "Hmm, let me think about this... ",
          "Let's see... ",
          "Well, from what I know... ",
          "Interesting question... "
        ];
        const filler = fillers[Math.floor(Math.random() * fillers.length)];
        sentences.splice(insertPosition, 0, filler);
        humanizedContent = sentences.join(" ");
      }
    }
    
    // Add personal touches at the beginning for longer responses
    if (content.length > 100 && !content.startsWith("I")) {
      const personalStarters = [
        "I'd say that ",
        "From what I understand, ",
        "If I were to explain it, ",
        "Looking at this question, ",
        "In my experience, ",
        "Based on what I've learned, "
      ];
      const starter = personalStarters[Math.floor(Math.random() * personalStarters.length)];
      
      // Only add if it makes grammatical sense
      if (!/^[A-Z]/.test(content[0]) || /^[A-Z][a-z]+,/.test(content.slice(0, 10))) {
        humanizedContent = starter + humanizedContent.charAt(0).toLowerCase() + humanizedContent.slice(1);
      }
    }
    
    // Add conversation enders for short responses
    if (content.length < 100 && Math.random() > 0.7) {
      const conversationContinuers = [
        " How about you?",
        " What do you think?",
        " Does that make sense to you?",
        " What else would you like to know?",
        " How has your day been going?",
        " What brings you here today?"
      ];
      
      // Only add if it's appropriate for the content
      if (!content.includes("?") && !content.endsWith("!")) {
        const continuer = conversationContinuers[Math.floor(Math.random() * conversationContinuers.length)];
        humanizedContent = humanizedContent.trim() + continuer;
      }
    }
    
    return humanizedContent;
  };
  
  return (
    <div 
      className={cn(
        "flex w-full mb-4 animate-fade-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div 
        className={cn(
          "flex flex-col px-4 py-3 rounded-2xl max-w-[85%] shadow-sm break-words transition-all",
          isUser 
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-tr-none" 
            : "bg-white dark:bg-gray-800 rounded-tl-none border border-gray-100 dark:border-gray-700"
        )}
      >
        <p className="text-sm md:text-base">{addPersonalTouch(message.content)}</p>
        {renderAttachment()}
        <span className={cn(
          "text-xs mt-1 self-end",
          isUser ? "text-purple-100" : "text-gray-400"
        )}>
          {format(message.timestamp, 'HH:mm')}
        </span>
      </div>
    </div>
  );
};
