import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function PortfolioCard({ image, title, description, technologies = [], index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:glow-effect group"
    >
      <div className="relative overflow-hidden aspect-video bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <ExternalLink className="w-6 h-6 text-primary" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioCard;