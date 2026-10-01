import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Code, Brain, Smartphone, Zap, Palette, TrendingUp, Shield, Gauge, Award, Users, MessageSquare, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

/* ─── PARALLAX WOLF HOOK ─── */
function useMouseParallax(strength = 0.015) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setOffset({
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
      });
    });
  }, [strength]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return offset;
}

/* ─── DATA ─── */
const services = [
  { icon: Code,       title: 'Desenvolvimento Web',      description: 'Aplicações web modernas e responsivas com as tecnologias mais avançadas do mercado.' },
  { icon: Brain,      title: 'Inteligência Artificial',  description: 'Soluções de IA e machine learning para automatizar processos e gerar insights valiosos.' },
  { icon: Zap,        title: 'Sistemas Personalizados',  description: 'Desenvolvimento de sistemas sob medida para necessidades específicas do seu negócio.' },
  { icon: TrendingUp, title: 'Automação Empresarial',    description: 'Automatize processos repetitivos e aumente a produtividade da sua equipe.' },
  { icon: Smartphone, title: 'Aplicativos Mobile',       description: 'Apps nativos e híbridos para iOS e Android com performance excepcional.' },
  { icon: Gauge,      title: 'SaaS',                    description: 'Plataformas SaaS escaláveis com arquitetura cloud-native e alta disponibilidade.' },
  { icon: Palette,    title: 'UI/UX Design',             description: 'Interfaces intuitivas e experiências memoráveis que encantam usuários.' },
  { icon: Award,      title: 'Branding Digital',         description: 'Construa uma identidade digital forte e consistente para sua marca.' },
];

const differentials = [
  { icon: Zap,        title: 'Tecnologia de Ponta',    description: 'Utilizamos os frameworks e ferramentas mais modernos do mercado' },
  { icon: Gauge,      title: 'Alta Performance',        description: 'Sistemas otimizados para máxima velocidade e eficiência' },
  { icon: Shield,     title: 'Segurança Robusta',       description: 'Proteção avançada de dados e conformidade com LGPD' },
  { icon: TrendingUp, title: 'Escalabilidade',          description: 'Arquitetura preparada para crescer junto com seu negócio' },
  { icon: Users,      title: 'Atendimento Premium',     description: 'Suporte dedicado e acompanhamento personalizado' },
  { icon: Palette,    title: 'Design Inovador',         description: 'Interfaces modernas que impressionam e convertem' },
];

const portfolio = [
  { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', title: 'Plataforma SaaS Analytics',  description: 'Dashboard de análise de dados com IA integrada', tags: ['React', 'Node.js', 'AWS'] },
  { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', title: 'App Mobile Fintech',           description: 'Gestão financeira com mais de 50k usuários',     tags: ['React Native', 'Firebase'] },
  { image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80', title: 'E-commerce Enterprise',        description: 'Plataforma com processamento de milhares de pedidos/dia', tags: ['Next.js', 'PostgreSQL'] },
  { image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80', title: 'Sistema ERP Customizado',      description: 'Gestão empresarial completa para indústria',     tags: ['Vue.js', 'Python'] },
];

const stats = [
  { value: '10+',   label: 'Projetos entregues' },
  { value: '10+',   label: 'Clientes satisfeitos' },
  { value: '99.7%', label: 'Uptime médio' },
  { value: '4.9',   label: 'Avaliação média' },
];

/* ─── SECTION COMPONENTS ─── */

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="divider-orange inline-block" />
      <span className="section-label">{children}</span>
    </div>
  );
}

function ServiceItem({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="card-hover p-6 border border-white/6 bg-white/[0.02] rounded-sm group"
    >
      <div className="w-10 h-10 rounded-sm bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
        <Icon className="w-5 h-5 text-orange-500" />
      </div>
      <h4 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{title}</h4>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function PortfolioItem({ image, title, description, tags, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-sm border border-white/6 card-hover"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover filter brightness-50 group-hover:brightness-70 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-orange-500/20 text-orange-400 rounded-sm border border-orange-500/20">
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{title}</h4>
        <p className="text-white/60 text-sm">{description}</p>
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 bg-orange-500 rounded-sm flex items-center justify-center">
          <ExternalLink className="w-4 h-4 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN PAGE ─── */
function HomePage() {
  const wolfOffset = useMouseParallax(0.018);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  // Scroll-based wolf: slight zoom + upward drift
  const wolfScale  = useTransform(scrollY, [0, 600], [1, 1.06]);
  const wolfY      = useTransform(scrollY, [0, 600], [0, -30]);
  const wolfOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <>
      <Helmet>
        <title>GUARÁ SIX — Tecnologia de Nível Enterprise</title>
        <meta name="description" content="Soluções inteligentes em desenvolvimento de software, IA, SaaS e automação empresarial. Transforme sua empresa com a GUARÁ SIX." />
      </Helmet>

      <Header />

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]"
      >
        {/* ── Wolf image — parallax + scroll ── */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            x: wolfOffset.x,
            y: wolfY,
            scale: wolfScale,
            opacity: wolfOpacity,
          }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        >
          {/* Orange radial glow behind wolf */}
          <div
            className="absolute"
            style={{
              right: '-5%',
              top: '5%',
              width: '75%',
              height: '90%',
              background: 'radial-gradient(ellipse at 60% 50%, rgba(255,102,0,0.18) 0%, rgba(255,60,0,0.06) 45%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          {/* Wolf image */}
          <img
            src="/lobo-guara.jpg"
            alt="Lobo-Guará GUARÁ SIX"
            className="absolute right-0 top-0 h-full w-[62%] object-cover object-left"
            style={{
              maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 65%, transparent 100%)',
            }}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
        </motion.div>

        {/* ── Left side overlay for text readability ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(8,8,8,0.97) 30%, rgba(8,8,8,0.75) 55%, rgba(8,8,8,0.1) 80%, transparent 100%)',
          }}
        />

        {/* ── Hero Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24">
          <div className="max-w-2xl">

            {/* Logo oficial no Hero */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <img
                src="/logo-oficial.jpg"
                alt="GUARA SIX"
                className="h-20 md:h-24 w-auto object-contain rounded-sm"
                style={{
                  filter: 'drop-shadow(0 0 18px rgba(255,102,0,0.35))',
                  maxWidth: '220px',
                }}
              />
            </motion.div>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="divider-orange inline-block" />
              <span className="section-label tracking-[0.25em]">Tecnologia de Nível Enterprise</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white mb-6"
              style={{ lineHeight: 1.0 }}
            >
              SOLUÇÕES
              <br />
              INTELIGENTES
              <br />
              PARA UM FUTURO
              <br />
              <span style={{ color: '#FF6600' }}>MAIS SEGURO.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/55 text-base md:text-lg leading-relaxed mb-10 max-w-md"
            >
              A GuaraSix é uma empresa de tecnologia especializada em transformar desafios em soluções digitais de alto desempenho, unindo inovação, segurança e inteligência para o seu negócio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contato" className="btn-primary rounded-sm">
                Conheça a GuaraSix
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/portfolio" className="btn-outline rounded-sm">
                Ver projetos
              </Link>
            </motion.div>
          </div>

          {/* ── Right floating text (like reference) ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 text-right"
          >
            <p className="text-white/35 text-xs font-medium tracking-[0.2em] uppercase leading-loose">
              FORÇA<br />
              <span className="text-white/20">NATURAL</span><br />
              COM INTELIGÊNCIA<br />
              <span style={{ color: '#FF6600' }}>DA TECNOLOGIA.</span>
            </p>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-orange-500 rounded-full scroll-dot" />
          </div>
          <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ═══════════════════════ STATS BAR ═══════════════════════ */}
      <section className="bg-[#0C0C0C] border-y border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-8 py-4 text-center"
              >
                <div
                  className="text-3xl md:text-4xl font-black text-orange-500 mb-1"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {s.value}
                </div>
                <div className="text-white/45 text-xs tracking-wider uppercase">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SOBRE NÓS ═══════════════════════ */}
      <section id="sobre" className="py-24 md:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Sobre Nós</SectionLabel>
              <h2 className="text-white mb-6">
                INOVAÇÃO E<br />
                <span style={{ color: '#FF6600' }}>TECNOLOGIA</span><br />
                EM CADA PROJETO.
              </h2>
              <p className="text-white/55 leading-relaxed mb-6">
                Somos uma equipe de engenheiros e designers apaixonados por tecnologia, focados em criar soluções que geram resultado real para as empresas. Da concepção ao deploy, acompanhamos cada etapa com precisão e cuidado.
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                Com sede em Teresina-PI, atendemos clientes de todo o Brasil com a mesma dedicação e excelência técnica que nos tornaram referência no mercado.
              </p>
              <div className="mt-8">
                <Link to="/sobre" className="btn-outline rounded-sm text-sm">
                  Nossa história <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right — values grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: 'Inovação', desc: 'Tecnologias mais recentes' },
                { icon: Shield, label: 'Segurança', desc: 'Conformidade com LGPD' },
                { icon: Gauge, label: 'Performance', desc: 'Resultados mensuráveis' },
                { icon: Award, label: 'Excelência', desc: 'Qualidade em cada entrega' },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 border border-white/6 bg-white/[0.02] rounded-sm card-hover"
                >
                  <v.icon className="w-6 h-6 text-orange-500 mb-3" />
                  <div className="text-white font-bold text-sm mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{v.label}</div>
                  <div className="text-white/40 text-xs">{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVIÇOS ═══════════════════════ */}
      <section id="servicos" className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionLabel>Nossos Serviços</SectionLabel>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-white">
                SOLUÇÕES COMPLETAS<br />
                <span style={{ color: '#FF6600' }}>PARA O SEU NEGÓCIO.</span>
              </h2>
              <p className="text-white/45 text-sm max-w-xs leading-relaxed">
                Da infraestrutura à inteligência artificial, oferecemos tecnologia de ponta para impulsionar seu crescimento.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <ServiceItem key={i} {...s} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/servicos" className="btn-outline rounded-sm text-sm">
              Ver todos os serviços <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ DIFERENCIAIS ═══════════════════ */}
      <section className="py-24 md:py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionLabel>Por Que Nos Escolher</SectionLabel>
            <h2 className="text-white">
              NOSSOS<br />
              <span style={{ color: '#FF6600' }}>DIFERENCIAIS.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentials.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 border border-white/6 bg-white/[0.02] rounded-sm card-hover group"
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-sm bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <d.icon className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-base" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>{d.title}</h4>
                  <p className="text-white/45 text-sm">{d.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CASES / PORTFOLIO ═══════════════ */}
      <section id="cases" className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <SectionLabel>Cases</SectionLabel>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-white">
                PROJETOS QUE<br />
                <span style={{ color: '#FF6600' }}>TRANSFORMAM NEGÓCIOS.</span>
              </h2>
              <Link to="/portfolio" className="btn-outline rounded-sm text-sm self-start">
                Ver portfólio completo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolio.map((p, i) => (
              <PortfolioItem key={i} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA FINAL ═══════════════════════ */}
      <section className="py-24 md:py-32 bg-[#080808] relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255,102,0,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Vamos Conversar</SectionLabel>
            <h2 className="text-white mt-4 mb-6">
              TRANSFORME SUA EMPRESA<br />
              <span style={{ color: '#FF6600' }}>COM TECNOLOGIA DE ALTO NÍVEL.</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Entre em contato e descubra como podemos impulsionar seu negócio com soluções tecnológicas inovadoras.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/5586981325380"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-sm"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              <Link to="/contato" className="btn-outline rounded-sm">
                Solicitar orçamento <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;