import Footer from "@/components/Footer";
import ChatInterface from "@/components/ChatInterface";

const RecoveryChat = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recovery Chat
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with our AI recovery assistant for personalized support and guidance on your healing journey.
            </p>
          </div>
          
          <ChatInterface />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecoveryChat;