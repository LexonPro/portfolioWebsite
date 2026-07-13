import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-xl opacity-30"></div>
              <div className="glass p-8 rounded-2xl relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-white">Who am I?</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I am a passionate B.Tech Data Science student and Full Stack Developer with a strong enthusiasm for building practical real-world projects. 
                  My journey in tech is driven by an insatiable curiosity for AI, Data Science, and modern web development.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  As a fast learner, I thrive in challenging environments and constantly push myself to learn new technologies. 
                  I enjoy translating complex problems into elegant, scalable software solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Currently, I am actively seeking internship opportunities where I can contribute my skills, learn from experienced professionals, and make a meaningful impact.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Degree', value: 'B.Tech Data Science' },
              { label: 'Experience', value: 'Projects & Training' },
              { label: 'Focus', value: 'Full Stack & AI' },
              { label: 'Availability', value: 'Open for Internships' },
            ].map((item, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 text-center group">
                <h4 className="text-primary font-medium mb-2 group-hover:text-white transition-colors">{item.label}</h4>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
