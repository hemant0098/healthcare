import React from 'react';
import '../styles/header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">Healthcare.</div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="profile">
        <span className="notification-icon">🔔</span>
        <span className="avatar">👤 Hemant</span>
        <button className="add-button">+ Add</button>
      </div>
    </div>
  );
}
