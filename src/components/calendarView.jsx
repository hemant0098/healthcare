import React from 'react';
import '../styles/calendar.css';

export default function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="calendar-day">
            <span className="date">{i + 1}</span>
            {(i + 1 === 5 || i + 1 === 12) && <div className="slot">09:00</div>}
            {(i + 1 === 12) && <div className="slot">13:00</div>}
          </div>
        ))}
      </div>
      <div className="appointments">
        <div className="appointment-card">🦷 Dentist – 09:00</div>
        <div className="appointment-card">🏃‍♂️ Physio – 13:00</div>
      </div>
    </div>
  );
}
