import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="flex max-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-8 py-4 rounded-2xl border border-white/[0.1] shadow-lg items-center justify-center space-x-4 glass">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="relative items-center flex space-x-1 hover:text-white transition-colors"
        >
          <span className="text-sm cursor-pointer text-gray-300 hover:text-white font-medium px-2">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Navbar;
