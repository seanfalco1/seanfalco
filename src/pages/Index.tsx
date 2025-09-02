import Hero from "@/components/Hero";
import About from "@/components/About";
import Mixes from "@/components/Mixes";
import Events from "@/components/Events";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Mixes />
      <Events />
      <Contact />
    </main>
  );
};

export default Index;
