import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  icon: LucideIcon;
  trend: string;
}

interface DashboardMetricsProps {
  metrics: Metric[];
}

const DashboardMetrics: React.FC<DashboardMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <metric.icon className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
          </div>
          <h3 className="text-gray-600 font-medium">{metric.label}</h3>
          <p className="text-sm text-indigo-600 mt-2">{metric.trend}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardMetrics;