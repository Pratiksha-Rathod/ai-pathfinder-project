
import { Message } from "./ChatMessage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, ChevronDown, ChevronUp, Search } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatHistoryProps {
  messages: Message[];
}

const ChatHistory = ({ messages }: ChatHistoryProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const isToday = (date: Date) => {
    return format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
  };

  const isYesterday = (date: Date) => {
    return format(date, 'yyyy-MM-dd') === format(yesterday, 'yyyy-MM-dd');
  };

  const filteredMessages = searchQuery 
    ? messages.filter(msg => 
        msg.content.toLowerCase().includes(searchQuery.toLowerCase()))
    : messages;

  const todayMessages = filteredMessages.filter(msg => isToday(msg.timestamp));
  const yesterdayMessages = filteredMessages.filter(msg => isYesterday(msg.timestamp));
  const olderMessages = filteredMessages.filter(msg => !isToday(msg.timestamp) && !isYesterday(msg.timestamp));

  const createSummary = (messages: Message[]) => {
    if (messages.length === 0) return "No messages";
    
    // Get unique topics by analyzing words
    const allText = messages.map(m => m.content).join(' ');
    const words = allText.toLowerCase().split(/\W+/).filter(word => 
      word.length > 3 && 
      !['this', 'that', 'with', 'from', 'have', 'your', 'what', 'when', 'where', 'which'].includes(word)
    );
    
    const wordFrequency: {[key: string]: number} = {};
    words.forEach(word => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
    
    // Sort words by frequency
    const sortedWords = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(entry => entry[0]);
    
    const topicPhrase = sortedWords.length > 0 
      ? `Topics: ${sortedWords.join(', ')}` 
      : messages[messages.length - 1].content.slice(0, 30) + '...';
    
    return `${messages.length} messages - ${topicPhrase}`;
  };

  return (
    <div className="w-full lg:w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
            <History size={20} />
            <h2 className="font-semibold">Chat History</h2>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              className="h-8 w-8"
            >
              <Search size={18} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-8 w-8"
            >
              {isOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            </Button>
          </div>
        </div>
        
        {showSearch && (
          <div className="mt-2">
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-sm h-8"
            />
          </div>
        )}
      </div>
      
      {isOpen && (
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="p-4 space-y-6">
            {todayMessages.length > 0 && (
              <Collapsible defaultOpen={true}>
                <CollapsibleTrigger className="w-full text-left">
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Today</h3>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-400 max-w-[140px] truncate">
                        {createSummary(todayMessages)}
                      </span>
                    </div>
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
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {format(msg.timestamp, 'HH:mm')}
                          </span>
                          {msg.attachment && (
                            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-1.5 py-0.5 rounded-full flex items-center">
                              <Paperclip size={10} className="mr-1" />
                              File
                            </span>
                          )}
                        </div>
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
                    <span className="text-xs text-gray-400 max-w-[140px] truncate">
                      {createSummary(yesterdayMessages)}
                    </span>
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
            
            {olderMessages.length > 0 && (
              <Collapsible>
                <CollapsibleTrigger className="w-full text-left">
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Older</h3>
                    <span className="text-xs text-gray-400 max-w-[140px] truncate">
                      {createSummary(olderMessages)}
                    </span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="space-y-2 mt-2">
                    {olderMessages.map((msg) => (
                      <div 
                        key={msg.id}
                        className="text-sm p-2 rounded-lg bg-gray-50 dark:bg-gray-900"
                      >
                        <p className="text-gray-900 dark:text-gray-100 line-clamp-2">{msg.content}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {format(msg.timestamp, 'dd MMM, HH:mm')}
                        </span>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}
            
            {filteredMessages.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                {searchQuery ? "No matching conversations found" : "No chat history"}
              </div>
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default ChatHistory;
