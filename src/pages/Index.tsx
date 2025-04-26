
import { ChatContainer } from "@/components/chat/ChatContainer";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  const handleRefresh = () => {
    window.location.reload();
  };
  
  const handleInfoClick = () => {
    toast({
      title: "About AI Assistant",
      description: "This is a simulated AI assistant built with React. In a real application, this would connect to an actual AI service API.",
      duration: 5000,
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-4">
      <header className="max-w-4xl mx-auto mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">AI Assistant</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleInfoClick}
            className="rounded-full"
            aria-label="Information"
          >
            <Info size={18} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleRefresh}
            className="rounded-full"
            aria-label="Refresh conversation"
          >
            <RefreshCcw size={18} />
          </Button>
        </div>
      </header>
      <main>
        <ChatContainer />
      </main>
      <footer className="max-w-4xl mx-auto mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>AI Assistant Demo • Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Index;
