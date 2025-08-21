import { Button } from '@/components/ui/button';
import { Play, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with cosmic gradient and stars */}
      <div className="absolute inset-0 bg-cosmic-gradient">
        {/* Animated stars */}
        <div className="absolute inset-0 opacity-70">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-cosmic-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Giant peanut shell with Dyson glow */}
      <div className="absolute inset-0 flex items-center justify-center dyson-glow-effect">
        <div className="relative w-4/5 max-w-4xl">
          <img 
            src="/images/peanut-shell.png" 
            alt="Giant cracked peanut shell floating in space" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="cosmic-title text-4xl md:text-6xl lg:text-7xl mb-4 font-bold">
          Sophon
        </h1>
        <h2 className="cosmic-subtitle text-xl md:text-2xl lg:text-3xl mb-8">
          World in a Peanut
        </h2>
        <p className="text-surface-foreground max-w-2xl mx-auto mb-8 text-lg">
          A surreal cosmic journey where reality bends and worlds collide. 
          Explore the universe within a cracked peanut shell.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="sophon-button bg-accent hover:bg-accent-600 text-accent-foreground flex items-center space-x-2 px-6 py-6">
            <Play className="h-5 w-5" />
            <span>Watch Trailer</span>
          </Button>
          <Button variant="outline" className="border-primary-300 text-primary-300 hover:bg-primary-900/30 flex items-center space-x-2 px-6 py-6">
            <span>Learn More</span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-8 w-8 text-accent rotate-90" />
      </div>
    </div>
  );
};

export default HeroSection;
