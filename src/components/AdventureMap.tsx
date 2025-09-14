import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star, Trophy, Medal, Lock, Play, RotateCcw } from "lucide-react";
import { useState } from "react";

interface Chapter {
  id: number;
  title: string;
  icon: string;
  progress: number;
  concepts: string[];
  completed: boolean;
  badge?: string;
}

const chapters: Chapter[] = [
  { id: 1, title: "Knowing Our Numbers", icon: "🔢", progress: 66, concepts: ["Number Forge", "Stone Steps", "Village Records"], completed: false },
  { id: 2, title: "Playing with Numbers", icon: "🎲", progress: 100, concepts: ["Spell the Formula", "Divisibility Detective", "Festival Planner", "Bell Tower Puzzle"], completed: true, badge: "🏅" },
  { id: 3, title: "Basic Geometry", icon: "📐", progress: 33, concepts: ["GeoLab", "Island Explorer", "Angle Workshop"], completed: false },
  { id: 4, title: "Whole Numbers", icon: "🐸", progress: 0, concepts: ["Frog Jump", "Math Machine"], completed: false },
  { id: 5, title: "Fractions", icon: "🍰", progress: 0, concepts: ["Fraction Kitchen", "Fraction Mirror", "Ribbon Relay"], completed: false },
  { id: 6, title: "Decimals", icon: "🚢", progress: 0, concepts: ["Decimal Dock", "Shopkeeper's Challenge"], completed: false },
  { id: 7, title: "Ratio, Proportion & Percentage", icon: "🏪", progress: 0, concepts: ["Market Tycoon", "Discount Hunter"], completed: false },
  { id: 8, title: "Integers", icon: "🏔️", progress: 0, concepts: ["Mountain Climb", "Thermometer Quest"], completed: false },
  { id: 9, title: "Geometry Shapes", icon: "⭐", progress: 0, concepts: ["Triangle Theater", "Orbit Builder"], completed: false },
  { id: 10, title: "Algebra", icon: "⚖️", progress: 0, concepts: ["Balance Scale", "Power Garden"], completed: false },
  { id: 11, title: "Mensuration", icon: "📏", progress: 0, concepts: ["Fence Builder", "Tile Trader"], completed: false },
  { id: 12, title: "Data Handling", icon: "📊", progress: 0, concepts: ["Survey Studio", "Chart Builder"], completed: false },
  { id: 13, title: "Practical Geometry", icon: "🎯", progress: 0, concepts: ["Ruler Rally", "Bisector Quest", "Gatekeeper", "Archer's Aim", "Mirror Draw", "Perpendicular Beacon"], completed: false },
];

const ChapterModal = ({ chapter, isOpen, onClose }: { chapter: Chapter | null; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen || !chapter) return null;

  const getActionButton = () => {
    if (chapter.progress === 0) {
      return (
        <Button variant="hero" size="lg" className="w-full">
          <Play className="mr-2 h-5 w-5" />
          Start Adventure
        </Button>
      );
    } else if (chapter.progress === 100) {
      return (
        <Button variant="golden" size="lg" className="w-full">
          <RotateCcw className="mr-2 h-5 w-5" />
          Retake Challenge
        </Button>
      );
    } else {
      return (
        <Button variant="adventure" size="lg" className="w-full">
          <Play className="mr-2 h-5 w-5" />
          Resume Journey
        </Button>
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-card/95 backdrop-blur-md border-2 border-primary/20">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">{chapter.icon}</div>
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            Chapter {chapter.id}: {chapter.title}
            {chapter.badge && <span className="text-2xl">{chapter.badge}</span>}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{chapter.progress}%</span>
            </div>
            <Progress value={chapter.progress} className="h-3" />
            <p className="text-sm text-muted-foreground mt-1">
              {Math.floor(chapter.progress / (100 / chapter.concepts.length))}/{chapter.concepts.length} Concepts Completed
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Games & Concepts:</h4>
            <div className="space-y-2">
              {chapter.concepts.map((concept, index) => {
                const isCompleted = index < Math.floor(chapter.progress / (100 / chapter.concepts.length));
                const isCurrently = index === Math.floor(chapter.progress / (100 / chapter.concepts.length)) && chapter.progress > 0 && chapter.progress < 100;
                
                return (
                  <div key={concept} className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {isCompleted ? (
                        <>
                          <Star className="h-4 w-4 fill-golden text-golden" />
                          <Star className="h-4 w-4 fill-golden text-golden" />
                          <Star className="h-4 w-4 fill-golden text-golden" />
                        </>
                      ) : isCurrently ? (
                        <>
                          <Star className="h-4 w-4 fill-golden text-golden" />
                          <Star className="h-4 w-4 fill-golden text-golden" />
                          <Star className="h-4 w-4 text-muted-foreground" />
                        </>
                      ) : (
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <span className={isCompleted ? "line-through text-muted-foreground" : isCurrently ? "font-semibold text-primary" : "text-muted-foreground"}>
                      {concept}
                    </span>
                    {isCompleted && <Badge variant="secondary" className="text-xs">Completed</Badge>}
                    {isCurrently && <Badge variant="outline" className="text-xs">In Progress</Badge>}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex gap-3">
            {getActionButton()}
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const AdventureMap = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChapterClick = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-adventure p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
          Your Adventure Map
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Embark on an epic journey through the world of mathematics. Each chapter brings new challenges and rewards!
        </p>
        
        {/* Player Stats */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1,250</div>
            <div className="text-sm text-muted-foreground">XP Points</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-golden">3</div>
            <div className="text-sm text-muted-foreground">Badges Earned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">18</div>
            <div className="text-sm text-muted-foreground">Games Completed</div>
          </div>
        </div>
      </div>

      {/* Adventure Path */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Curved Path Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ height: `${chapters.length * 200}px` }}>
            <path
              d={`M 200 100 Q 600 150, 400 300 Q 100 450, 500 600 Q 800 750, 300 900 Q 50 1050, 600 1200 Q 900 1350, 400 1500 Q 100 1650, 700 1800 Q 950 1950, 350 2100 Q 50 2250, 650 2400 Q 900 2550, 300 2700`}
              stroke="hsl(var(--primary) / 0.3)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
          </svg>

          {/* Chapter Nodes */}
          <div className="relative space-y-32">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.id}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start ml-32' : 'justify-end mr-32'}`}
                style={{ minHeight: '200px' }}
              >
                <div
                  className={`relative group cursor-pointer transition-transform hover:scale-110 ${
                    chapter.progress === 0 ? 'animate-pulse-glow' : chapter.completed ? 'animate-float' : ''
                  }`}
                  onClick={() => handleChapterClick(chapter)}
                >
                  {/* Chapter Circle */}
                  <div className={`
                    w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold
                    border-4 transition-all duration-300
                    ${chapter.completed 
                      ? 'bg-gradient-gold border-golden shadow-golden' 
                      : chapter.progress > 0 
                        ? 'bg-gradient-success border-success shadow-magic' 
                        : 'bg-gradient-magic border-primary shadow-magic'
                    }
                  `}>
                    <span className="text-2xl">{chapter.icon}</span>
                    {chapter.completed && (
                      <div className="absolute -top-2 -right-2 text-xl">
                        {chapter.badge}
                      </div>
                    )}
                  </div>
                  
                  {/* Chapter Number */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {chapter.id}
                  </div>
                  
                  {/* Chapter Info Card */}
                  <div className={`
                    absolute top-28 ${index % 2 === 0 ? 'left-0' : 'right-0'} 
                    bg-card/90 backdrop-blur-md p-4 rounded-lg shadow-magic border-2 border-primary/20
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10
                    w-64
                  `}>
                    <h3 className="font-semibold text-card-foreground mb-2">
                      {chapter.title}
                    </h3>
                    <Progress value={chapter.progress} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      {chapter.progress}% Complete • {chapter.concepts.length} Games
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Achievement */}
        <div className="text-center mt-20 mb-12">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-gold rounded-full flex items-center justify-center text-6xl shadow-golden animate-pulse-glow">
              🏆
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-golden text-golden-foreground px-4 py-2 rounded-full font-bold text-sm">
              STEM Legend Trophy
            </div>
          </div>
          <p className="text-muted-foreground mt-6 max-w-md mx-auto">
            Complete all 13 chapters to earn the ultimate STEM Legend Trophy and prove your mathematical mastery!
          </p>
        </div>
      </div>

      <ChapterModal 
        chapter={selectedChapter} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
};

export default AdventureMap;