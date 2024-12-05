import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, gradient, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className={`${gradient} rounded-lg p-2 text-white`}>
          <Icon className="h-5 w-5" />
        </div>
        
        <div>
          <h3 className="text-gray-900 font-semibold mb-1 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;