import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import { CoachDashboard } from './pages/coach/CoachDashboard';
import { Workspace } from './pages/workspace/Workspace';
import { GroupClasses } from './pages/services/GroupClasses';
import { PersonalTraining } from './pages/services/PersonalTraining';
import { SelfTraining } from './pages/services/SelfTraining';
import { Products } from './pages/services/Products';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coach-dashboard" element={<CoachDashboard />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/group-classes" element={<GroupClasses />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/self-training" element={<SelfTraining />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={
            <div className="p-6">
              <h2 className="text-xl font-semibold">该功能正在开发中...</h2>
            </div>
          } />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;