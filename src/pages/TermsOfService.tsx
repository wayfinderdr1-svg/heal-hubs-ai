import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using WayFinder
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using WayFinder, you accept and agree to be bound by the terms 
                and provision of this agreement. These terms apply to all users of the service.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                WayFinder is a mental health support platform that provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>AI-powered conversational support and guidance</li>
                <li>Daily check-in tools for mood tracking</li>
                <li>Access to mental health resources and information</li>
                <li>Connection to local mental health services</li>
              </ul>
              <p className="text-muted-foreground font-semibold">
                Important: WayFinder is not a substitute for professional medical care, therapy, 
                or psychiatric treatment. Always consult with qualified healthcare providers for 
                serious mental health concerns.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                As a user of WayFinder, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate information when creating your account</li>
                <li>Use the service responsibly and in good faith</li>
                <li>Not share harmful, inappropriate, or illegal content</li>
                <li>Respect the privacy and rights of other users</li>
                <li>Seek professional help for serious mental health crises</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Limitations of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                WayFinder provides information and support tools but does not provide medical advice, 
                diagnosis, or treatment. We are not liable for any decisions made based on information 
                provided through our platform. In case of medical emergencies, always contact emergency 
                services immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Privacy and Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your privacy is important to us. Please review our Privacy Policy to understand 
                how we collect, use, and protect your personal information. By using our service, 
                you consent to our data practices as described in the Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at 
                support@wayfinder.com or through our support channels.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;