
import { Message } from "./ChatMessage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, ChevronDown, ChevronUp } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

interface ChatHistoryProps {
  messages: Message[];
}

const ChatHistory = ({ messages }: ChatHistoryProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const isToday = (date: Date) => {
    return format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
  };

  const isYesterday = (date: Date) => {
    return format(date, 'yyyy-MM-dd') === format(yesterday, 'yyyy-MM-dd');
  };

  const todayMessages = messages.filter(msg => isToday(msg.timestamp));
  const yesterdayMessages = messages.filter(msg => isYesterday(msg.timestamp));

  const createSummary = (messages: Message[]) => {
    if (messages.length === 0) return "No messages";
    return `${messages.length} messages - ${messages[messages.length - 1].content.slice(0, 30)}...`;
  };

  return (
    <div className="w-full lg:w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
            <History size={20} />
            <h2 className="font-semibold">Chat History</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="h-8 w-8"
          >
            {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </Button>
        </div>
      </div>
      
      {isOpen && (
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="p-4 space-y-6">
            {todayMessages.length > 0 && (
              <Collapsible>
                <CollapsibleTrigger className="w-full text-left">
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Today</h3>
                    <span className="text-xs text-gray-400">{createSummary(todayMessages)}</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="space-y-2 mt-2">
                    {todayMessages.map((msg) => (
                      <div 
                        key={msg.id}
                        className="text-sm p-2 rounded-lg bg-gray-50 dark:bg-gray-900"
                      >
                        <p className="text-gray-900 dark:text-gray-100 line-clamp-2">{msg.content}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {format(msg.timestamp, 'HH:mm')}
                        </span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}
            
            {yesterdayMessages.length > 0 && (
              <Collapsible>
                <CollapsibleTrigger className="w-full text-left">
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Yesterday</h3>
                    <span className="text-xs text-gray-400">{createSummary(yesterdayMessages)}</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="space-y-2 mt-2">
                    {yesterdayMessages.map((msg) => (
                      <div 
                        key={msg.id}
                        className="text-sm p-2 rounded-lg bg-gray-50 dark:bg-gray-900"
                      >
                        <p className="text-gray-900 dark:text-gray-100 line-clamp-2">{msg.content}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {format(msg.timestamp, 'HH:mm')}
                        </span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}
            
            {todayMessages.length === 0 && yesterdayMessages.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                No recent chat history
              </div>
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default ChatHistory;
