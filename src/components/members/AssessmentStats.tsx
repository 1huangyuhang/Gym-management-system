import React from 'react';
import { ClipboardList, Users, TrendingUp, Activity } from 'lucide-react';
import StatCard from '../dashboard/StatCard';

const AssessmentStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        icon={ClipboardList}
        title="模板总数"
        value="8"
        change="+2"
        description="本月新增"
      />
      <StatCard
        icon={Users}
        title="已测评会员"
        value="856"
        change="+45"
        description="本月新增"
      />
      <StatCard
        icon={Activity}
        title="本月测评"
        value="128"
        change="+15%"
        description="较上月"
      />
      <StatCard
        icon={TrendingUp}
        title="复测率"
        value="75%"
        change="+8%"
        description="较上月"
      />
    </div>
  );
};

export default AssessmentStats;