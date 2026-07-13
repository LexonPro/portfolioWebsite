import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl space-y-8">
              <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/5 rounded-2xl text-primary">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1">Email</h4>
                  <a href="mailto:shikharkumarmaurya@gmail.com" className="text-white hover:text-primary transition-colors font-medium">
                    shikharkumarmaurya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/5 rounded-2xl text-secondary">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1">Phone</h4>
                  <a href="tel:+918004522805" className="text-white hover:text-secondary transition-colors font-medium">
                    +91 8004522805
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-white/5 rounded-2xl text-accent">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1">Location</h4>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-3xl flex justify-center gap-8">
              <a href="https://github.com/LexonPro" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shikhar-maurya" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl text-gray-300 hover:text-primary hover:bg-primary/10 transition-all hover:-translate-y-1">
                <FaLinkedin size={24} />
              </a>
              <a href="https://leetcode.com/LexonPro" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 transition-all hover:-translate-y-1">
                <SiLeetcode size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
