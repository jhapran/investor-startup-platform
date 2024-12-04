import React from 'react';
import { Save } from 'lucide-react';

const SystemSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
        <div className="bg-white rounded-lg divide-y divide-gray-200">
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Platform Name
              </label>
              <input
                type="text"
                defaultValue="StartupConnect India"
                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Email
              </label>
              <input
                type="email"
                defaultValue="support@startupconnect.in"
                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Email Settings</h3>
        <div className="bg-white rounded-lg divide-y divide-gray-200">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Notifications
                </label>
                <p className="text-sm text-gray-500">
                  Send email notifications for new matches and messages
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Template
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue="Dear {user},&#10;&#10;{message}&#10;&#10;Best regards,&#10;StartupConnect India Team"
              />
            </div>
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

export default SystemSettings;