import Footer from "@/components/Footer";
import { Heart, Users, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  return <div className="min-h-screen bg-background">
      
      <main className="pb-12">
        <div className="container mx-auto px-4 bg-sky-950">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto bg-cyan-900">
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
              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    Building supportive connections that foster growth and understanding among individuals on similar journeys.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Empowerment</h3>
                  <p className="text-muted-foreground">
                    Providing tools and resources that enable individuals to take control of their journey and build resilience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Privacy</h3>
                  <p className="text-muted-foreground">
                    Ensuring all conversations remain confidential and secure, creating a safe space for honest dialogue.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Story Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Story</h2>
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  WayFinder was born from the understanding that personal growth is a deeply individual journey that requires 
                  accessible, compassionate support. Traditional therapy and support groups are invaluable, but they're 
                  not always available when someone needs help the most.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our team of technologists, therapists, and advocates came together to create a platform that 
                  bridges this gap. By leveraging advanced AI trained on evidence-based principles, we provide 
                  immediate, personalized support that complements professional treatment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every conversation, every feature, and every update is designed with one goal in mind: supporting 
                  individuals on their path to growth and helping them find their way forward.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>;
};
export default About;