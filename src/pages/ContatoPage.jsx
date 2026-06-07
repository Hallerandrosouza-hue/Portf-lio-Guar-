import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContatoPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'guara.six.6@gmail.com',
      link: 'mailto:guara.six.6@gmail.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '86 98132-5380 / 89 98137-5559',
      link: 'tel:+5586981325380'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'R. José Ulisses Leal, 281 - Alegria, Teresina - PI, 64037-460',
      link: null
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta: 9h às 18h',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - GUARA SIX | Entre em Contato Conosco</title>
        <meta name="description" content="Entre em contato com a GUARA SIX. Estamos prontos para transformar seu negócio com soluções tecnológicas inovadoras." />
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
              <h1 className="text-foreground mb-6">Entre em contato</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Estamos prontos para transformar seu negócio com soluções tecnológicas inovadoras
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-semibold mb-6 text-foreground">Informações de contato</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="glass-effect rounded-xl p-6 hover:glow-effect transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1 text-foreground">{info.title}</h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="glass-effect rounded-2xl overflow-hidden h-64 flex items-center justify-center p-0 border border-white/5 relative"
                >
                  <iframe
                    title="Mapa de localização"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                    src="https://maps.google.com/maps?q=R.%20Jos%C3%A9%20Ulisses%20Leal,%20281%20-%20Alegria,%20Teresina%20-%20PI&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContatoPage;