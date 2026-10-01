import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Github, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Soluções', path: '/servicos' },
    { name: 'Cases', path: '/portfolio' },
    { name: 'Contato', path: '/contato' },
  ];

  const socialLinks = [
    { icon: Linkedin,  href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/guarasixl?igsh=NTRwNHEyNWg5anNh&utm_source=qr', label: 'Instagram' },
    { icon: Twitter,   href: '#', label: 'Twitter' },
    { icon: Github,    href: 'https://github.com/GuaraSix', label: 'GitHub' },
  ];

  return (
    <footer className="bg-[#060606] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <Link to="/">
              <img
                src="/logo-oficial.jpg"
                alt="GUARA SIX"
                className="h-14 w-auto object-contain rounded-sm"
                style={{ maxWidth: '150px' }}
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Transformando empresas com tecnologia de nível enterprise e soluções inovadoras em todo o Brasil.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/40 transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-widest mb-5" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>Navegação</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/40 hover:text-orange-500 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-orange-500 transition-all duration-200 inline-block" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-widest mb-5" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>Contato</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5 text-sm text-white/40">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500/70" />
                <span>guara.six.6@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/40">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500/70" />
                <span>86 98132-5380 / 89 98137-5559</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/40">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500/70" />
                <span>R. José Ulisses Leal, 281 — Alegria, Teresina - PI</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-widest mb-5" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>Vamos Conversar?</h5>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
              Pronto para transformar sua empresa com tecnologia de ponta?
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 rounded-sm hover:bg-orange-500 transition-colors"
            >
              Fale com a gente <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} GUARÁ SIX. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Política de Privacidade</Link>
            <Link to="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;