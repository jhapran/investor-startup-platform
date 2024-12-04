import React from 'react';
import { Target, Flag, Award } from 'lucide-react';

const FundingProgress: React.FC = () => {
  const milestones = [
    {
      title: 'Seed Round',
      target: '₹1.5Cr',
      achieved: '₹1.2Cr',
      progress: 80,
      status: 'In Progress',
      date: 'March 2024'
    },
    {
      title: 'Series A Target',
      target: '₹5Cr',
      achieved: '₹0',
      progress: 0,
      status: 'Upcoming',
      date: 'Q3 2024'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Funding Progress</h2>
      
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {index === 0 ? (
                  <Target className="h-6 w-6 text-indigo-600" />
                ) : (
                  <Flag className="h-6 w-6 text-gray-400" />
                )}
                <div>
                  <h3 className="font-medium text-gray-900">{milestone.title}</h3>
                  <p className="text-sm text-gray-500">Target: {milestone.target}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">
                  {milestone.achieved}
                </div>
                <div className="text-sm text-gray-500">{milestone.date}</div>
              </div>
            </div>

            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    {milestone.progress}% Complete
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    {milestone.status}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-100">
                <div
                  style={{ width: `${milestone.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                />
              </div>
            </div>

            {milestone.progress >= 25 && (
              <div className="flex items-center text-green-600 text-sm">
                <Award className="h-4 w-4 mr-2" />
                Milestone: First 25% funding secured
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
          View funding details
        </button>
      </div>
    </div>
  );
};

export default FundingProgress;