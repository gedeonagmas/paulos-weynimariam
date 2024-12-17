import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you're using react-router for routing

const CurrentPage = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPage = location.pathname.split('/');
    const current = currentPage[currentPage.length - 1];
    
    // Get all anchor tags within .parent-nav
    const links = document.querySelectorAll('.parent-nav li a');
    
    links.forEach(link => {
      const href = link.getAttribute('href');

      if (href === current) {
        link.classList.add('active');
        const parent = link.closest('.has-dropdown');
        if (parent) {
          parent.classList.add('menu-item-open');
        }
      } else {
        link.classList.remove('active');
        const parent = link.closest('.has-dropdown');
        if (parent) {
          parent.classList.remove('menu-item-open');
        }
      }
    });
  }, [location]);

  return (
    <nav className="parent-nav">
      {/* Your menu items here */}
    </nav>
  );
};

export default CurrentPage;