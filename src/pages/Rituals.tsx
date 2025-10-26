import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Droplets, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const rituals = [
  {
    title: "The Morning Awakening Ritual",
    duration: "5 minutes",
    description: "Start your day by awakening your scalp and hair with gentle botanical nourishment.",
    steps: [
      "Apply 2-3 drops of your chosen oil to your fingertips",
      "Gently massage into your scalp in circular motions",
      "Run fingers through your hair from roots to ends",
      "Take three deep breaths and set your intention for the day"
    ],
    icon: Sparkles,
    color: "botanical-gold"
  },
  {
    title: "The Deep Nourishment Ritual",
    duration: "30 minutes",
    description: "A weekly ritual for intensive care and restoration of your hair's natural vitality.",
    steps: [
      "Apply generous amount of oil to dry or slightly damp hair",
      "Massage deeply into scalp for 5 minutes",
      "Coat all strands from root to tip",
      "Wrap hair in a warm towel and relax for 20-30 minutes",
      "Wash out with gentle shampoo and enjoy renewed softness"
    ],
    icon: Droplets,
    color: "botanical-sage"
  },
  {
    title: "The Overnight Restoration Ritual",
    duration: "8 hours",
    description: "Let nature work its magic while you sleep for the ultimate hair transformation.",
    steps: [
      "Before bed, apply oil generously to dry hair",
      "Braid or twist hair loosely to protect your pillow",
      "Sleep peacefully as the oil deeply penetrates",
      "Wake up and wash as usual for silky, nourished hair"
    ],
    icon: Clock,
    color: "primary"
  }
];

const tips = [
  {
    title: "Choosing Your Oil",
    content: "Different oils serve different needs. Castor oil promotes growth, argan oil adds shine, jojoba balances scalp oil production."
  },
  {
    title: "Frequency Matters",
    content: "Listen to your hair. Most benefit from deep treatments 1-2 times per week, with light daily application if needed."
  },
  {
    title: "Temperature Wisdom",
    content: "Gently warming your oil before application helps it penetrate better. Never microwave—use warm water bath instead."
  },
  {
    title: "Scalp Health First",
    content: "Healthy hair starts at the roots. Always include scalp massage in your ritual for circulation and growth."
  }
];

const Rituals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="font-serif text-5xl md:text-6xl font-bold">
              The Amaïa Rituals
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your hair care into mindful moments of self-love. 
              Each ritual is a celebration of natural beauty and botanical wisdom.
            </p>
          </div>

          {/* Rituals */}
          <section className="mb-20">
            <h2 className="font-serif text-3xl font-bold mb-10 text-center">
              Our Sacred Rituals
            </h2>
            <div className="space-y-12">
              {rituals.map((ritual, index) => {
                const Icon = ritual.icon;
                return (
                  <Card key={index} className="p-8 shadow-elegant hover:shadow-botanical transition-shadow">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-full bg-${ritual.color}/20 flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-8 h-8 text-${ritual.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="font-serif text-2xl font-bold">{ritual.title}</h3>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {ritual.duration}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-6">{ritual.description}</p>
                        <div className="space-y-3">
                          <p className="font-semibold text-sm">Steps:</p>
                          <ol className="space-y-2 pl-5">
                            {ritual.steps.map((step, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground list-decimal">
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Tips */}
          <section className="bg-botanical-cream/40 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              Botanical Wisdom
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-soft">
                  <h3 className="font-serif text-lg font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="font-serif text-3xl font-bold">
              Ready to Begin Your Ritual?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose your botanical companion and start your journey to naturally radiant hair
            </p>
            <Button size="lg" asChild>
              <Link to="/shop">Explore Our Oils</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rituals;
