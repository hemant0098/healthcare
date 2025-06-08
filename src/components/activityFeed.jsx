import React from 'react';
import '../styles/activity.css';

export default function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments this week</p>

      <div className="bar-chart">
        {[40, 60, 80, 20, 50, 70, 90].map((height, index) => (
          <div className="bar" key={index} style={{ height: `${height}%` }}></div>
        ))}
      </div>
    </div>
  );
}
