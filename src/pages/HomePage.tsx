import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplets, Heart } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-botanical.jpg";
import { useQuery } from "@tanstack/react-query";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY } from "@/lib/shopify";
import { ShopifyProduct, useCartStore } from "@/stores/cartStore";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { 
  luxuryPresets, 
  staggerContainer, 
  staggerGridItem, 
  fadeInUp, 
  heroReveal,
  hoverLift,
  buttonHover,
  scaleIn,
  viewportSettings
} from "@/lib/animations";
import { useSmoothScrolling } from "@/lib/smoothScrolling";

const HomePage = () => {
  const addItem = useCartStore(state => state.addItem);
  
  // Initialize smooth scrolling
  useSmoothScrolling();

  const { data: productsData, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 3 });
      return data?.data?.products?.edges || [];
    },
  });

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${product.node.title} added to your ritual collection`
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </motion.div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          {...luxuryPresets.hero}
        >
          <motion.h1 
            className="font-serif text-5xl md:text-7xl font-bold mb-6 text-shimmer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          >
            AMAÏA Botanic
          </motion.h1>
          <motion.p 
            className="font-serif text-xl md:text-2xl text-botanical-gold mb-4 italic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          >
            The Amaïa Rituals
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
          >
            Each drop tells a story of nature and care. Born in Paris, inspired by botanical wisdom.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          >
            <motion.div {...luxuryPresets.button}>
              <Button size="lg" asChild className="group btn-luxury">
                <Link to="/shop">
                  Discover the Rituals
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>
            <motion.div {...luxuryPresets.button}>
              <Button size="lg" variant="outline" asChild className="btn-luxury-outline">
                <Link to="/about">Our Story</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Story */}
      <motion.section 
        className="py-20 px-4"
        {...luxuryPresets.section}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold mb-8"
            variants={fadeInUp}
          >
            Pure Botanical Beauty
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground leading-relaxed"
            variants={fadeInUp}
          >
            AMAÏA Botanic was born from a simple belief: nature holds the purest secrets to beauty. 
            In the heart of Paris, we craft 100% natural oils that celebrate authenticity, 
            conscious care, and the ritual of self-love.
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-16"
            variants={staggerContainer}
          >
            {[
              {
                icon: Leaf,
                title: "100% Natural",
                description: "Pure botanical ingredients, nothing else. Each drop is crafted with care.",
                bgColor: "bg-botanical-sage/20",
                iconColor: "text-botanical-sage"
              },
              {
                icon: Droplets,
                title: "Parisian Craft",
                description: "Expertly formulated in Paris, blending elegance with botanical wisdom.",
                bgColor: "bg-botanical-gold/20",
                iconColor: "text-botanical-gold"
              },
              {
                icon: Heart,
                title: "Conscious Care",
                description: "Vegan, cruelty-free, and sustainably packaged for conscious beauty.",
                bgColor: "bg-primary/20",
                iconColor: "text-primary"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index} 
                  className="space-y-4"
                  variants={staggerGridItem}
                >
                  <motion.div 
                    className={`w-16 h-16 mx-auto ${feature.bgColor} rounded-full flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </motion.div>
                  <motion.h3 className="font-serif text-xl font-semibold">
                    {feature.title}
                  </motion.h3>
                  <motion.p className="text-muted-foreground">
                    {feature.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section 
        className="py-20 px-4 bg-botanical-cream/30"
        {...luxuryPresets.section}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <motion.h2 
              className="font-serif text-4xl md:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              Bestselling Rituals
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              Begin your journey with our most loved botanical oils
            </motion.p>
          </motion.div>

          {isLoading ? (
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {[1, 2, 3].map((i) => (
                <motion.div key={i} variants={staggerGridItem}>
                  <Card className="h-96 loading-luxury" />
                </motion.div>
              ))}
            </motion.div>
          ) : productsData && productsData.length > 0 ? (
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {productsData.map((product: ShopifyProduct) => (
                <motion.div key={product.node.id} variants={staggerGridItem}>
                  <motion.div
                    {...luxuryPresets.card}
                    className="card-luxury group overflow-hidden"
                  >
                    <Card className="h-full border-0 shadow-elegant hover:shadow-luxury-hover transition-all duration-500 overflow-hidden">
                      <motion.div 
                        className="aspect-square overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={product.node.images.edges[0]?.node.url || "/placeholder.svg"}
                          alt={product.node.images.edges[0]?.node.altText || product.node.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </motion.div>
                      <div className="p-6 space-y-4">
                        <motion.h3 
                          className="font-serif text-xl font-semibold text-center"
                          whileHover={{ color: "hsl(var(--botanical-gold))" }}
                          transition={{ duration: 0.3 }}
                        >
                          {product.node.title}
                        </motion.h3>
                        <motion.p className="text-muted-foreground text-sm text-center line-clamp-2">
                          {product.node.description || "Pure botanical oil for radiant hair"}
                        </motion.p>
                        <div className="flex items-center justify-between pt-4">
                          <motion.span 
                            className="font-serif text-2xl font-bold text-primary"
                            whileHover={{ scale: 1.05 }}
                          >
                            €{parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                          </motion.span>
                          <motion.div {...luxuryPresets.button}>
                            <Button 
                              size="sm"
                              onClick={() => handleAddToCart(product)}
                              className="btn-luxury text-white px-6 py-2 font-medium"
                            >
                              Add to Cart
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div className="text-center py-12">
              <motion.p 
                className="text-muted-foreground mb-6"
                variants={fadeInUp}
              >
                Our rituals collection is being curated. Check back soon for our botanical treasures.
              </motion.p>
            </motion.div>
          )}

          <motion.div 
            className="text-center mt-12"
            variants={fadeInUp}
          >
            <motion.div {...luxuryPresets.button}>
              <Button size="lg" variant="outline" asChild className="btn-luxury-outline">
                <Link to="/shop">Explore All Products</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4"
        {...luxuryPresets.section}
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-botanical p-12 rounded-2xl text-white"
          variants={scaleIn}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold"
            variants={fadeInUp}
          >
            Start Your Amaïa Ritual
          </motion.h2>
          <motion.p 
            className="text-lg opacity-90"
            variants={fadeInUp}
          >
            Embrace your natural glow with botanical wisdom from Paris
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            {...luxuryPresets.button}
          >
            <Button size="lg" variant="secondary" asChild className="group btn-luxury-gold">
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default HomePage;
