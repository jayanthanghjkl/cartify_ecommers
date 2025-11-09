import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignupModal.tsx";

export const LoginDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="gap-2"
        >
          Login / Signup
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </Button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 rounded-lg border border-border bg-popover shadow-[0_4px_12px_rgba(0,0,0,0.1)] animate-in fade-in-0 zoom-in-95 z-50">
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Welcome to Cartify</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sign in to access your account
              </p>
              <div className="flex flex-col gap-2">
                <Button
                  variant="default"
                  onClick={() => {
                    setIsOpen(false);
                    setShowLoginModal(true);
                  }}
                  className="w-full"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false);
                    setShowSignupModal(true);
                  }}
                  className="w-full"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <SignupModal isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />
    </>
  );
};
