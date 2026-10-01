import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Início',    path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Soluções',  path: '/servicos' },
  { name: 'Cases',     path: '/portfolio' },
  { name: 'Contato',   path: '/contato' },
];

const socialLinks = [
  { icon: Linkedin,  href: '#',                                                                                href: 'https://www.instagram.com/guarasixl?igsh=NTRwNHEyNWg5anNh&utm_source=qr', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/guarasixl?igsh=NTRwNHEyNWg5anNh&utm_source=qr', label: 'Instagram' },
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Github,    href: 'https://github.com/GuaraSix', label: 'GitHub' },
];

function Footer() {
  return (
    <footer style={{
      background: 'var(--color-midnight-canvas)',
      borderTop: '1px solid rgba(186,215,247,0.06)',
    }}>
      <div className="mx-auto px-6 lg:px-10" style={{ maxWidth: 'var(--page-max-width)', paddingTop: 64, paddingBottom: 40 }}>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: 48, marginBottom: 56 }}>

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Link to="/">
              <img
                src="/logo-oficial.jpg"
                alt="GUARÁ SIX"
                style={{ height: 52, width: 'auto', objectFit: 'contain', borderRadius: 8,
                  filter: 'drop-shadow(0 0 10px rgba(255,102,0,0.2))' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </Link>
            <p style={{ fontSize: 14, color: 'var(--color-fog-veil)', lineHeight: 1.65, maxWidth: 240 }}>
              Transformando empresas com tecnologia de nível enterprise e soluções inovadoras em todo o Brasil.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socialLinks.filter((v, i, a) => a.findIndex(t => t.label === v.label) === i).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-tile"
                  style={{ width: 36, height: 36 }}
                >
                  <s.icon style={{ width: 15, height: 15, color: 'var(--color-fog-veil)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, fontWeight: 400, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-fog-veil)',
              marginBottom: 20,
            }}>Navegação</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      fontSize: 14, color: 'var(--color-fog-veil)',
                      textDecoration: 'none', transition: 'color 0.2s ease',
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-frost-glow)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-fog-veil)'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, fontWeight: 400, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-fog-veil)',
              marginBottom: 20,
            }}>Contato</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: Mail,  text: 'guara.six.6@gmail.com',         href: 'mailto:guara.six.6@gmail.com' },
                { icon: Phone, text: '86 98132-5380 / 89 98137-5559', href: 'tel:+5586981325380' },
                { icon: MapPin,text: 'R. José Ulisses Leal, 281 — Teresina, PI', href: null },
              ].map((c, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <c.icon style={{ width: 14, height: 14, color: 'var(--color-brand-accent)', flexShrink: 0, marginTop: 2, opacity: 0.8 }} />
                  {c.href
                    ? <a href={c.href} style={{ fontSize: 13, color: 'var(--color-fog-veil)', textDecoration: 'none', lineHeight: 1.5 }}>{c.text}</a>
                    : <span style={{ fontSize: 13, color: 'var(--color-fog-veil)', lineHeight: 1.5 }}>{c.text}</span>
                  }
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, fontWeight: 400, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--color-fog-veil)',
              marginBottom: 20,
            }}>Vamos Conversar?</p>
            <p style={{ fontSize: 14, color: 'var(--color-fog-veil)', lineHeight: 1.65, marginBottom: 20 }}>
              Pronto para transformar sua empresa com tecnologia de ponta?
            </p>
            <Link to="/contato" className="btn-accent" style={{ fontSize: 13, padding: '9px 20px' }}>
              Fale com a gente <ArrowRight style={{ width: 13, height: 13 }} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: 1, background: 'rgba(186,215,247,0.06)', marginBottom: 24 }} />

        {/* Bottom bar — legal */}
        <div className="flex flex-col md:flex-row justify-between items-center" style={{ gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p style={{ fontSize: 12, color: 'rgba(157,167,186,0.6)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em' }}>
              © 2026 · 69.398.971 HALLERANDRO SOUZA SANTANA
            </p>
            <p style={{ fontSize: 11, color: 'rgba(157,167,186,0.4)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.02em' }}>
              CNPJ: 69.398.971/0001-38
            </p>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link to="#" style={{ fontSize: 12, color: 'rgba(157,167,186,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.target.style.color = 'var(--color-fog-veil)'; }}
              onMouseLeave={(e) => { e.target.style.color = 'rgba(157,167,186,0.4)'; }}
            >Política de Privacidade</Link>
            <Link to="#" style={{ fontSize: 12, color: 'rgba(157,167,186,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.target.style.color = 'var(--color-fog-veil)'; }}
              onMouseLeave={(e) => { e.target.style.color = 'rgba(157,167,186,0.4)'; }}
            >Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;