import { Button } from "@/components/ui/button";
import { MessageCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import wayfinderLogo from "@/assets/wayfinder-logo-2.svg";
import titleImage from "@/assets/title-image-2.png";


const Hero = () => {
  const { user, signOut } = useAuth();
  return <section className="flex items-center bg-gradient-to-br from-calm to-supportive min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 bg-cyan-900">
        <div className="flex flex-col items-start text-left space-y-4 sm:space-y-5 md:space-y-6">
          {/* Logo and Title Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-start md:items-center gap-3 sm:gap-4 md:gap-6 mb-2">
            <div className="relative flex-shrink-0">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img src={wayfinderLogo} alt="WayFinder compass logo representing your path to growth" className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain" />
            </div>
            
            <div className="flex flex-col justify-start">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" style="font-name: 'Script MT Bold;'">Finding your way forward</h1>
              {/*<img 
                src={titleImage} 
                alt="Finding the Way Forward - Your path to growth and support" 
                className="w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 object-contain"
              />*/}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-2">
                Get instant, compassionate support with AI-powered guidance for growing stronger everyday together!!
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
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-start">
            <Button asChild variant="hero" size="lg" className="gap-2 w-full sm:w-auto">
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
                className="gap-2 w-full sm:w-auto"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            )}
          </div>
          <div className="flex flex-wrap justify-start gap-4 sm:gap-6 pt-4 text-xs sm:text-sm text-muted-foreground">
            <span>100% Confidential</span>
            <span className="hidden sm:inline">•</span>
            <span>24/7 Available</span>
            <span className="hidden sm:inline">•</span>
            <span>Compassionate AI</span>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;