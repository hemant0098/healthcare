import React from 'react';
import AnatomySection from './anatomySection';
import HealthStatusCards from './healthStatusCard';
import CalendarView from './calendarView';
import UpcomingSchedule from './upcomingSchedule';
import ActivityFeed from './activityFeed';

export default function DashboardMainContent() {
  return (
    <div className="dashboard-content">
      <div className="left-panel">
        <AnatomySection />
        <HealthStatusCards />
        <CalendarView />
      </div>
      <div className="right-panel">
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </div>
  );
}
