import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/useCartStore';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { LoginDropdown } from "./LoginDropdown";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
export const Header = () => {
  const itemCount = useCartStore((state) => state.getItemCount());
  const { isLoggedIn, user, logout } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Cartify
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 w-[200px] lg:w-[300px]"
              />
            </div>
          </div>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs font-medium flex items-center justify-center text-primary-foreground">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
            {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">

            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-foreground">Hi, Jayanthan</span>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <LoginDropdown />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
                {isLoggedIn ? (
                  <div className="flex flex-col gap-2">
                    <span className="text-sm text-foreground">Hi, {user?.name}</span>
                    <Button variant="outline" size="sm" onClick={logout}>
                      Logout
                    </Button>
                  </div>
                ) : (
                  <LoginDropdown />
                )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
