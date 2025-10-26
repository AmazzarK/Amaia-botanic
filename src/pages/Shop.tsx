import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY } from "@/lib/shopify";
import { ShopifyProduct, useCartStore } from "@/stores/cartStore";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { mockProducts } from "@/data/mockProducts";

const Shop = () => {
  const addItem = useCartStore(state => state.addItem);

  // Use mock products for now - you can switch back to Shopify later
  const { data: productsData, isLoading } = useQuery({
    queryKey: ['all-products'],
    queryFn: async () => {
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockProducts;
      
      // Uncomment below to use Shopify products instead
      // const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 20 });
      // return data?.data?.products?.edges || [];
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
      description: `${product.node.title} added to your ritual collection`,
      position: "top-center"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
              Our Botanical Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pure natural oils crafted with care. Each bottle is a ritual of self-love and botanical wisdom.
            </p>
          </div>

          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="aspect-square w-full" />
                  <div className="p-4 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </Card>
              ))}
            </div>
          ) : productsData && productsData.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {productsData.map((product: ShopifyProduct) => (
                <Card key={product.node.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-botanical transition-all duration-300 bg-white">
                  <Link to={`/product/${product.node.handle}`}>
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-botanical-beige/20 to-botanical-sage/10 relative">
                      {product.node.images.edges[0]?.node ? (
                        <img
                          src={product.node.images.edges[0].node.url}
                          alt={product.node.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-botanical-beige">
                          <span className="font-serif text-4xl text-botanical-sage opacity-30">AMAÏA</span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="bg-botanical-sage/90 text-white text-xs font-medium px-2 py-1 rounded-full">
                          50ml
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 text-botanical-sage text-xs font-medium px-2 py-1 rounded-full">
                          100% Natural
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6 space-y-4">
                    <Link to={`/product/${product.node.handle}`}>
                      <h3 className="font-serif text-xl font-bold text-botanical-sage group-hover:text-primary transition-colors">
                        {product.node.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {product.node.description || "Pure botanical oil for radiant hair"}
                    </p>
                    <div className="flex items-center justify-between pt-3">
                      <span className="font-serif text-2xl font-bold text-primary">
                        €{parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                      </span>
                      <Button 
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                        className="bg-botanical-sage hover:bg-botanical-sage/90 text-white px-6 py-2 font-medium"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto space-y-6">
                <div className="w-20 h-20 mx-auto bg-botanical-sage/10 rounded-full flex items-center justify-center">
                  <span className="font-serif text-3xl text-botanical-sage">🌿</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold">No products found</h3>
                <p className="text-muted-foreground">
                  Our botanical collection is being curated. Check back soon for our natural treasures, 
                  or create your first product to start your ritual journey.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
