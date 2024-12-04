import React from 'react';
import { User, MessageSquare, Calendar } from 'lucide-react';

const InvestorRecommendations: React.FC = () => {
  const recommendations = [
    {
      id: 1,
      name: 'Venture Capital Partners',
      focus: 'Technology, SaaS',
      matchScore: 92,
      investmentRange: '₹1Cr - ₹5Cr',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=VCP'
    },
    {
      id: 2,
      name: 'Growth Fund India',
      focus: 'FinTech, E-commerce',
      matchScore: 88,
      investmentRange: '₹2Cr - ₹10Cr',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=GFI'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Recommended Investors</h2>
      <div className="space-y-6">
        {recommendations.map((investor) => (
          <div
            key={investor.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={investor.avatar}
                  alt={investor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{investor.name}</h3>
                  <p className="text-sm text-gray-500">{investor.focus}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-indigo-600">
                  {investor.matchScore}% Match
                </div>
                <div className="text-sm text-gray-500">{investor.investmentRange}</div>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button className="flex items-center px-3 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Pitch
              </button>
              <button className="flex items-center px-3 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 text-indigo-600 hover:text-indigo-500 text-sm font-medium">
        View all matches
      </button>
    </div>
  );
};

export default InvestorRecommendations;