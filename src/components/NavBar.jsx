import React, { useState, useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'ledger', 'projects', 'doctrine', 'contacts'];
      let current = 'hero';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      });
      setActiveSection(current === 'ledger' ? 'about' : current);
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
    { label: 'Work', id: 'projects' },
    { label: 'Doctrine', id: 'doctrine' },
    { label: 'Contact', id: 'contacts' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 font-['Inter'] ${
      scrolled
        ? 'bg-[#F7F5F0]/85 dark:bg-[#0B0F14]/85 backdrop-blur-sm shadow-sm border-b border-[#E4E0D8] dark:border-white/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-md bg-[#E3A23C] flex items-center justify-center text-[#0B0F14] font-bold text-sm font-['Sora']">
            G
          </div>
          <span className="font-semibold text-[#14181C] dark:text-[#E8EDF2] tracking-tight text-sm font-['Sora']">
            Gregabyte
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleSmoothScroll(e, id)}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === id
                    ? 'text-[#C97A22] dark:text-[#E3A23C] bg-[#C97A22]/8 dark:bg-[#E3A23C]/10'
                    : 'text-[#5B6572] dark:text-[#7C8A98] hover:text-[#14181C] dark:hover:text-[#E8EDF2]'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <span className="flex items-center gap-2 text-xs text-[#5B6572] dark:text-[#7C8A98] font-medium font-['JetBrains_Mono'] uppercase tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3A23C] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E3A23C]" />
            </span>
            Open to work
          </span>
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md text-[#5B6572] dark:text-[#7C8A98] hover:bg-[#E4E0D8]/50 dark:hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-4 pb-4 pt-2 space-y-1 bg-[#F7F5F0]/95 dark:bg-[#0B0F14]/95 backdrop-blur-xl border-t border-[#E4E0D8] dark:border-white/10">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                activeSection === id
                  ? 'text-[#C97A22] dark:text-[#E3A23C] bg-[#C97A22]/8 dark:bg-[#E3A23C]/10'
                  : 'text-[#5B6572] dark:text-[#7C8A98]'
              }`}
            >
              {label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between px-4">
            <span className="flex items-center gap-2 text-xs text-[#5B6572] dark:text-[#7C8A98] font-medium font-['JetBrains_Mono'] uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#E3A23C] animate-pulse" />
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