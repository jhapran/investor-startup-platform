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
    <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon Container */}
        <div className="relative">
          {/* Background Circle with Gradient Border */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-orange-50 to-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-orange-600 transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          {/* Step Number */}
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-sm">
            {index + 1}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-50/0 to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

export default StepCard;