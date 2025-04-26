
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
          className="pr-10 py-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 transition-all"
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit" 
        className={`rounded-xl p-3 h-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity ${isLoading ? 'opacity-70' : ''}`}
        disabled={isLoading || !message.trim()}
      >
        <Send size={20} />
      </Button>
    </form>
  );
};
