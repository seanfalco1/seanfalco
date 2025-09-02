import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram, Twitter, Youtube, Facebook } from "lucide-react";
const Contact = () => {
  return <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8 shadow-glow-secondary"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to create an unforgettable experience? Let's discuss your event.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">Booking Inquiry</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background border-border" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Event Date</label>
                  <Input type="date" className="bg-background border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Venue</label>
                  <Input placeholder="Event location" className="bg-background border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Tell me about your event..." rows={5} className="bg-background border-border resize-none" />
                </div>
                
                <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold py-6 shadow-glow-primary hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info & Social */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-neon-purple">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-neon-blue" />
                    <span>djseanfalco@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-neon-blue" />
                    <span>+1 (301) 775-3698</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-electric-cyan">Follow the Journey</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300 justify-start">
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300 justify-start">
                    <Twitter className="w-5 h-5 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-background transition-all duration-300 justify-start">
                    <Youtube className="w-5 h-5 mr-2" />
                    YouTube
                  </Button>
                  <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-background transition-all duration-300 justify-start">
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-gradient-accent p-1 rounded-lg">
              <Card className="bg-background border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Management</h3>
                  <p className="text-muted-foreground mb-2">Stellar Music Group</p>
                  <p className="text-sm text-muted-foreground">management@stellarmusicgroup.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;