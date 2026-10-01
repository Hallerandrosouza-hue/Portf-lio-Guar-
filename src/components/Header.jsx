import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ArrowRight, Menu, X } from 'lucide-react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Soluções', path: '/servicos' },
    { name: 'Serviços', path: '/servicos#detalhes' },
    { name: 'Cases', path: '/portfolio' },
    { name: 'Contato', path: '/contato' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path.split('#')[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'glass-header' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 md:h-20" style={{ height: '72px' }}>

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center flex-shrink-0 transition-opacity hover:opacity-80">
            <img
              src="/logo-oficial.jpg"
              alt="GUARA SIX"
              className="h-12 md:h-14 w-auto object-contain rounded-sm"
              style={{ maxWidth: '160px' }}
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path.split('#')[0]}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative group ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-orange-500 transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* ── Right Side ── */}
          <div className="hidden md:flex items-center gap-5">
            <button
              aria-label="Pesquisar"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <Link
              to="/contato"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white border border-orange-500/70 rounded-sm hover:bg-orange-500 hover:border-orange-500 transition-all duration-250 tracking-wide"
            >
              Fale Conosco
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-[#080808] border-t border-white/5">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path.split('#')[0]}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-1 border-b border-white/5 ${
                  isActive(item.path) ? 'text-orange-500' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-orange-600 rounded-sm"
            >
              Fale Conosco <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;