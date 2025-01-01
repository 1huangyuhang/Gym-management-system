import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, ChevronDown, ChevronRight } from 'lucide-react';
import { navigationConfig } from '../../config/navigation';
import { NavItem } from '../../types/navigation';

const NavLink = ({ item, isChild = false }: { item: NavItem; isChild?: boolean }) => {
  const location = useLocation();
  const Icon = item.icon;
  const isActive = location.pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`nav-item ${isChild ? 'ml-8' : ''} ${isActive ? 'active' : 'text-gray-300'}`}
    >
      <Icon className="h-5 w-5 mr-2" />
      <span className="text-sm font-medium">{item.text}</span>
    </Link>
  );
};

const NavGroup = ({ title, items }: { title: string; items: NavItem[] }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-gray-400 text-sm mb-3 hover:text-gray-200 transition-colors"
      >
        {isOpen ? (
          <ChevronDown className="h-4 w-4 mr-1" />
        ) : (
          <ChevronRight className="h-4 w-4 mr-1" />
        )}
        <span className="font-medium uppercase tracking-wider text-xs">{title}</span>
      </button>
      {isOpen && (
        <div className="space-y-1 animate-fade-in">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <NavLink item={item} />
              {item.children?.map((child, childIndex) => (
                <NavLink key={childIndex} item={child} isChild />
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 h-screen overflow-y-auto p-4 border-r border-white/10">
      <div className="flex items-center justify-center mb-8 p-4">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
          <div className="relative flex items-center bg-gray-900 rounded-lg p-2">
            <Dumbbell className="h-8 w-8 text-blue-400" />
            <h1 className="text-white text-xl font-bold ml-2">健身房管理</h1>
          </div>
        </div>
      </div>
      <nav className="space-y-2">
        {navigationConfig.map((group, index) => (
          <NavGroup key={index} title={group.title} items={group.items} />
        ))}
      </nav>
    </div>
  );
}