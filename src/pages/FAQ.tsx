import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-8">
        <div className="container mx-auto px-4 py-16">
          {/* Header Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find answers to common questions about WayFinder and our mental health support services.
            </p>
          </section>

          {/* FAQ Section - moved from Support page */}
          <section>
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
                    immediately. For non-emergency crisis support, use the crisis resources listed on our Support page.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">How does the AI chat support work?</h3>
                  <p className="text-muted-foreground">
                    Our AI assistant is trained on evidence-based therapeutic techniques and mental health resources. 
                    It provides personalized support, coping strategies, and guidance 24/7. The AI can help with stress 
                    management, emotional regulation, and connecting you to appropriate resources.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Is WayFinder free to use?</h3>
                  <p className="text-muted-foreground">
                    WayFinder offers both free and premium features. Basic AI chat support and access to crisis resources 
                    are always free. Premium features may include advanced tracking, personalized insights, and additional 
                    therapeutic tools.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Can I use WayFinder on my mobile device?</h3>
                  <p className="text-muted-foreground">
                    Yes! WayFinder is designed to work seamlessly across all devices - desktop, tablet, and mobile. 
                    You can access your support tools and chat with our AI assistant wherever you are.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">How do daily check-ins work?</h3>
                  <p className="text-muted-foreground">
                    Daily check-ins are a simple way to track your mood and mental state over time. You'll answer a few 
                    quick questions about how you're feeling, and WayFinder will help you identify patterns and suggest 
                    personalized coping strategies based on your responses.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">What types of mental health resources do you provide?</h3>
                  <p className="text-muted-foreground">
                    We provide access to a comprehensive library including crisis hotlines, local therapy providers, 
                    support groups, educational materials about various mental health conditions, coping techniques, 
                    and wellness strategies. Our local resources feature helps you find support services in your area.
                  </p>
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

export default FAQ;