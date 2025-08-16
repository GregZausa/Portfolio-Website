import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle, Coffee, Handshake } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contacts" className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 py-20 relative overflow-hidden">
    
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
        
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Let's{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let's collaborate and bring your ideas to life with cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
          
            <div className="space-y-8">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <MessageCircle className="text-blue-600" size={28} />
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Email</p>
                      <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmgPMSzJcHsMkZzlMcszlsRzWmtJprBVwSJRDfJsSLQwrKCbKDlDhbnvQRdZrDKdJsVB" 
                                target="_blank"
                                rel="noopener noreferrer"
                         className="text-gray-900 dark:text-white text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                        gregclarence.zausa@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Phone</p>
                      <p className="text-gray-900 dark:text-white text-lg font-medium">+63 935 165 4297</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Location</p>
                      <p className="text-gray-900 dark:text-white text-lg font-medium">San Jose del Monte City Bulacan, Philippines</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Handshake className="text-blue-600" size={28} />
                  Wanna Donate?
                </h3>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
                <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      <Coffee size={20} />
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Buy Me A Coffee</p>
                      <a href="https://buymeacoffee.com/gregabytez" 
                                target="_blank"
                                rel="noopener noreferrer"
                         className="text-gray-900 dark:text-white text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                        https://buymeacoffee.com/gregabytez
                      </a>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Send className="text-purple-600" size={28} />
                Send Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 rounded-lg
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white
                                 transition-all duration-300 group-hover:shadow-md"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 rounded-lg
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white
                                 transition-all duration-300 group-hover:shadow-md"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white
                               transition-all duration-300 group-hover:shadow-md"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 rounded-lg
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                               placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white
                               transition-all duration-300 group-hover:shadow-md resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl
                             hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02] 
                             transform transition-all duration-300 ease-out
                             focus:outline-none focus:ring-4 focus:ring-blue-500/50
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="mt-16 text-center">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Prefer Other Ways to Connect?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmgPMSzJcHsMkZzlMcszlsRzWmtJprBVwSJRDfJsSLQwrKCbKDlDhbnvQRdZrDKdJsVB" 
                   className="group flex flex-col items-center p-6 rounded-xl hover:bg-white/60 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">Direct Email</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Quick response guaranteed</span>
                </a>

                <a href="https://www.linkedin.com/in/greg-clarence-zausa-a8babb293/" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group flex flex-col items-center p-6 rounded-xl hover:bg-white/60 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin size={24} />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">LinkedIn</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Professional networking</span>
                </a>

                <a href="https://github.com/GregZausa" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group flex flex-col items-center p-6 rounded-xl hover:bg-white/60 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105">
                  <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Github size={24} />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">GitHub</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Check out my code</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Ready to Start Something Amazing?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                Whether it's a web application, mobile app, or innovative solution, let's make it happen together.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  React.js
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  Java
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;