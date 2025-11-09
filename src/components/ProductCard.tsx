import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { useCartStore } from '@/store/useCartStore';
import { toast } from 'sonner';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ id, title, price, image, category }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, title, price, image });
    toast.success('Added to cart!');
  };

  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-elegant animate-fade-in">
        <CardContent className="p-4">
          <div className="aspect-square overflow-hidden rounded-md bg-secondary mb-4">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain transition-transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-muted-foreground uppercase mb-2">{category}</p>
          <h3 className="font-semibold line-clamp-2 mb-2">{title}</h3>
          <p className="text-xl font-bold text-primary">${price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
