import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, Palette, Rocket } from 'lucide-react';
import NavBar from './NavBar';
import resumePDf from '../res/G.C.Zausa-Resume.pdf';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Problem Solver",
    "Creative Thinker"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavBar/>
      <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 dark:from-gray-900/20 dark:via-blue-900/20 dark:to-purple-900/20 flex items-center justify-center relative overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Greg Clarence Zausa
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-2">
                I'm a{' '}
                <span 
                  key={currentRole}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold animate-pulse"
                >
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Aspiring Web & Software Developer | Java, Python, MERN Stack | IT Grad from BulSU | Skilled in OOP & DSA | Passionate About ML, AI, and Building Smart, Scalable Solutions
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <Code size={20} className="text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">React.Js</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <Palette size={20} className="text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <Rocket size={20} className="text-pink-600" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Full Stack</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl
                         hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 
                         transform transition-all duration-300 ease-out
                         focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <Rocket size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contacts')}
                className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white font-semibold rounded-xl
                         backdrop-blur-sm border border-white/20 dark:border-gray-700/20
                         hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl hover:scale-105
                         transform transition-all duration-300 ease-out
                         focus:outline-none focus:ring-4 focus:ring-gray-500/50"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>

            <div className="flex justify-center gap-6 mb-12">
              <a href="https://github.com/GregZausa" 
                  target='_blank'
                  rel="noopener noreferrer"
                 className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/20
                          hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg hover:scale-110
                          transform transition-all duration-300 ease-out text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github size={24} 
                />
              </a>
              <a href="https://www.linkedin.com/in/greg-clarence-zausa-a8babb293/" 
                  target='_blank'
                  rel="noopener noreferrer"
                 className='p-3 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/20
                          hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg hover:scale-110
                          transform transition-all duration-300 ease-out text-gray-700 dark:text-gray-300 hover:text-blue-600'>
                <Linkedin size={24} />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmgPMSzJcHsMkZzlMcszlsRzWmtJprBVwSJRDfJsSLQwrKCbKDlDhbnvQRdZrDKdJsVB" 
                  target='_blank'
                  rel="noopener noreferrer"
                 className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/20
                          hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg hover:scale-110
                          transform transition-all duration-300 ease-out text-gray-700 dark:text-gray-300 hover:text-red-500">
                <Mail size={24} />
              </a>
              <a href={resumePDf} 
                  target='_blank'
                  rel="noopener noreferrer"
                 className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/20
                          hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg hover:scale-110
                          transform transition-all duration-300 ease-out text-gray-700 dark:text-gray-300 hover:text-green-600">
                <Download size={24} />
              </a>
            </div>

            <div className="animate-bounce">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300"
              >
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;