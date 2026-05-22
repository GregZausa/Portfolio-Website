import React, { useState, useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'projects', 'contacts'];
      let current = 'hero';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contacts' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-sm border-b border-gray-200/60 dark:border-gray-800/60'
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-violet-400/30 transition-shadow duration-300">
            G
          </div>
          <span className="font-semibold text-gray-900 dark:text-white tracking-tight text-sm">
            Gregabyte
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleSmoothScroll(e, id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === id
                    ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to work
          </span>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-4 pb-4 pt-2 space-y-1 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-200/60 dark:border-gray-800/60">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === id
                  ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between px-4">
            <span className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to work
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;