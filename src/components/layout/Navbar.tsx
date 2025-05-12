
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-dark">ETU</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-dark"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/products") ? "text-primary" : "text-dark"
              }`}
            >
              Товары
            </Link>
            <Link
              to="/instructions"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/instructions") ? "text-primary" : "text-dark"
              }`}
            >
              Инструкции
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-dark"
              }`}
            >
              О нас
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="py-4">
                  <h3 className="text-lg font-playfair font-medium mb-4">
                    Поиск
                  </h3>
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Найти товары..."
                      className="w-full pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full py-6">
                  <div className="flex-1 space-y-6">
                    <Link
                      to="/"
                      className="block py-2 text-lg font-playfair transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Главная
                    </Link>
                    <Link
                      to="/products"
                      className="block py-2 text-lg font-playfair transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Товары
                    </Link>
                    <Link
                      to="/instructions"
                      className="block py-2 text-lg font-playfair transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Инструкции
                    </Link>
                    <Link
                      to="/about"
                      className="block py-2 text-lg font-playfair transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      О нас
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
