import React from 'react';
import '../styles/schedule.css';

export default function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="simple-appointment-card">
      <div className="icon">📅</div>
      <div className="info">
        <div className="title">{title}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
}
