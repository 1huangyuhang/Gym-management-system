import React from 'react';
import { MoreHorizontal, Users } from 'lucide-react';

const MembershipList = () => {
  const memberships = [
    {
      id: '1',
      name: '年卡尊享版',
      price: 3688,
      duration: '12个月',
      benefits: ['无限次健身', '8次私教课', '2次体测', '营养指导'],
      activeUsers: 286,
      status: '在售',
    },
    // Add more membership data...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {memberships.map((membership) => (
        <div key={membership.id} className="card p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">{membership.name}</h3>
              <p className="text-2xl font-bold text-blue-600 mt-1">¥{membership.price}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
              {membership.status}
            </span>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">有效期</p>
              <p className="font-medium">{membership.duration}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">包含权益</p>
              <div className="space-y-1">
                {membership.benefits.map((benefit, index) => (
                  <p key={index} className="text-sm">• {benefit}</p>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center text-gray-500">
                <Users className="h-5 w-5 mr-2" />
                <span className="text-sm">{membership.activeUsers} 位会员</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembershipList;