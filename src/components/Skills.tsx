import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "Keras", level: 85 }
      ]
    },
    {
      title: "Data Analytics",
      skills: [
        { name: "SQL", level: 95 },
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 88 },
        { name: "Seaborn", level: 85 }
      ]
    },
    {
      title: "Data Engineering",
      skills: [
        { name: "Apache Spark", level: 85 },
        { name: "Apache Kafka", level: 80 },
        { name: "Apache Airflow", level: 82 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 }
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "Tableau", level: 88 },
        { name: "Power BI", level: 85 },
        { name: "Git", level: 92 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 }
      ]
    },
    {
      title: "Specializations",
      skills: [
        { name: "Deep Learning", level: 88 },
        { name: "NLP", level: 85 },
        { name: "Computer Vision", level: 82 },
        { name: "Time Series", level: 87 },
        { name: "MLOps", level: 80 }
      ]
    },
        {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 82 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to extract insights and build intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;