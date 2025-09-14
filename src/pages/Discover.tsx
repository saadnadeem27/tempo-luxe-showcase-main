import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, MoreHorizontal, Calendar, TrendingUp, Star, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import oceanWavesImage from "@/assets/album-ocean-waves.jpg";
import electricPulseImage from "@/assets/album-electric-pulse.jpg";
import midnightDreamsImage from "@/assets/album-midnight-dreams.jpg";
import cityLightsImage from "@/assets/album-city-lights.jpg";
import lunaRayImage from "@/assets/artist-luna-ray.jpg";
import neonBeatsImage from "@/assets/artist-neon-beats.jpg";

const Discover = () => {
  const newReleases = [
    {
      id: 1,
      title: "Ocean Waves",
      artist: "Serene Sounds",
      image: oceanWavesImage,
      releaseDate: "Today"
    },
    {
      id: 2,
      title: "Electric Pulse",
      artist: "Neon Beats",
      image: electricPulseImage,
      releaseDate: "3 days ago"
    },
    {
      id: 3,
      title: "Midnight Dreams",
      artist: "Luna Ray",
      image: midnightDreamsImage,
      releaseDate: "1 week ago"
    },
    {
      id: 4,
      title: "City Lights",
      artist: "Urban Echo",
      image: cityLightsImage,
      releaseDate: "2 weeks ago"
    }
  ];

  const recommendedForYou = [
    {
      id: 1,
      title: "Cosmic Journey",
      artist: "Space Synth",
      genre: "Synthwave",
      matchPercentage: 95,
      image: oceanWavesImage
    },
    {
      id: 2,
      title: "Digital Dreams",
      artist: "Cyber Wave",
      genre: "Electronic",
      matchPercentage: 89,
      image: electricPulseImage
    },
    {
      id: 3,
      title: "Neon Nights",
      artist: "Retro Future",
      genre: "Synthpop",
      matchPercentage: 84,
      image: midnightDreamsImage
    }
  ];

  const trendingArtists = [
    {
      id: 1,
      name: "Luna Ray",
      genre: "Synthwave",
      monthlyListeners: "2.5M",
      image: lunaRayImage,
      trending: "+15%"
    },
    {
      id: 2,
      name: "Neon Beats",
      genre: "Electronic",
      monthlyListeners: "1.8M",
      image: neonBeatsImage,
      trending: "+22%"
    }
  ];

  const moodPlaylists = [
    {
      id: 1,
      mood: "Energetic",
      description: "High-energy tracks to boost your mood",
      color: "from-orange-500 to-red-500",
      songCount: 89
    },
    {
      id: 2,
      mood: "Chill",
      description: "Relaxing vibes for unwinding",
      color: "from-blue-500 to-purple-500",
      songCount: 156
    },
    {
      id: 3,
      mood: "Focus",
      description: "Perfect for concentration and productivity",
      color: "from-green-500 to-teal-500",
      songCount: 73
    },
    {
      id: 4,
      mood: "Romantic",
      description: "Love songs for special moments",
      color: "from-pink-500 to-red-500",
      songCount: 124
    }
  ];

  return (
    <div className="min-h-screen pb-32">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="text-5xl font-bold font-display">
                <span className="gradient-text">Discover</span> New Music
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Personalized recommendations and trending content just for you
              </p>
            </div>

            {/* Made For You */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-primary p-3 rounded-2xl">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display">Made For You</h2>
                  <p className="text-muted-foreground">Based on your listening history</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendedForYou.map((track, index) => (
                  <div
                    key={track.id}
                    className="glass-card group cursor-pointer overflow-hidden animate-fade-in hover:scale-105 transition-all duration-500"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="relative">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="default" className="bg-gradient-primary text-white border-0">
                          {track.matchPercentage}% Match
                        </Badge>
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
                          {track.title}
                        </h3>
                        <p className="text-muted-foreground mt-1">{track.artist}</p>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {track.genre}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4 mr-2" />
                          Like
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* New Releases */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-primary p-3 rounded-2xl">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display">New Releases</h2>
                  <p className="text-muted-foreground">Fresh music from your favorite artists</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newReleases.map((release, index) => (
                  <div
                    key={release.id}
                    className="glass-card group cursor-pointer hover:scale-105 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden rounded-t-3xl">
                      <img
                        src={release.image}
                        alt={release.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="gradient" size="icon" className="h-12 w-12">
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-bold group-hover:text-primary transition-colors">{release.title}</h3>
                      <p className="text-sm text-muted-foreground">{release.artist}</p>
                      <p className="text-xs text-muted-foreground">{release.releaseDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Trending Artists */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-primary p-3 rounded-2xl">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display">Trending Artists</h2>
                  <p className="text-muted-foreground">Artists gaining popularity this week</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {trendingArtists.map((artist, index) => (
                  <div
                    key={artist.id}
                    className="glass-card p-8 group cursor-pointer hover:scale-105 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {artist.name}
                          </h3>
                          <Badge variant="default" className="bg-green-500 text-white border-0 text-xs">
                            {artist.trending}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-1">{artist.genre}</p>
                        <p className="text-sm text-muted-foreground">{artist.monthlyListeners} monthly listeners</p>
                        <Button variant="outline" size="sm" className="mt-3">
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mood Playlists */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-primary p-3 rounded-2xl">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-display">Music for Every Mood</h2>
                  <p className="text-muted-foreground">Curated playlists to match your vibe</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {moodPlaylists.map((playlist, index) => (
                  <div
                    key={playlist.id}
                    className={`relative overflow-hidden rounded-3xl h-48 cursor-pointer hover:scale-105 transition-transform group animate-fade-in bg-gradient-to-br ${playlist.color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                    <div className="relative p-6 h-full flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{playlist.mood}</h3>
                        <p className="text-white/80 text-sm">{playlist.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm">{playlist.songCount} songs</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discover;