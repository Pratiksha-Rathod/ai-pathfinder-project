
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
          "px-4 py-3 rounded-2xl max-w-[85%] break-words",
          isUser 
            ? "bg-user text-white rounded-tr-none" 
            : "bg-gray-100 dark:bg-gray-800 rounded-tl-none"
        )}
      >
        <p>{message.content}</p>
      </div>
    </div>
  );
};
