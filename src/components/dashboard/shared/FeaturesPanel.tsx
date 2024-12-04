import React from 'react';
import { 
  UserCircle, Users, PieChart, Bell, Calendar, 
  Briefcase, FileText, BarChart, MessageSquare, Search
} from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

const FeaturesPanel: React.FC = () => {
  const { user } = useAuth();
  const isStartup = user?.userType === 'startup';

  const startupFeatures = [
    {
      icon: Search,
      name: 'Find Investor',
      description: 'Search and connect with potential investors matching your criteria.',
      status: 'active'
    },
    {
      icon: UserCircle,
      name: 'Profile Overview',
      description: 'Complete profile management with company details and funding requirements.',
      status: 'active'
    },
    {
      icon: Users,
      name: 'Investor Recommendations',
      description: 'AI-powered investor recommendations based on your startup profile.',
      status: 'active'
    },
    {
      icon: PieChart,
      name: 'Pipeline Tracker',
      description: 'Track your fundraising pipeline and investor interactions.',
      status: 'active'
    },
    {
      icon: Bell,
      name: 'Notifications & Alerts',
      description: 'Stay updated with investor interest and important deadlines.',
      status: 'active'
    },
    {
      icon: Calendar,
      name: 'Meetings & Events',
      description: 'Schedule and manage investor meetings and pitch events.',
      status: 'active'
    },
    {
      icon: FileText,
      name: 'Saved Documents',
      description: 'Manage pitch decks, financial projections, and other documents.',
      status: 'active'
    },
    {
      icon: BarChart,
      name: 'Analytics',
      description: 'Track profile views, investor interest, and fundraising metrics.',
      status: 'active'
    },
    {
      icon: MessageSquare,
      name: 'Feedback Section',
      description: 'Receive and manage feedback from potential investors.',
      status: 'active'
    }
  ];

  const investorFeatures = [
    {
      icon: UserCircle,
      name: 'Profile Overview',
      description: 'Complete profile management with investment preferences and portfolio details.',
      status: 'active'
    },
    {
      icon: Users,
      name: 'Recommended Startups',
      description: 'AI-powered startup recommendations based on your investment criteria.',
      status: 'active'
    },
    {
      icon: PieChart,
      name: 'Pipeline Tracker',
      description: 'Track and manage your investment pipeline from initial contact to closure.',
      status: 'active'
    },
    {
      icon: Bell,
      name: 'Notifications & Alerts',
      description: 'Stay updated with real-time alerts on startup activities and opportunities.',
      status: 'active'
    },
    {
      icon: Calendar,
      name: 'Meetings & Events',
      description: 'Schedule and manage meetings with startups and track upcoming events.',
      status: 'active'
    },
    {
      icon: Briefcase,
      name: 'Portfolio Insights',
      description: 'Detailed analytics and insights about your investment portfolio.',
      status: 'active'
    },
    {
      icon: FileText,
      name: 'Saved Documents',
      description: 'Secure storage and management of important documents and agreements.',
      status: 'active'
    },
    {
      icon: BarChart,
      name: 'Analytics',
      description: 'Comprehensive analytics on startup performance and market trends.',
      status: 'active'
    },
    {
      icon: MessageSquare,
      name: 'Feedback Section',
      description: 'Share and manage feedback with startups in your portfolio.',
      status: 'active'
    }
  ];

  const features = isStartup ? startupFeatures : investorFeatures;

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Platform Features</h2>
        <p className="mt-4 text-lg text-gray-600">
          {isStartup 
            ? 'Access powerful tools to connect with investors and manage your fundraising'
            : 'Access powerful tools and features to manage your investments effectively'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <feature.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
            </div>
            
            <p className="text-gray-600 text-sm">{feature.description}</p>
            
            <div className="mt-4 flex justify-end">
              <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Additional Features?</h3>
        <p className="text-gray-600 mb-6">
          We're constantly improving our platform. Let us know what features would help you the most.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition-colors">
          Request Feature
        </button>
      </div>
    </div>
  );
};

export default FeaturesPanel;