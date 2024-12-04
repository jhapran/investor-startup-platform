import React from 'react';
import { User, MessageSquare } from 'lucide-react';

interface ConnectionsListProps {
  type: 'startup' | 'investor';
}

const ConnectionsList: React.FC<ConnectionsListProps> = ({ type }) => {
  const connections = [
    {
      id: 1,
      name: type === 'startup' ? 'Venture Capital Fund' : 'Tech Startup Inc',
      role: type === 'startup' ? 'Lead Investor' : 'Founder & CEO',
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${type}1`,
      lastContact: '2 days ago',
      status: 'Active Discussion'
    },
    {
      id: 2,
      name: type === 'startup' ? 'Angel Investor Group' : 'Health Innovation Co',
      role: type === 'startup' ? 'Potential Investor' : 'CTO',
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${type}2`,
      lastContact: '5 days ago',
      status: 'Initial Contact'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Connections</h2>
      <div className="space-y-4">
        {connections.map((connection) => (
          <div
            key={connection.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-4">
              <img
                src={connection.avatar}
                alt={connection.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900">{connection.name}</h3>
                <p className="text-sm text-gray-500">{connection.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">{connection.status}</p>
                <p className="text-xs text-gray-400">Last contact: {connection.lastContact}</p>
              </div>
              <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-indigo-600 hover:text-indigo-500 text-sm font-medium">
        View all connections
      </button>
    </div>
  );
};

export default ConnectionsList;