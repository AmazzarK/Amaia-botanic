import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useCartStore } from "@/stores/cartStore";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ArrowLeft, Lock, CreditCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [customerInfo, setCustomerInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    country: ""
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: ""
  });

  const subtotal = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleInputChange = (section: 'customer' | 'payment', field: string, value: string) => {
    if (section === 'customer') {
      setCustomerInfo(prev => ({ ...prev, [field]: value }));
    } else {
      setPaymentInfo(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a simple order number
      const orderNumber = `AM${Date.now().toString().slice(-6)}`;
      
      toast.success("Order Confirmed!", {
        description: `Thank you for your Amaïa ritual. Order #${orderNumber}. You'll receive a confirmation email shortly.`,
        position: "top-center"
      });
      
      clearCart();
      navigate("/");
    } catch (error) {
      toast.error("Payment Failed", {
        description: "There was an error processing your payment. Please try again."
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl font-bold">Your cart is empty</h1>
            <p className="text-muted-foreground">Add some beautiful botanical oils to begin your ritual.</p>
            <Link to="/shop">
              <Button className="bg-botanical-sage hover:bg-botanical-sage/90">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
            <h1 className="font-serif text-4xl font-bold mt-4 mb-2">Checkout</h1>
            <p className="text-muted-foreground">Complete your Amaïa ritual</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Customer Information */}
                <Card className="p-6">
                  <h2 className="font-serif text-xl font-semibold mb-4">Customer Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={customerInfo.email}
                        onChange={(e) => handleInputChange('customer', 'email', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div></div>
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={customerInfo.firstName}
                        onChange={(e) => handleInputChange('customer', 'firstName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={customerInfo.lastName}
                        onChange={(e) => handleInputChange('customer', 'lastName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        required
                        value={customerInfo.address}
                        onChange={(e) => handleInputChange('customer', 'address', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        required
                        value={customerInfo.city}
                        onChange={(e) => handleInputChange('customer', 'city', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        required
                        value={customerInfo.zipCode}
                        onChange={(e) => handleInputChange('customer', 'zipCode', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </Card>

                {/* Payment Information */}
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="w-5 h-5" />
                    <h2 className="font-serif text-xl font-semibold">Payment Information</h2>
                    <Lock className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="cardholderName">Cardholder Name *</Label>
                      <Input
                        id="cardholderName"
                        required
                        value={paymentInfo.cardholderName}
                        onChange={(e) => handleInputChange('payment', 'cardholderName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        value={paymentInfo.cardNumber}
                        onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        required
                        value={paymentInfo.expiryDate}
                        onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        required
                        value={paymentInfo.cvv}
                        onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </Card>

                <Button 
                  type="submit" 
                  className="w-full bg-botanical-sage hover:bg-botanical-sage/90 text-white py-3 text-lg"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : `Complete Order - €${total.toFixed(2)}`}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <Card className="p-6">
                <h2 className="font-serif text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.variantId} className="flex gap-3">
                      <div className="w-16 h-16 bg-secondary/20 rounded-md overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img
                            src={item.product.node.images.edges[0].node.url}
                            alt={item.product.node.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.product.node.title}</h4>
                        <p className="text-xs text-muted-foreground">Quantity: {item.quantity}</p>
                        <p className="font-semibold text-sm">€{(parseFloat(item.price.amount) * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `€${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && (
                    <Badge variant="secondary" className="text-xs">
                      Free shipping on orders over €50
                    </Badge>
                  )}
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-serif text-lg font-bold">
                  <span>Total</span>
                  <span>€{total.toFixed(2)}</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;