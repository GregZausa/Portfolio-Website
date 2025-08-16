import React from 'react';
import { Code, Rocket, Coffee, MapPin, Calendar,Award,Target,Heart,Zap,Users,BookOpen,Download } from 'lucide-react';
import resumePDf from '../res/G.C.Zausa-Resume.pdf';

const AboutSection = () => {


  const tools = [
    'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Node.js', 'PHP',
    'MySQL', 'Python', 'Streamlit', 'Git/GitHub', 'VS Code', 'React (Learning)'
  ];

  const achievements = [
    { icon: <Award className="text-yellow-500" />, text: 'Built Accounting Software for Capstone' },
    { icon: <Users className="text-blue-500" />, text: 'Developed Streamlit Dashboard' },
    { icon: <Zap className="text-purple-500" />, text: 'Information Technology Graduate' },
    { icon: <Target className="text-green-500" />, text: 'Currently mastering PERN/MERN stack' },
  ];

  return (
    <>
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 dark:from-gray-800/20 dark:via-blue-800/20 dark:to-purple-800/20 flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto my-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate developer who loves turning complex problems into simple, beautiful solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <BookOpen className="text-blue-600" size={32} />
                My Story
              </h3>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  My journey into web development began during my Information Technologies studies, where I 
                  discovered the power of creating digital solutions that solve real-world problems. 
                  What started as curiosity quickly evolved into a genuine passion for building 
                  meaningful applications.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  As a fresh graduate, I've gained hands-on experience through academic projects, 
                  including developing a comprehensive accounting software system for my capstone project. 
                  I love the challenge of transforming complex requirements into clean, functional code 
                  and intuitive user interfaces.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm currently expanding my skills in the PERN and MERN stack while strengthening my foundation 
                  in data structures, algorithms, and object-oriented programming. I'm excited to bring 
                  my fresh perspective, eagerness to learn, and dedication to quality code to a 
                  development team.
                </p>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Coffee className="text-orange-500" size={28} />
                Quick Facts
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <MapPin className="text-blue-500" size={20} />
                  <span>Based in Philippines</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Calendar className="text-green-500" size={20} />
                  <span>Fresh Graduate (2025)</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Code className="text-purple-500" size={20} />
                  <span>Full-stack enthusiast</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <BookOpen className="text-blue-500" size={20} />
                  <span>Information Technology Degree</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <Heart className="text-red-500" size={20} />
                  <span>Passionate about learning</span>
                </div>
              </div>
              <a className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                                href={resumePDf} 
                                target='_blank'
                                rel="noopener noreferrer">
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
              <Rocket className="text-blue-600" size={32} />
              Technical Skills
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50 transition-colors">
                    <Code className="text-yellow-600 dark:text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Frontend</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">User Interfaces</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
                </p>
              </div>

              <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/20 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <Rocket className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">Backend</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Server & APIs</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Node.js, Express, PostgreSQL, MongoDB, REST APIs
                </p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Tools & Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 font-medium hover:bg-white dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/20 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/80 dark:bg-gray-700/80 rounded-full">
                    {React.cloneElement(achievement.icon, { size: 32 })}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSection;