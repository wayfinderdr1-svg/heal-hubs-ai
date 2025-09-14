import Footer from "@/components/Footer";
import { Phone, Mail, MessageCircle, Clock, Heart, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import heroSupport from "@/assets/hero-support.jpg";
import supportChat from "@/assets/support-chat.jpg";
import supportResources from "@/assets/support-resources.jpg";
import supportContact from "@/assets/support-contact.jpg";
import supportCrisis from "@/assets/support-crisis.jpg";
const Support = () => {
  return <div className="min-h-screen bg-background">
      
      <main className="pb-8">
        <div className="container mx-auto px-4 bg-cyan-900">
          {/* Hero Section */}
          <section className="text-center mb-12 relative">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src={heroSupport} 
                alt="Support and helping hands"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Support & Resources
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-6">
                    We're here to help you every step of the way. Find the support you need, when you need it.
                  </p>
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-red-300" />
                      <p className="text-red-100 font-medium text-sm md:text-base">
                        If you're experiencing a mental health emergency, please call 911 or contact your local emergency services immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Resources */}
          <section className="mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6 flex items-center justify-center gap-3">
              <Phone className="w-8 h-8 text-red-500" />
              Crisis Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    Crisis Text Line
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    24/7 crisis support via text message
                  </p>
                  <a href="sms:741741?body=HOME" className="font-semibold text-primary hover:underline mb-2 block">Text HOME to 741741</a>
                  <p className="text-sm text-muted-foreground">Free, confidential, 24/7</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    National Suicide Prevention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    24/7 suicide prevention support
                  </p>
                  <a href="tel:988" className="font-semibold text-primary hover:underline mb-2 block">Call or text 988</a>
                  <p className="text-sm text-muted-foreground">Free, confidential, 24/7</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    SAMHSA Helpline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Treatment referral and information
                  </p>
                  <a href="tel:18006624357" className="font-semibold text-primary hover:underline mb-2 block">1-800-662-4357</a>
                  <p className="text-sm text-muted-foreground">Free, confidential, 24/7</p>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* Support Options */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">How We Support You</h2>
            <div className="max-w-5xl mx-auto space-y-8">

              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <MessageCircle className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-semibold text-foreground">AI Support Chat</h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        Our AI assistant is available 24/7 to provide immediate support, guidance, and 
                        evidence-based strategies tailored to your needs.
                      </p>
                      <Link to="/chat">
                        <Button className="gap-2">
                          <MessageCircle className="w-4 h-4" />
                          Start Chatting Now
                        </Button>
                      </Link>
                    </div>
                    <div className="relative">
                      <img 
                        src={supportChat} 
                        alt="AI chat support interface"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent rounded-lg" />
                      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                        <h4 className="font-semibold text-foreground text-sm mb-2">Available Support:</h4>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          <li>• Crisis intervention techniques</li>
                          <li>• Coping strategy development</li>
                          <li>• Motivational support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                      <img 
                        src={supportResources} 
                        alt="Resource library"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent rounded-lg" />
                      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                        <h4 className="font-semibold text-foreground text-sm mb-2">What We Provide:</h4>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          <li>• Treatment center directories</li>
                          <li>• Support group listings</li>
                          <li>• Educational resources</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-semibold text-foreground">Resource Library</h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        Access our comprehensive library of support resources, including wellness 
                        options, support groups, and educational materials.
                      </p>
                      <Button variant="outline">
                        Browse Resources
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <img 
                  src={supportContact} 
                  alt="Contact support team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For non-urgent questions, feedback, or technical support
                  </p>
                  <p className="font-semibold text-foreground">support@wayfinder.com</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We typically respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-foreground">AI Chat Support</p>
                      <p className="text-sm text-muted-foreground">Instant response, 24/7</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email Support</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Crisis Resources</p>
                      <p className="text-sm text-muted-foreground">Immediate, 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              
              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Is WayFinder a replacement for professional therapy?</h3>
                  <p className="text-muted-foreground">
                    No, WayFinder is designed to complement professional treatment, not replace it. While our AI provides 
                    evidence-based support and guidance, we always recommend working with licensed professionals for 
                    comprehensive care.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">How secure are my conversations?</h3>
                  <p className="text-muted-foreground">
                    All conversations are encrypted and completely confidential. We never share your personal information 
                    or chat history with third parties. Your privacy and security are our top priorities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">What if I'm having a crisis?</h3>
                  <p className="text-muted-foreground">
                    If you're experiencing a mental health emergency, please contact 911 or your local emergency services 
                    immediately. For non-emergency crisis support, use the crisis resources listed above.
                  </p>
                </CardContent>
              </Card>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>;
};
export default Support;