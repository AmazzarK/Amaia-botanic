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

const HomePage = () => {
  const addItem = useCartStore(state => state.addItem);

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
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            AMAÏA Botanic
          </h1>
          <p className="font-serif text-xl md:text-2xl text-botanical-gold mb-4 italic animate-fade-in animation-delay-200">
            The Amaïa Rituals
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Each drop tells a story of nature and care. Born in Paris, inspired by botanical wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
            <Button size="lg" asChild className="group">
              <Link to="/shop">
                Discover the Rituals
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
            Pure Botanical Beauty
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AMAÏA Botanic was born from a simple belief: nature holds the purest secrets to beauty. 
            In the heart of Paris, we craft 100% natural oils that celebrate authenticity, 
            conscious care, and the ritual of self-love.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-botanical-sage/20 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-botanical-sage" />
              </div>
              <h3 className="font-serif text-xl font-semibold">100% Natural</h3>
              <p className="text-muted-foreground">
                Pure botanical ingredients, nothing else. Each drop is crafted with care.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-botanical-gold/20 rounded-full flex items-center justify-center">
                <Droplets className="w-8 h-8 text-botanical-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Parisian Craft</h3>
              <p className="text-muted-foreground">
                Expertly formulated in Paris, blending elegance with botanical wisdom.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Conscious Care</h3>
              <p className="text-muted-foreground">
                Vegan, cruelty-free, and sustainably packaged for conscious beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-botanical-cream/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Bestselling Rituals
            </h2>
            <p className="text-lg text-muted-foreground">
              Begin your journey with our most loved botanical oils
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="h-96 animate-pulse bg-muted" />
              ))}
            </div>
          ) : productsData && productsData.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {productsData.map((product: ShopifyProduct) => (
                <Card key={product.node.id} className="group overflow-hidden border-0 shadow-elegant hover:shadow-botanical transition-all duration-300">
                  <Link to={`/product/${product.node.handle}`}>
                    <div className="aspect-square overflow-hidden bg-secondary/20">
                      {product.node.images.edges[0]?.node && (
                        <img
                          src={product.node.images.edges[0].node.url}
                          alt={product.node.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                    </div>
                  </Link>
                  <div className="p-6 space-y-4">
                    <Link to={`/product/${product.node.handle}`}>
                      <h3 className="font-serif text-xl font-semibold group-hover:text-primary transition-colors">
                        {product.node.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {product.node.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold">
                        ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                      </span>
                      <Button 
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-6">
                Our rituals collection is being curated. Check back soon for our botanical treasures.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/shop">Explore All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-botanical p-12 rounded-2xl text-white">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Start Your Amaïa Ritual
          </h2>
          <p className="text-lg opacity-90">
            Embrace your natural glow with botanical wisdom from Paris
          </p>
          <Button size="lg" variant="secondary" asChild className="group">
            <Link to="/shop">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
