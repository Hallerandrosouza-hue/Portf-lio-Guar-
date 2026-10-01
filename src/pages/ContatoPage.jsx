import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Building2, Hash, MessageSquare, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

/* ── dados da empresa ── */
const EMPRESA = {
  razaoSocial: '69.398.971 HALLERANDRO SOUZA SANTANA',
  cnpj: '69.398.971/0001-38',
  cidade: 'Teresina - PI',
  endereco: 'R. José Ulisses Leal, 281 - Alegria, Teresina - PI, 64037-460',
  telefone: '(86) 8166-4289',
  whatsapp: '5586981325380',
  email: 'guara.six.6@gmail.com',
  horario: 'Segunda a Sexta: 9h às 18h',
};

const contactCards = [
  {
    icon: Building2,
    title: 'Razão Social',
    content: EMPRESA.razaoSocial,
    link: null,
  },
  {
    icon: Hash,
    title: 'CNPJ',
    content: EMPRESA.cnpj,
    link: null,
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: EMPRESA.telefone,
    link: `tel:+55${EMPRESA.telefone.replace(/\D/g, '')}`,
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    content: EMPRESA.telefone,
    link: `https://wa.me/${EMPRESA.whatsapp}`,
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: EMPRESA.email,
    link: `mailto:${EMPRESA.email}`,
  },
  {
    icon: MapPin,
    title: 'Endereço',
    content: EMPRESA.endereco,
    link: `https://maps.google.com/?q=${encodeURIComponent(EMPRESA.endereco)}`,
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    content: EMPRESA.horario,
    link: null,
  },
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="inline-block" style={{ width: 48, height: 2, background: '#FF6600' }} />
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#FF6600' }}>
        {children}
      </span>
    </div>
  );
}

function ContatoPage() {
  return (
    <>
      <Helmet>
        <title>Contato — GUARÁ SIX</title>
        <meta
          name="description"
          content="Entre em contato com a GUARÁ SIX. CNPJ: 69.398.971/0001-38 | Teresina - PI | (86) 8166-4289"
        />
      </Helmet>

      <Header />

      <main className="bg-[#080808] min-h-screen pt-24">

        {/* ── Hero banner ── */}
        <section className="py-16 md:py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Fale Conosco</SectionLabel>
              <h1 className="text-white mb-4">
                ENTRE EM<br />
                <span style={{ color: '#FF6600' }}>CONTATO.</span>
              </h1>
              <p className="text-white/50 text-lg max-w-xl leading-relaxed">
                Estamos prontos para transformar seu negócio com soluções tecnológicas de alto nível.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Dados legais + Formulário ── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* ── Coluna esquerda: dados da empresa ── */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-10"
                >
                  <h2 className="text-white text-2xl font-bold mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                    INFORMAÇÕES DA EMPRESA
                  </h2>
                  <p className="text-white/40 text-sm">Dados oficiais e canais de atendimento</p>
                </motion.div>

                {/* Card de dados legais destaque */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-6 p-6 border border-orange-500/20 bg-orange-500/5 rounded-sm"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Razão Social</p>
                      <p className="text-white font-semibold text-sm">{EMPRESA.razaoSocial}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Hash className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">CNPJ</p>
                      <p className="text-white font-semibold text-sm tracking-wider">{EMPRESA.cnpj}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Demais informações */}
                <div className="space-y-3">
                  {contactCards.filter(c => !['Razão Social', 'CNPJ'].includes(c.title)).map((info, i) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                      className="flex items-start gap-4 p-4 border border-white/6 bg-white/[0.02] rounded-sm hover:border-orange-500/20 transition-colors group"
                    >
                      <div className="w-9 h-9 flex-shrink-0 rounded-sm bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                        <info.icon className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-white/35 text-xs uppercase tracking-widest mb-0.5">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-white text-sm hover:text-orange-400 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-white text-sm">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-8"
                >
                  <a
                    href={`https://wa.me/${EMPRESA.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-sm"
                    style={{ background: '#FF6600' }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Falar pelo WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>

              {/* ── Coluna direita: formulário ── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <h2 className="text-white text-2xl font-bold mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                  ENVIE UMA MENSAGEM
                </h2>
                <p className="text-white/40 text-sm mb-8">Responderemos em até 24 horas úteis</p>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Mapa ── */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-sm overflow-hidden border border-white/6"
              style={{ height: 300 }}
            >
              <iframe
                title="Localização GUARÁ SIX"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, filter: 'grayscale(80%) invert(90%)' }}
                src="https://maps.google.com/maps?q=R.%20Jos%C3%A9%20Ulisses%20Leal,%20281%20-%20Alegria,%20Teresina%20-%20PI&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              />
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default ContatoPage;