import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Plus, Music, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Playlists = () => {
  const playlists = [
    {
      id: 1,
      name: "Chill Vibes",
      description: "Perfect for relaxing after a long day",
      songCount: 45,
      duration: "2h 34m",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Workout Beats",
      description: "High-energy tracks to power your workout",
      songCount: 32,
      duration: "1h 56m",
      cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Focus Flow",
      description: "Instrumental music for deep concentration",
      songCount: 28,
      duration: "1h 42m",
      cover: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Party Mix",
      description: "Upbeat songs for celebrations",
      songCount: 50,
      duration: "3h 12m",
      cover: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-5xl font-bold font-display mb-4">
                  Your <span className="gradient-text">Playlists</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Organize your favorite music into custom collections
                </p>
              </div>
              <Button variant="gradient" size="lg" className="h-14 px-8">
                <Plus className="h-5 w-5 mr-2" />
                Create Playlist
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {playlists.map((playlist, index) => (
                <div
                  key={playlist.id}
                  className="glass-card group cursor-pointer overflow-hidden animate-fade-in hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-56 bg-gradient-primary rounded-t-3xl flex items-center justify-center">
                      <Music className="h-16 w-16 text-white/60" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Button variant="gradient" size="icon" className="animate-premium-bounce shadow-glow h-16 w-16">
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {playlist.name}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {playlist.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Music className="h-4 w-4" />
                        <span>{playlist.songCount} songs</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{playlist.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="glass-card p-12 max-w-2xl mx-auto">
                <div className="bg-gradient-primary p-6 rounded-full w-fit mx-auto mb-6">
                  <Plus className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Create Your First Playlist</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Start building your perfect music collection by creating custom playlists
                </p>
                <Button variant="gradient" size="lg" className="h-14 px-12">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Playlists;