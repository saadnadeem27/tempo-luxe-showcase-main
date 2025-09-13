import { Button } from "@/components/ui/button";
import { Play, Download, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-music.jpg";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center relative">
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight font-display">
                Experience Music
                <span className="gradient-text block animate-gradient-flow">Like Never Before</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Immerse yourself in crystal-clear audio quality with our premium streaming platform. 
                Discover new artists, create playlists, and enjoy unlimited music with studio-grade sound.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="gradient" size="lg" className="group text-lg px-10 py-4 h-auto">
                <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
                Start Listening Free
              </Button>
              <Button variant="premium" size="lg" className="text-lg px-10 py-4 h-auto">
                <Download className="h-6 w-6" />
                Download App
              </Button>
            </div>
            
            <div className="flex items-center space-x-12 pt-8">
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">50M+</div>
                <div className="text-sm text-muted-foreground font-medium">Songs</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">10M+</div>
                <div className="text-sm text-muted-foreground font-medium">Users</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">200+</div>
                <div className="text-sm text-muted-foreground font-medium">Countries</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative group">
              <img 
                src={heroImage} 
                alt="Premium Music Experience" 
                className="rounded-3xl shadow-2xl glass-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-8 left-8 glass-card p-4 rounded-2xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-full animate-glow-pulse">
                    <Headphones className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">Ultra HD Audio</div>
                    <div className="text-sm text-muted-foreground">Lossless • 192kHz/24bit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;