import React from 'react';
import { motion } from 'framer-motion';

function ValueCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="glass-effect rounded-2xl p-6 text-center transition-all duration-300 hover:glow-effect-green group"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h4 className="text-lg font-semibold mb-2 text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export default ValueCard;