import { Music, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="glass-card rounded-none border-x-0 border-b-0">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-primary p-3 rounded-xl shadow-lg">
                <Music className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text font-display">SoundWave</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Your premium music streaming platform for unlimited entertainment and crystal-clear audio quality.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Twitter className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Instagram className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Youtube className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Facebook className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-xl font-display">Product</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">Download</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">API</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-xl font-display">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">Blog</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-xl font-display">Support</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 transition-transform inline-block">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-16 pt-10 text-center">
          <p className="text-muted-foreground text-lg">&copy; 2024 SoundWave. All rights reserved. Made with ❤️ for music lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;