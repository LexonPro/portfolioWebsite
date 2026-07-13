import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const certificates = [
  { id: 1, title: "Microsoft Learn 1", issuer: "Microsoft", date: "2024", file: "/certificates/Achievements - shikharmaurya-7775 _ Microsoft Learn.pdf", type: "pdf" },
  { id: 2, title: "Microsoft Learn 2", issuer: "Microsoft", date: "2024", file: "/certificates/Achievements - shikharmaurya-7779 _ Microsoft Learn.pdf", type: "pdf" },
  { id: 3, title: "Microsoft Learn 3", issuer: "Microsoft", date: "2024", file: "/certificates/Achievements - shikharmaurya-7780 _ Microsoft Learn.pdf", type: "pdf" },
  { id: 4, title: "Microsoft Learn 4", issuer: "Microsoft", date: "2024", file: "/certificates/Achievements - shikharmaurya-7781 _ Microsoft Learn.pdf", type: "pdf" },
  { id: 5, title: "Microsoft Learn 5", issuer: "Microsoft", date: "2024", file: "/certificates/Achievements - shikharmaurya-7782 _ Microsoft Learn.pdf", type: "pdf" },
  { id: 6, title: "Microsoft Learn 6", issuer: "Microsoft", date: "2024", file: "/certificates/Achievements - shikharmaurya-7784_ Microsoft Learn.pdf", type: "pdf" },
  { id: 7, title: "Full Stack Developer", issuer: "Training", date: "2024", file: "/certificates/full stack devloper.pdf", type: "pdf" },
  { id: 8, title: "Hackathon GLB 4.0", issuer: "GL Bajaj", date: "2024", file: "/certificates/hackathon glb 4.0.pdf", type: "pdf" },
  { id: 9, title: "LeetCode 100 Days", issuer: "LeetCode", date: "2024", file: "/certificates/leetcode100.png", type: "image" },
  { id: 10, title: "LeetCode 50 Days", issuer: "LeetCode", date: "2024", file: "/certificates/leetcode50.png", type: "image" },
  { id: 11, title: "Nasscom Certification", issuer: "NASSCOM", date: "2024", file: "/certificates/nasscom.pdf", type: "pdf" },
  { id: 12, title: "Nation Building", issuer: "Event", date: "2024", file: "/certificates/nationbuilding.pdf", type: "pdf" },
  { id: 13, title: "NIT Hacks Silchar", issuer: "NIT Silchar", date: "2024", file: "/certificates/nit hacks   nitsilchar.pdf", type: "pdf" },
  { id: 14, title: "Oracle Certification", issuer: "Oracle", date: "2024", file: "/certificates/oracle certificate.pdf", type: "pdf" },
  { id: 15, title: "Simplilearn", issuer: "Simplilearn", date: "2024", file: "/certificates/simpli.pdf", type: "pdf" },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="glass p-4 rounded-xl cursor-pointer group hover:border-primary/50 transition-all text-center"
            >
              <div className="w-full h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                {cert.type === 'image' ? (
                  <img src={cert.file} alt={cert.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                ) : (
                  <div className="flex flex-col items-center gap-2 group-hover:scale-105 transition-transform">
                    <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                    <span className="text-xs font-medium text-gray-400">PDF Document</span>
                  </div>
                )}
              </div>
              <h3 className="text-white font-medium text-sm group-hover:text-primary transition-colors truncate">{cert.title}</h3>
              <p className="text-gray-400 text-xs mt-1">{cert.issuer} • {cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass p-2 rounded-2xl max-w-5xl w-full relative flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors z-20 shadow-lg"
              >
                <HiX size={20} />
              </button>
              
              <div className="w-full h-[70vh] bg-gray-900 rounded-xl overflow-hidden relative">
                {selectedCert.type === 'image' ? (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img src={selectedCert.file} alt={selectedCert.title} className="max-w-full max-h-full object-contain rounded" />
                  </div>
                ) : (
                  <iframe 
                    src={`${selectedCert.file}#toolbar=0`} 
                    className="w-full h-full rounded-xl" 
                    title={selectedCert.title}
                  ></iframe>
                )}
              </div>
              
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{selectedCert.title}</h3>
                <p className="text-primary font-medium">{selectedCert.issuer} • {selectedCert.date}</p>
                <a href={selectedCert.file} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 rounded-full border border-gray-600 hover:border-primary text-gray-300 hover:text-primary transition-colors text-sm">
                  Open in New Tab
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
