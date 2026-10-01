import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Code, Brain, Smartphone, Zap,
  Palette, TrendingUp, Shield, Gauge, Award,
  Users, MessageSquare, ExternalLink, Lock, Fingerprint, Key
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

/* ── Mouse parallax ── */
function useMouseParallax(strength = 0.015) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const raf = useRef(null);
  const handler = useCallback((e) => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setOffset({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
    });
  }, [strength]);
  useEffect(() => {
    window.addEventListener('mousemove', handler, { passive: true });
    return () => { window.removeEventListener('mousemove', handler); if (raf.current) cancelAnimationFrame(raf.current); };
  }, [handler]);
  return offset;
}

/* ── Section wrapper ── */
function Section({ children, style, className = '' }) {
  return (
    <section
      className={`relative ${className}`}
      style={{ paddingTop: 'var(--spacing-120)', paddingBottom: 'var(--spacing-120)', ...style }}
    >
      {children}
    </section>
  );
}

/* ── Eyebrow label ── */
function Eyebrow({ children, align = 'center' }) {
  return (
    <div className={`eyebrow-row ${align === 'left' ? 'justify-start' : ''} mb-5`} style={align === 'left' ? { justifyContent: 'flex-start' } : {}}>
      {align === 'center' && <span className="eyebrow-line" />}
      <span className="eyebrow">{children}</span>
      {align === 'center' && <span className="eyebrow-line right" />}
    </div>
  );
}

/* ── Section heading block ── */
function SectionHead({ eyebrow, heading, sub, align = 'center' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`} style={{ maxWidth: align === 'center' ? 700 : undefined, margin: align === 'center' ? '0 auto 64px' : '0 0 64px' }}>
      {eyebrow && <Eyebrow align={align}>{eyebrow}</Eyebrow>}
      <h2 className="text-skywash" style={{ fontSize: 44, lineHeight: 1.16, marginBottom: 16 }}>
        {heading}
      </h2>
      {sub && (
        <p style={{ fontSize: 18, color: 'var(--color-moon-mist)', lineHeight: 1.6, maxWidth: 560, margin: align === 'center' ? '0 auto' : 0 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ── Service card ── */
function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="glass-card card-hover"
      style={{ padding: 'var(--card-padding)' }}
    >
      <div className="icon-tile mb-5">
        <Icon style={{ width: 22, height: 22, color: 'var(--color-frost-glow)', strokeWidth: 1.5 }} />
      </div>
      <h4 style={{ fontSize: 18, fontWeight: 500, color: 'var(--color-ice-highlight)', marginBottom: 8, fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
      </h4>
      <p style={{ fontSize: 14, color: 'var(--color-fog-veil)', lineHeight: 1.6 }}>
        {description}
      </p>
    </motion.div>
  );
}

/* ── Portfolio card ── */
function PortfolioCard({ image, title, description, tags, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card card-hover group overflow-hidden"
      style={{ padding: 0 }}
    >
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
        <img src={image} alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45)', transition: 'filter 0.4s ease, transform 0.4s ease' }}
          className="group-hover:brightness-60 group-hover:scale-105"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,6,15,0.95) 0%, transparent 60%)' }} />
      </div>
      <div style={{ padding: 20 }}>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((t) => <span key={t} className="glass-badge">{t}</span>)}
        </div>
        <h4 style={{ fontSize: 18, fontWeight: 500, color: 'var(--color-ice-highlight)', marginBottom: 6, fontFamily: "'Space Grotesk', sans-serif" }}>
          {title}
        </h4>
        <p style={{ fontSize: 14, color: 'var(--color-fog-veil)' }}>{description}</p>
      </div>
    </motion.div>
  );
}

/* ── Feature icon row ── */
function FeatureTileRow({ features }) {
  return (
    <div className="flex items-center justify-center flex-wrap" style={{ gap: 0, paddingBottom: 16 }}>
      {features.map((f, i) => (
        <React.Fragment key={f.label}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center"
            style={{ gap: 14, padding: '0 20px' }}
          >
            {/* Icon tile — flutuante com glow laranja */}
            <div
              className="icon-tile icon-tile-float"
              style={{
                width: 64,
                height: 64,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <f.icon style={{ width: 24, height: 24, color: 'var(--color-frost-glow)', strokeWidth: 1.5 }} />
            </div>
            <span style={{
              fontSize: 13,
              color: 'var(--color-fog-veil)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              textAlign: 'center',
              maxWidth: 100,
              lineHeight: 1.4,
            }}>
              {f.label}
            </span>
          </motion.div>
          {i < features.length - 1 && (
            <div style={{
              width: 28,
              height: 1,
              background: 'linear-gradient(90deg, rgba(255,130,0,0.15), rgba(186,215,247,0.10), rgba(255,130,0,0.15))',
              flexShrink: 0,
              marginBottom: 28,
              alignSelf: 'center',
            }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ═══════════════ DATA ═══════════════ */

const services = [
  { icon: Code,       title: 'Desenvolvimento Web',     description: 'Aplicações modernas e responsivas com as tecnologias mais avançadas do mercado.' },
  { icon: Brain,      title: 'Inteligência Artificial',  description: 'IA e machine learning para automatizar processos e gerar insights valiosos.' },
  { icon: Zap,        title: 'Sistemas Personalizados',  description: 'Sistemas sob medida para necessidades específicas do seu negócio.' },
  { icon: TrendingUp, title: 'Automação Empresarial',    description: 'Automatize processos repetitivos e aumente a produtividade.' },
  { icon: Smartphone, title: 'Aplicativos Mobile',       description: 'Apps nativos e híbridos para iOS e Android com performance excepcional.' },
  { icon: Gauge,      title: 'SaaS',                    description: 'Plataformas escaláveis com arquitetura cloud-native e alta disponibilidade.' },
  { icon: Palette,    title: 'UI/UX Design',             description: 'Interfaces intuitivas e experiências memoráveis que encantam usuários.' },
  { icon: Award,      title: 'Branding Digital',         description: 'Identidade digital forte e consistente para sua marca.' },
];

const features = [
  { icon: Code,        label: 'Desenvolvimento' },
  { icon: Brain,       label: 'Inteligência Artificial' },
  { icon: Shield,      label: 'Segurança' },
  { icon: Fingerprint, label: 'Autenticação' },
  { icon: Key,         label: 'Acesso & Permissões' },
  { icon: Zap,         label: 'Automação' },
];

const portfolio = [
  { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', title: 'Plataforma SaaS Analytics', description: 'Dashboard com IA integrada para análise em tempo real.', tags: ['React', 'Node.js', 'AWS'] },
  { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', title: 'App Mobile Fintech',          description: 'Gestão financeira com mais de 50k usuários ativos.',    tags: ['React Native', 'Firebase'] },
  { image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80', title: 'E-commerce Enterprise',       description: 'Plataforma de vendas com milhares de pedidos/dia.',   tags: ['Next.js', 'PostgreSQL'] },
  { image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80', title: 'Sistema ERP Customizado',     description: 'Gestão empresarial completa para indústria.',         tags: ['Vue.js', 'Python'] },
];

const stats = [
  { value: '10+',   label: 'Projetos entregues' },
  { value: '10+',   label: 'Clientes satisfeitos' },
  { value: '99.7%', label: 'Uptime médio' },
  { value: '4.9',   label: 'Avaliação média' },
];

/* ═══════════════ PAGE ═══════════════ */
function HomePage() {
  const wolfOffset = useMouseParallax(0.016);
  const { scrollY } = useScroll();
  const wolfScale   = useTransform(scrollY, [0, 600], [1, 1.05]);
  const wolfY       = useTransform(scrollY, [0, 600], [0, -24]);
  const wolfOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <>
      <Helmet>
        <title>GUARÁ SIX — Tecnologia de Nível Enterprise</title>
        <meta name="description" content="Soluções inteligentes em desenvolvimento de software, IA, SaaS e automação empresarial." />
      </Helmet>

      <Header />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-blueprint-grid spotlight-halo"
        style={{ paddingTop: 80 }}
      >
        {/* Wolf — parallax */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none wolf-layer"
          style={{ x: wolfOffset.x, y: wolfY, scale: wolfScale, opacity: wolfOpacity }}
        >
          {/* Orange ambient glow behind wolf */}
          <div style={{
            position: 'absolute', right: '-5%', top: '5%', width: '70%', height: '90%',
            background: 'radial-gradient(ellipse at 60% 50%, rgba(255,102,0,0.14) 0%, rgba(255,60,0,0.05) 45%, transparent 70%)',
            filter: 'blur(60px)',
          }} />
          {/* Wolf image with mask */}
          <img
            src="/lobo-guara.jpg"
            alt="Lobo-Guará GUARÁ SIX"
            style={{
              position: 'absolute', right: 0, top: 0,
              height: '100%', width: '62%', objectFit: 'cover', objectPosition: 'left',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.5) 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.5) 60%, transparent 100%)',
            }}
          />
          {/* Bottom fade */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to top, var(--color-midnight-canvas), transparent)' }} />
        </motion.div>

        {/* Left gradient for text legibility */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{
          background: 'linear-gradient(to right, rgba(5,6,15,0.98) 28%, rgba(5,6,15,0.80) 52%, rgba(5,6,15,0.08) 80%, transparent 100%)',
        }} />

        {/* Hero content */}
        <div className="relative z-10 w-full mx-auto px-6 lg:px-10" style={{ maxWidth: 'var(--page-max-width)' }}>
          <div style={{ maxWidth: 580 }}>

            {/* Logo */}
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: 32 }}>
              <img src="/logo-oficial.jpg" alt="GUARÁ SIX"
                style={{ height: 80, width: 'auto', objectFit: 'contain', borderRadius: 8, filter: 'drop-shadow(0 0 20px rgba(255,102,0,0.4))' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>

            {/* Eyebrow */}
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.05 }} style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 40, height: 1, background: 'linear-gradient(90deg, transparent, rgba(186,215,247,0.12))' }} />
                <span className="eyebrow">Tecnologia de Nível Enterprise</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.08, marginBottom: 20, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
            >
              <span className="text-skywash">SOLUÇÕES</span><br />
              <span className="text-skywash">INTELIGENTES</span><br />
              PARA UM FUTURO<br />
              <span className="text-brand-gradient">MAIS SEGURO.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 17, color: 'var(--color-moon-mist)', lineHeight: 1.6, marginBottom: 36, maxWidth: 460 }}
            >
              A GuaraSix transforma desafios complexos em soluções digitais de alto desempenho, unindo inovação, segurança e inteligência para o seu negócio.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center"
              style={{ gap: 12 }}
            >
              <Link to="/contato" className="btn-accent">
                Conheça a GuaraSix
                <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link to="/portfolio" className="btn-ghost">
                Ver projetos
              </Link>
            </motion.div>
          </div>

          {/* Floating right label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden lg:block absolute right-10"
            style={{ top: '50%', transform: 'translateY(-50%)', textAlign: 'right' }}
          >
            <p className="eyebrow" style={{ lineHeight: 2.4, textAlign: 'right', color: 'rgba(199,211,234,0.3)' }}>
              FORÇA<br />
              <span style={{ color: 'rgba(199,211,234,0.15)' }}>NATURAL</span><br />
              COM INTELIGÊNCIA<br />
              <span style={{ color: 'var(--color-brand-accent)', opacity: 0.7 }}>DA TECNOLOGIA.</span>
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 z-10 flex flex-col items-center"
          style={{ transform: 'translateX(-50%)', gap: 8 }}
        >
          <div style={{ width: 20, height: 32, border: '1px solid rgba(186,215,247,0.12)', borderRadius: 999, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '5px 0' }}>
            <div className="scroll-dot" style={{ width: 4, height: 8, background: 'var(--color-brand-accent)', borderRadius: 999 }} />
          </div>
          <span className="eyebrow" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(186,215,247,0.25)' }}>Scroll</span>
        </motion.div>
      </section>

      {/* ══════════════════════ STATS ══════════════════════ */}
      <div style={{ background: 'rgba(186,214,247,0.02)', borderTop: '1px solid rgba(186,215,247,0.06)', borderBottom: '1px solid rgba(186,215,247,0.06)' }}>
        <div className="mx-auto px-6 lg:px-10" style={{ maxWidth: 'var(--page-max-width)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ divideX: '1px solid rgba(186,215,247,0.06)' }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
                style={{
                  padding: '32px 24px',
                  borderRight: i < 3 ? '1px solid rgba(186,215,247,0.06)' : undefined,
                }}
              >
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 36, color: 'var(--color-brand-accent)', marginBottom: 6 }}>
                  {s.value}
                </div>
                <div className="eyebrow" style={{ fontSize: 11, color: 'var(--color-fog-veil)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════ FEATURE TILES ══════════════════════ */}
      <Section style={{ background: 'var(--color-midnight-canvas)' }}>
        <div className="mx-auto px-6 lg:px-10" style={{ maxWidth: 'var(--page-max-width)' }}>
          <SectionHead
            eyebrow="O que fazemos"
            heading="Soluções completas para o seu negócio"
            sub="Da infraestrutura à inteligência artificial, oferecemos tecnologia de ponta."
          />
          <FeatureTileRow features={features} />
        </div>
      </Section>

      {/* Divider */}
      <div className="section-divider" style={{ margin: '0 auto', maxWidth: 'var(--page-max-width)', padding: '0 40px' }}><div className="section-divider" /></div>

      {/* ══════════════════════ SERVIÇOS ══════════════════════ */}
      <Section style={{ background: 'var(--color-midnight-canvas)' }}>
        <div className="mx-auto px-6 lg:px-10" style={{ maxWidth: 'var(--page-max-width)' }}>
          <SectionHead
            eyebrow="Nossos Serviços"
            heading="Tecnologia que transforma negócios"
            sub="Um portfólio completo de soluções digitais para empresas que buscam inovação real."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--element-gap)' }}>
            {services.map((s, i) => <ServiceCard key={i} {...s} index={i} />)}
          </div>
        </div>
      </Section>

      {/* ══════════════════════ SOBRE / VALORES ══════════════════════ */}
      <Section style={{ background: 'rgba(186,214,247,0.015)' }}>
        <div className="mx-auto px-6 lg:px-10" style={{ maxWidth: 'var(--page-max-width)' }}>
          <div className="grid md:grid-cols-2" style={{ gap: 80, alignItems: 'center' }}>
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Eyebrow align="left">Sobre Nós</Eyebrow>
              <h2 style={{ fontSize: 44, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, lineHeight: 1.12, marginBottom: 20 }}>
                <span className="text-skywash">Inovação e tecnologia</span>
                <br />em cada projeto.
              </h2>
              <p style={{ fontSize: 16, color: 'var(--color-moon-mist)', lineHeight: 1.7, marginBottom: 14 }}>
                Somos uma equipe de engenheiros e designers apaixonados por tecnologia, focados em criar soluções que geram resultado real. Da concepção ao deploy, acompanhamos cada etapa com precisão.
              </p>
              <p style={{ fontSize: 15, color: 'var(--color-fog-veil)', lineHeight: 1.7, marginBottom: 32 }}>
                Com sede em Teresina-PI, atendemos clientes de todo o Brasil com a mesma dedicação e excelência técnica.
              </p>
              <Link to="/sobre" className="btn-outline-pill">
                Nossa história <ArrowRight style={{ width: 14, height: 14 }} />
              </Link>
            </motion.div>
            {/* Right — value grid */}
            <div className="grid grid-cols-2" style={{ gap: 12 }}>
              {[
                { icon: Brain,  label: 'Inovação',    desc: 'Tecnologias de ponta' },
                { icon: Shield, label: 'Segurança',   desc: 'Conformidade LGPD' },
                { icon: Gauge,  label: 'Performance', desc: 'Resultados mensuráveis' },
                { icon: Award,  label: 'Excelência',  desc: 'Qualidade em cada entrega' },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card card-hover"
                  style={{ padding: 20 }}
                >
                  <div className="icon-tile" style={{ width: 44, height: 44, marginBottom: 12 }}>
                    <v.icon style={{ width: 18, height: 18, color: 'var(--color-frost-glow)', strokeWidth: 1.5 }} />
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 16, color: 'var(--color-ice-highlight)', marginBottom: 4 }}>{v.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--color-fog-veil)' }}>{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════ CASES ══════════════════════ */}
      <Section style={{ background: 'var(--color-midnight-canvas)' }}>
        <div className="mx-auto px-6 lg:px-10" style={{ maxWidth: 'var(--page-max-width)' }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ marginBottom: 48, gap: 16 }}>
            <div>
              <Eyebrow align="left">Cases</Eyebrow>
              <h2 style={{ fontSize: 44, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, lineHeight: 1.12 }}>
                <span className="text-skywash">Projetos que</span><br />
                <span className="text-brand-gradient">transformam negócios.</span>
              </h2>
            </div>
            <Link to="/portfolio" className="btn-ghost" style={{ alignSelf: 'flex-start', flexShrink: 0 }}>
              Ver portfólio completo <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 'var(--element-gap)' }}>
            {portfolio.map((p, i) => <PortfolioCard key={i} {...p} index={i} />)}
          </div>
        </div>
      </Section>

      {/* ══════════════════════ CTA ══════════════════════ */}
      <Section style={{ background: 'rgba(186,214,247,0.015)' }}>
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,102,0,0.06) 0%, transparent 65%)',
        }} />
        <div className="relative z-10 text-center mx-auto px-6" style={{ maxWidth: 680 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Eyebrow>Vamos Conversar</Eyebrow>
            <h2 style={{ fontSize: 44, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, lineHeight: 1.12, margin: '16px 0 16px' }}>
              <span className="text-skywash">Transforme sua empresa</span><br />
              <span className="text-brand-gradient">com tecnologia de alto nível.</span>
            </h2>
            <p style={{ fontSize: 18, color: 'var(--color-moon-mist)', lineHeight: 1.6, marginBottom: 40 }}>
              Entre em contato e descubra como podemos impulsionar seu negócio com soluções inovadoras.
            </p>
            <div className="flex flex-wrap items-center justify-center" style={{ gap: 12 }}>
              <a href="https://wa.me/5586981325380" target="_blank" rel="noopener noreferrer" className="btn-accent">
                <MessageSquare style={{ width: 16, height: 16 }} />
                WhatsApp
              </a>
              <Link to="/contato" className="btn-ghost">
                Solicitar orçamento <ArrowRight style={{ width: 14, height: 14 }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </>
  );
}

export default HomePage;