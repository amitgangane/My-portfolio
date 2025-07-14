import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Lead Data Analyst | Project Manager",
      company: "Angel Flight West - Agency Management(Practicum Project)",
      location: "San Francisco, CA",
      period: "Aug 2024 - Present",
      description: "Developed an address extraction pipeline using Serper API, BeautifulSoup, and Playwright, achieving over 75% accuracy. Engineered proximity-based logic using airport data to rank and filter addresses for logistics relevance. Automated web scraping and validation workflows to improve healthcare agency data quality. Reduced manual research efforts by 60%, improving outreach accuracy through scalable ML-driven processes.",
      technologies: ["Python", "Serper API", "SQL", "BeautifulSoup", "Playwrite", "Google Places API", "Data Pipelines", "Regex", "Web Scraping"]
    },
    {
      title: "Software Developer Intern",
      company: "CodeKul",
      location: "Pune, India",
      period: "Jul 2022 - Apr 2023",
      description: "Developed and deployed RESTful APIs using Java (Spring Boot) integrated with SQL databases for dynamic data operations. Reduced client-side data processing time by 35% by optimizing backend queries and schema design. Contributed to Agile sprints and client feedback loops, maintaining a 95% on-time delivery rate across deliverables. Gained hands-on experience with Git-based version control, modular backend architecture, and unit testing with JUnit.",
      technologies: ["Java", "Node.js", "JavaScript", "MySQL", "Spring Boot", "Git", "RESTful APIs", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Business Analyst Intern",
      company: "InCredo",
      location: "Nagpur, India",
      period: "Jan 2022 - Jun 2022",
      description: "Built and deployed 10+ interactive dashboards using Power BI and Tableau, visualizing KPIs across sales and operations. Designed efficient SQL logic to extract key KPIs from large datasets, improving reporting speed and insight delivery Automated recurring reporting workflows, reducing manual effort by 30% and improving reporting turnaround. Collaborated with cross-functional teams to translate analytical insights into strategic business action.",
      technologies: ["SQL", "Python", "Tableau", "Power BI", "Excel", "Decsioon Making", "Data Visualization", "Data Analysis"]
    },

  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in data science, machine learning, and analytics
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                      </div>
                      <ExternalLink className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
                    </div>

                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;