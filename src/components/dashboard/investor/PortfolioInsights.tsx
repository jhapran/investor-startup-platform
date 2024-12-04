import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users } from 'lucide-react';

const PortfolioInsights: React.FC = () => {
  const portfolioCompanies = [
    {
      id: 1,
      name: 'Tech Innovators Inc',
      sector: 'Technology',
      investmentDate: '2023-06-15',
      amount: 500000,
      performance: 'up',
      metrics: {
        revenue: '+25%',
        users: '50K',
        growth: '32%'
      }
    },
    {
      id: 2,
      name: 'HealthAI Solutions',
      sector: 'Healthcare',
      investmentDate: '2023-09-01',
      amount: 750000,
      performance: 'up',
      metrics: {
        revenue: '+15%',
        users: '25K',
        growth: '18%'
      }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Portfolio Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioCompanies.map((company) => (
            <div
              key={company.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium text-gray-900">{company.name}</h3>
                  <p className="text-sm text-gray-500">{company.sector}</p>
                </div>
                {company.performance === 'up' ? (
                  <TrendingUp className="h-5 w-5 text-green-500" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-500" />
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Investment:</span>
                  <span className="font-medium text-gray-900">
                    ${company.amount.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Revenue Growth:</span>
                  <span className="font-medium text-green-600">{company.metrics.revenue}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Active Users:</span>
                  <span className="font-medium text-gray-900">{company.metrics.users}</span>
                </div>
              </div>

              <button className="mt-4 w-full text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Investment Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-2">
              <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
              <h3 className="font-medium text-gray-900">Total Invested</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">$1.25M</p>
            <p className="text-sm text-gray-500">Across 2 companies</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="font-medium text-gray-900">Avg. Growth</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">25%</p>
            <p className="text-sm text-gray-500">Year over year</p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Users className="h-5 w-5 text-indigo-600 mr-2" />
              <h3 className="font-medium text-gray-900">Total Users</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">75K</p>
            <p className="text-sm text-gray-500">Across portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInsights;