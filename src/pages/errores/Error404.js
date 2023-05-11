// Error404.js
import React, { useEffect } from 'react';
import './error404.css';

export function Error404() {
  useEffect(() => {
    const stars = document.querySelectorAll('.star');

    stars.forEach((star) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = 5 + Math.random() * 5;
      const direction = Math.random() * 360;

      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `-${Math.random() * duration}s`;
      star.style.transform = `translate(-50%, -50%) rotate(${direction}deg)`;
    });
  }, []);

  return (
    <div className="error-container">
      <div className="stars">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className={`star star-${i}`}></div>
        ))}
      </div>
      <h1 className="error-text">ERROR 404</h1>
    </div>
  );
}
