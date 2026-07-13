import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-background">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <h2 className="mt-4 text-2xl font-bold gradient-text animate-pulse">SM</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen text-gray-200 font-poppins relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Stats />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
