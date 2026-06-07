import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Code, Brain, Smartphone, Zap, Palette, TrendingUp, Shield, Gauge, Award, Users, MessageSquare } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import ValueCard from '@/components/ValueCard.jsx';
import StatisticCounter from '@/components/StatisticCounter.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';
import GradientButton from '@/components/GradientButton.jsx';
import DifferentialCard from '@/components/DifferentialCard.jsx';

function HomePage() {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e responsivas com as tecnologias mais avançadas do mercado.'
    },
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'Soluções de IA e machine learning para automatizar processos e gerar insights valiosos.'
    },
    {
      icon: Zap,
      title: 'Sistemas Personalizados',
      description: 'Desenvolvimento de sistemas sob medida para atender necessidades específicas do seu negócio.'
    },
    {
      icon: TrendingUp,
      title: 'Automação Empresarial',
      description: 'Automatize processos repetitivos e aumente a produtividade da sua equipe.'
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com performance excepcional.'
    },
    {
      icon: Gauge,
      title: 'SaaS',
      description: 'Plataformas SaaS escaláveis com arquitetura cloud-native e alta disponibilidade.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces intuitivas e experiências memoráveis que encantam usuários.'
    },
    {
      icon: Award,
      title: 'Branding Digital',
      description: 'Construa uma identidade digital forte e consistente para sua marca.'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Inovação',
      description: 'Sempre à frente com as tecnologias mais recentes'
    },
    {
      icon: Zap,
      title: 'Tecnologia',
      description: 'Stack moderna e ferramentas de ponta'
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Parceria sólida e transparente'
    },
    {
      icon: Gauge,
      title: 'Performance',
      description: 'Resultados mensuráveis e impactantes'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Qualidade premium em cada entrega'
    }
  ];

  const differentials = [
    {
      icon: Zap,
      title: 'Tecnologia de Ponta',
      description: 'Utilizamos as ferramentas e frameworks mais modernos do mercado'
    },
    {
      icon: Gauge,
      title: 'Alta Performance',
      description: 'Sistemas otimizados para máxima velocidade e eficiência'
    },
    {
      icon: Shield,
      title: 'Segurança Robusta',
      description: 'Proteção avançada de dados e conformidade com LGPD'
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidade',
      description: 'Arquitetura preparada para crescer junto com seu negócio'
    },
    {
      icon: Users,
      title: 'Atendimento Premium',
      description: 'Suporte dedicado e acompanhamento personalizado'
    },
    {
      icon: Palette,
      title: 'Design Inovador',
      description: 'Interfaces modernas que impressionam e convertem'
    }
  ];

  const portfolio = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: 'Plataforma SaaS Analytics',
      description: 'Dashboard completo de análise de dados com IA integrada',
      technologies: ['React', 'Node.js', 'TensorFlow', 'AWS']
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      title: 'App Mobile Fintech',
      description: 'Aplicativo de gestão financeira com mais de 50 mil usuários',
      technologies: ['React Native', 'Firebase', 'Stripe']
    },
    {
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      title: 'E-commerce Enterprise',
      description: 'Plataforma de vendas online com processamento de milhares de pedidos diários',
      technologies: ['Next.js', 'PostgreSQL', 'Redis']
    },
    {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      title: 'Sistema ERP Customizado',
      description: 'Solução completa de gestão empresarial para indústria',
      technologies: ['Vue.js', 'Python', 'Docker']
    },
    {
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
      title: 'Portal Educacional',
      description: 'Plataforma de ensino online com videoconferência integrada',
      technologies: ['React', 'WebRTC', 'MongoDB']
    },
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
      title: 'Automação Marketing',
      description: 'Sistema de automação de campanhas com IA preditiva',
      technologies: ['Angular', 'Python', 'TensorFlow']
    }
  ];

  const testimonials = [
    {
      name: 'Mariana Costa',
      position: 'CEO',
      company: 'TechFlow Solutions',
      text: 'A parceria com a GUARA SIX transformou completamente nossa operação. O sistema desenvolvido aumentou nossa produtividade em 73% e reduziu custos operacionais significativamente.',
      rating: 5
    },
    {
      name: 'Rafael Mendes',
      position: 'CTO',
      company: 'Innovate Labs',
      text: 'Profissionalismo e expertise técnica de altíssimo nível. A equipe entregou uma solução robusta e escalável que superou nossas expectativas.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>GUARA SIX - Transforme sua Empresa com Tecnologia de Nível Enterprise</title>
        <meta name="description" content="Soluções inovadoras em desenvolvimento de software, IA, SaaS e automação empresarial. Transforme sua empresa com a tecnologia da GUARA SIX." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1692965064386-5868d070b86e"
            alt="Modern technology workspace with advanced equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="mx-auto flex justify-center mb-8">
              <img 
                src="https://horizons-cdn.hostinger.com/1aee07ee-5abb-4d84-bc89-e16fae91e956/9720aa5b528df2375f334add66df5732.jpg" 
                alt="GUARA SIX Logo" 
                className="h-24 md:h-32 w-auto rounded-xl object-contain shadow-2xl glow-effect"
              />
            </div>

            <h1 className="text-foreground max-w-4xl mx-auto">
              Transforme sua Empresa com a <span className="text-primary">GUARA SIX</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soluções inovadoras em desenvolvimento de software, IA, SaaS e automação empresarial
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <GradientButton variant="primary">
                Começar agora
              </GradientButton>
              <GradientButton variant="outline">
                Ver portfólio
              </GradientButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground mb-6">Inovação e tecnologia em cada projeto</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos especialistas em transformar desafios complexos em soluções tecnológicas elegantes. 
              Com uma equipe de engenheiros experientes e designers talentosos, entregamos produtos digitais 
              que impulsionam o crescimento do seu negócio.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-card-foreground mb-6">Nossos serviços</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferecemos um portfólio completo de soluções tecnológicas para empresas que buscam inovação
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground mb-6">Por que escolher a GUARA SIX</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Diferenciais que nos tornam a escolha ideal para seu projeto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((diff, index) => (
              <DifferentialCard key={index} {...diff} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-card-foreground mb-6">Projetos que transformam negócios</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <PortfolioCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatisticCounter end={10} label="Projetos concluídos" index={0} />
            <StatisticCounter end={10} label="Clientes satisfeitos" index={1} />
            <StatisticCounter end={99.7} suffix="%" label="Uptime médio" index={2} />
            <StatisticCounter end={4.9} suffix="/5" label="Avaliação média" index={3} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-card-foreground mb-6">O que nossos clientes dizem</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Depoimentos reais de empresas que transformaram seus negócios conosco
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-foreground">Transforme sua empresa com tecnologia de alto nível</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Entre em contato e descubra como podemos impulsionar seu negócio com soluções tecnológicas inovadoras
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <GradientButton variant="primary" icon={MessageSquare}>
                WhatsApp
              </GradientButton>
              <GradientButton variant="secondary">
                Solicitar orçamento
              </GradientButton>
              <GradientButton variant="outline">
                Entrar em contato
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;