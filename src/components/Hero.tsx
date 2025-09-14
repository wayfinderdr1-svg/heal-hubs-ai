import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import wayfinderLogo from "@/assets/wayfinder-logo.svg";
const Hero = () => {
  return <section className="flex items-center bg-gradient-to-br from-calm to-supportive min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-cyan-900">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <div className="relative flex items-center justify-center mb-4">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img src={wayfinderLogo} alt="WayFinder compass logo representing your path to growth" className="relative w-32 h-32 object-contain" />
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              Your Path to
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Growth</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              Get instant, compassionate support with AI-powered guidance for your personal growth journey. 
              Available 24/7 when you need it most.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20 max-w-md mx-auto">
            <p className="text-sm font-medium text-foreground mb-1">
              💡 Sign up to unlock your full support toolkit
            </p>
            <p className="text-sm text-muted-foreground">
              Save your daily check-ins, track your progress over time, and build lasting growth habits with personalized insights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild variant="hero" size="lg" className="gap-2">
              <Link to="/chat">
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Start Support Chat
                </span>
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs text-muted-foreground">
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