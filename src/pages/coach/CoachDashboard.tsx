import React from 'react';
import { Users, Calendar, Award, TrendingUp } from 'lucide-react';
import StatCard from '../../components/dashboard/StatCard';
import { SessionCard } from '../../components/coach/SessionCard';
import { ProgressTracker } from '../../components/coach/ProgressTracker';

export const CoachDashboard = () => {
  const sessions = [
    { time: '09:00-10:00', name: '王小明', type: '力量训练', status: '已完成' },
    { time: '10:30-11:30', name: '李梅', type: '减脂训练', status: '进行中' },
    { time: '15:00-16:00', name: '张三', type: '体态评估', status: '待开始' },
  ];

  const members = [
    { name: '王小明', target: '增肌', progress: 75, nextSession: '明天 09:00' },
    { name: '李梅', target: '减脂', progress: 60, nextSession: '今天 15:00' },
    { name: '张三', target: '体态改善', progress: 40, nextSession: '后天 10:30' },
  ];

  return (
    <div className="p-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            私教工作台
          </h2>
          <p className="text-gray-500 mt-1">课程管理与会员进度追踪</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Users}
          title="学员数量"
          value="24"
          change="+3"
          description="本月新增"
        />
        <StatCard
          icon={Calendar}
          title="本周课程"
          value="18"
          change="92%"
          description="出勤率"
        />
        <StatCard
          icon={Award}
          title="课程评分"
          value="4.8"
          change="+0.2"
          description="较上月"
        />
        <StatCard
          icon={TrendingUp}
          title="课时完成"
          value="89%"
          change="+5%"
          description="达成率"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">今日课程安排</h3>
          <div className="space-y-4">
            {sessions.map((session, index) => (
              <SessionCard key={index} {...session} />
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">会员训练进度</h3>
          <div className="space-y-6">
            {members.map((member, index) => (
              <ProgressTracker key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};