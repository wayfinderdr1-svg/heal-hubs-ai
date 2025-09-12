import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Brain, Shield, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                How WayFinder Works
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Your AI-powered recovery companion, available 24/7 to support your healing journey.
              </p>
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="bg-card/50 backdrop-blur border-accent/20 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">1. Start Chatting</h3>
                    <p className="text-muted-foreground">
                      Simply begin a conversation with our AI assistant. Share what's on your mind, ask questions, or seek guidance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-accent/20 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Brain className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">2. AI Analysis</h3>
                    <p className="text-muted-foreground">
                      Our AI, trained on evidence-based recovery principles, analyzes your message and provides personalized responses.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-accent/20 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">3. Safe Support</h3>
                    <p className="text-muted-foreground">
                      Receive compassionate, non-judgmental guidance in a completely private and secure environment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-accent/20 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Clock className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">4. 24/7 Access</h3>
                    <p className="text-muted-foreground">
                      Continue your conversations anytime, anywhere. Support is always available when you need it most.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Key Features</h2>
            <div className="max-w-5xl mx-auto space-y-12">
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Evidence-Based Responses</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our AI is trained on proven recovery methodologies, therapeutic techniques, and best practices 
                    from addiction medicine and mental health professionals.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      Cognitive Behavioral Therapy (CBT) principles
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      Mindfulness and stress reduction techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      Motivational interviewing approaches
                    </li>
                  </ul>
                </div>
                <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-accent/20">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Brain className="w-16 h-16 mx-auto mb-4 text-primary" />
                      <h4 className="text-xl font-semibold text-foreground mb-2">Smart & Compassionate</h4>
                      <p className="text-muted-foreground">
                        Advanced AI that understands context and responds with empathy and professional guidance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-accent/20 md:order-1">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
                      <h4 className="text-xl font-semibold text-foreground mb-2">Privacy First</h4>
                      <p className="text-muted-foreground">
                        End-to-end encryption ensures your conversations remain completely confidential and secure.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <div className="md:order-2">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Complete Privacy & Security</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Your recovery journey is personal. We use industry-leading security measures to ensure your 
                    conversations remain private and are never shared with third parties.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      End-to-end encryption for all messages
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      No data sharing with third parties
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      HIPAA-compliant security standards
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Start Your Journey?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step towards healing and growth with compassionate AI-powered support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/chat">
                  <Button size="lg" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Start Chatting Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;