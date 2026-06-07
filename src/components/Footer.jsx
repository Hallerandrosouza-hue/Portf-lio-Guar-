import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contato' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/guarasixl?igsh=NTRwNHEyNWg5anNh&utm_source=qr', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/GuaraSix', label: 'GitHub' },
  ];

  return (
    <footer className="bg-card border-t border-border text-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://horizons-cdn.hostinger.com/1aee07ee-5abb-4d84-bc89-e16fae91e956/9720aa5b528df2375f334add66df5732.jpg" 
                alt="GUARA SIX Logo" 
                className="h-8 w-auto rounded-md object-contain"
              />
              <span className="text-xl font-bold tracking-wide">GUARA SIX</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando empresas com tecnologia de nível enterprise e soluções inovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>guara.six.6@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>86 98132-5380 / 89 98137-5559</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>R. José Ulisses Leal, 281 - Alegria, Teresina - PI</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-base font-semibold mb-4">Redes sociais</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:glow-effect"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 GUARA SIX. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                Política de Privacidade
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;