import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-support.jpg";

const Hero = () => {
  return (
    <section className="flex items-center bg-gradient-to-br from-calm to-supportive min-h-[80vh]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Your Path to
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Recovery</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Get instant, compassionate support with AI-powered guidance tailored for substance abuse recovery. 
                Available 24/7 when you need it most.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
              <p className="text-sm font-medium text-foreground mb-1">
                💡 Sign up to unlock your full recovery toolkit
              </p>
              <p className="text-sm text-muted-foreground">
                Save your daily check-ins, track your progress over time, and build lasting recovery habits with personalized insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/chat">
                <Button variant="hero" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Start Recovery Chat
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="supportive" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">100% Confidential</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-medium">24/7 Available</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-success/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-success" />
                </div>
                <p className="text-sm font-medium">Compassionate AI</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Supportive recovery environment" 
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;