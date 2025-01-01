import React from 'react';
import { Users, CreditCard, TrendingUp, Activity } from 'lucide-react';
import StatCard from '../dashboard/StatCard';

const MemberStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        icon={Users}
        title="总会员数"
        value="1,248"
        change="+12%"
        description="较上月"
      />
      <StatCard
        icon={Activity}
        title="活跃会员"
        value="856"
        change="+8%"
        description="较上周"
      />
      <StatCard
        icon={CreditCard}
        title="待续费会员"
        value="45"
        change="+5"
        description="本周到期"
      />
      <StatCard
        icon={TrendingUp}
        title="会员增长率"
        value="15%"
        change="+3%"
        description="较上月"
      />
    </div>
  );
};

export default MemberStats;