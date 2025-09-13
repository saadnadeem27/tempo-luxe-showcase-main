import { Card } from "@/components/ui/card";
import { Headphones, Download, Shuffle, Users, Radio, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Headphones,
      title: "High-Quality Audio",
      description: "Experience music in lossless quality with crystal-clear sound that brings every detail to life."
    },
    {
      icon: Download,
      title: "Offline Listening",
      description: "Download your favorite tracks and playlists to enjoy music anywhere, even without internet."
    },
    {
      icon: Shuffle,
      title: "Smart Playlists",
      description: "AI-powered recommendations that learn your taste and discover new music you'll love."
    },
    {
      icon: Users,
      title: "Social Features",
      description: "Share music with friends, see what they're listening to, and discover together."
    },
    {
      icon: Radio,
      title: "Live Radio",
      description: "Tune into live radio stations and exclusive shows from around the world."
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Lightning-fast streaming with no buffering. Your music, instantly available."
    }
  ];

  return (
    <section className="py-24 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl font-bold font-display">
            Why Choose <span className="gradient-text">SoundWave</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium features designed to enhance your music experience and take it to the next level
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 hover:scale-105 transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-6">
                  <div className="bg-gradient-primary p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;