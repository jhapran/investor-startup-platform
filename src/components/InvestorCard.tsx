import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { Investor } from '../types';

interface InvestorCardProps {
  investor: Investor;
}

const InvestorCard: React.FC<InvestorCardProps> = ({ investor }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src={investor.avatar}
            alt={investor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{investor.name}</h3>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              {investor.location}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {investor.focusSectors.map((sector) => (
              <span
                key={sector}
                className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Briefcase className="w-4 h-4 mr-2" />
            {investor.portfolio} companies in portfolio
          </div>
          <div className="text-gray-600">
            Investment Range: ${investor.investmentRange.min.toLocaleString()} - 
            ${investor.investmentRange.max.toLocaleString()}
          </div>
        </div>

        <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors">
          Contact Investor
        </button>
      </div>
    </div>
  );
};

export default InvestorCard;