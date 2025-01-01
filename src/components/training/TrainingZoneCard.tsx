import React from 'react';
import { Users } from 'lucide-react';

interface TrainingZoneCardProps {
  title: string;
  currentCount: number;
  maxCapacity: number;
  status: '繁忙' | '正常' | '空闲';
  equipment: string[];
}

export const TrainingZoneCard = ({
  title,
  currentCount,
  maxCapacity,
  status,
  equipment
}: TrainingZoneCardProps) => {
  const percentage = (currentCount / maxCapacity) * 100;

  return (
    <div className="card p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs ${
          status === '繁忙' ? 'bg-red-100 text-red-700' :
          status === '正常' ? 'bg-green-100 text-green-700' :
          'bg-blue-100 text-blue-700'
        }`}>
          {status}
        </span>
      </div>

      <div className="flex items-center mb-4">
        <Users className="h-5 w-5 text-gray-400 mr-2" />
        <div className="flex-1">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">{currentCount}/{maxCapacity}</span>
            <span className="text-gray-500">{Math.round(percentage)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${
                percentage > 80 ? 'bg-red-500' :
                percentage > 50 ? 'bg-yellow-500' :
                'bg-green-500'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-600">主要器材：</p>
        <div className="flex flex-wrap gap-2">
          {equipment.map((item, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 rounded text-sm text-gray-600">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};