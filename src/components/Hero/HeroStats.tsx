import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Rocket,
    value: '500+',
    label: 'Startups',
    description: 'Active innovative startups across sectors'
  },
  {
    icon: Users,
    value: '200+',
    label: 'Investors',
    description: 'Active investors looking for opportunities'
  },
  {
    icon: TrendingUp,
    value: '₹100Cr+',
    label: 'Funded',
    description: 'Total funding facilitated through platform'
  }
];

const HeroStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl transform rotate-2 transition-transform duration-300 group-hover:rotate-1" />
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform -rotate-2 group-hover:-rotate-1 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 mb-6 transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
              <stat.icon className="h-8 w-8 text-white transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-lg font-medium text-indigo-200 mb-2">{stat.label}</div>
            <div className="text-sm text-indigo-200/80">{stat.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;