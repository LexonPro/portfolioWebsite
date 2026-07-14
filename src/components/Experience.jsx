import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const TimelineItem = ({ data, isEducation, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 sm:pl-32 py-6 group"
  >
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 sm:before:ml-[6.5rem] before:h-full before:px-px before:bg-white/10 before:ml-[0.25rem] before:self-start before:-translate-x-1/2 before:translate-y-3">
      <div className="absolute left-0 sm:left-24 w-6 h-6 bg-gray-900 rounded-full border-4 border-primary flex items-center justify-center -translate-x-1/2 sm:translate-x-0">
        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
      </div>
      <div className="sm:absolute sm:left-0 sm:w-20 sm:text-right text-xs font-semibold text-purple uppercase tracking-wider mb-2 sm:mb-0 mt-1">
        {data.date}
      </div>
      <div className="black-gradient border border-white/[0.1] p-6 rounded-2xl w-full hover:-translate-y-1 transition-transform hover:border-purple/30">
        <div className="flex items-center gap-3 mb-2">
          {isEducation ? <FaGraduationCap className="text-purple text-xl" /> : <FaBriefcase className="text-purple text-xl" />}
          <h3 className="text-xl font-bold text-white">{data.title}</h3>
        </div>
        <div className="text-lg font-medium text-gray-300 mb-3">{data.institution}</div>
        <p className="text-[#C1C2D3] text-sm leading-relaxed">{data.description}</p>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const education = [
    {
      title: "B.Tech in Data Science",
      institution: "GL Bajaj Institute of Technology & Management",
      date: "2022 - 2026",
      description: "Pursuing Bachelor of Technology with a focus on Data Science, Machine Learning, and Software Development."
    }
  ];

  const experience = [
    {
      title: "Software Engineering Intern",
      institution: "Tech Company Placeholder",
      date: "2024 - Present",
      description: "Developed and maintained full-stack web applications. Collaborated with the data science team to integrate machine learning models into production systems."
    },
    {
      title: "Freelance Web Developer",
      institution: "Self-Employed",
      date: "2023 - 2024",
      description: "Designed and developed responsive portfolio websites and e-commerce platforms for local clients using React and Tailwind CSS."
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-purple">Education</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 ml-4 sm:ml-0">
              <FaBriefcase className="text-purple" /> Experience
            </h3>
            <div className="space-y-4">
              {experience.map((item, index) => (
                <TimelineItem key={index} data={item} isEducation={false} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 ml-4 sm:ml-0">
              <FaGraduationCap className="text-purple" /> Education
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <TimelineItem key={index} data={item} isEducation={true} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
