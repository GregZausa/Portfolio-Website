import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import LedgerSection from './components/LedgerSection'
import ProjectSection from './components/ProjectSection'
import DoctrineSection from './components/DoctrineSection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div className='min-h-screen bg-[#F7F5F0] dark:bg-[#0B0F14] text-[#14181C] dark:text-[#E8EDF2] transition-colors duration-300'>
      <HeroSection/>
      <AboutSection/>
      <LedgerSection/>
      <ProjectSection/>
      <DoctrineSection/>
      <ContactSection/>
    </div>
  )
}

export default App