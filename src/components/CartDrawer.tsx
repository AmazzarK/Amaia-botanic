import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { useNavigate } from "react-router-dom";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { 
    items, 
    updateQuantity, 
    removeItem
  } = useCartStore();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="font-serif text-2xl">Your Cart</SheetTitle>
          <SheetDescription>
            {totalItems === 0 ? "Your cart is empty" : `${totalItems} item${totalItems !== 1 ? 's' : ''} ready for checkout`}
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto opacity-50" />
                <p className="text-muted-foreground">Begin your Amaïa ritual</p>
                <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
                  <a href="/shop">Explore Products</a>
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0 space-y-4">
                {items.map((item) => (
                  <div key={item.variantId} className="flex gap-4 p-3 bg-card rounded-lg border border-border">
                    <div className="w-20 h-20 bg-secondary/20 rounded-md overflow-hidden flex-shrink-0">
                      {item.product.node.images?.edges?.[0]?.node && (
                        <img
                          src={item.product.node.images.edges[0].node.url}
                          alt={item.product.node.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm mb-1 truncate">{item.product.node.title}</h4>
                      {item.selectedOptions.length > 0 && (
                        <p className="text-xs text-muted-foreground mb-2">
                          {item.selectedOptions.map(option => option.value).join(' • ')}
                        </p>
                      )}
                      <p className="font-semibold text-sm">
                        €{parseFloat(item.price.amount).toFixed(2)}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => removeItem(item.variantId)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      
                      <div className="flex items-center gap-1 bg-secondary rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex-shrink-0 space-y-4 pt-6 border-t bg-background">
                <div className="flex justify-between items-center">
                  <span className="font-serif text-lg font-semibold">Total</span>
                  <span className="font-serif text-2xl font-bold text-primary">
                    €{totalPrice.toFixed(2)}
                  </span>
                </div>
                
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-botanical-sage hover:bg-botanical-sage/90" 
                  size="lg"
                  disabled={items.length === 0}
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
