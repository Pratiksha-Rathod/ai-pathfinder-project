
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Paperclip, Edit } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
      setIsEditing(false);
    }
  };

  const handleAttachment = () => {
    // Placeholder for attachment functionality
    const input = document.createElement('input');
    input.type = 'file';
    input.click();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <div className="relative flex-1">
        <Input
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="pr-20 py-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 transition-all"
          disabled={isLoading}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:text-purple-500"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit size={18} />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:text-purple-500"
            onClick={handleAttachment}
          >
            <Paperclip size={18} />
          </Button>
        </div>
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
