import React, { useState } from 'react';
import { Users, Settings, Shield, Activity } from 'lucide-react';
import UserManagement from './UserManagement';
import SystemSettings from './SystemSettings';
import AccessControl from './AccessControl';
import ActivityLogs from './ActivityLogs';

const AdminPanel: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'users' | 'settings' | 'access' | 'logs'>('users');

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return <UserManagement />;
      case 'settings':
        return <SystemSettings />;
      case 'access':
        return <AccessControl />;
      case 'logs':
        return <ActivityLogs />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6" aria-label="Admin sections">
          <button
            onClick={() => setActiveSection('users')}
            className={`py-4 px-1 inline-flex items-center border-b-2 ${
              activeSection === 'users'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Users className="h-5 w-5 mr-2" />
            <span className="font-medium">Users</span>
          </button>
          <button
            onClick={() => setActiveSection('settings')}
            className={`py-4 px-1 inline-flex items-center border-b-2 ${
              activeSection === 'settings'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Settings className="h-5 w-5 mr-2" />
            <span className="font-medium">Settings</span>
          </button>
          <button
            onClick={() => setActiveSection('access')}
            className={`py-4 px-1 inline-flex items-center border-b-2 ${
              activeSection === 'access'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Shield className="h-5 w-5 mr-2" />
            <span className="font-medium">Access Control</span>
          </button>
          <button
            onClick={() => setActiveSection('logs')}
            className={`py-4 px-1 inline-flex items-center border-b-2 ${
              activeSection === 'logs'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Activity className="h-5 w-5 mr-2" />
            <span className="font-medium">Activity Logs</span>
          </button>
        </nav>
      </div>
      <div className="p-6">{renderContent()}</div>
    </div>
  );
};

export default AdminPanel;