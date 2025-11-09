import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/useCartStore';

export const Cart = () => {
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container py-16">
        <div className="max-w-md mx-auto text-center space-y-4">
          <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground" />
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="text-muted-foreground">Add some products to get started!</p>
          <Link to="/products">
            <Button className="bg-gradient-primary hover:opacity-90">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 border rounded-lg bg-card hover:shadow-card transition-shadow"
            >
              <div className="w-24 h-24 bg-secondary rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold line-clamp-2 mb-2">{item.title}</h3>
                <p className="text-lg font-bold text-primary">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2 border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20 p-6 border rounded-lg bg-card space-y-4">
            <h2 className="text-xl font-bold">Order Summary</h2>
            
            <div className="space-y-2 py-4 border-y">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${getTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
            </div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">${getTotal().toFixed(2)}</span>
            </div>

            <Link to="/checkout">
              <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
