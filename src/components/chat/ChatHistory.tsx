
import { Message } from "./ChatMessage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History } from "lucide-react";
import { format } from "date-fns";

interface ChatHistoryProps {
  messages: Message[];
}

const ChatHistory = ({ messages }: ChatHistoryProps) => {
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

  return (
    <div className="w-full lg:w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
          <History size={20} />
          <h2 className="font-semibold">Chat History</h2>
        </div>
      </div>
      
      <ScrollArea className="h-[calc(100vh-10rem)]">
        <div className="p-4 space-y-6">
          {todayMessages.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Today</h3>
              <div className="space-y-2">
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
            </div>
          )}
          
          {yesterdayMessages.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Yesterday</h3>
              <div className="space-y-2">
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
            </div>
          )}
          
          {todayMessages.length === 0 && yesterdayMessages.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              No recent chat history
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatHistory;
