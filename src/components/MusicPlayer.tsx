import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, MoreHorizontal, Repeat, Shuffle } from "lucide-react";
import oceanWavesImage from "@/assets/album-ocean-waves.jpg";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([23]);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border/40 p-4 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Current Track Info */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="relative group cursor-pointer">
              <img
                src={oceanWavesImage}
                alt="Ocean Waves"
                className="w-14 h-14 rounded-lg object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <Play className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-foreground truncate">Ocean Waves</h4>
              <p className="text-sm text-muted-foreground truncate">Serene Sounds</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`hover:text-accent ${isLiked ? 'text-accent' : ''}`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center gap-3 flex-1 max-w-md">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className={`hover:text-primary ${isShuffled ? 'text-primary' : ''}`}
                onClick={() => setIsShuffled(!isShuffled)}
              >
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button
                variant="gradient"
                size="icon"
                className="h-12 w-12 shadow-glow"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <SkipForward className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`hover:text-primary ${repeatMode ? 'text-primary' : ''}`}
                onClick={() => setRepeatMode(!repeatMode)}
              >
                <Repeat className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-3 w-full">
              <span className="text-xs text-muted-foreground">1:23</span>
              <Slider
                value={progress}
                onValueChange={setProgress}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground">3:45</span>
            </div>
          </div>

          {/* Volume & More */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="w-24"
              />
            </div>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;