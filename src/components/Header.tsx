import { Button } from "@/components/ui/button";
import { MessageCircle, Heart } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Heart className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">WayFinder</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
            Support
          </a>
          <Button 
            variant="outline" 
            onClick={handleAuthAction}
            className="text-sm"
          >
            {user ? 'Sign Out' : 'Sign In'}
          </Button>
        </nav>
        
        <Button variant="hero" className="gap-2">
          <MessageCircle className="w-4 h-4" />
          {user ? 'Chat Now' : 'Get Started'}
        </Button>
      </div>
    </header>
  );
};

export default Header;