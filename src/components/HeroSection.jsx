import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';
import NavBar from './NavBar';
import resumePDf from '../res/G.C.Zausa-Resume-Developer.pdf';

const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Creative Builder'];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentRole(prev => (prev + 1) % roles.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const socials = [
    { href: 'https://github.com/GregZausa', icon: <Github size={18} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/greg-clarence-zausa-a8babb293/', icon: <Linkedin size={18} />, label: 'LinkedIn' },
    { href: 'mailto:gregclarence.zausa@gmail.com', icon: <Mail size={18} />, label: 'Email' },
  ];

  const stats = [
    { num: '2025', label: 'Graduate' },
    { num: '8+', label: 'Technologies' },
    { num: '3+', label: 'Projects shipped' },
    { num: '∞', label: 'Coffees consumed' },
  ];

  return (
    <>
      <NavBar />
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950"
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/10 dark:bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-violet-200 dark:border-violet-800/60 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 text-xs font-medium">
              <Sparkles size={11} />
              IT Graduate · Available for hire · Philippines
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 leading-[1.02]">
              Greg Clarence
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Zausa
              </span>
            </h1>

            {/* Rotating role */}
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6 font-medium">
              I'm a{' '}
              <span
                className="text-gray-900 dark:text-white font-semibold transition-all duration-300"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-6px)', display: 'inline-block' }}
              >
                {roles[currentRole]}
              </span>
            </p>

            {/* Bio */}
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-xl">
              IT grad from BulSU building clean, scalable web applications.
              Deep into PERN/MERN stacks, Python data tools, and UI that actually delights.
              Passionate about ML, AI, and turning complex problems into simple solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gray-900/20 dark:shadow-white/10"
              >
                View my work <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo('contacts')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-sm border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get in touch
              </button>
              <a
                href={resumePDf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-violet-600 dark:text-violet-400 rounded-xl font-semibold text-sm border border-violet-200 dark:border-violet-800/50 bg-violet-50 dark:bg-violet-950/30 hover:bg-violet-100 dark:hover:bg-violet-950/60 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download size={14} /> Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-16">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 text-sm"
                >
                  {icon}
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-8 border-t border-gray-100 dark:border-gray-800">
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{num}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-300 dark:text-gray-700 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-gray-300 dark:to-gray-700" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;