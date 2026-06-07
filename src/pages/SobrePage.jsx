import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Zap, Shield } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ValueCard from '@/components/ValueCard.jsx';

function SobrePage() {
  const values = [
    {
      icon: Zap,
      title: 'Inovação Constante',
      description: 'Buscamos sempre as melhores e mais modernas soluções tecnológicas'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Proteção de dados e conformidade com as melhores práticas do mercado'
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description: 'Seu sucesso é nossa prioridade em cada projeto'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometimento com qualidade premium em todas as entregas'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre - GUARA SIX | Tecnologia de Nível Enterprise</title>
        <meta name="description" content="Conheça a GUARA SIX, especialistas em desenvolvimento de software, IA e soluções tecnológicas inovadoras para empresas." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-foreground mb-6">Sobre a GUARA SIX</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Somos uma empresa de tecnologia focada em entregar soluções inovadoras que transformam negócios
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect rounded-2xl p-8 md:p-12 mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">Nossa história</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fundada com a visão de criar soluções tecnológicas que realmente fazem a diferença 
                  no dia a dia das empresas, a GUARA SIX começou como uma equipe de desenvolvedores apaixonados por tecnologia 
                  e hoje somos referência em desenvolvimento de software enterprise.
                </p>
                <p>
                  Nossa jornada foi marcada por desafios que nos tornaram mais fortes e experientes. Cada projeto entregue 
                  nos ensinou algo novo e nos permitiu evoluir constantemente. Hoje, atendemos clientes de diversos segmentos, 
                  desde startups inovadoras até grandes corporações.
                </p>
                <p>
                  Acreditamos que a tecnologia deve ser uma aliada estratégica dos negócios, não apenas uma ferramenta. 
                  Por isso, trabalhamos lado a lado com nossos clientes para entender profundamente seus desafios e 
                  criar soluções que geram resultados reais e mensuráveis.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Nossa missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Capacitar empresas através de soluções tecnológicas inovadoras, entregando produtos de alta qualidade 
                  que impulsionam o crescimento e a transformação digital dos nossos clientes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Nossa visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como a principal parceira tecnológica para empresas que buscam inovação, 
                  excelência e resultados concretos através da transformação digital.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-foreground">Nossos valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <ValueCard key={index} {...value} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">Nossa equipe</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Contamos com uma equipe multidisciplinar de profissionais altamente qualificados, incluindo engenheiros 
                de software, designers UX/UI, especialistas em IA, arquitetos de soluções e gerentes de projeto.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada membro da nossa equipe é cuidadosamente selecionado não apenas por suas habilidades técnicas, 
                mas também por compartilhar nossos valores de excelência, inovação e compromisso com o sucesso do cliente. 
                Investimos continuamente em capacitação e desenvolvimento para garantir que estamos sempre na vanguarda 
                da tecnologia.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SobrePage;