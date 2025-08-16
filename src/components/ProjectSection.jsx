import React from 'react'
import dashboardProj from '../res/gemi-dashboard.png'

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "GEMI Energy Analytics Dashboard",
      description: "Advanced energy monitoring and analytics platform featuring real-time data visualization, trend analysis, and comprehensive reporting for renewable energy systems.",
      image: dashboardProj,
      alt: "GEMI Dashboard showing energy analytics",
      technologies: ["Streamlit", "Data Visualization", "Energy Analytics", "Dashboard"],
      liveDemo: "https://gemidashboards.streamlit.app/",
      github: null,
      features: [
        "Real-time energy monitoring",
        "Interactive trend analysis", 
        "Multi-site comparison",
        "Availability factor tracking"
      ]
    },
  ]

  const getTechColor = (tech) => {
    const colors = {
      'Streamlit': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
      'React': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      'Data Visualization': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'Energy Analytics': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      'Dashboard': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
    }
    return colors[tech] || 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'
  }

  return (
    <div>
      <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 dark:from-gray-900/20 dark:via-blue-900/20 dark:to-purple-900/20 py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Exploring innovative solutions in energy analytics, web development, and data science
            </p>
          </div>

          <div className={`grid gap-8 mx-auto ${
            projects.length === 1 
              ? 'grid-cols-1 place-items-center max-w-2xl' 
              : projects.length === 2
                ? 'grid-cols-1 lg:grid-cols-2 place-items-center max-w-4xl'
                : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl'
            }`}>
            {projects.map((project) => (
              <div key={project.id} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-t-2xl overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.alt} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2a2 2 0 002 2m0 0h14m-14 0a2 2 0 002 2v2a2 2 0 01-2 2M9 7h6" />
                            </svg>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">Project Screenshot</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Hover overlay with features */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl flex items-end">
                    <div className="p-4 text-white w-full">
                      <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                      <ul className="text-xs space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveDemo && (
                      <button 
                        className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium text-sm"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        Live Demo
                      </button>
                    )}
                    {project.github && (
                      <button 
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium text-sm"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        View Code
                      </button>
                    )}
                    {!project.liveDemo && !project.github && (
                      <div className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg text-center text-sm">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectSection