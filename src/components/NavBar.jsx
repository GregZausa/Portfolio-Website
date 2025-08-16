import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const anchorStyle = 'relative px-3 py-2 transition-all duration-300 ease-out hover:text-blue-600 dark:hover:text-blue-400 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-blue-600 before:to-purple-600 before:transition-all before:duration-300 before:ease-out hover:before:w-full';

  const mobileAnchorStyle = 'block px-3 py-3 text-base font-medium text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300';

  return (
    <nav className='sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/20 dark:border-gray-700/20 shadow-md'>
      <div className='flex items-center justify-between px-6 py-3'>
        <a className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-3xl font-bold' href="#hero">
          Gregabyte
        </a>
        <ul className='hidden md:flex gap-4 text-gray-900 dark:text-gray-200 font-medium'>
          <a href="#hero" 
               className={anchorStyle}
               onClick={(e) => handleSmoothScroll(e, 'hero')}>
            Home
          </a>
          <a href="#about" 
               className={anchorStyle}
               onClick={(e) => handleSmoothScroll(e, 'about')}>
            About
          </a>
          <a href="#projects" 
               className={anchorStyle}
               onClick={(e) => handleSmoothScroll(e, 'projects')}>
            Projects
          </a>
          <a href="#contacts" 
               className={anchorStyle}
               onClick={(e) => handleSmoothScroll(e, 'contacts')}>
            Contact
          </a>
        </ul>
        <div className="hidden md:block">
          <ThemeToggle/>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-gray-700/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border-t border-white/20 dark:border-gray-700/20">
          <a href="#hero" 
               className={mobileAnchorStyle}
               onClick={(e) => handleSmoothScroll(e, 'hero')}>
            Home
          </a>
          <a href="#about" 
               className={mobileAnchorStyle}
               onClick={(e) => handleSmoothScroll(e, 'about')}>
            About
          </a>
          <a href="#projects" 
               className={mobileAnchorStyle}
               onClick={(e) => handleSmoothScroll(e, 'projects')}>
            Projects
          </a>
          <a href="#contacts" 
               className={mobileAnchorStyle}
               onClick={(e) => handleSmoothScroll(e, 'contacts')}>
            Contact
          </a>
          <div className="pt-2 border-t border-white/20 dark:border-gray-700/20">
            <ThemeToggle/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;