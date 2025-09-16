import { Button } from "@/components/ui/button";
import { MessageCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import wayfinderLogo from "@/assets/wayfinder-logo.svg";
import titleImage from "@/assets/title-finding-the-way-forward-blue.png";
const Hero = () => {
  const { user, signOut } = useAuth();
  return <section className="flex items-center bg-gradient-to-br from-calm to-supportive min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-cyan-900">
        <div className="flex flex-col items-start text-left space-y-6 sm:space-y-8">
          {/* Logo and Title Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
            <div className="relative flex items-start justify-start">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img src={wayfinderLogo} alt="WayFinder compass logo representing your path to growth" className="relative w-24 h-24 sm:w-32 sm:h-32 object-contain" />
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <img 
                src={titleImage} 
                alt="Finding the Way Forward - Your path to growth and support" 
                className="w-full max-w-[16rem] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
              />
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-sm sm:max-w-md lg:max-w-lg">
                Get instant, compassionate support with AI-powered guidance for your personal growth journey. 
                Available 24/7 when you need it most.
              </p>
            </div>
          </div>

          <Link to="/auth" className="block">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20 max-w-md hover:bg-gradient-to-r hover:from-primary/15 hover:to-accent/15 transition-colors cursor-pointer">
              <p className="text-sm font-medium text-foreground mb-1">
                💡 Sign up to unlock your full support toolkit
              </p>
              <p className="text-sm text-muted-foreground">
                Save your daily check-ins, track your progress over time, and build lasting growth habits with personalized insights.
              </p>
            </div>
          </Link>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
            <Button asChild variant="hero" size="lg" className="gap-2">
              <Link to="/chat">
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Start Support Chat
                </span>
              </Link>
            </Button>
            {user && (
              <Button 
                onClick={signOut} 
                variant="outline" 
                size="lg" 
                className="gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            )}
          </div>
          <div className="flex flex-wrap justify-start gap-6 pt-4 text-xs text-muted-foreground">
            <span>100% Confidential</span>
            <span>•</span>
            <span>24/7 Available</span>
            <span>•</span>
            <span>Compassionate AI</span>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;