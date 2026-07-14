import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, SiPython, SiJavascript, SiReact, 
  SiTailwindcss, SiNextdotjs, SiFastapi, SiNodedotjs, 
  SiMongodb, SiMysql, SiGit, SiPostman, SiHtml5
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Programming",
    icon: <SiPython className="text-primary" />,
    skills: [
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "Python", icon: <SiPython className="text-yellow-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "SQL", icon: <FaDatabase className="text-gray-400" /> }
    ]
  },
  {
    title: "Frontend",
    icon: <SiReact className="text-cyan-400" />,
    skills: [
      { name: "HTML & CSS", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "React", icon: <SiReact className="text-cyan-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> }
    ]
  },
  {
    title: "Backend",
    icon: <SiNodedotjs className="text-green-500" />,
    skills: [
      { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> }
    ]
  },
  {
    title: "Database & Tools",
    icon: <FaDatabase className="text-secondary" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "Git & GitHub", icon: <SiGit className="text-red-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-purple">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="black-gradient p-8 rounded-3xl border border-white/[0.1] hover:border-purple/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-4 bg-black-100 rounded-2xl border border-white/5">
                  <div className="text-3xl">{category.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-4 relative z-10">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 px-5 py-3 bg-black-100 rounded-xl border border-white/5 hover:border-purple/50 transition-all duration-300 hover:-translate-y-1 cursor-default shadow-lg shadow-black/20"
                  >
                    <div className="text-xl drop-shadow-md">{skill.icon}</div>
                    <span className="text-[#C1C2D3] font-medium tracking-wide">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
