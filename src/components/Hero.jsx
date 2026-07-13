import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-start text-left space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium tracking-wide"
          >
            Hello, World! I am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Shikhar Maurya
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-gray-300 h-10"
          >
            <span className="mr-2">I am a</span>
            <span className="gradient-text">
              <Typewriter
                words={['B.Tech Data Science Student', 'Software Developer', 'Problem Solver', 'Tech Enthusiast']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-lg text-lg leading-relaxed"
          >
            Passionate about AI, Data Science, Web Development, and crafting elegant solutions to complex problems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-primary/25">
              View Projects
            </a>
            <a href="/resume.pdf" className="px-8 py-3 rounded-full border border-gray-600 hover:border-primary text-gray-300 hover:text-primary font-medium hover:scale-105 transition-all">
              Download Resume
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-gray-600 hover:border-accent text-gray-300 hover:text-accent font-medium hover:scale-105 transition-all">
              Contact Me
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6 pt-6"
          >
            <a href="https://github.com/LexonPro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl hover:-translate-y-1 transition-transform">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shikhar-maurya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary text-2xl hover:-translate-y-1 transition-transform">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/LexonPro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 text-2xl hover:-translate-y-1 transition-transform">
              <SiLeetcode />
            </a>
          </motion.div>
        </div>
        
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 overflow-hidden relative z-10 glass flex items-center justify-center p-2">
              <img 
                src="https://via.placeholder.com/400" 
                alt="Shikhar Maurya" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl animate-float">
              <span className="text-3xl">🚀</span>
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="text-3xl">💻</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
