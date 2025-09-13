import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, Users, Music } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Artists = () => {
  const featuredArtists = [
    {
      id: 1,
      name: "Luna Ray",
      genre: "Synthwave",
      followers: "2.5M",
      tracks: 45,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Neon Beats",
      genre: "Electronic",
      followers: "1.8M",
      tracks: 32,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Serene Sounds",
      genre: "Ambient",
      followers: "980K",
      tracks: 28,
      verified: false,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Urban Echo",
      genre: "Hip-Hop",
      followers: "3.2M",
      tracks: 67,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    }
  ];

  const topGenres = [
    { name: "Electronic", count: 1250 },
    { name: "Hip-Hop", count: 980 },
    { name: "Pop", count: 875 },
    { name: "Rock", count: 650 },
    { name: "Jazz", count: 420 },
    { name: "Classical", count: 380 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h1 className="text-5xl font-bold font-display">
                Discover <span className="gradient-text">Artists</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore talented musicians and find your new favorite artists
              </p>
            </div>

            <section className="space-y-8">
              <h2 className="text-3xl font-bold font-display">Featured Artists</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredArtists.map((artist, index) => (
                  <div
                    key={artist.id}
                    className="glass-card group cursor-pointer overflow-hidden animate-fade-in hover:scale-105 transition-all duration-500"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="relative p-8 text-center">
                      <div className="relative mx-auto mb-6">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1">
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                            <Users className="h-12 w-12 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="gradient" size="icon" className="h-16 w-16 shadow-glow">
                            <Play className="h-8 w-8" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2">
                          <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                            {artist.name}
                          </h3>
                          {artist.verified && (
                            <Badge variant="default" className="bg-gradient-primary text-white border-0">
                              ✓
                            </Badge>
                          )}
                        </div>
                        <Badge variant="outline" className="text-sm">
                          {artist.genre}
                        </Badge>
                        
                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-2">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{artist.followers}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Music className="h-4 w-4" />
                            <span>{artist.tracks} tracks</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-6">
                        <Button variant="gradient" size="sm" className="flex-1">
                          Follow
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:text-accent">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-bold font-display">Browse by Genre</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {topGenres.map((genre, index) => (
                  <div
                    key={genre.name}
                    className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Music className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {genre.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {genre.count} artists
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center">
              <div className="glass-card p-12 max-w-2xl mx-auto">
                <div className="bg-gradient-primary p-6 rounded-full w-fit mx-auto mb-6">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Become an Artist</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Share your music with millions of listeners worldwide
                </p>
                <Button variant="gradient" size="lg" className="h-14 px-12">
                  Upload Your Music
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

export default Artists;