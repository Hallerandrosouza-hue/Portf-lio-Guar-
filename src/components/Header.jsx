import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Depoimentos', path: '/depoimentos' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Space */}
          <Link to="/" className="flex items-center space-x-3 transition-smooth hover:opacity-80">
            <img 
              src="https://horizons-cdn.hostinger.com/1aee07ee-5abb-4d84-bc89-e16fae91e956/9720aa5b528df2375f334add66df5732.jpg" 
              alt="GUARA SIX Logo" 
              className="h-10 md:h-12 w-auto rounded-md object-contain"
            />
            <span className="text-xl font-bold text-foreground hidden sm:block tracking-wide">GUARA SIX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.filter(item => item.name !== 'Contato').map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contato"
              className="ml-4 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 bg-primary text-white hover:opacity-90 shadow-[0_0_15px_rgba(255,87,34,0.4)]"
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 text-foreground hover:text-primary transition-smooth">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card border-border">
              <nav className="flex flex-col space-y-2 mt-8">
                {navItems.filter(item => item.name !== 'Contato').map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contato"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 mx-2 px-4 py-3 text-center rounded-xl text-base font-semibold transition-all duration-300 bg-primary text-white hover:opacity-90"
                >
                  Contato
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;