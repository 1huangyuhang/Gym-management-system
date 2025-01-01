import React from 'react';
import { Calendar, Users, Clock, MapPin } from 'lucide-react';

const GroupClasses = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            团课管理
          </h2>
          <p className="text-gray-500 mt-1">课程安排与学员管理</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                         transition-colors flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span>添加课程</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          {
            name: '瑜伽初级班',
            instructor: '王教练',
            time: '周一、三、五 09:00-10:00',
            location: '瑜伽室1号',
            capacity: 20,
            enrolled: 15,
            type: '瑜伽',
          },
          {
            name: '高强度训练',
            instructor: '李教练',
            time: '周二、四、六 10:30-11:30',
            location: '团操室2号',
            capacity: 15,
            enrolled: 12,
            type: '有氧',
          },
          {
            name: '普拉提进阶',
            instructor: '张教练',
            time: '周一、三、五 14:00-15:00',
            location: '瑜伽室2号',
            capacity: 12,
            enrolled: 8,
            type: '塑形',
          },
        ].map((course, index) => (
          <div key={index} className="card group cursor-pointer">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{course.name}</h3>
                  <p className="text-gray-500">{course.instructor}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                  {course.type}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{course.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{course.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{course.enrolled}/{course.capacity} 人</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between">
                  <button className="text-blue-600 hover:text-blue-700 transition-colors">
                    查看详情
                  </button>
                  <button className="text-gray-600 hover:text-gray-700 transition-colors">
                    编辑
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupClasses;