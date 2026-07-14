import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.1] transition duration-200 lg:col-span-3 md:col-span-6 lg:row-span-2 min-h-[40vh] lg:min-h-[60vh] black-gradient p-8 lg:p-10 flex flex-col justify-end"
          >
            <div className="font-sans text-xl lg:text-4xl max-w-lg font-bold z-10 text-white leading-tight">
              I am a passionate Data Science student and Full Stack Developer.
            </div>
            <p className="text-[#C1C2D3] mt-4 z-10 max-w-md text-sm md:text-base">
              Driven by an insatiable curiosity for AI and modern web development, I thrive in translating complex problems into elegant software solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.1] transition duration-200 lg:col-span-2 md:col-span-3 min-h-[25vh] black-gradient p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="font-sans text-xl lg:text-3xl font-bold z-10 text-white">
              Open to Internships
            </div>
            <p className="text-[#C1C2D3] mt-2 text-sm md:text-base">
              Currently seeking opportunities to learn, grow, and make a meaningful impact.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.1] transition duration-200 lg:col-span-2 md:col-span-3 min-h-[25vh] black-gradient p-8 flex flex-col items-center justify-center text-center"
          >
             <div className="font-sans text-xl lg:text-3xl font-bold z-10 text-white">
              Constant Learner
            </div>
            <p className="text-[#C1C2D3] mt-2 text-sm md:text-base">
              I thrive in challenging environments and constantly push myself to master new technologies.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
