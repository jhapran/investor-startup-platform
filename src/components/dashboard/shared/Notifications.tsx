import React from 'react';
import { Bell, MessageSquare, Calendar, TrendingUp } from 'lucide-react';

const Notifications: React.FC = () => {
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New message from Tech Innovators',
      description: 'Updated financial projections available for review',
      time: '2 hours ago',
      icon: MessageSquare
    },
    {
      id: 2,
      type: 'meeting',
      title: 'Upcoming Meeting',
      description: 'Pitch presentation with HealthAI Solutions',
      time: 'Tomorrow, 10:00 AM',
      icon: Calendar
    },
    {
      id: 3,
      type: 'update',
      title: 'Portfolio Update',
      description: 'Tech Innovators reached 50K users milestone',
      time: '1 day ago',
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Notifications</h2>
        <Bell className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex-shrink-0">
              <notification.icon className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{notification.title}</p>
              <p className="text-sm text-gray-600">{notification.description}</p>
              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 text-indigo-600 hover:text-indigo-500 text-sm font-medium">
        View all notifications
      </button>
    </div>
  );
};

export default Notifications;