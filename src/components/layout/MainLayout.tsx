import React from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>
      <main className="flex-1 ml-64 bg-gray-100 min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;