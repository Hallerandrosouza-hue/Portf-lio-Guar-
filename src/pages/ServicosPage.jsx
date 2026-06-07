import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Brain, Smartphone, Zap, Palette, TrendingUp, Gauge, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ServicosPage() {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criamos aplicações web modernas, responsivas e de alta performance utilizando as tecnologias mais avançadas do mercado.',
      benefits: [
        'Arquitetura escalável e robusta',
        'Design responsivo para todos os dispositivos',
        'Performance otimizada e SEO',
        'Integração com APIs e serviços externos'
      ],
      useCases: 'Ideal para portais corporativos, e-commerce, dashboards administrativos e plataformas SaaS.'
    },
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'Desenvolvemos soluções de IA e machine learning para automatizar processos, gerar insights valiosos e criar experiências personalizadas.',
      benefits: [
        'Análise preditiva de dados',
        'Automação inteligente de processos',
        'Chatbots e assistentes virtuais',
        'Reconhecimento de padrões e anomalias'
      ],
      useCases: 'Perfeito para análise de dados, automação de atendimento, previsão de demanda e personalização de experiências.'
    },
    {
      icon: Zap,
      title: 'Sistemas Personalizados',
      description: 'Desenvolvemos sistemas sob medida que atendem perfeitamente às necessidades específicas do seu negócio.',
      benefits: [
        'Solução 100% customizada',
        'Integração com sistemas legados',
        'Processos otimizados',
        'Suporte técnico dedicado'
      ],
      useCases: 'Essencial para empresas com processos únicos que não se encaixam em soluções prontas do mercado.'
    },
    {
      icon: TrendingUp,
      title: 'Automação Empresarial',
      description: 'Automatizamos processos repetitivos e burocráticos, liberando sua equipe para focar em atividades estratégicas.',
      benefits: [
        'Redução de custos operacionais',
        'Eliminação de erros manuais',
        'Aumento de produtividade',
        'Processos padronizados'
      ],
      useCases: 'Ideal para automatizar workflows, aprovações, relatórios, integrações entre sistemas e tarefas repetitivas.'
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Desenvolvemos apps nativos e híbridos para iOS e Android com performance excepcional e experiência de usuário impecável.',
      benefits: [
        'Apps nativos ou híbridos',
        'Performance otimizada',
        'Design intuitivo',
        'Publicação nas lojas'
      ],
      useCases: 'Perfeito para apps de serviços, e-commerce mobile, aplicativos corporativos e soluções B2C.'
    },
    {
      icon: Gauge,
      title: 'SaaS',
      description: 'Criamos plataformas SaaS escaláveis com arquitetura cloud-native, alta disponibilidade e segurança robusta.',
      benefits: [
        'Arquitetura multi-tenant',
        'Escalabilidade automática',
        'Alta disponibilidade (99.9%+)',
        'Segurança enterprise'
      ],
      useCases: 'Ideal para criar produtos SaaS, plataformas de assinatura e soluções B2B escaláveis.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Criamos interfaces intuitivas e experiências memoráveis que encantam usuários e aumentam conversões.',
      benefits: [
        'Design centrado no usuário',
        'Prototipagem interativa',
        'Testes de usabilidade',
        'Design system completo'
      ],
      useCases: 'Essencial para produtos digitais que precisam de alta taxa de conversão e satisfação do usuário.'
    },
    {
      icon: Award,
      title: 'Branding Digital',
      description: 'Construímos identidades digitais fortes e consistentes que destacam sua marca no mercado.',
      benefits: [
        'Identidade visual completa',
        'Guidelines de marca',
        'Materiais de marketing',
        'Presença digital consistente'
      ],
      useCases: 'Perfeito para empresas que querem fortalecer sua presença digital e criar uma marca memorável.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - GUARA SIX | Soluções Tecnológicas Completas</title>
        <meta name="description" content="Conheça nosso portfólio completo de serviços: desenvolvimento web, IA, apps mobile, SaaS, automação e muito mais." />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-foreground mb-6">Nossos serviços</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Oferecemos um portfólio completo de soluções tecnológicas para empresas que buscam inovação e resultados
              </p>
            </motion.div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-8 md:p-12 hover:glow-effect transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">{service.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-foreground">Benefícios</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start space-x-2 text-muted-foreground">
                                <span className="text-primary mt-1">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-foreground">Casos de uso</h3>
                          <p className="text-muted-foreground leading-relaxed">{service.useCases}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicosPage;