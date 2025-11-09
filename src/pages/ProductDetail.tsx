import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/useCartStore';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: { rate: number; count: number };
}

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      });
      toast.success('Added to cart!');
    }
  };

  if (loading) {
    return (
      <div className="container py-8">
        <Skeleton className="h-8 w-32 mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="aspect-square w-full" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) return <div className="container py-8">Product not found</div>;

  return (
    <div className="container py-8 animate-fade-in">
      <Link to="/products">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="aspect-square bg-secondary rounded-lg p-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-sm text-muted-foreground uppercase mb-2">{product.category}</p>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(product.rating.rate)
                      ? 'fill-primary text-primary'
                      : 'text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-4xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>

          <p className="text-muted-foreground mb-8">{product.description}</p>

          <div className="mt-auto space-y-4">
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-lg"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
