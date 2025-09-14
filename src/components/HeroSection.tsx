import { Button } from "@/components/ui/button";
import { GraduationCap, Users } from "lucide-react";
import heroImage from "@/assets/hero-adventure.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float">🧙‍♂️</div>
      <div className="absolute top-40 right-20 text-5xl animate-float" style={{ animationDelay: '1s' }}>⭐</div>
      <div className="absolute bottom-40 left-20 text-4xl animate-float" style={{ animationDelay: '2s' }}>🏆</div>
      <div className="absolute top-60 left-1/4 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🎯</div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-7xl font-black mb-6 bg-gradient-hero bg-clip-text text-transparent animate-pulse-glow">
            MathQuest
          </h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The STEM Legend Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Welcome, future math wizard! Your epic journey through the world of numbers begins here. 
            Solve puzzles, play exciting games, and master Class 6 Mathematics to become a true STEM Legend.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            className="group relative overflow-hidden"
          >
            <GraduationCap className="mr-3 h-6 w-6" />
            Student Login
            <div className="absolute inset-0 bg-gradient-magic opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="golden" 
            size="xl"
            className="group relative overflow-hidden"
          >
            <Users className="mr-3 h-6 w-6" />
            Teacher Login
            <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Button>
        </div>
        
        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Gamified Learning</h3>
            <p className="text-muted-foreground">Interactive games and challenges make math fun and engaging</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏅</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Achievement System</h3>
            <p className="text-muted-foreground">Earn stars, badges, and trophies as you master each concept</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Adventure Map</h3>
            <p className="text-muted-foreground">Follow a magical learning path through 13 exciting chapters</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;