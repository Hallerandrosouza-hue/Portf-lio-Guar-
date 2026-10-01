import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ArrowRight, Menu, X, Github } from 'lucide-react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início',    path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Soluções',  path: '/servicos' },
    { name: 'Serviços',  path: '/servicos' },
    { name: 'Cases',     path: '/portfolio' },
    { name: 'Contato',   path: '/contato' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-header' : 'bg-transparent'
      }`}
    >
      <div style={{ maxWidth: 'var(--page-max-width)' }} className="mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between" style={{ height: 64 }}>

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 transition-opacity hover:opacity-75">
            <img
              src="/logo-oficial.jpg"
              alt="GUARÁ SIX"
              className="object-contain"
              style={{
                height: 36,
                width: 'auto',
                borderRadius: 6,
                filter: 'drop-shadow(0 0 8px rgba(255,102,0,0.25))',
              }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: 'var(--color-frost-glow)',
                letterSpacing: '-0.01em',
              }}
            >
              GUARÁ <span style={{ color: 'var(--color-brand-accent)' }}>SIX</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center" style={{ gap: 4 }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: '8px 14px',
                  borderRadius: 999,
                  color: isActive(item.path)
                    ? 'var(--color-pure-white)'
                    : 'var(--color-fog-veil)',
                  background: isActive(item.path)
                    ? 'rgba(186,214,247,0.08)'
                    : 'transparent',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = 'var(--color-frost-glow)';
                    e.target.style.background = 'rgba(186,214,247,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = 'var(--color-fog-veil)';
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ── Right actions ── */}
          <div className="hidden md:flex items-center" style={{ gap: 8 }}>
            <a
              href="https://github.com/GuaraSix"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ padding: '6px 12px' }}
              aria-label="GitHub"
            >
              <Github style={{ width: 16, height: 16 }} />
            </a>
            <Link to="/contato" className="btn-accent" style={{ padding: '8px 20px' }}>
              Fale Conosco
              <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="md:hidden btn-ghost"
            style={{ padding: '8px 10px' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen
              ? <X style={{ width: 18, height: 18 }} />
              : <Menu style={{ width: 18, height: 18 }} />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          style={{
            background: 'rgba(5,6,15,0.98)',
            borderTop: '1px solid rgba(186,215,247,0.06)',
          }}
        >
          <nav className="flex flex-col px-6 py-5" style={{ gap: 2 }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  padding: '10px 14px',
                  borderRadius: 8,
                  color: isActive(item.path)
                    ? 'var(--color-pure-white)'
                    : 'var(--color-fog-veil)',
                  background: isActive(item.path)
                    ? 'rgba(186,214,247,0.08)'
                    : 'transparent',
                  textDecoration: 'none',
                }}
              >
                {item.name}
              </Link>
            ))}
            <div style={{ marginTop: 12 }}>
              <Link
                to="/contato"
                onClick={() => setMobileOpen(false)}
                className="btn-accent"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Fale Conosco <ArrowRight style={{ width: 14, height: 14 }} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;