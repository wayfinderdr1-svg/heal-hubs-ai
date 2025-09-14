import Footer from "@/components/Footer";
import { Mail, MessageCircle, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import supportContact from "@/assets/support-contact.jpg";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-8">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <section className="text-center mb-12">
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
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're here to help. Reach out to our support team for any questions, feedback, or assistance you need.
            </p>
          </section>

          {/* Contact Options */}
          <section className="mb-12" id="get-in-touch">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Email Support Card - copied from Support page */}
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

          {/* Quick Access Options */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Quick Access</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-accent/20">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">AI Support Chat</h3>
                  <p className="text-muted-foreground mb-4">Get immediate help from our AI assistant</p>
                  <Link to="/chat">
                    <Button variant="outline" className="w-full">
                      Start Chat
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Crisis Resources</h3>
                  <p className="text-muted-foreground mb-4">Access immediate crisis support</p>
                  <Link to="/support">
                    <Button variant="outline" className="w-full">
                      View Resources
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-6 text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Local Resources</h3>
                  <p className="text-muted-foreground mb-4">Find support in your area</p>
                  <Link to="/local-resources">
                    <Button variant="outline" className="w-full">
                      Find Resources
                    </Button>
                  </Link>
                </CardContent>
              </Card>

            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;