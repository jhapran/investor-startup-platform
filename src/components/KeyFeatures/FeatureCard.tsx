import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="mb-8">
          <div className={`relative w-16 h-16 ${gradient} rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6`}>
            <div className="absolute inset-0 bg-white/90 rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6">
              <Icon className="h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900" />
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>
        
        <div className="mt-8 flex items-center text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;