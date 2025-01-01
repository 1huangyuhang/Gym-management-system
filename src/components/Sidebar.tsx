import React from 'react';
import { Home, Users, Calendar, Dumbbell, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, text: '首页', path: '/' },
    { icon: Users, text: '会员管理', path: '/members' },
    { icon: Calendar, text: '课程安排', path: '/classes' },
    { icon: Dumbbell, text: '器材管理', path: '/equipment' },
    { icon: Settings, text: '设置', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="flex items-center justify-center mb-8">
        <Dumbbell className="h-8 w-8 text-white" />
        <h1 className="text-white text-xl font-bold ml-2">健身房管理系统</h1>
      </div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-lg mb-2 ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{item.text}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;