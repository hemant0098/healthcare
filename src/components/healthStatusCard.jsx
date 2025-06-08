import React from 'react';
import '../styles/healthStatusCard.css';

export default function HealthStatusCards() {
  const cards = [
    { title: 'Lungs', status: 'Healthy', date: '20 Oct 2021' },
    { title: 'Teeth', status: 'Cavity Detected', date: '18 Oct 2021' },
    { title: 'Bone', status: 'Strong', date: '15 Oct 2021' }
  ];

  return (
    <div className="health-cards">
      {cards.map((card, index) => (
        <div className="health-card" key={index}>
          <h4>{card.title}</h4>
          <p>Status: {card.status}</p>
          <small>{card.date}</small>
        </div>
      ))}
    </div>
  );
}
