import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "Thank you for reaching out. We'll respond within 24 hours."
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or rituals? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-elegant">
              <h2 className="font-serif text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-botanical-sage/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-botanical-sage" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-2">
                      For inquiries about products, orders, or partnerships
                    </p>
                    <a 
                      href="mailto:hello@amaiabotanic.com"
                      className="text-primary hover:underline font-medium"
                    >
                      hello@amaiabotanic.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-botanical-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-botanical-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Based in Paris, France
                      <br />
                      Home of botanical elegance
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <h3 className="font-serif text-lg font-semibold mb-4">Follow Our Journey</h3>
                <p className="text-muted-foreground mb-4">
                  Join our community for daily rituals, botanical wisdom, and exclusive offers
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-botanical-sage/20 flex items-center justify-center text-botanical-sage hover:bg-botanical-sage hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-botanical-sage/20 flex items-center justify-center text-botanical-sage hover:bg-botanical-sage hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </Card>

              <div className="bg-botanical-cream/40 p-6 rounded-lg">
                <h3 className="font-serif text-lg font-semibold mb-2">Business Hours</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM CET</p>
                  <p>Saturday: 10:00 AM - 4:00 PM CET</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
