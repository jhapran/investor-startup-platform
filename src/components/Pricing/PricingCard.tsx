import React from 'react';
import { Check } from 'lucide-react';

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
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg ${
      isPopular ? 'border-2 border-indigo-500 scale-105' : 'border border-gray-200'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-6 transform -translate-y-1/2">
          <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
        <div className="mt-6">
          <span className="text-4xl font-bold text-gray-900">₹{price}</span>
          <span className="text-gray-600">/month</span>
        </div>

        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`h-5 w-5 ${
                feature.included ? 'text-green-500' : 'text-gray-300'
              }`} />
              <span className={`ml-3 ${
                feature.included ? 'text-gray-600' : 'text-gray-400 line-through'
              }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <button className={`mt-8 w-full py-3 px-4 rounded-lg font-medium ${
          isPopular
            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        } transition-colors`}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;