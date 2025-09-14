import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search as SearchIcon, Filter, Play, Heart, MoreHorizontal, Clock, Users, Music } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import oceanWavesImage from "@/assets/album-ocean-waves.jpg";
import electricPulseImage from "@/assets/album-electric-pulse.jpg";
import lunaRayImage from "@/assets/artist-luna-ray.jpg";
import neonBeatsImage from "@/assets/artist-neon-beats.jpg";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "tracks", label: "Tracks" },
    { id: "artists", label: "Artists" },
    { id: "albums", label: "Albums" },
    { id: "playlists", label: "Playlists" }
  ];

  const searchResults = {
    tracks: [
      {
        id: 1,
        title: "Ocean Waves",
        artist: "Serene Sounds",
        album: "Nature's Symphony",
        duration: "3:45",
        image: oceanWavesImage
      },
      {
        id: 2,
        title: "Electric Pulse",
        artist: "Neon Beats",
        album: "Cybernetic Dreams",
        duration: "4:12",
        image: electricPulseImage
      }
    ],
    artists: [
      {
        id: 1,
        name: "Luna Ray",
        genre: "Synthwave",
        followers: "2.5M",
        image: lunaRayImage,
        verified: true
      },
      {
        id: 2,
        name: "Neon Beats",
        genre: "Electronic",
        followers: "1.8M",
        image: neonBeatsImage,
        verified: true
      }
    ]
  };

  const trendingSearches = [
    "Synthwave", "Chill Beats", "Luna Ray", "Electronic", "Ambient Music", "Focus Music"
  ];

  return (
    <div className="min-h-screen pb-32">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {/* Search Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-2xl">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search for songs, artists, albums..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg glass-card border-0 bg-background/20"
                  />
                </div>
                <Button variant="outline" size="lg" className="h-14">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "gradient" : "outline"}
                    onClick={() => setActiveFilter(filter.id)}
                    className="whitespace-nowrap"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            {searchQuery ? (
              /* Search Results */
              <div className="space-y-8">
                {/* Top Result */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Top Result</h2>
                  <Card className="glass-card p-6 max-w-md">
                    <div className="flex items-center gap-4">
                      <img
                        src={oceanWavesImage}
                        alt="Ocean Waves"
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">Ocean Waves</h3>
                        <p className="text-muted-foreground">Song • Serene Sounds</p>
                        <Button variant="gradient" size="sm" className="mt-2">
                          <Play className="h-4 w-4 mr-2" />
                          Play
                        </Button>
                      </div>
                    </div>
                  </Card>
                </section>

                {/* Tracks */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Songs</h2>
                  <div className="space-y-2">
                    {searchResults.tracks.map((track, index) => (
                      <div
                        key={track.id}
                        className="glass-card p-4 group hover:bg-background/40 transition-all duration-300 rounded-xl"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img
                              src={track.image}
                              alt={track.title}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                              <Play className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold truncate">{track.title}</h4>
                            <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
                          </div>
                          <div className="hidden md:block text-sm text-muted-foreground">
                            {track.album}
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                              <Heart className="h-4 w-4" />
                            </Button>
                            <span className="text-sm text-muted-foreground w-12">{track.duration}</span>
                            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Artists */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Artists</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {searchResults.artists.map((artist) => (
                      <Card key={artist.id} className="glass-card p-6 text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                        <div className="relative mx-auto mb-4 w-24 h-24">
                          <img
                            src={artist.image}
                            alt={artist.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2">
                            <h3 className="font-bold">{artist.name}</h3>
                            {artist.verified && (
                              <Badge variant="default" className="bg-gradient-primary text-white border-0 text-xs">
                                ✓
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{artist.genre}</p>
                          <p className="text-xs text-muted-foreground">{artist.followers} followers</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Follow
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              /* Browse Categories */
              <div className="space-y-8">
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold">Browse All</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      { name: "Pop", color: "bg-gradient-to-br from-pink-500 to-purple-600" },
                      { name: "Hip-Hop", color: "bg-gradient-to-br from-orange-500 to-red-600" },
                      { name: "Electronic", color: "bg-gradient-to-br from-blue-500 to-cyan-600" },
                      { name: "Rock", color: "bg-gradient-to-br from-gray-600 to-gray-800" },
                      { name: "Jazz", color: "bg-gradient-to-br from-yellow-500 to-orange-600" },
                      { name: "Classical", color: "bg-gradient-to-br from-indigo-500 to-purple-600" },
                      { name: "R&B", color: "bg-gradient-to-br from-green-500 to-teal-600" },
                      { name: "Country", color: "bg-gradient-to-br from-amber-500 to-yellow-600" }
                    ].map((genre) => (
                      <div
                        key={genre.name}
                        className={`${genre.color} rounded-xl p-6 h-32 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform group`}
                      >
                        <h3 className="text-white font-bold text-lg">{genre.name}</h3>
                        <Music className="absolute bottom-4 right-4 h-8 w-8 text-white/80 group-hover:text-white transition-colors" />
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Trending Searches</h2>
                  <div className="flex flex-wrap gap-3">
                    {trendingSearches.map((search, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => setSearchQuery(search)}
                      >
                        {search}
                      </Badge>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;