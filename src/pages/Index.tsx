import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AdventureMap from "@/components/AdventureMap";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'student' | 'teacher'>('landing');

  if (currentView === 'student') {
    return <AdventureMap />;
  }

  if (currentView === 'teacher') {
    return (
      <div className="min-h-screen bg-gradient-adventure flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Teacher Dashboard
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Coming Soon!</p>
          <button 
            onClick={() => setCurrentView('landing')}
            className="text-primary hover:text-primary-glow underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div onClick={() => setCurrentView('student')}>
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;
