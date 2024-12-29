import React, { useEffect } from 'react';
import '/Users/daphnewu/Desktop/Projects/portfolio/src/components/styles/Cursor.css';

const Cursor = () => {
  useEffect(() => {
    // Get the custom cursor element
    const cursor = document.querySelector('.custom-cursor');

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Move the custom cursor to the mouse position
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });
  }, []);

  return <div className="custom-cursor"></div>;
};

export default Cursor;
