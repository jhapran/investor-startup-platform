import React from 'react';
import { BarChart, PieChart, TrendingUp, Map } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Sector Distribution</h2>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { sector: 'Technology', percentage: 40 },
              { sector: 'Healthcare', percentage: 25 },
              { sector: 'Fintech', percentage: 20 },
              { sector: 'Others', percentage: 15 }
            ].map((item) => (
              <div key={item.sector}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{item.sector}</span>
                  <span className="font-medium text-gray-900">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Geographic Distribution</h2>
            <Map className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {[
              { region: 'Bangalore', count: 12 },
              { region: 'Mumbai', count: 8 },
              { region: 'Delhi NCR', count: 6 },
              { region: 'Hyderabad', count: 4 }
            ].map((item) => (
              <div key={item.region} className="flex items-center justify-between">
                <span className="text-gray-600">{item.region}</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded text-sm">
                  {item.count} startups
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Investment Trends</h2>
          <BarChart className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Most Active Sectors</h3>
            <div className="space-y-3">
              {[
                { sector: 'AI/ML', growth: '+45%', deals: 28 },
                { sector: 'Clean Tech', growth: '+32%', deals: 22 },
                { sector: 'Health Tech', growth: '+28%', deals: 19 }
              ].map((item) => (
                <div key={item.sector} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{item.sector}</p>
                    <p className="text-sm text-green-600">{item.growth} YoY</p>
                  </div>
                  <span className="text-gray-600">{item.deals} deals</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Funding Stage Distribution</h3>
            <div className="space-y-3">
              {[
                { stage: 'Seed', percentage: 35 },
                { stage: 'Series A', percentage: 45 },
                { stage: 'Series B', percentage: 20 }
              ].map((item) => (
                <div key={item.stage}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{item.stage}</span>
                    <span className="font-medium text-gray-900">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;