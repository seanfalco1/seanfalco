import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Calendar, Clock } from "lucide-react";

const mixes = [
  {
    id: 1,
    title: "Launch",
    duration: "68:42",
    date: "2024-01-15",
    genre: "Progressive House",
    plays: "15.2K"
  },
  {
    id: 2,
    title: "Evolve",
    duration: "72:18",
    date: "2024-01-08", 
    genre: "Progressive House",
    plays: "22.8K"
  },
  {
    id: 3,
    title: "Phase",
    duration: "85:33",
    date: "2023-12-22",
    genre: "Progressive House",
    plays: "31.5K"
  }
];

const Mixes = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Latest Mixes
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 shadow-glow-accent"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into the latest sonic explorations, carefully crafted to take you on an unforgettable journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mixes.map((mix) => (
            <Card key={mix.id} className="bg-card border-border hover:border-neon-blue transition-colors duration-300 group">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-primary rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-background/20 flex items-center justify-center group-hover:bg-background/10 transition-colors duration-300">
                    <Button 
                      size="icon" 
                      className="w-16 h-16 bg-background/20 hover:bg-background/30 text-foreground border-0 shadow-glow-primary transform group-hover:scale-110 transition-all duration-300"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {mix.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{mix.genre}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {mix.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(mix.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-neon-blue font-semibold">{mix.plays} plays</span>
                  <Button variant="ghost" size="sm" className="hover:text-neon-blue">
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background font-semibold px-8 py-6 transition-all duration-300"
          >
            View All Mixes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mixes;
