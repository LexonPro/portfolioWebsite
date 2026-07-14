import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: "Smart Crop Advisory System",
    description: "An AI-driven system to recommend the most suitable crops based on soil metrics and weather conditions, optimizing yield and sustainability.",
    tech: ["Python", "Machine Learning", "FastAPI", "React"],
    github: "https://github.com/LexonPro/Smart-Crop-Advisory-System",
    demo: "https://smart-crop-advisory-system-phi.vercel.app/",
    image: "/images/project1.png"
  },
  {
    title: "AI Resume Analyzer",
    description: "A tool that parses resumes, analyzes keyword matches against job descriptions, and provides an ATS score using Natural Language Processing.",
    tech: ["Python", "NLP", "Spacy", "Streamlit"],
    github: "https://github.com/LexonPro/AI-Resume-Analyzer",
    demo: "https://ai-resume-analyzer.streamlit.app",
    image: "/images/project2.png"
  },
  {
    title: "AI Assistant Chatbot",
    description: "A responsive chatbot powered by conversational AI, capable of answering queries, summarizing text, and maintaining context.",
    tech: ["JavaScript", "Node.js", "OpenAI API", "React"],
    github: "https://github.com/LexonPro/AI-Assistant-Chatbot",
    demo: "https://ai-assistant-chatbot-lexonpro.vercel.app",
    image: "/images/project3.png"
  },
  {
    title: "SpendIQ Expense Tracker",
    description: "A comprehensive expense tracking application with data visualization and predictive spending insights.",
    tech: ["React", "Tailwind CSS", "MongoDB", "Express"],
    github: "https://github.com/LexonPro/SpendIQ-Expense-Tracker",
    demo: "https://spendiq-expense-tracker.vercel.app",
    image: "/images/project4.png"
  },
  {
    title: "Shine Group (Freelance)",
    description: "A professional business website developed as a freelance project for Shine Group, featuring modern UI and responsive design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/LexonPro/shineGroup",
    demo: "https://shinegroup.vercel.app",
    image: "/images/shineGroup.png"
  },
  {
    title: "GitHub Profile Analyzer",
    description: "An analytical tool to fetch and visualize GitHub user statistics, repositories, and contribution data using the GitHub API.",
    tech: ["React", "GitHub API", "Chart.js"],
    github: "https://github.com/LexonPro/githubAnalyzer",
    demo: "https://github-analyzer.vercel.app",
    image: "/images/githubAnalyzer.png"
  },
  {
    title: "CPU Scheduling Simulator",
    description: "A CPU Scheduling algorithm simulator, visualizing process execution using Gantt charts for algorithms like FCFS, SJF, and Round Robin.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/LexonPro/cpu-Scheduler",
    demo: "https://lexonpro.github.io/cpu-Scheduler",
    image: "/images/cpuScheduler.png"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] relative"
    >
      <div className="h-48 bg-gray-900 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full hover:bg-primary text-white transition-colors backdrop-blur-sm">
            <FaGithub size={20} />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full hover:bg-primary text-white transition-colors backdrop-blur-sm">
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs font-medium px-2.5 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="https://github.com/LexonPro" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium">
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
