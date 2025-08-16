import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300'>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  )
}

export default App
