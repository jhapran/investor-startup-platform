import React from 'react';
import { Building2, Users, MapPin, Calendar } from 'lucide-react';
import { Startup } from '../types';

interface StartupCardProps {
  startup: Startup;
}

const StartupCard: React.FC<StartupCardProps> = ({ startup }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src={startup.logo}
            alt={startup.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{startup.name}</h3>
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
              {startup.sector}
            </span>
          </div>
        </div>
        
        <p className="mt-4 text-gray-600">{startup.description}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            {startup.location}
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            {startup.teamSize} team members
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            Founded {startup.foundedYear}
          </div>
          <div className="flex items-center text-green-600 font-semibold">
            ${startup.fundingNeeded.toLocaleString()} needed
          </div>
        </div>
        
        <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors">
          Connect with Startup
        </button>
      </div>
    </div>
  );
};

export default StartupCard;