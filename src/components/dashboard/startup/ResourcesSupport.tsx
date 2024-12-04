import React from 'react';
import { BookOpen, FileText, Video, Users } from 'lucide-react';

const ResourcesSupport: React.FC = () => {
  const resources = [
    {
      category: 'Guides & Templates',
      items: [
        {
          title: 'Pitch Deck Template',
          type: 'template',
          icon: FileText
        },
        {
          title: 'Financial Model Template',
          type: 'template',
          icon: FileText
        }
      ]
    },
    {
      category: 'Learning Resources',
      items: [
        {
          title: 'Fundraising Masterclass',
          type: 'video',
          icon: Video
        },
        {
          title: 'Term Sheet Guide',
          type: 'guide',
          icon: BookOpen
        }
      ]
    },
    {
      category: 'Support',
      items: [
        {
          title: 'Mentor Connect',
          type: 'program',
          icon: Users
        },
        {
          title: 'Startup Clinic',
          type: 'program',
          icon: Users
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Resources & Support</h2>

      <div className="space-y-8">
        {resources.map((section) => (
          <div key={section.category}>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 rounded-lg p-4 hover:border-indigo-200 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <item.icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 capitalize">{item.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-500 transition-colors">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default ResourcesSupport;