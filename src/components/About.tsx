import React from 'react';
import { Brain, BarChart3, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="text-blue-600" size={24} />,
      title: "Machine Learning",
      description: "Building predictive models and AI solutions for complex problems"
    },
    {
      icon: <BarChart3 className="text-purple-600" size={24} />,
      title: "Data Analytics",
      description: "Extracting insights from data to drive business decisions"
    },
    {
      icon: <Database className="text-green-600" size={24} />,
      title: "Data Engineering",
      description: "Designing scalable data pipelines and infrastructure"
    },
    {
      icon: <TrendingUp className="text-orange-600" size={24} />,
      title: "Business Intelligence",
      description: "Creating dashboards and reports for stakeholder insights"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate data professional with expertise in machine learning, analytics, and engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Amit Gangane, a dedicated Machine Learning Engineer and Data Professional with a passion 
              for turning complex data into meaningful insights. My expertise spans across the entire data 
              lifecycle - from engineering robust data pipelines to building sophisticated ML models that 
              solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With experience in data analytics, machine learning, and data engineering, I specialize in 
              creating end-to-end solutions that bridge the gap between raw data and actionable business 
              intelligence. I'm particularly interested in deep learning, predictive analytics, and 
              building scalable data infrastructure.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not working with data, you'll find me exploring the latest ML research, 
              contributing to open-source projects, or sharing knowledge with the data science community.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {['Python', 'C++', ' Java', 'TensorFlow', 'PyTorch', 'SQL', 'Apache Spark', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;