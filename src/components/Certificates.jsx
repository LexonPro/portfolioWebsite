import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const certificates = [
  { id: 1, title: "Data Science Specialization", issuer: "Coursera", date: "2024" },
  { id: 2, title: "Machine Learning A-Z", issuer: "Udemy", date: "2023" },
  { id: 3, title: "Full Stack Web Development", issuer: "freeCodeCamp", date: "2024" },
  { id: 4, title: "Python for Data Science", issuer: "IBM", date: "2023" },
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
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="glass p-4 rounded-xl cursor-pointer group hover:border-primary/50 transition-all text-center"
            >
              <div className="w-full h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-500 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                [ Certificate Placeholder ]
              </div>
              <h3 className="text-white font-medium text-sm group-hover:text-primary transition-colors">{cert.title}</h3>
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass p-2 rounded-2xl max-w-4xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors z-10"
              >
                <HiX size={20} />
              </button>
              <div className="w-full aspect-video bg-gray-900 rounded-xl flex flex-col items-center justify-center">
                <span className="text-gray-500 text-xl mb-4">[ Full Certificate View ]</span>
                <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-primary">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
