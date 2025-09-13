import { Card } from "@/components/ui/card";
import { MessageSquare, Brain, Shield, Clock, Heart, Users } from "lucide-react";
const Features = () => {
  const features = [{
    icon: MessageSquare,
    title: "Real-Time Support",
    description: "Instant access to compassionate AI-powered conversations whenever you need support on your personal journey."
  }, {
    icon: Brain,
    title: "AI-Powered Guidance",
    description: "Advanced AI trained on evidence-based principles provides personalized, supportive responses."
  }, {
    icon: Shield,
    title: "Complete Privacy",
    description: "Your conversations are completely confidential and secure. We prioritize your privacy and anonymity."
  }, {
    icon: Clock,
    title: "24/7 Availability",
    description: "Support is available around the clock, because life doesn't follow a schedule."
  }, {
    icon: Heart,
    title: "Compassionate Care",
    description: "Our AI is designed with empathy and understanding, providing non-judgmental support."
  }, {
    icon: Users,
    title: "Professional Resources",
    description: "Access to professional resources and referrals when you need additional support."
  }];
  return <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-cyan-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How We Support Your Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            Our platform combines cutting-edge AI technology with compassionate care to provide 
            personalized support for your personal growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => <Card key={index} className="p-4 sm:p-6 bg-card/50 backdrop-blur border-accent/20 hover:shadow-glow transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Features;