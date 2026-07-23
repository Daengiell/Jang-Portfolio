import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'glass-nav bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-slate-950/50'
            : 'glass-nav bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-slate-900/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 p-[1px] shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center font-bold text-sm text-white">
                <Code2 className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight text-base sm:text-lg leading-tight transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-100'
              }`}>
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-indigo-400 font-medium tracking-wide">
                Full Stack & WordPress
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md shadow-inner transition-colors ${
            isDarkMode
              ? 'bg-slate-900/60 border-slate-800/60'
              : 'bg-slate-900/90 border-slate-800'
          }`}>
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 relative whitespace-nowrap ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-500/25'
                      : isDarkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-xl transition-all duration-300 border ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-slate-700 shadow-inner'
                  : 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-slate-700 shadow-inner'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className={`lg:hidden p-2.5 rounded-xl border transition-all ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-200'
                  : 'bg-slate-900 border-slate-800 text-slate-200'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b shadow-2xl transition-all duration-300 ${
          isDarkMode
            ? 'bg-slate-950/95 border-slate-800 text-slate-100'
            : 'bg-slate-900/95 border-slate-800 text-slate-100'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
