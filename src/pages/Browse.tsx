import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Play, Heart, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import albumMidnight from "@/assets/album-midnight-dreams.jpg";
import albumElectric from "@/assets/album-electric-pulse.jpg";
import albumOcean from "@/assets/album-ocean-waves.jpg";
import albumCity from "@/assets/album-city-lights.jpg";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const musicLibrary = [
    {
      id: 1,
      title: "Midnight Dreams",
      artist: "Luna Ray",
      album: "Ethereal Nights",
      duration: "3:45",
      genre: "Synthwave",
      image: albumMidnight
    },
    {
      id: 2,
      title: "Electric Pulse",
      artist: "Neon Beats",
      album: "Digital Symphony",
      duration: "4:12",
      genre: "Electronic",
      image: albumElectric
    },
    {
      id: 3,
      title: "Ocean Waves",
      artist: "Serene Sounds",
      album: "Nature's Symphony",
      duration: "2:58",
      genre: "Ambient",
      image: albumOcean
    },
    {
      id: 4,
      title: "City Lights",
      artist: "Urban Echo",
      album: "Metropolitan",
      duration: "3:33",
      genre: "Hip-Hop",
      image: albumCity
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <h1 className="text-5xl font-bold font-display">
                Browse <span className="gradient-text">Music</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover millions of songs from artists around the world
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search songs, artists, albums..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg glass-card border-0"
                />
              </div>
              <Button variant="gradient" size="lg" className="h-14 px-8">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>

            <div className="grid gap-4">
              {musicLibrary.map((track, index) => (
                <div
                  key={track.id}
                  className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="w-20 h-20 rounded-2xl object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="gradient" size="icon" className="h-12 w-12">
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {track.artist} • {track.album}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{track.genre}</span>
                        <span>•</span>
                        <span>{track.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="hover:text-accent">
                        <Heart className="h-5 w-5" />
                      </Button>
                      <Button variant="gradient" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        Play Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Browse;