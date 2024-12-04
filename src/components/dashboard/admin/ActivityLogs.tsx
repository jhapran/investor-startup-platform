import React from 'react';
import { Clock, Filter } from 'lucide-react';

const ActivityLogs: React.FC = () => {
  const logs = [
    {
      id: 1,
      user: 'John Doe',
      action: 'User Login',
      details: 'Successfully logged in',
      timestamp: '2024-03-10 14:30:00',
      type: 'auth'
    },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'Profile Update',
      details: 'Updated company information',
      timestamp: '2024-03-10 13:45:00',
      type: 'profile'
    },
    {
      id: 3,
      user: 'Admin',
      action: 'System Settings',
      details: 'Updated email templates',
      timestamp: '2024-03-10 12:15:00',
      type: 'system'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">System Activity Logs</h3>
        <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900">
          <Filter className="h-5 w-5 mr-2" />
          Filter Logs
        </button>
      </div>

      <div className="space-y-4">
        {logs.map((log) => (
          <div
            key={log.id}
            className="bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">{log.action}</h4>
                <p className="text-sm text-gray-600 mt-1">{log.details}</p>
                <p className="text-sm text-gray-500 mt-2">By {log.user}</p>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {log.timestamp}
              </div>
            </div>
            <div className="mt-2">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  log.type === 'auth'
                    ? 'bg-blue-100 text-blue-800'
                    : log.type === 'profile'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-purple-100 text-purple-800'
                }`}
              >
                {log.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
          Load More Logs
        </button>
      </div>
    </div>
  );
};

export default ActivityLogs;