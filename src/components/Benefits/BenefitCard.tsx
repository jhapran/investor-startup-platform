import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  userType: 'startup' | 'investor';
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description, userType, index }) => {
  const baseColor = userType === 'startup' ? 'indigo' : 'emerald';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${baseColor}-50 to-${baseColor}-100/50 rounded-3xl transform rotate-2 transition-transform duration-300 group-hover:rotate-1`} />
      <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform -rotate-2 group-hover:-rotate-1">
        <div className="mb-6">
          <div className="relative">
            <div className={`w-16 h-16 bg-${baseColor}-600/10 rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform duration-300`}>
              <Icon className={`h-8 w-8 text-${baseColor}-600 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300`} />
            </div>
          </div>
        </div>
        
        <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-${baseColor}-600 transition-colors`}>
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        <div className={`mt-6 inline-flex items-center text-${baseColor}-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
          Learn more
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;