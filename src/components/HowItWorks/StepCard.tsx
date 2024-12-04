import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StepCardProps {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ index, icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl transform rotate-2 transition-transform duration-300 group-hover:rotate-1" />
      <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform -rotate-2 group-hover:-rotate-1">
        <div className="mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
              <Icon className="h-8 w-8 text-indigo-600 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300" />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 bg-indigo-600/5 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StepCard;