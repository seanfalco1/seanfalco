import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const mixes = [
  {
    id: 1,
    title: "Presidential",
    duration: "1:04:03",
    mixcloudUrl: "https://www.mixcloud.com/seanfalco/sean-falco-presidential/",
    thumbnail: "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/1/f/5/bf01-2d79-4134-9418-f366a738b1e0",
    genre: "Progressive EDM / Electro House",
    date: "2025-01-20"
  },
  {
    id: 2,
    title: "Dragon",
    duration: "1:05:16",
    mixcloudUrl: "https://www.mixcloud.com/seanfalco/sean-falco-dragon/",
    thumbnail: "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/6/f/f/f/6cc7-06dd-4963-93c3-6685badb61b1",
    genre: "Progressive EDM / House",
    date: "2025-01-20"
  },
  {
    id: 3,
    title: "Helios",
    duration: "1:08:16",
    mixcloudUrl: "https://www.mixcloud.com/seanfalco/sean-falco-helios/",
    thumbnail: "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/d/e/4/6/32e5-9d9e-4fea-9dfb-525da3011de2",
    genre: "Progressive EDM / Trance",
    date: "2025-01-20"
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
            <Card key={mix.id} className="bg-card border-border hover:border-neon-blue transition-colors duration-300 group overflow-hidden">
              <CardContent className="p-0">
                {/* Mixcloud Embed */}
                <div className="relative">
                  <iframe
                    width="100%"
                    height="120"
                    src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=${encodeURIComponent(mix.mixcloudUrl)}`}
                    frameBorder="0"
                    className="w-full"
                    title={mix.title}
                  />
                </div>

                {/* Thumbnail */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={mix.thumbnail} 
                    alt={mix.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Mix Info */}
                <div className="p-6">
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
                  
                  <Button 
                    variant="outline"
                    size="sm" 
                    className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background"
                    onClick={() => window.open(mix.mixcloudUrl, '_blank')}
                  >
                    View on Mixcloud
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
            onClick={() => window.open('https://www.mixcloud.com/seanfalco/', '_blank')}
          >
            View All Mixes on Mixcloud
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mixes;
