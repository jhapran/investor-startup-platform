import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  isAnnual?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  isAnnual = false
}) => {
  const formattedPrice = Number(price.replace(',', '')).toLocaleString('en-IN');

  return (
    <div 
      className={`group relative bg-white rounded-2xl transition-all duration-300 ${
        isPopular 
          ? 'shadow-xl hover:shadow-2xl border-2 border-orange-200 hover:border-orange-300' 
          : 'shadow-lg hover:shadow-xl border border-gray-100 hover:border-orange-200'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-5 inset-x-0 flex justify-center">
          <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-full shadow-md">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-8">
        {/* Header */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-gray-600 min-h-[48px]">{description}</p>
          
          {/* Price */}
          <div className="pt-4 pb-8">
            <div className="flex items-end">
              <span className="text-4xl font-bold text-gray-900">₹{formattedPrice}</span>
              <span className="text-gray-600 ml-2 mb-1">/{isAnnual ? 'year' : 'month'}</span>
            </div>
            {isAnnual && (
              <p className="mt-2 text-sm text-green-600 font-medium">
                Includes 20% annual discount
              </p>
            )}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start"
            >
              <div className={`p-0.5 rounded-full ${
                feature.included 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                  : 'bg-gray-200'
              }`}>
                <Check className={`h-4 w-4 ${
                  feature.included ? 'text-white' : 'text-gray-400'
                }`} />
              </div>
              <span className={`ml-3 text-sm ${
                feature.included ? 'text-gray-600' : 'text-gray-400'
              }`}>
                {feature.text}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className={`
          group relative w-full py-3 px-4 rounded-xl font-medium text-sm
          transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]
          ${isPopular
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg'
            : 'bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200'
          }
        `}>
          <span className="flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-50/0 to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default PricingCard;