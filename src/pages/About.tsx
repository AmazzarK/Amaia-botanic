import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import aboutImage from "@/assets/about-story.jpg";
import { Leaf, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground italic">
              Born in Paris, inspired by nature's purest wisdom
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-elegant mb-16">
            <img
              src={aboutImage}
              alt="AMAÏA Botanic Story"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">The Beginning</h2>
              <p className="text-muted-foreground leading-relaxed">
                AMAÏA Botanic was born from a simple yet profound belief: true beauty comes from nature, 
                untouched and pure. In the heart of Paris, where elegance meets authenticity, we began our 
                journey to create hair care products that honor both tradition and botanical wisdom.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder, inspired by her grandmother's natural beauty rituals passed down through generations, 
                sought to bring these timeless practices to modern women who value conscious, clean beauty. 
                Each AMAÏA product is a bridge between ancestral knowledge and contemporary self-care.
              </p>
            </section>

            <section className="bg-botanical-cream/40 rounded-xl p-8">
              <h2 className="font-serif text-3xl font-bold mb-6 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-botanical-sage/20 rounded-full flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-botanical-sage" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Pure & Natural</h3>
                  <p className="text-sm text-muted-foreground">
                    100% botanical ingredients, nothing artificial, nothing unnecessary. Just pure plant wisdom.
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-botanical-gold/20 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-botanical-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Conscious Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Vegan, cruelty-free, and sustainably sourced. Beauty that respects all living beings.
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">Parisian Elegance</h3>
                  <p className="text-sm text-muted-foreground">
                    Crafted with French savoir-faire, blending luxury with botanical authenticity.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl font-bold mb-4">The Amaïa Rituals</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe that self-care is not just a routine—it's a ritual. Each drop of AMAÏA oil 
                is an invitation to slow down, to connect with yourself, and to honor your natural beauty. 
                Our products are designed to transform your hair care into a moment of mindfulness and self-love.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From cold-pressed extraction to sustainable packaging, every step of our process reflects 
                our commitment to purity. We work directly with ethical suppliers who share our vision of 
                conscious beauty, ensuring that every bottle of AMAÏA carries the essence of authenticity.
              </p>
            </section>

            <section className="border-t pt-8">
              <h2 className="font-serif text-3xl font-bold mb-4">Our Promise</h2>
              <p className="text-muted-foreground leading-relaxed">
                At AMAÏA Botanic, we promise to always stay true to our roots—literally and metaphorically. 
                We will never compromise on ingredient quality, sustainability, or ethical practices. 
                Every product we create is a testament to our belief that nature provides everything we need 
                for radiant, healthy hair.
              </p>
              <p className="text-muted-foreground leading-relaxed italic mt-4">
                Welcome to The Amaïa Rituals. Embrace your natural glow.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
