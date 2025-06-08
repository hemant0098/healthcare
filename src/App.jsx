import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import DashboardMainContent from './components/dashboardMainContent';

import './styles/dashboard.css';

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}
