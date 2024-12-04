import React from 'react';
import { TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white/20 rounded-lg blur-lg" />
        <TrendingUp className="h-8 w-8 text-white relative" />
      </div>
      <span className="text-2xl font-bold text-white">StartupConnect India</span>
    </motion.div>
  );
};

export default Logo;