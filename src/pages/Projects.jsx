import React from 'react';
import { Code2, GitBranch, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Debris AI",
      description: "Debris AI is an advanced AI-powered solution designed to detect and classify space debris using computer vision. Built with Python and TensorFlow, this project helps space agencies track and monitor potential collision risks in Earth's orbit.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      tech: ["AI", "TensorFlow", "Python", "OpenCV"],
      stars: 128,
      Github_repo_link: "",
      websitelink: "",
      owner: "",
      open_source: true,
      
    },
    {
      title: "SmartLearn Hub",
      description: "An intelligent learning management system that adapts to each student's learning pace and style. Features include AI-powered content recommendations, progress tracking, and interactive assessments.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      tech: ["React", "Node.js", "MongoDB", "Machine Learning"],
      stars: 95,
      Github_repo_link: "",
      websitelink: "",
      owner: "",
      open_source: true,
      
    },
    {
      title: "EcoTrack",
      description: "A mobile application for tracking and reducing carbon footprint. Users can monitor their daily activities, get personalized suggestions for eco-friendly alternatives, and connect with like-minded individuals.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80",
      tech: ["React Native", "Firebase", "Node.js", "GraphQL"],
      stars: 84,
      Github_repo_link: "",
      websitelink: "",
      owner: "",
      open_source: true,
      
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">OUR PROJECTS</h1>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden border border-purple-500/20 transition-colors duration-300 
                         bg-gradient-to-r from-purple-100 to-gray-200 dark:from-purple-900/20 dark:to-black"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-400">
                      <Code2 className="w-4 h-4" />
                      <span>Technology Stack</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-500 dark:text-yellow-400">
                    <Star className="w-5 h-5" />
                    <span>{project.stars}</span>
                  </div>
                </div>
                
                <p className="text-gray-900 dark:text-gray-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-300 dark:bg-purple-900/30 rounded-full text-sm text-purple-800 dark:text-purple-300 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
                    <GitBranch className="w-4 h-4" />
                    <span>View Project</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;