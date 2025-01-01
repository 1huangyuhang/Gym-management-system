import React from 'react';

interface SessionProps {
  time: string;
  name: string;
  type: string;
  status: '已完成' | '进行中' | '待开始';
}

export const SessionCard = ({ time, name, type, status }: SessionProps) => (
  <div className="flex items-center justify-between p-4 rounded-lg
                  bg-gradient-to-r from-gray-50 to-gray-100/50
                  hover:from-blue-50 hover:to-blue-50/50 transition-colors">
    <div className="flex items-center space-x-4">
      <div className="text-blue-600 font-medium">{time}</div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{type}</p>
      </div>
    </div>
    <span className={`text-sm px-3 py-1 rounded-full ${
      status === '已完成' ? 'bg-green-100 text-green-700' :
      status === '进行中' ? 'bg-blue-100 text-blue-700' :
      'bg-gray-100 text-gray-700'
    }`}>
      {status}
    </span>
  </div>
);