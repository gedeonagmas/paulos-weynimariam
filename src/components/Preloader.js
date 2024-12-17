import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    // Add 'loaded' class to the body when the window has fully loaded
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
    });

    // Cleanup the event listener
    return () => {
      window.removeEventListener('load', () => {
        document.body.classList.add('loaded');
      });
    };
  }, []);

  return (
    <div className="loader-wrapper">
      <div className="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
};

export default Preloader;
