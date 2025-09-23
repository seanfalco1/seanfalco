import { Button } from "@/components/ui/button";
import djHero from "@/assets/dj-sean-hero.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${djHero})`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Sean Falco</h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 shadow-glow-primary"></div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Elevating dance floors worldwide with cutting-edge electronic beats and unforgettable experiences
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105">
            Book Now
          </Button>
          <Button variant="outline" size="lg" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105">
            Latest Mixes
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-neon-blue rounded-full shadow-glow-primary animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-neon-purple rounded-full shadow-glow-secondary animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-electric-cyan rounded-full shadow-glow-accent animate-pulse delay-500"></div>
    </section>;
};
export default Hero;
