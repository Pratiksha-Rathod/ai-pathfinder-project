
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Paperclip, Edit, Smile, Mic, X } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string, attachment?: File | null) => void;
  onAttachment?: (file: File) => void;
  currentAttachment?: File | null;
  isLoading: boolean;
}

export const ChatInput = ({ onSendMessage, onAttachment, currentAttachment, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message, currentAttachment);
      setMessage("");
      setIsEditing(false);
    }
  };

  const handleAttachment = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAttachment) {
      onAttachment(file);
    }
  };
  
  const toggleMic = () => {
    setIsRecording(!isRecording);
    // Simulated speech recognition - in a real app, this would use the Web Speech API
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        // Simulate getting speech text
        const phrases = [
          "Can you tell me more about this?",
          "I'd like to know how this works.",
          "That sounds interesting.",
          "Could you explain that in more detail?"
        ];
        const randomText = phrases[Math.floor(Math.random() * phrases.length)];
        setMessage(prev => prev + (prev ? " " : "") + randomText);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      {isEditing ? (
        <Textarea
          placeholder="Type a detailed message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none h-24 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 transition-all"
          disabled={isLoading}
        />
      ) : (
        <div className="relative flex-1">
          <Input
            placeholder="Type a message or upload a file..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pr-24 py-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 transition-all"
            disabled={isLoading}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${isRecording ? 'text-red-500' : 'text-gray-500 hover:text-purple-500'}`}
              onClick={toggleMic}
            >
              <Mic size={18} />
            </Button>
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
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*,audio/*,video/*,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
            </Button>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        {isRecording && (
          <div className="text-red-500 text-sm flex items-center gap-1 animate-pulse">
            <span className="h-2 w-2 rounded-full bg-red-500"></span> Recording...
          </div>
        )}
        <div className="ml-auto flex gap-2 items-center">
          {isEditing && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsEditing(false)}
              className="text-sm"
            >
              Simple View
            </Button>
          )}
          <Button 
            type="submit" 
            className={`rounded-xl p-3 h-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity ${isLoading ? 'opacity-70' : ''}`}
            disabled={isLoading || !message.trim()}
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </form>
  );
};
