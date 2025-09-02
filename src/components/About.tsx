const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            About DJ Nexus
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8 shadow-glow-secondary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience in the electronic music scene, DJ Nexus has become 
              synonymous with innovation and energy. From underground clubs to massive festivals, 
              every performance is a journey through sound that transcends boundaries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Specializing in progressive house, techno, and experimental electronic music, 
              DJ Nexus creates immersive experiences that connect with audiences on a deeper level.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="text-3xl font-bold text-neon-blue mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Shows Played</div>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-lg">
                <div className="text-3xl font-bold text-neon-purple mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Cities Visited</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-primary rounded-2xl p-1">
              <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-accent rounded-full mx-auto mb-4 shadow-glow-accent"></div>
                  <h3 className="text-xl font-semibold mb-2">Music is Life</h3>
                  <p className="text-muted-foreground">Creating moments that last forever</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;