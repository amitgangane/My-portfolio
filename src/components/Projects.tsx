import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Ace The Space : AI Resume-Job recommendation system",
      description: "This project focused on developing an NLP model that matches resumes with job descriptions. It utilized BERT embeddings and cosine similarity to identify the top 5 relevant job descriptions. The model achieved high accuracy (98.53%), precision (80.22%), and F1-score (89.02%) using a fine-tuned BERT + SVM hybrid model. Parameterized ML pipelines were built to accelerate experimentation and optimize model performance through efficient tuning.",
      image: "/ace.png",
      technologies: ["NLP", "BERT Embeddings", "Cosine Similarity", "SVM"],
      liveUrl: "#",
      githubUrl: "https://github.com/amitgangane/Ace-The-Space.git",
      featured: true
    },
    {
      title: "SchedWiz : AI Study Schedule ",
      description: "This project involved building an agentic AI system to predict student outcomes and dynamically generate study plans. It used PyTorch and Spark MLlib for predictions and a Scheduler Agent to create study plans based on real-time inputs and model predictions. The system also processed behavioral student data at scale using PySpark for preprocessing and feature extraction. MLP and Gradient Boosted Trees were applied for multi-class classification, incorporating performance-driven time allocation logic.",
      image: "/sch.png",
      technologies: [" PyTorch", "PySpark", "Spark MLlib", "MLP,", "Gradient Boosted Trees."],
      liveUrl: "#",
      githubUrl: "https://github.com/amitgangane/SchedWiz.git",
      featured: true
    },
    {
      title: "WageWizard : Salary Prediction Tool",
      description: "WageWizard is an end-to-end machine learning project that uses a Random Forest Regressor to predict salaries for fresh graduates and job seekers. By analyzing education, experience, and role, the tool helps users set realistic salary expectations and gain valuable insights into the job market. This project demonstrates a complete ML workflow, from data preprocessing and modeling to deployment, all packaged in a user-friendly tool.",
      image: "/Salary.png",
      technologies: ["Scikit-learn", "Pandas", "NumPy", "Python", "Streamlit","Pickle"],
      liveUrl: "#",
      githubUrl: "https://github.com/amitgangane/WIGEWIZARD",
      featured: false
    },
    {
      title: "IPL Data Analysis",
      description: " Analyzed extensive IPL data with SQL, generating visualizations for strategic player & team performance insight. Revealed actionable game insights by dissecting key metrics and the critical impact of on-field decisions. Optimized large dataset processing and addressed data inconsistencies to ensure the accuracy of analytical findings",
      image: "/IPL.png",
      technologies: ["SQL", "Tableau", "Data Analysis", "Decision Making", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/amitgangane/IPL-Analysis",
      featured: false
    },

    {
      title: "Wrap Around Scrape",
      description: "Collected & cleaned restaurant data from multiple sources using Py. & BeautifulSoup for better recommendations Proposed a hybrid recommendation model using content & collaborative filtering for personalized dining options..",
      image: "/Wrap.png", 
      technologies: ["Python", "BeautifulSoup", "REST API", "Geolocation API"],
      liveUrl: "#",
      githubUrl: "https://github.com/amitgangane/Wrap-Around-Scraper",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Machine learning and data engineering projects that solve real-world problems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <a href={project.githubUrl} className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.githubUrl} className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors">
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a href={project.githubUrl} className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                      <Github size={14} className="inline mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;