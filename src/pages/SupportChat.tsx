import Footer from "@/components/Footer";
import ChatInterface from "@/components/ChatInterface";

const SupportChat = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Support Chat
            </h1>
            <p className="text-muted-foreground text-lg">
              Connect with our AI assistant for personalized guidance and support
            </p>
          </div>
          
          <ChatInterface />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportChat;