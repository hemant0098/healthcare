import React from 'react';
import SimpleAppointmentCard from './simpleAppointmentCard';

export default function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>

      <div className="day-group">
        <h4>On Thursday</h4>
        <SimpleAppointmentCard title="Ophthalmologist" time="10:30 AM" />
        <SimpleAppointmentCard title="Cardiologist" time="01:00 PM" />
      </div>

      <div className="day-group">
        <h4>On Saturday</h4>
        <SimpleAppointmentCard title="Neurologist" time="11:00 AM" />
        <SimpleAppointmentCard title="Health Checkup Complete" time="04:00 PM" />
      </div>
    </div>
  );
}
