import React from 'react';
import { Building2, Briefcase } from 'lucide-react';

interface UserTypeSelectionProps {
  onSelect: (type: 'startup' | 'investor') => void;
}

const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ onSelect }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">I am a...</h3>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onSelect('startup')}
          className="flex flex-col items-center p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
        >
          <Building2 className="h-12 w-12 text-indigo-600 mb-2" />
          <span className="text-gray-900 font-medium">Startup</span>
          <span className="text-sm text-gray-500 text-center mt-2">
            Looking for investment and connections
          </span>
        </button>

        <button
          onClick={() => onSelect('investor')}
          className="flex flex-col items-center p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
        >
          <Briefcase className="h-12 w-12 text-indigo-600 mb-2" />
          <span className="text-gray-900 font-medium">Investor</span>
          <span className="text-sm text-gray-500 text-center mt-2">
            Looking to invest in startups
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserTypeSelection;