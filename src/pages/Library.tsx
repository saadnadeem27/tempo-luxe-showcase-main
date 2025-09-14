import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, MoreHorizontal, Clock, Download, Filter, Grid, List } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import oceanWavesImage from "@/assets/album-ocean-waves.jpg";
import electricPulseImage from "@/assets/album-electric-pulse.jpg";
import midnightDreamsImage from "@/assets/album-midnight-dreams.jpg";
import cityLightsImage from "@/assets/album-city-lights.jpg";
import chillVibesImage from "@/assets/playlist-chill-vibes.jpg";
import workoutBeatsImage from "@/assets/playlist-workout-beats.jpg";

const Library = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  const likedSongs = [
    {
      id: 1,
      title: "Ocean Waves",
      artist: "Serene Sounds",
      album: "Nature's Symphony",
      duration: "3:45",
      image: oceanWavesImage,
      dateAdded: "2 days ago"
    },
    {
      id: 2,
      title: "Electric Pulse",
      artist: "Neon Beats",
      album: "Cybernetic Dreams",
      duration: "4:12",
      image: electricPulseImage,
      dateAdded: "1 week ago"
    },
    {
      id: 3,
      title: "Midnight Dreams",
      artist: "Luna Ray",
      album: "Synthwave Nights",
      duration: "3:28",
      image: midnightDreamsImage,
      dateAdded: "2 weeks ago"
    },
    {
      id: 4,
      title: "City Lights",
      artist: "Urban Echo",
      album: "Metropolitan",
      duration: "3:55",
      image: cityLightsImage,
      dateAdded: "1 month ago"
    }
  ];

  const recentlyPlayed = [
    {
      id: 1,
      title: "Ocean Waves",
      artist: "Serene Sounds",
      image: oceanWavesImage,
      playedAt: "2 hours ago"
    },
    {
      id: 2,
      title: "Electric Pulse",
      artist: "Neon Beats",
      image: electricPulseImage,
      playedAt: "Yesterday"
    },
    {
      id: 3,
      title: "Midnight Dreams",
      artist: "Luna Ray",
      image: midnightDreamsImage,
      playedAt: "3 days ago"
    }
  ];

  const myPlaylists = [
    {
      id: 1,
      name: "Chill Vibes",
      songCount: 45,
      image: chillVibesImage,
      description: "Perfect for relaxing"
    },
    {
      id: 2,
      name: "Workout Beats",
      songCount: 32,
      image: workoutBeatsImage,
      description: "High-energy tracks"
    }
  ];

  const downloads = [
    {
      id: 1,
      title: "Ocean Waves",
      artist: "Serene Sounds",
      size: "4.2 MB",
      image: oceanWavesImage,
      quality: "320 kbps"
    },
    {
      id: 2,
      title: "Electric Pulse",
      artist: "Neon Beats",
      size: "5.1 MB",
      image: electricPulseImage,
      quality: "320 kbps"
    }
  ];

  return (
    <div className="min-h-screen pb-32">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-5xl font-bold font-display">
                Your <span className="gradient-text">Library</span>
              </h1>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="lg">
                  <Filter className="h-5 w-5 mr-2" />
                  Filter
                </Button>
                <div className="flex items-center bg-background/20 rounded-lg p-1">
                  <Button
                    variant={viewMode === "list" ? "gradient" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "grid" ? "gradient" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Tabs defaultValue="liked" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5 glass-card bg-background/20">
                <TabsTrigger value="liked">Liked Songs</TabsTrigger>
                <TabsTrigger value="recent">Recently Played</TabsTrigger>
                <TabsTrigger value="playlists">My Playlists</TabsTrigger>
                <TabsTrigger value="downloads">Downloads</TabsTrigger>
                <TabsTrigger value="artists">Following</TabsTrigger>
              </TabsList>

              <TabsContent value="liked" className="space-y-6">
                <div className="glass-card p-8 rounded-3xl bg-gradient-primary/10">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Heart className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Liked Songs</h2>
                      <p className="text-muted-foreground">{likedSongs.length} songs</p>
                      <Button variant="gradient" size="lg" className="mt-4">
                        <Play className="h-5 w-5 mr-2" />
                        Play All
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {likedSongs.map((song, index) => (
                    <div
                      key={song.id}
                      className="glass-card p-4 group hover:bg-background/40 transition-all duration-300 rounded-xl"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground w-6 text-center group-hover:hidden">
                          {index + 1}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-6 h-6 hidden group-hover:flex"
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                        <img
                          src={song.image}
                          alt={song.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold truncate">{song.title}</h4>
                          <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                        </div>
                        <div className="hidden md:block text-sm text-muted-foreground">
                          {song.album}
                        </div>
                        <div className="hidden md:block text-sm text-muted-foreground">
                          {song.dateAdded}
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 text-accent">
                            <Heart className="h-4 w-4 fill-current" />
                          </Button>
                          <span className="text-sm text-muted-foreground w-12">{song.duration}</span>
                          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentlyPlayed.map((item) => (
                      <div key={item.id} className="glass-card p-6 group cursor-pointer hover:scale-105 transition-all duration-300">
                        <div className="relative mb-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full aspect-square rounded-xl object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                            <Button variant="gradient" size="icon" className="h-16 w-16 shadow-glow">
                              <Play className="h-8 w-8" />
                            </Button>
                          </div>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground mb-2">{item.artist}</p>
                        <p className="text-sm text-muted-foreground">{item.playedAt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="playlists" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Playlists</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myPlaylists.map((playlist) => (
                      <div key={playlist.id} className="glass-card p-6 group cursor-pointer hover:scale-105 transition-all duration-300">
                        <div className="relative mb-4">
                          <img
                            src={playlist.image}
                            alt={playlist.name}
                            className="w-full aspect-square rounded-xl object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                            <Button variant="gradient" size="icon" className="h-16 w-16 shadow-glow">
                              <Play className="h-8 w-8" />
                            </Button>
                          </div>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{playlist.name}</h3>
                        <p className="text-muted-foreground mb-2">{playlist.description}</p>
                        <p className="text-sm text-muted-foreground">{playlist.songCount} songs</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="downloads" className="space-y-6">
                <div className="glass-card p-8 rounded-3xl bg-gradient-primary/10">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Download className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Downloaded Music</h2>
                      <p className="text-muted-foreground">{downloads.length} songs available offline</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {downloads.map((download) => (
                    <div
                      key={download.id}
                      className="glass-card p-4 group hover:bg-background/40 transition-all duration-300 rounded-xl"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={download.image}
                          alt={download.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold truncate">{download.title}</h4>
                          <p className="text-sm text-muted-foreground truncate">{download.artist}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {download.quality}
                        </Badge>
                        <div className="text-sm text-muted-foreground">{download.size}</div>
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="artists" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Following</h2>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">You're not following any artists yet</p>
                    <Button variant="gradient">
                      Discover Artists
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Library;