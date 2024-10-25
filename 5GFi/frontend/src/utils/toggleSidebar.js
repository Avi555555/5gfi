import { useState } from 'react';

export const useCustomToggleClass = (openClass = 'sidebar-open', closedClass = 'sidebar-closed') => {
  const [isOpen, setIsOpen] = useState(true); // Initial state: sidebar open

  // Toggle function
  const toggleSidebar = () => {
    setIsOpen(prev => {
        console.log('Previous State:', prev); // Log previous state
        return !prev;
      });
  };

  // Determine the correct class based on the state
  const sidebarClass = isOpen ? openClass : closedClass;

  return { sidebarClass, toggleSidebar };
};
