import React from 'react';
import { Calendar, Clock, Users, Target } from 'lucide-react';
import StatCard from '../../components/dashboard/StatCard';

export const Workspace = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            工作台
          </h2>
          <p className="text-gray-500 mt-1">日常工作管理与任务追踪</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Calendar}
          title="待处理预约"
          value="12"
          change="+3"
          description="今日新增"
        />
        <StatCard
          icon={Clock}
          title="今日课程"
          value="8"
          change="75%"
          description="完成率"
        />
        <StatCard
          icon={Users}
          title="待续费会员"
          value="15"
          change="5"
          description="本周到期"
        />
        <StatCard
          icon={Target}
          title="销售目标"
          value="82%"
          change="+7%"
          description="完成度"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">待办事项</h3>
          <div className="space-y-4">
            {[
              { title: '会员体测', priority: '高', deadline: '今天 14:00', status: '待处理' },
              { title: '课程评估', priority: '中', deadline: '明天 10:00', status: '进行中' },
              { title: '设备检查', priority: '低', deadline: '后天', status: '待处理' },
            ].map((task, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{task.title}</h4>
                  <p className="text-sm text-gray-500">截止: {task.deadline}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    task.priority === '高' ? 'bg-red-100 text-red-700' :
                    task.priority === '中' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {task.priority}优先级
                  </span>
                  <span className="text-sm text-gray-500">{task.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">近期活动</h3>
          <div className="space-y-4">
            {[
              { title: '新年健身挑战赛', date: '2024-01-01', type: '活动', status: '报名中' },
              { title: '瑜伽工作坊', date: '2024-01-15', type: '课程', status: '筹备中' },
              { title: '营养讲座', date: '2024-01-20', type: '讲座', status: '已完成' },
            ].map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs">
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-500">{event.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};