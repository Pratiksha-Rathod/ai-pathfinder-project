
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <div className="relative flex-1">
        <Input
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="pr-10 py-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-xl"
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit" 
        className={`rounded-xl p-3 h-auto ${isLoading ? 'opacity-70' : 'hover:bg-user-dark'}`}
        variant="default"
        disabled={isLoading || !message.trim()}
        style={{ backgroundColor: 'hsl(280, 60%, 45%)' }}
      >
        <Send size={20} />
      </Button>
    </form>
  );
};
