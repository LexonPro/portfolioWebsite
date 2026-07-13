import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 75 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", level: 80 },
      { name: "Node.js", level: 75 }
    ]
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 }
    ]
  }
];

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-300">{name}</span>
      <span className="text-sm font-medium text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
      ></motion.div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2">{category.title}</h3>
              <div>
                {category.skills.map((skill, i) => (
                  <SkillBar key={i} name={skill.name} level={skill.level} />
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
