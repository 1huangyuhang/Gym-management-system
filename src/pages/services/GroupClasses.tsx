import React from 'react';
import { Calendar, Users, Clock, MapPin, Plus, Filter } from 'lucide-react';

export const GroupClasses = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            团课管理
          </h2>
          <p className="text-gray-500 mt-1">课程安排与学员管理</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white text-gray-600 rounded-lg border border-gray-200 
                           hover:bg-gray-50 transition-colors flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>筛选</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                           transition-colors flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>添加课程</span>
          </button>
        </div>
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
            image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80'
          },
          {
            name: '高强度训练',
            instructor: '李教练',
            time: '周二、四、六 10:30-11:30',
            location: '团操室2号',
            capacity: 15,
            enrolled: 12,
            type: '有氧',
            image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80'
          },
          {
            name: '普拉提进阶',
            instructor: '张教练',
            time: '周一、三、五 14:00-15:00',
            location: '瑜伽室2号',
            capacity: 12,
            enrolled: 8,
            type: '塑形',
            image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80'
          },
        ].map((course, index) => (
          <div key={index} className="card group cursor-pointer overflow-hidden">
            <div className="relative h-48">
              <img 
                src={course.image} 
                alt={course.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm bg-white/90 text-blue-700 font-medium">
                {course.type}
              </span>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{course.name}</h3>
                <p className="text-gray-500">{course.instructor}</p>
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