import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full relative flex items-center justify-center overflow-hidden pt-20">
      
      {/* Spotlights */}
      <div>
        <div className="animate-spotlight pointer-events-none absolute z-[1] w-[138%] lg:w-[84%] opacity-0 -top-40 -left-10 md:-left-32 md:-top-20 h-screen bg-white/20 blur-[151px] rounded-[50%]" />
        <div className="animate-spotlight pointer-events-none absolute z-[1] lg:w-[84%] opacity-0 h-[80vh] w-[50vw] top-10 left-full bg-purple/20 blur-[151px] rounded-[50%]" style={{ animationDelay: '1s' }} />
        <div className="animate-spotlight pointer-events-none absolute z-[1] lg:w-[84%] opacity-0 left-80 top-28 h-[80vh] w-[50vw] bg-blue-500/20 blur-[151px] rounded-[50%]" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white bg-grid-black absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello, World!
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="my-4"
          >
            <h1 className="font-bold text-center text-[40px] md:text-5xl lg:text-7xl">
              I am <span className="text-purple">Shikhar Maurya</span>
            </h1>
          </motion.div>

          <div className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl h-10 text-blue-100">
            <span className="mr-2">I am a</span>
            <span className="font-semibold text-white">
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
          </div>

          <p className="text-center text-blue-100 max-w-lg text-sm md:text-base mt-2 mb-8">
            Passionate about AI, Data Science, Web Development, and crafting elegant solutions to complex problems.
          </p>

          <a href="#projects">
            <button className="relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-slate-900 transition-colors">
                Show my work
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                </svg>
              </span>
            </button>
          </a>

          <div className="flex gap-6 mt-12">
            <a href="https://github.com/LexonPro" target="_blank" rel="noopener noreferrer" className="border border-white/[.2] rounded-full black-gradient w-12 h-12 flex justify-center items-center hover:scale-110 transition-transform text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/lexonpro" target="_blank" rel="noopener noreferrer" className="border border-white/[.2] rounded-full black-gradient w-12 h-12 flex justify-center items-center hover:scale-110 transition-transform text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://leetcode.com/LexonPro" target="_blank" rel="noopener noreferrer" className="border border-white/[.2] rounded-full black-gradient w-12 h-12 flex justify-center items-center hover:scale-110 transition-transform text-white">
              <SiLeetcode size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
