import { Heart, Phone, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12 bg-cyan-950">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">WayFinder</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Supporting your personal journey with compassionate AI-powered guidance, available 24/7.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/how-it-works" className="hover:text-foreground transition-colors">Wellness Guidelines</a></li>
              <li><a href="/local-resources" className="hover:text-foreground transition-colors">Professional Help</a></li>
              <li><a href="/support" className="hover:text-foreground transition-colors">Emergency Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/our-support" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/contact-us#get-in-touch" className="hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Emergency Contacts</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:988" className="hover:text-foreground transition-colors">Crisis Hotline: 988</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:1-800-662-4357" className="hover:text-foreground transition-colors">SAMHSA: 1-800-662-4357</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@wayfinder.com" className="hover:text-foreground transition-colors">support@wayfinder.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 WayFinder. This platform provides support and guidance but is not a replacement for professional medical care.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;