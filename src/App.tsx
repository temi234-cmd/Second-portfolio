
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import About from './components/About';
import Contact from './components/Contact';
import AIAssistant from './components/AIassistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'stack', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 grid-mesh pointer-events-none z-0"></div>
      
      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10 px-6 sm:px-12">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="work">
          <Projects/>
        </section>
        
        <section id="stack">
          <Stack />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <AIAssistant />

      {/* Vertical Scroll Indicator */}
      <div className="fixed bottom-10 left-10 hidden xl:flex flex-col items-center gap-4 z-20">
        <span className="font-mono text-[10px] text-white/20 vertical-rl uppercase tracking-[0.4em]">Scroll to Navigate</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary/40 to-transparent"></div>
      </div>
    </div>
  );
};

export default App;
