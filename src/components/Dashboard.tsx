import React from 'react';
import { Users, Calendar, Dumbbell, TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, change }: {
  icon: React.ElementType;
  title: string;
  value: string;
  change: string;
}) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <Icon className="h-8 w-8 text-blue-500" />
    </div>
    <p className="text-green-500 text-sm mt-2">{change}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">仪表盘</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="活跃会员"
          value="248"
          change="较上月增长 12%"
        />
        <StatCard
          icon={Calendar}
          title="本周课程"
          value="32"
          change="较上周增长 8%"
        />
        <StatCard
          icon={Dumbbell}
          title="器材使用率"
          value="85%"
          change="较上月增长 5%"
        />
        <StatCard
          icon={TrendingUp}
          title="月收入"
          value="¥89,420"
          change="较上月增长 15%"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">今日课程安排</h3>
          <div className="space-y-4">
            {[
              { time: '09:00-10:00', name: '瑜伽初级班', instructor: '王教练' },
              { time: '10:30-11:30', name: '力量训练', instructor: '李教练' },
              { time: '14:00-15:00', name: '有氧操', instructor: '张教练' },
              { time: '16:00-17:00', name: '搏击训练', instructor: '刘教练' },
            ].map((course, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{course.name}</p>
                  <p className="text-sm text-gray-500">{course.instructor}</p>
                </div>
                <p className="text-blue-600">{course.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">器材维护提醒</h3>
          <div className="space-y-4">
            {[
              { name: '跑步机 #3', status: '需要维护', date: '2024-03-20' },
              { name: '划船机 #2', status: '正常', date: '2024-04-15' },
              { name: '杠铃组 #5', status: '需要更换配件', date: '2024-03-18' },
              { name: '椭圆机 #1', status: '正常', date: '2024-04-01' },
            ].map((equipment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{equipment.name}</p>
                  <p className={`text-sm ${
                    equipment.status === '正常' ? 'text-green-500' : 'text-red-500'
                  }`}>{equipment.status}</p>
                </div>
                <p className="text-gray-500">下次检查: {equipment.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;