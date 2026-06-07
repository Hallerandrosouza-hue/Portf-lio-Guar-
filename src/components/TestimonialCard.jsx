import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function TestimonialCard({ name, position, company, text, rating = 5, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass-effect rounded-2xl p-6 md:p-8 transition-all duration-300 hover:glow-effect flex flex-col h-full"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{position}</p>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
      
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground leading-relaxed flex-grow">{text}</p>
    </motion.div>
  );
}

export default TestimonialCard;