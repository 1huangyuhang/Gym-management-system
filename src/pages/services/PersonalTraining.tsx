import React from 'react';
import { Users, Calendar, Award, TrendingUp, Plus, Search } from 'lucide-react';
import StatCard from '../../components/dashboard/StatCard';

export const PersonalTraining = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            私教管理
          </h2>
          <p className="text-gray-500 mt-1">私教课程与会员管理</p>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索会员或教练..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                           transition-colors flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>新增课程</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Users}
          title="活跃会员"
          value="156"
          change="+12"
          description="本月新增"
        />
        <StatCard
          icon={Calendar}
          title="本月课时"
          value="428"
          change="85%"
          description="完成率"
        />
        <StatCard
          icon={Award}
          title="教练评分"
          value="4.8"
          change="+0.2"
          description="较上月"
        />
        <StatCard
          icon={TrendingUp}
          title="课时转化"
          value="76%"
          change="+5%"
          description="较上月"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">今日私教课程</h3>
            <div className="space-y-4">
              {[
                {
                  time: '09:00-10:00',
                  member: '张三',
                  coach: '王教练',
                  course: '力量训练',
                  status: '已完成',
                  room: '私教室1'
                },
                {
                  time: '10:30-11:30',
                  member: '李四',
                  coach: '李教练',
                  course: '体态评估',
                  status: '进行中',
                  room: '评估室'
                },
                {
                  time: '14:00-15:00',
                  member: '王五',
                  coach: '张教练',
                  course: '康复训练',
                  status: '待开始',
                  room: '私教室2'
                }
              ].map((session, index) => (
                <div key={index} 
                     className="flex items-center justify-between p-4 rounded-lg
                              bg-gradient-to-r from-gray-50 to-gray-100/50
                              hover:from-blue-50 hover:to-blue-50/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-600 font-medium">{session.time}</div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-medium">{session.member}</p>
                        <span className="text-gray-400">|</span>
                        <p className="text-gray-600">{session.coach}</p>
                      </div>
                      <p className="text-sm text-gray-500">{session.course} · {session.room}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    session.status === '已完成' ? 'bg-green-100 text-green-700' :
                    session.status === '进行中' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {session.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">教练工作状态</h3>
          <div className="space-y-6">
            {[
              { name: '王教练', status: '授课中', courses: 4, rating: 4.9 },
              { name: '李教练', status: '休息中', courses: 3, rating: 4.8 },
              { name: '张教练', status: '备课中', courses: 5, rating: 4.7 },
            ].map((coach, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 
                                flex items-center justify-center text-white font-medium">
                    {coach.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{coach.name}</p>
                    <p className="text-sm text-gray-500">今日 {coach.courses} 节课</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    coach.status === '授课中' ? 'bg-green-100 text-green-700' :
                    coach.status === '休息中' ? 'bg-gray-100 text-gray-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {coach.status}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">评分 {coach.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};