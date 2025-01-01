import React from 'react';
import { MoreHorizontal, Activity } from 'lucide-react';

const MemberList = () => {
  const members = [
    {
      id: '1',
      name: '张三',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80',
      phone: '138****1234',
      membershipType: '年卡',
      startDate: '2023-12-01',
      endDate: '2024-11-30',
      status: '活跃',
      lastVisit: '今天',
      frequency: '每周4次'
    },
    // Add more member data...
  ];

  return (
    <div className="card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">会员信息</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">会籍类型</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">到期时间</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">状态</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">训练频率</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-gray-100 last:border-0">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.phone}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                    {member.membershipType}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-600">{member.endDate}</p>
                  <p className="text-xs text-gray-400">开始: {member.startDate}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">{member.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-600">{member.frequency}</p>
                  <p className="text-xs text-gray-400">上次: {member.lastVisit}</p>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;