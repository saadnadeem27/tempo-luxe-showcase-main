import { Button } from "@/components/ui/button";
import { Music, Menu, Play, User, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Browse", href: "/browse" },
    { name: "Playlists", href: "/playlists" },
    { name: "Artists", href: "/artists" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 navbar-glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2.5 rounded-xl shadow-lg">
              <Music className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text font-display">SoundWave</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-all duration-300 font-medium hover:scale-105 ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground/90 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground/90 hover:text-primary hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/profile" className="hidden md:block">
              <Button variant="ghost" size="icon" className="text-foreground/90 hover:text-primary">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="premium" size="sm" className="hidden md:flex">
              <Play className="h-4 w-4" />
              Listen Now
            </Button>
            <Button variant="gradient" size="sm" className="font-semibold">
              Get Premium
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-20">
            <nav className="flex flex-col space-y-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-3xl font-bold transition-colors ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground/90 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-foreground/90 hover:text-primary transition-colors"
              >
                Profile
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;