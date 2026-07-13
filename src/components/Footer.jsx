import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="mb-4">
          <a href="#home" className="text-3xl font-bold gradient-text tracking-wider">SM.</a>
        </div>
        <p className="text-gray-400 text-sm font-medium">
          Copyright &copy; 2026 Shikhar Maurya. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
          Made with <span className="text-red-500 animate-pulse">❤️</span> using React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
