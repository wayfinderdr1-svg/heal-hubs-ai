import Footer from "@/components/Footer";
import { Heart, Users, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutHero from "@/assets/about-hero.jpg";
import aboutCommunity from "@/assets/about-community.jpg";
import aboutEmpowerment from "@/assets/about-empowerment.jpg";
import aboutPrivacy from "@/assets/about-privacy.jpg";
import aboutStory from "@/assets/about-story.jpg";
const About = () => {
  return <div className="min-h-screen bg-background">
      
      <main className="pb-12">
        <div className="container mx-auto px-4 bg-sky-950">
          {/* Hero Section */}
          <section className="text-center mb-16 relative">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src={aboutHero} 
                alt="People on personal growth journeys"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
            </div>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About WayFinder
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Empowering personal journeys through compassionate AI-powered support and community connection.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto text-center bg-sky-900">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that everyone deserves access to compassionate, judgment-free support on their personal journey. 
                WayFinder combines cutting-edge AI technology with evidence-based principles to provide 24/7 
                guidance, encouragement, and resources for those seeking growth and development.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-card/50 backdrop-blur border-accent/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src={aboutCommunity} 
                      alt="Community support"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
                    <p className="text-muted-foreground">
                      Building supportive connections that foster growth and understanding among individuals on similar journeys.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src={aboutEmpowerment} 
                      alt="Personal empowerment"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Empowerment</h3>
                    <p className="text-muted-foreground">
                      Providing tools and resources that enable individuals to take control of their journey and build resilience.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img 
                      src={aboutPrivacy} 
                      alt="Privacy and security"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Privacy</h3>
                    <p className="text-muted-foreground">
                      Ensuring all conversations remain confidential and secure, creating a safe space for honest dialogue.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Story Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Story</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={aboutStory} 
                    alt="Team working together"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    WayFinder was born from the understanding that personal growth is a deeply individual journey that requires 
                    accessible, compassionate support.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our team of technologists, therapists, and advocates came together to create a platform that 
                    bridges this gap through advanced AI and evidence-based principles.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every conversation, every feature, and every update is designed with one goal: supporting 
                    individuals on their path to growth.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>;
};
export default About;