import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import djHero from "@/assets/logo.png";

const Hero = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgHeight, setImgHeight] = useState(0);

  // Update image height on load and window resize
  useEffect(() => {
    const updateHeight = () => {
      if (imgRef.current) {
        setImgHeight(imgRef.current.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-start overflow-hidden w-full relative">
      {/* Grey Sean Falco Image */}
      <div className="w-full relative">
        <img
          ref={imgRef}
          src={djHero}
          alt="Sean Falco Logo"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content BELOW the image */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-4">
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          Elevating dance floors worldwide with cutting-edge electronic beats and unforgettable experiences
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Latest Mixes
          </Button>
        </div>
      </div>

      {/* Floating Elements (Dynamic) */}
      {imgHeight > 0 && (
        <>
          <div
            className="absolute w-4 h-4 bg-neon-blue rounded-full shadow-glow-primary animate-pulse"
            style={{ top: imgHeight * 0.1, left: "5%" }}
          />
          <div
            className="absolute w-6 h-6 bg-neon-purple rounded-full shadow-glow-secondary animate-pulse"
            style={{ bottom: imgHeight * 0.1, right: "5%" }}
          />
          <div
            className="absolute w-3 h-3 bg-electric-cyan rounded-full shadow-glow-accent animate-pulse"
            style={{ top: imgHeight * 0.5, right: "15%" }}
          />
        </>
      )}
    </section>
  );
};

export default Hero;
