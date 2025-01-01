import React from 'react';
import { AlertCircle } from 'lucide-react';

export const EquipmentStatus = () => {
  const equipmentList = [
    { name: '跑步机 #3', status: '需要维护', date: '2024-03-20' },
    { name: '深蹲架 #1', status: '正常', date: '2024-04-15' },
    { name: '史密斯机', status: '需要检查', date: '2024-03-18' },
    { name: '划船机 #2', status: '正常', date: '2024-04-01' },
  ];

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">器材状态</h3>
        <button className="text-blue-600 text-sm hover:text-blue-700">查看全部</button>
      </div>
      <div className="space-y-4">
        {equipmentList.map((equipment, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {equipment.status !== '正常' && (
                <AlertCircle className="h-5 w-5 text-yellow-500" />
              )}
              <div>
                <p className="font-medium">{equipment.name}</p>
                <p className="text-sm text-gray-500">下次检查: {equipment.date}</p>
              </div>
            </div>
            <span className={`px-2 py-1 rounded text-xs ${
              equipment.status === '正常' ? 'bg-green-100 text-green-700' :
              equipment.status === '需要维护' ? 'bg-red-100 text-red-700' :
              'bg-yellow-100 text-yellow-700'
            }`}>
              {equipment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};