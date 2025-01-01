import React from 'react';
import { Users, Calendar, Award, Activity, TrendingUp } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import MembershipChart from '../components/dashboard/MembershipChart';

const Dashboard = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            运营概览
          </h2>
          <p className="text-gray-500 mt-1">实时数据分析与业务监控</p>
        </div>
        <div className="flex space-x-3">
          <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm
                           shadow-sm hover:border-blue-300 transition-colors focus:outline-none focus:ring-2 
                           focus:ring-blue-500/20">
            <option>今日</option>
            <option>本周</option>
            <option>本月</option>
            <option>本年</option>
          </select>
        </div>
      </div>
      
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
          title="今日到访"
          value="156"
          change="+8%"
          description="较昨日"
        />
        <StatCard
          icon={Award}
          title="私教课销量"
          value="89"
          change="+15%"
          description="较上周"
        />
        <StatCard
          icon={TrendingUp}
          title="本月营收"
          value="¥289,420"
          change="+25%"
          description="较上月"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">营收趋势</h3>
          <RevenueChart />
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">会员分布</h3>
          <MembershipChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">今日课程</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700 transition-colors">
              查看全部
            </button>
          </div>
          <div className="space-y-4">
            {[
              { time: '09:00-10:00', name: '瑜伽初级班', instructor: '王教练', status: '进行中' },
              { time: '10:30-11:30', name: '力量训练', instructor: '李教练', status: '待开始' },
              { time: '14:00-15:00', name: '有氧操', instructor: '张教练', status: '待开始' },
              { time: '16:00-17:00', name: '搏击训练', instructor: '刘教练', status: '待开始' },
            ].map((course, index) => (
              <div key={index} 
                   className="flex items-center justify-between p-4 rounded-lg
                            bg-gradient-to-r from-gray-50 to-gray-100/50
                            hover:from-blue-50 hover:to-blue-50/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="text-blue-600 font-medium">{course.time}</div>
                  <div>
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm text-gray-500">{course.instructor}</p>
                  </div>
                </div>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  course.status === '进行中' 
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {course.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">销售目标达成</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700 transition-colors">
              详情
            </button>
          </div>
          <div className="space-y-6">
            {[
              { name: '会员卡销售', target: '¥200,000', current: '¥168,420', percentage: 84 },
              { name: '私教课销售', target: '¥150,000', current: '¥98,760', percentage: 65 },
              { name: '团课销售', target: '¥80,000', current: '¥75,300', percentage: 94 },
              { name: '商品销售', target: '¥50,000', current: '¥32,150', percentage: 64 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-500">
                    {item.current} / <span className="text-gray-400">{item.target}</span>
                  </span>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full
                                     bg-blue-100 text-blue-600">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-100">
                    <div
                      style={{ width: `${item.percentage}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
                               bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;