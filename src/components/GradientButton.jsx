import React from 'react';
import { motion } from 'framer-motion';

function GradientButton({ children, onClick, variant = 'primary', className = '', icon: Icon }) {
  const baseClasses = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:glow-effect active:scale-[0.98]",
    secondary: "bg-gradient-to-r from-accent to-primary text-white hover:glow-effect-green active:scale-[0.98]",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </motion.button>
  );
}

export default GradientButton;