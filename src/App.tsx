import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Dark mode by default
  const [activeSection, setActiveSection] = useState<string>('home');

  // Toggle Dark / Light mode class on <html> tag
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDarkMode]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white ${
        isDarkMode
          ? 'bg-slate-950 text-slate-100'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Sticky Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Education isDarkMode={isDarkMode} />
        <Certifications isDarkMode={isDarkMode} />
        <WhyWorkWithMe isDarkMode={isDarkMode} />
        <Stats isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Minimal Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
