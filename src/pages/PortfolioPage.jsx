import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'AI', 'Mobile', 'SaaS'];

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: 'Plataforma SaaS Analytics',
      description: 'Dashboard completo de análise de dados com IA integrada para insights em tempo real',
      technologies: ['React', 'Node.js', 'TensorFlow', 'AWS'],
      category: 'SaaS'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      title: 'App Mobile Fintech',
      description: 'Aplicativo de gestão financeira com mais de 50 mil usuários ativos',
      technologies: ['React Native', 'Firebase', 'Stripe'],
      category: 'Mobile'
    },
    {
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      title: 'E-commerce Enterprise',
      description: 'Plataforma de vendas online processando milhares de pedidos diários',
      technologies: ['Next.js', 'PostgreSQL', 'Redis'],
      category: 'Web'
    },
    {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      title: 'Sistema ERP Customizado',
      description: 'Solução completa de gestão empresarial para indústria de médio porte',
      technologies: ['Vue.js', 'Python', 'Docker'],
      category: 'Web'
    },
    {
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
      title: 'Portal Educacional',
      description: 'Plataforma de ensino online com videoconferência e gamificação',
      technologies: ['React', 'WebRTC', 'MongoDB'],
      category: 'Web'
    },
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
      title: 'Automação Marketing com IA',
      description: 'Sistema de automação de campanhas com IA preditiva e segmentação inteligente',
      technologies: ['Angular', 'Python', 'TensorFlow'],
      category: 'AI'
    },
    {
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      title: 'App Delivery',
      description: 'Aplicativo de delivery com rastreamento em tempo real e pagamento integrado',
      technologies: ['Flutter', 'Node.js', 'Google Maps'],
      category: 'Mobile'
    },
    {
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      title: 'CRM Inteligente',
      description: 'Sistema de CRM com IA para previsão de vendas e automação de follow-ups',
      technologies: ['React', 'Python', 'scikit-learn'],
      category: 'AI'
    },
    {
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      title: 'Plataforma de Agendamentos',
      description: 'SaaS para gestão de agendamentos com integração de calendários',
      technologies: ['Next.js', 'Prisma', 'Stripe'],
      category: 'SaaS'
    },
    {
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      title: 'App Fitness',
      description: 'Aplicativo de treinos personalizados com IA e acompanhamento nutricional',
      technologies: ['React Native', 'TensorFlow Lite', 'Firebase'],
      category: 'Mobile'
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      title: 'Sistema de BI',
      description: 'Business Intelligence com dashboards interativos e análise preditiva',
      technologies: ['Vue.js', 'Python', 'Apache Spark'],
      category: 'AI'
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      title: 'Plataforma de Colaboração',
      description: 'SaaS para gestão de projetos e colaboração em equipe',
      technologies: ['React', 'GraphQL', 'PostgreSQL'],
      category: 'SaaS'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Portfólio - GUARA SIX | Projetos que Transformam Negócios</title>
        <meta name="description" content="Conheça nosso portfólio de projetos em desenvolvimento web, IA, mobile e SaaS. Casos de sucesso que transformaram negócios." />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-foreground mb-6">Nosso portfólio</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Projetos que transformam negócios e geram resultados reais
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-primary to-secondary text-white glow-effect'
                      : 'glass-effect text-muted-foreground hover:text-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <PortfolioCard key={index} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PortfolioPage;