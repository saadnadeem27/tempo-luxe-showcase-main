import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Edit3, Music, Heart, Users, Play, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Profile = () => {
  const recentlyPlayed = [
    { id: 1, title: "Midnight Dreams", artist: "Luna Ray", duration: "3:45" },
    { id: 2, title: "Electric Pulse", artist: "Neon Beats", duration: "4:12" },
    { id: 3, title: "Ocean Waves", artist: "Serene Sounds", duration: "2:58" }
  ];

  const userStats = [
    { label: "Songs Played", value: "1,247", icon: Music },
    { label: "Hours Listened", value: "156", icon: Clock },
    { label: "Playlists", value: "12", icon: Heart },
    { label: "Following", value: "45", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {/* Profile Header */}
            <div className="glass-card p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Users className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </div>
                  <Button 
                    variant="gradient" 
                    size="icon" 
                    className="absolute -bottom-2 -right-2 h-10 w-10"
                  >
                    <Edit3 className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold font-display mb-2">Music Lover</h1>
                    <p className="text-muted-foreground text-lg">Premium Member since 2024</p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="default" className="bg-gradient-primary text-white border-0">
                      Premium
                    </Badge>
                    <Badge variant="outline">Music Enthusiast</Badge>
                    <Badge variant="outline">Early Adopter</Badge>
                  </div>
                </div>
                
                <Button variant="premium" size="lg">
                  <Settings className="h-5 w-5 mr-2" />
                  Settings
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {userStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="glass-card p-6 text-center animate-fade-in hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Recently Played */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display">Recently Played</h2>
                <div className="space-y-4">
                  {recentlyPlayed.map((track, index) => (
                    <div 
                      key={track.id}
                      className="glass-card p-4 hover:scale-[1.02] transition-all duration-300 group animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-primary p-3 rounded-xl">
                          <Music className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold group-hover:text-primary transition-colors">
                            {track.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{track.artist}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{track.duration}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Account Settings */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display">Quick Settings</h2>
                <div className="space-y-4">
                  <div className="glass-card p-6 space-y-4">
                    <h3 className="text-xl font-bold">Audio Quality</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Streaming Quality</span>
                        <Badge variant="default" className="bg-gradient-primary text-white border-0">
                          Ultra HD
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Download Quality</span>
                        <Badge variant="outline">High</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-6 space-y-4">
                    <h3 className="text-xl font-bold">Subscription</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Plan</span>
                        <Badge variant="default" className="bg-gradient-primary text-white border-0">
                          Premium
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Renewal</span>
                        <span className="text-sm">March 15, 2025</span>
                      </div>
                    </div>
                    <Button variant="premium" className="w-full">
                      Manage Subscription
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;