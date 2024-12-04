import React from 'react';
import { Bell, Lock, Globe, Mail, Save } from 'lucide-react';

const SettingsPanel: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {/* Profile Settings */}
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Profile Settings</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                rows={3}
                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
              <p className="mt-1 text-sm text-gray-500">
                Manage how you receive notifications
              </p>
            </div>
            <Bell className="h-5 w-5 text-gray-400" />
          </div>

          <div className="mt-6 space-y-4">
            {[
              'New startup matches',
              'Messages from startups',
              'Investment opportunities',
              'Platform updates'
            ].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span className="text-gray-700">{item}</span>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">Push</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Privacy</h3>
              <p className="mt-1 text-sm text-gray-500">
                Manage your privacy preferences
              </p>
            </div>
            <Lock className="h-5 w-5 text-gray-400" />
          </div>

          <div className="mt-6 space-y-4">
            {[
              'Make profile visible to startups',
              'Show investment history',
              'Allow direct messages',
              'Share analytics with network'
            ].map((item) => (
              <label key={item} className="flex items-center justify-between">
                <span className="text-gray-700">{item}</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input
                    type="checkbox"
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
          <Save className="h-5 w-5 mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;