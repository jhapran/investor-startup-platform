import React from 'react';
import { motion } from 'framer-motion';
import HeroStats from './HeroStats';

const HeroContent: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
        <h1 className="relative text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          Where{' '}
          <span className="relative">
            Innovation
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transform skew-x-12" />
          </span>
          {' '}Meets
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
            Investment
          </span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        Empowering the next generation of Indian entrepreneurs through
        meaningful connections and strategic investments
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16"
      >
        <HeroStats />
      </motion.div>
    </div>
  );
};

export default HeroContent;