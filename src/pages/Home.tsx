import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import heroImage from '@/assets/hero-banner.jpg';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

export const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4');
        const data = await response.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Discover Your Style
              </h1>
              <p className="text-xl text-muted-foreground">
                Curated collection of premium products at unbeatable prices
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
               
              </div>
            </div>
            <div className="relative animate-scale-in hidden lg:block">
              <img
                src={heroImage}
                alt="Shopping hero"
                className="rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-y bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trending Products</h2>
            <p className="text-muted-foreground">Check out our most popular items</p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full mb-8"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                  <ProductCard {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers and discover amazing products today
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
