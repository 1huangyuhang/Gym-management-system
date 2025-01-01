import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  change: string;
  description: string;
}

const StatCard = ({ icon: Icon, title, value, change, description }: StatCardProps) => (
  <div className="stat-card group">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl
                    group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
    </div>
    <p className="text-gray-500 text-sm font-medium">{title}</p>
    <h3 className="text-2xl font-bold mt-1 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
      {value}
    </h3>
    <div className="flex items-center mt-2">
      <span className={`text-sm font-semibold ${
        change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'
      }`}>
        {change}
      </span>
      <span className="text-gray-500 text-sm ml-1">{description}</span>
    </div>
  </div>
);

export default StatCard;