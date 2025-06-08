import React from 'react';
import '../styles/sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>General</h3>
      <ul>
        <li>Dashboard</li>
        <li>History</li>
        <li>Calendar</li>
        <li>Appointments</li>
        <li>Statistics</li>
        <li>Tests</li>
        <li>Chat</li>
        <li>Support</li>
        <li>Setting</li>
      </ul>
    </div>
  );
}
