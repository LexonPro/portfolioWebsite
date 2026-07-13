import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import GitHubCalendar from 'react-github-calendar';

const Stats = () => {
  const [githubData, setGithubData] = useState({ repos: 42, stars: 128, commits: 1200 });
  const [leetcodeData, setLeetcodeData] = useState({
    solved: 350,
    easy: 150,
    medium: 150,
    hard: 50,
    rating: 1650
  });

  useEffect(() => {
    // Fetch GitHub Repos
    fetch('https://api.github.com/users/LexonPro')
      .then(res => res.json())
      .then(data => {
        if(data.public_repos !== undefined) {
          setGithubData(prev => ({ ...prev, repos: data.public_repos }));
        }
      })
      .catch(err => console.error('Error fetching GitHub stats:', err));

    // Fetch LeetCode Stats
    fetch('https://alfa-leetcode-api.onrender.com/LexonPro/solved')
      .then(res => res.json())
      .then(data => {
        if(data.solvedProblem !== undefined) {
          setLeetcodeData(prev => ({
            ...prev,
            solved: data.solvedProblem,
            easy: data.easySolved,
            medium: data.mediumSolved,
            hard: data.hardSolved
          }));
        }
      })
      .catch(err => console.error('Error fetching LeetCode solved stats:', err));

    // Fetch LeetCode Contest Rating
    fetch('https://alfa-leetcode-api.onrender.com/LexonPro/contest')
      .then(res => res.json())
      .then(data => {
        if(data.contestRating) {
          setLeetcodeData(prev => ({ ...prev, rating: Math.round(data.contestRating) }));
        }
      })
      .catch(err => console.error('Error fetching LeetCode contest rating:', err));
  }, []);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors flex flex-col"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaGithub size={120} />
            </div>
            <div className="relative z-10 flex-grow">
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
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-3xl font-bold text-white">{githubData.repos}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Repositories</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-3xl font-bold text-white">{githubData.stars}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 flex items-center justify-center gap-1"><FaStar className="text-yellow-500 hidden sm:block"/> Stars</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-3xl font-bold text-white">{githubData.commits}</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 flex items-center justify-center gap-1"><FaCodeBranch className="text-green-500 hidden sm:block"/> Commits</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-900/80 rounded-xl p-4 flex items-center justify-center border border-gray-800 overflow-x-auto">
                <div className="min-w-max">
                  <GitHubCalendar 
                    username="LexonPro" 
                    colorScheme="dark"
                    theme={{
                      light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                      dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    }}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-3xl relative overflow-hidden group hover:border-orange-500/50 transition-colors flex flex-col"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <SiLeetcode size={120} className="text-orange-500" />
            </div>
            <div className="relative z-10 flex-grow">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gray-800 rounded-2xl">
                  <SiLeetcode size={32} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">LeetCode Profile</h3>
                  <a href="https://leetcode.com/LexonPro" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">@LexonPro</a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-white/5 rounded-xl flex flex-col justify-center border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Problems Solved</p>
                  <p className="text-4xl font-bold text-white">{leetcodeData.solved}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded">Easy: {leetcodeData.easy}</span>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">Med: {leetcodeData.medium}</span>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">Hard: {leetcodeData.hard}</span>
                  </div>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl flex flex-col justify-center items-center text-center border border-white/10">
                  <div className="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                    <p className="text-2xl font-bold text-white">{leetcodeData.rating}</p>
                  </div>
                  <p className="text-sm text-gray-400 font-medium">Contest Rating</p>
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
