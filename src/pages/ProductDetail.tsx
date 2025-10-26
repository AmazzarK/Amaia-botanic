import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Leaf, Package, Heart } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const addItem = useCartStore(state => state.addItem);

  const { data: productData, isLoading } = useQuery({
    queryKey: ['product', handle],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
      return data?.data?.productByHandle;
    },
    enabled: !!handle,
  });

  const handleAddToCart = () => {
    if (!productData) return;

    const variant = productData.variants.edges[selectedVariantIndex]?.node;
    if (!variant) return;

    const cartItem = {
      product: { node: productData },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${productData.title} added to your ritual collection`,
      position: "top-center"
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 animate-pulse">
              <div className="aspect-square bg-muted rounded-lg" />
              <div className="space-y-6">
                <div className="h-10 bg-muted rounded w-3/4" />
                <div className="h-6 bg-muted rounded w-1/4" />
                <div className="h-32 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="font-serif text-3xl mb-4">Product not found</h1>
          <Button asChild>
            <Link to="/shop">Return to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const selectedVariant = productData.variants.edges[selectedVariantIndex]?.node;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/shop">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-botanical-beige/30 shadow-elegant">
                {productData.images.edges[0]?.node ? (
                  <img
                    src={productData.images.edges[0].node.url}
                    alt={productData.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-serif text-6xl text-botanical-sage opacity-20">AMAÏA</span>
                  </div>
                )}
              </div>
              {productData.images.edges.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {productData.images.edges.slice(1, 5).map((img: any, idx: number) => (
                    <div key={idx} className="aspect-square rounded-md overflow-hidden bg-botanical-beige/30">
                      <img
                        src={img.node.url}
                        alt={`${productData.title} view ${idx + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                  {productData.title}
                </h1>
                <p className="font-serif text-3xl text-primary font-bold">
                  ${parseFloat(selectedVariant?.price.amount || productData.priceRange.minVariantPrice.amount).toFixed(2)}
                </p>
              </div>

              <div className="flex gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Leaf className="w-3 h-3" />
                  100% Natural
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Heart className="w-3 h-3" />
                  Vegan
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Package className="w-3 h-3" />
                  Eco-Packaged
                </Badge>
              </div>

              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {productData.description || "Experience the purity of botanical care with this premium natural oil. Crafted in Paris with conscious ingredients, this ritual oil nourishes and revitalizes your hair naturally."}
                </p>
              </div>

              {/* Variants */}
              {productData.variants.edges.length > 1 && (
                <div className="space-y-3">
                  <label className="text-sm font-medium">Select Option</label>
                  <div className="flex flex-wrap gap-2">
                    {productData.variants.edges.map((variant: any, idx: number) => (
                      <Button
                        key={variant.node.id}
                        variant={selectedVariantIndex === idx ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedVariantIndex(idx)}
                      >
                        {variant.node.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                size="lg" 
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                {selectedVariant?.availableForSale ? "Add to Cart" : "Out of Stock"}
              </Button>

              <div className="border-t pt-6 space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">How to Use</h3>
                  <p className="text-muted-foreground">
                    Apply a small amount to damp or dry hair, focusing on the ends. Massage gently into the scalp for deeper nourishment. 
                    Leave for 30 minutes or overnight for intensive care, then wash as usual.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Ingredients</h3>
                  <p className="text-muted-foreground">
                    100% pure botanical oil. Cold-pressed and unrefined to preserve natural nutrients. 
                    Free from parabens, sulfates, and synthetic fragrances.
                  </p>
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

export default ProductDetail;
