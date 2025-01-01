import React from 'react';
import { CreditCard, Users, TrendingUp, DollarSign } from 'lucide-react';
import StatCard from '../dashboard/StatCard';

const MembershipStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        icon={CreditCard}
        title="总卡种数"
        value="12"
        change="+2"
        description="本月新增"
      />
      <StatCard
        icon={Users}
        title="持卡会员"
        value="1,156"
        change="+85"
        description="本月新增"
      />
      <StatCard
        icon={TrendingUp}
        title="销售转化率"
        value="68%"
        change="+5%"
        description="较上月"
      />
      <StatCard
        icon={DollarSign}
        title="会员卡收入"
        value="¥89,420"
        change="+15%"
        description="较上月"
      />
    </div>
  );
};

export default MembershipStats;