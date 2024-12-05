import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <motion.a 
      href="/"
      className="flex items-center space-x-2 group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white/20 rounded-lg blur-lg transform group-hover:scale-110 transition-transform duration-300" />
        <TrendingUp className="h-8 w-8 text-white relative transform group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-2xl font-bold text-white">
        StartupConnect
        <span className="text-indigo-200">India</span>
      </span>
    </motion.a>
  );
};

export default Logo;