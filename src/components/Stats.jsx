import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaGithub size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gray-800 rounded-2xl">
                  <FaGithub size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
                  <a href="https://github.com/LexonPro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@LexonPro</a>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <p className="text-3xl font-bold text-white">42</p>
                  <p className="text-sm text-gray-400 mt-1">Repositories</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <p className="text-3xl font-bold text-white">128</p>
                  <p className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1"><FaStar className="text-yellow-500"/> Stars</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <p className="text-3xl font-bold text-white">1.2k</p>
                  <p className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1"><FaCodeBranch className="text-green-500"/> Commits</p>
                </div>
              </div>
              
              <div className="w-full h-32 bg-gray-900 rounded-xl flex items-center justify-center text-gray-500 border border-gray-800">
                [ Contribution Graph Placeholder ]
              </div>
            </div>
          </motion.div>

          {/* LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-orange-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <SiLeetcode size={120} className="text-orange-500" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gray-800 rounded-2xl">
                  <SiLeetcode size={32} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">LeetCode Profile</h3>
                  <a href="https://leetcode.com/LexonPro" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">@LexonPro</a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-6 bg-white/5 rounded-xl flex flex-col justify-center">
                  <p className="text-sm text-gray-400 mb-2">Problems Solved</p>
                  <p className="text-4xl font-bold text-white">350<span className="text-xl text-gray-500 font-normal"> +</span></p>
                  
                  <div className="mt-4 flex gap-2 text-xs font-medium">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">Easy: 150</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">Med: 150</span>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">Hard: 50</span>
                  </div>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl flex flex-col justify-center items-center text-center">
                  <div className="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mb-2">
                    <p className="text-2xl font-bold text-white">1650</p>
                  </div>
                  <p className="text-sm text-gray-400">Contest Rating</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
