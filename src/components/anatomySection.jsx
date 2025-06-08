import React from 'react';
import '../styles/anatomy.css';
import bodyImage from '../assets/body.png'; // use your real image path here

export default function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src={bodyImage} alt="Human Body" />
    </div>
  );
}
