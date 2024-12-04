import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface DealProgressProps {
  type: 'startup' | 'investor';
}

const DealProgress: React.FC<DealProgressProps> = ({ type }) => {
  const deals = [
    {
      id: 1,
      name: type === 'startup' ? 'Series A Funding' : 'Tech Startup Investment',
      stage: 'Due Diligence',
      progress: 65,
      status: 'in-progress',
      lastUpdate: '2 days ago',
      nextAction: 'Review financial documents'
    },
    {
      id: 2,
      name: type === 'startup' ? 'Seed Round' : 'Healthcare AI Investment',
      stage: 'Term Sheet',
      progress: 85,
      status: 'pending',
      lastUpdate: '1 day ago',
      nextAction: 'Schedule final meeting'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-indigo-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Deal Pipeline</h2>
      <div className="space-y-6">
        {deals.map((deal) => (
          <div key={deal.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{deal.name}</h3>
                <p className="text-sm text-gray-500">Stage: {deal.stage}</p>
              </div>
              {getStatusIcon(deal.status)}
            </div>
            
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-indigo-600">
                    {deal.progress}% Complete
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-gray-600">
                    Last update: {deal.lastUpdate}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-100">
                <div
                  style={{ width: `${deal.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                />
              </div>
            </div>

            <div className="text-sm">
              <span className="font-medium text-gray-700">Next Action: </span>
              <span className="text-gray-600">{deal.nextAction}</span>
            </div>

            <div className="pt-4 flex justify-end">
              <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                View details
              </button>
            </div>

            {deals.length > 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealProgress;