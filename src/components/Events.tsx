import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Neon Festival 2024",
    venue: "Electric Arena",
    city: "Miami, FL",
    date: "2024-03-15",
    time: "22:00",
    capacity: "5,000",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Underground Sessions",
    venue: "The Warehouse",
    city: "Berlin, Germany", 
    date: "2024-03-28",
    time: "23:30",
    capacity: "1,200",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Sunset Vibes",
    venue: "Rooftop Lounge",
    city: "Ibiza, Spain",
    date: "2024-04-10",
    time: "19:00",
    capacity: "800",
    status: "upcoming"
  }
];

const Events = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 shadow-glow-primary"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the energy at these exclusive events. Limited tickets available.
          </p>
        </div>
        
        <div className="space-y-6 mb-12">
          {events.map((event) => (
            <Card key={event.id} className="bg-card border-border hover:border-neon-blue transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2 group-hover:text-neon-blue transition-colors duration-300">
                          {event.title}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{event.venue}, {event.city}</span>
                          </div>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>{event.capacity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="bg-gradient-secondary px-3 py-1 rounded-full text-sm font-semibold text-background mb-3">
                          {event.status.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300"
                    >
                      More Info
                    </Button>
                    <Button 
                      className="bg-gradient-primary text-primary-foreground shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105"
                    >
                      Get Tickets
                    </Button>
                  </div>
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
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;