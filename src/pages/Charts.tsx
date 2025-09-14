import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Heart, MoreHorizontal, TrendingUp, TrendingDown, Minus, Crown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import oceanWavesImage from "@/assets/album-ocean-waves.jpg";
import electricPulseImage from "@/assets/album-electric-pulse.jpg";
import midnightDreamsImage from "@/assets/album-midnight-dreams.jpg";
import cityLightsImage from "@/assets/album-city-lights.jpg";

const Charts = () => {
  const [timeframe, setTimeframe] = useState("weekly");

  const topTracks = [
    {
      id: 1,
      position: 1,
      previousPosition: 2,
      title: "Ocean Waves",
      artist: "Serene Sounds",
      album: "Nature's Symphony",
      streams: "15.2M",
      duration: "3:45",
      image: oceanWavesImage,
      weeksOnChart: 8,
      peakPosition: 1
    },
    {
      id: 2,
      position: 2,
      previousPosition: 1,
      title: "Electric Pulse",
      artist: "Neon Beats",
      album: "Cybernetic Dreams",
      streams: "13.8M",
      duration: "4:12",
      image: electricPulseImage,
      weeksOnChart: 12,
      peakPosition: 1
    },
    {
      id: 3,
      position: 3,
      previousPosition: 4,
      title: "Midnight Dreams",
      artist: "Luna Ray",
      album: "Synthwave Nights",
      streams: "11.9M",
      duration: "3:28",
      image: midnightDreamsImage,
      weeksOnChart: 6,
      peakPosition: 2
    },
    {
      id: 4,
      position: 4,
      previousPosition: 3,
      title: "City Lights",
      artist: "Urban Echo",
      album: "Metropolitan",
      streams: "10.5M",
      duration: "3:55",
      image: cityLightsImage,
      weeksOnChart: 15,
      peakPosition: 1
    },
    {
      id: 5,
      position: 5,
      previousPosition: 6,
      title: "Digital Rain",
      artist: "Cyber Storm",
      album: "Matrix Dreams",
      streams: "9.8M",
      duration: "4:02",
      image: oceanWavesImage,
      weeksOnChart: 4,
      peakPosition: 5
    }
  ];

  const viralTracks = [
    {
      id: 1,
      title: "Sunset Vibes",
      artist: "Chill Master",
      streams: "2.1M",
      growth: "+847%",
      image: electricPulseImage
    },
    {
      id: 2,
      title: "Neon Dreams",
      artist: "Retro Wave",
      streams: "1.9M",
      growth: "+623%",
      image: midnightDreamsImage
    },
    {
      id: 3,
      title: "Future Bass",
      artist: "Bass Drop",
      streams: "1.7M",
      growth: "+445%",
      image: cityLightsImage
    }
  ];

  const getPositionChange = (current: number, previous: number) => {
    if (current < previous) {
      return { icon: TrendingUp, color: "text-green-500", change: `+${previous - current}` };
    } else if (current > previous) {
      return { icon: TrendingDown, color: "text-red-500", change: `-${current - previous}` };
    } else {
      return { icon: Minus, color: "text-muted-foreground", change: "0" };
    }
  };

  return (
    <div className="min-h-screen pb-32">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-primary p-4 rounded-2xl">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold font-display">
                    Music <span className="gradient-text">Charts</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    The most popular music right now
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                {["daily", "weekly", "monthly", "all-time"].map((period) => (
                  <Button
                    key={period}
                    variant={timeframe === period ? "gradient" : "outline"}
                    onClick={() => setTimeframe(period)}
                    className="capitalize"
                  >
                    {period.replace("-", " ")}
                  </Button>
                ))}
              </div>
            </div>

            <Tabs defaultValue="top-tracks" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 glass-card bg-background/20">
                <TabsTrigger value="top-tracks">Top Tracks</TabsTrigger>
                <TabsTrigger value="viral">Viral</TabsTrigger>
                <TabsTrigger value="artists">Top Artists</TabsTrigger>
                <TabsTrigger value="albums">Top Albums</TabsTrigger>
              </TabsList>

              <TabsContent value="top-tracks" className="space-y-6">
                {/* Chart Header */}
                <div className="glass-card p-8 rounded-3xl bg-gradient-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Top 50 Global</h2>
                      <p className="text-muted-foreground">Updated daily • {timeframe} chart</p>
                    </div>
                    <Button variant="gradient" size="lg">
                      <Play className="h-5 w-5 mr-2" />
                      Play All
                    </Button>
                  </div>
                </div>

                {/* Charts List */}
                <div className="space-y-2">
                  {topTracks.map((track, index) => {
                    const positionChange = getPositionChange(track.position, track.previousPosition);
                    const PositionIcon = positionChange.icon;
                    
                    return (
                      <div
                        key={track.id}
                        className="glass-card p-4 group hover:bg-background/40 transition-all duration-300 rounded-xl"
                      >
                        <div className="flex items-center gap-4">
                          {/* Position */}
                          <div className="flex items-center gap-3 w-16">
                            <span className={`font-bold text-xl ${track.position <= 3 ? 'gradient-text' : ''}`}>
                              {track.position}
                            </span>
                            <PositionIcon className={`h-4 w-4 ${positionChange.color}`} />
                          </div>

                          {/* Play Button (Hidden/Visible) */}
                          <div className="relative w-12">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Play className="h-5 w-5" />
                            </Button>
                          </div>

                          {/* Track Info */}
                          <img
                            src={track.image}
                            alt={track.title}
                            className="w-14 h-14 rounded-lg object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold truncate text-lg">{track.title}</h4>
                            <p className="text-muted-foreground truncate">{track.artist}</p>
                          </div>

                          {/* Album */}
                          <div className="hidden lg:block w-48 text-sm text-muted-foreground truncate">
                            {track.album}
                          </div>

                          {/* Streams */}
                          <div className="hidden md:block w-20 text-sm text-muted-foreground text-right">
                            {track.streams}
                          </div>

                          {/* Chart Stats */}
                          <div className="hidden xl:flex flex-col text-xs text-muted-foreground text-right w-20">
                            <span>Peak: #{track.peakPosition}</span>
                            <span>{track.weeksOnChart}w on chart</span>
                          </div>

                          {/* Duration & Actions */}
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                              <Heart className="h-4 w-4" />
                            </Button>
                            <span className="text-sm text-muted-foreground w-12 text-right">{track.duration}</span>
                            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="viral" className="space-y-6">
                <div className="glass-card p-8 rounded-3xl bg-gradient-primary/10">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Viral Tracks</h2>
                      <p className="text-muted-foreground">Songs gaining massive popularity</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {viralTracks.map((track, index) => (
                    <div
                      key={track.id}
                      className="glass-card group cursor-pointer hover:scale-105 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative overflow-hidden rounded-t-3xl">
                        <img
                          src={track.image}
                          alt={track.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant="default" className="bg-green-500 text-white border-0">
                            {track.growth}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button variant="gradient" size="icon" className="h-12 w-12">
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{track.title}</h3>
                        <p className="text-muted-foreground">{track.artist}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{track.streams} streams</span>
                          <Badge variant="outline" className="text-green-500 border-green-500">
                            Viral
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="artists" className="space-y-6">
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-4">Top Artists Chart</h3>
                  <p className="text-muted-foreground mb-8">Coming soon...</p>
                  <Button variant="gradient">
                    View Artists
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="albums" className="space-y-6">
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-4">Top Albums Chart</h3>
                  <p className="text-muted-foreground mb-8">Coming soon...</p>
                  <Button variant="gradient">
                    View Albums
                  </Button>
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

export default Charts;