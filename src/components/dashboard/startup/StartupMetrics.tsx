import React from 'react';
import { TrendingUp, Users, Eye, DollarSign } from 'lucide-react';

const StartupMetrics: React.FC = () => {
  const metrics = [
    {
      label: 'Profile Views',
      value: '324',
      icon: Eye,
      trend: '+12% this month'
    },
    {
      label: 'Investor Connections',
      value: '28',
      icon: Users,
      trend: '5 new this week'
    },
    {
      label: 'Funding Progress',
      value: '₹2.5Cr',
      icon: DollarSign,
      trend: '40% of goal'
    },
    {
      label: 'Growth Rate',
      value: '32%',
      icon: TrendingUp,
      trend: 'MoM increase'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <metric.icon className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
          </div>
          <h3 className="text-gray-600 font-medium">{metric.label}</h3>
          <p className="text-sm text-indigo-600 mt-2">{metric.trend}</p>
        </div>
      ))}
    </div>
  );
};

export default StartupMetrics;