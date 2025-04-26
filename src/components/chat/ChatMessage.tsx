
import { cn } from "@/lib/utils";

export type MessageRole = "system" | "user" | "assistant";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";
  
  return (
    <div 
      className={cn(
        "flex w-full mb-4 animate-fade-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div 
        className={cn(
          "px-4 py-3 rounded-2xl max-w-[85%] shadow-sm break-words transition-all",
          isUser 
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-tr-none" 
            : "bg-white dark:bg-gray-800 rounded-tl-none border border-gray-100 dark:border-gray-700"
        )}
      >
        <p className="text-sm md:text-base">{message.content}</p>
      </div>
    </div>
  );
};
