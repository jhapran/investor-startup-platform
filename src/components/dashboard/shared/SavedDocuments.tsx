import React from 'react';
import { FileText, Download, Eye, Calendar } from 'lucide-react';

const SavedDocuments: React.FC = () => {
  const documents = [
    {
      id: 1,
      name: 'Tech Innovators Pitch Deck',
      type: 'PDF',
      size: '2.5 MB',
      date: '2024-03-10',
      company: 'Tech Innovators Inc'
    },
    {
      id: 2,
      name: 'Financial Projections Q1 2024',
      type: 'XLSX',
      size: '1.8 MB',
      date: '2024-03-08',
      company: 'HealthAI Solutions'
    },
    {
      id: 3,
      name: 'Due Diligence Report',
      type: 'PDF',
      size: '4.2 MB',
      date: '2024-03-05',
      company: 'Tech Innovators Inc'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Saved Documents</h2>
        <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
          Upload New
        </button>
      </div>

      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-200 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <FileText className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="font-medium text-gray-900">{doc.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{doc.company}</span>
                  <span>•</span>
                  <span>{doc.type}</span>
                  <span>•</span>
                  <span>{doc.size}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {doc.date}
              </span>
              <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                <Eye className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedDocuments;