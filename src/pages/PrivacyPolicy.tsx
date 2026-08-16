import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    intro:
      "We collect information you provide directly to us, such as when you create an account, use our chat services, complete a daily check-in, or contact us for support. This may include:",
    items: [
      "Account information (name, email address)",
      "Chat conversations with the AI support assistant",
      "Daily check-in responses and mood entries",
      "Usage data, device information, and app preferences",
      "Approximate location, only when you choose to share it to find local resources",
    ],
  },
  {
    title: "How We Use Your Information",
    intro: "We use the information we collect to:",
    items: [
      "Provide personalized support, guidance, and daily check-in insights",
      "Generate responses through our AI support assistant",
      "Show relevant local resources near you",
      "Maintain, troubleshoot, and improve the app",
      "Send important service updates",
      "Protect the safety and security of our users and platform",
      "Comply with applicable legal obligations",
    ],
  },
  {
    title: "AI Processing",
    intro:
      "WayFinder uses third-party AI providers to generate chat responses. When you send a message, the content of that message is transmitted to the AI provider to produce a reply.",
    items: [
      "Do not share information you would not want processed by a third-party service",
      "AI responses are informational and supportive, never a medical diagnosis",
      "We do not sell your conversations or use them to advertise to you",
    ],
  },
  {
    title: "Data Sharing",
    intro:
      "We do not sell your personal information. We share data only in limited circumstances:",
    items: [
      "With service providers who host our infrastructure, database, and AI features",
      "When required by law, subpoena, or valid legal process",
      "To protect the rights, property, or safety of our users or the public",
      "With your explicit consent",
    ],
  },
  {
    title: "Data Retention",
    intro:
      "We keep your information only as long as it is needed to provide the service:",
    items: [
      "Account data is retained while your account is active",
      "Check-in history is retained so you can review your progress over time",
      "When you delete your account, associated personal data is removed from our systems",
    ],
  },
  {
    title: "Your Rights",
    intro: "Depending on where you live, you may have the right to:",
    items: [
      "Access and review your personal data",
      "Request corrections to inaccurate information",
      "Delete your account and associated data",
      "Export your data in a portable format",
      "Withdraw consent or opt out of non-essential communications",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Your privacy and data security are our top priorities
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: August 16, 2026</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                WayFinder is a wellness and personal-growth support app. This policy explains what
                information we collect, how we use it, and the choices you have. WayFinder provides
                supportive guidance and is not a substitute for professional medical or mental
                health care.
              </p>
            </CardContent>
          </Card>

          {sections.map((section) => (
            <Card key={section.title} className="mb-8">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{section.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We use industry-standard security measures to protect your information, including
                encryption in transit and access controls on our database. No system can be
                guaranteed completely secure, so we continue to review and improve our practices.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                WayFinder is not intended for children under 13, and we do not knowingly collect
                personal information from them. If you believe a child has provided us information,
                contact us and we will delete it.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Crisis Situations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                WayFinder does not provide emergency services and does not monitor conversations in
                real time. If you are in crisis, call 988 (Suicide &amp; Crisis Lifeline) or your
                local emergency number immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. When we do, we will revise the
                "Last updated" date above and, for significant changes, notify you within the app.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or our data practices, contact us at{" "}
                <a
                  href="mailto:privacy@wayfinder.com"
                  className="text-primary hover:underline"
                >
                  privacy@wayfinder.com
                </a>{" "}
                or through our support channels.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
