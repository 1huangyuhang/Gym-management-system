import React from 'react';
import { CreditCard, Plus, Search } from 'lucide-react';
import MembershipList from '../../components/members/MembershipList';
import MembershipStats from '../../components/members/MembershipStats';

export const Memberships = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            会员卡管理
          </h2>
          <p className="text-gray-500 mt-1">会员卡类型与销售管理</p>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索会员卡..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                           transition-colors flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>新增卡种</span>
          </button>
        </div>
      </div>

      <MembershipStats />
      <MembershipList />
    </div>
  );
};