import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullName = 'Amit Gangane';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto rounded-full bg-gray-200">
              <img
                src="/profile.jpeg" // or "/profile.jpg" if that's the extension
                alt="Amit Gangane"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
                {displayedName}
                {!isTypingComplete && (
                  <span className="animate-pulse text-blue-600">|</span>
                )}
                {isTypingComplete && (
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></span>
                )}
              </span>
            </h1>
            
            <div className={`transition-all duration-1000 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Machine Learning Engineer, Data Analyst & Data Engineer passionate about 
                transforming data into actionable insights and building intelligent systems.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-6 mb-8">
                {['Machine Learning', 'Data Analytics', 'Data Engineering', 'Python', 'AI/ML'].map((tech, index) => (
                  <span 
                    key={tech} 
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-105"
                    style={{ 
                      animationDelay: `${index * 200 + 1000}ms`,
                      animation: isTypingComplete ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                      opacity: isTypingComplete ? 1 : 0
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <a 
                  href="/Amit_Gangane_Resume.pdf" 
                  download="Amit_Gangane_Resume.pdf"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 hover:scale-105"
                >
                  <Download size={20} />
                  Download Resume
                </a>
                <a 
                  href="#projects"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 hover:scale-105"
                >
                  <ExternalLink size={20} />
                  View Projects
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-gray-400" size={24} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;