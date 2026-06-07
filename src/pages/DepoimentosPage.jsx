import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';

function DepoimentosPage() {
  const testimonials = [
    {
      name: 'Mariana Costa',
      position: 'CEO',
      company: 'TechFlow Solutions',
      text: 'A parceria com a GUARA SIX transformou completamente nossa operação. O sistema desenvolvido aumentou nossa produtividade em 73% e reduziu custos operacionais significativamente. A equipe demonstrou profundo conhecimento técnico e entendimento do nosso negócio.',
      rating: 5
    },
    {
      name: 'Rafael Mendes',
      position: 'CTO',
      company: 'Innovate Labs',
      text: 'Profissionalismo e expertise técnica de altíssimo nível. A equipe entregou uma solução robusta e escalável que superou nossas expectativas. O código é limpo, bem documentado e a arquitetura permite fácil manutenção e evolução.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Depoimentos - GUARA SIX | O que Nossos Clientes Dizem</title>
        <meta name="description" content="Leia depoimentos reais de empresas que transformaram seus negócios com as soluções tecnológicas da GUARA SIX." />
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
              <h1 className="text-foreground mb-6">O que nossos clientes dizem</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Depoimentos reais de empresas que transformaram seus negócios com nossas soluções
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 glass-effect rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                Pronto para transformar seu negócio?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Junte-se a centenas de empresas que já transformaram seus negócios com nossas soluções tecnológicas
              </p>
              <button className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:glow-effect transition-all duration-300 active:scale-[0.98]">
                Entre em contato
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default DepoimentosPage;