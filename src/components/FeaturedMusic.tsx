import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Heart, MoreHorizontal } from "lucide-react";
import albumMidnight from "@/assets/album-midnight-dreams.jpg";
import albumElectric from "@/assets/album-electric-pulse.jpg";
import albumOcean from "@/assets/album-ocean-waves.jpg";
import albumCity from "@/assets/album-city-lights.jpg";

const FeaturedMusic = () => {
  const featuredTracks = [
    {
      id: 1,
      title: "Midnight Dreams",
      artist: "Luna Ray",
      duration: "3:45",
      image: albumMidnight
    },
    {
      id: 2,
      title: "Electric Pulse",
      artist: "Neon Beats",
      duration: "4:12",
      image: albumElectric
    },
    {
      id: 3,
      title: "Ocean Waves",
      artist: "Serene Sounds",
      duration: "2:58",
      image: albumOcean
    },
    {
      id: 4,
      title: "City Lights",
      artist: "Urban Echo",
      duration: "3:33",
      image: albumCity
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl font-bold font-display">
            Featured <span className="gradient-text">Music</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the hottest tracks and trending artists curated just for you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTracks.map((track, index) => (
            <div
              key={track.id} 
              className="glass-card group cursor-pointer overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Button variant="gradient" size="icon" className="animate-premium-bounce shadow-glow">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">{track.artist}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-medium">{track.duration}</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-accent">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-accent">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="gradient" size="lg" className="text-lg px-12 py-4 h-auto">
            Explore All Music
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMusic;