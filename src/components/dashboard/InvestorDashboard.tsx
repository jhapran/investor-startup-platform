import React, { useState } from 'react';
import { 
  Briefcase, Calendar, TrendingUp, MessageSquare, PieChart, FileText, 
  Bell, Shield, LayoutDashboard, ChevronLeft, ChevronRight, Settings,
  CreditCard, Star
} from 'lucide-react';
import DashboardMetrics from './shared/DashboardMetrics';
import ConnectionsList from './shared/ConnectionsList';
import MeetingsList from './shared/MeetingsList';
import DealProgress from './shared/DealProgress';
import PortfolioInsights from './investor/PortfolioInsights';
import SavedDocuments from './shared/SavedDocuments';
import Analytics from './investor/Analytics';
import Notifications from './shared/Notifications';
import AdminPanel from './admin/AdminPanel';
import SubscriptionPanel from './shared/SubscriptionPanel';
import SettingsPanel from './shared/SettingsPanel';
import FeaturesPanel from './shared/FeaturesPanel';
import { useAuth } from '../../hooks/useAuth';

const InvestorDashboard: React.FC = () => {
  const { user } = useAuth();
  const investorProfile = user?.profile;
  const [activeSection, setActiveSection] = useState<
    'overview' | 'portfolio' | 'analytics' | 'documents' | 'admin' | 'subscription' | 'settings' | 'features'
  >('overview');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const metrics = [
    {
      label: 'Portfolio Companies',
      value: investorProfile?.portfolio?.toString() || '0',
      icon: Briefcase,
      trend: '2 in pipeline'
    },
    {
      label: 'Meetings This Week',
      value: '8',
      icon: Calendar,
      trend: '3 tomorrow'
    },
    {
      label: 'Active Deals',
      value: '5',
      icon: TrendingUp,
      trend: '2 due diligence'
    },
    {
      label: 'Messages',
      value: '42',
      icon: MessageSquare,
      trend: '7 unread'
    }
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'analytics', label: 'Analytics', icon: PieChart },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'subscription', label: 'Subscription', icon: CreditCard },
    { id: 'features', label: 'Features', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings },
    ...(user?.isAdmin ? [{ id: 'admin', label: 'Admin', icon: Shield }] : [])
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'portfolio':
        return <PortfolioInsights />;
      case 'analytics':
        return <Analytics />;
      case 'documents':
        return <SavedDocuments />;
      case 'admin':
        return <AdminPanel />;
      case 'subscription':
        return <SubscriptionPanel />;
      case 'settings':
        return <SettingsPanel />;
      case 'features':
        return <FeaturesPanel />;
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <ConnectionsList type="investor" />
              <MeetingsList />
            </div>
            <div className="space-y-6">
              <DealProgress type="investor" />
              <Notifications />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="relative flex-shrink-0">
        <div 
          className={`h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
            isSidebarCollapsed ? 'w-16' : 'w-64'
          }`}
        >
          {/* Sidebar Header */}
          <div className="relative">
            <div className="sticky top-0 z-50 bg-white border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                {!isSidebarCollapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-500">Welcome,</div>
                    <div className="font-semibold text-gray-900 truncate">
                      {user?.displayName || 'User'}
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                  className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
                    isSidebarCollapsed ? 'mx-auto' : 'ml-auto'
                  }`}
                  title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                  {isSidebarCollapsed ? (
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as typeof activeSection)}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  activeSection === item.id
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                title={isSidebarCollapsed ? item.label : undefined}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!isSidebarCollapsed && <span className="ml-3">{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="min-h-screen pt-20">
          <div className="p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  {sidebarItems.find(item => item.id === activeSection)?.label}
                </h1>
              </div>
            </div>

            {activeSection === 'overview' && <DashboardMetrics metrics={metrics} />}

            <div className="mt-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;