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
            ? 'glass-nav bg-[#111111]/90 backdrop-blur-md border-b border-[#4E494A] py-3 shadow-xl shadow-black/50'
            : 'glass-nav bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E8E8E8] py-3 shadow-md'
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
            <div className={`w-10 h-10 rounded-xl p-[1px] shadow-md transition-all duration-300 ${
              isDarkMode
                ? 'bg-gradient-to-tr from-[#A41521] via-[#D51C29] to-[#5A121D] shadow-[#A41521]/20'
                : 'bg-gradient-to-tr from-[#E63946] via-[#C92A3C] to-[#E63946] shadow-[#E63946]/20'
            }`}>
              <div className={`w-full h-full rounded-[11px] flex items-center justify-center font-bold text-sm ${
                isDarkMode ? 'bg-[#111111] text-[#F4EDED]' : 'bg-[#FFFFFF] text-[#1A1A1A]'
              }`}>
                <Code2 className={`w-5 h-5 group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
                }`} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight text-base sm:text-lg leading-tight transition-colors ${
                isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'
              }`}>
                {PERSONAL_INFO.name}
              </span>
              <span className={`text-xs font-medium tracking-wide ${
                isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
              }`}>
                Full Stack & WordPress
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md shadow-inner transition-colors ${
            isDarkMode
              ? 'bg-[#2A2324]/80 border-[#4E494A]'
              : 'bg-[#F8F8F8] border-[#E8E8E8]'
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
                      ? isDarkMode
                        ? 'text-[#F4EDED] bg-[#A41521] font-bold shadow-md shadow-[#A41521]/30'
                        : 'text-white bg-[#E63946] font-bold shadow-md shadow-[#E63946]/30'
                      : isDarkMode
                      ? 'text-[#A35B62] hover:text-[#F4EDED] hover:bg-[#111111]'
                      : 'text-[#5F6368] hover:text-[#1A1A1A] hover:bg-[#FFFFFF]'
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
                  ? 'bg-[#2A2324] border-[#4E494A] text-[#D51C29] hover:bg-[#111111] hover:border-[#D51C29]/40 shadow-inner'
                  : 'bg-[#F8F8F8] border-[#E8E8E8] text-[#E63946] hover:bg-[#FFFFFF] hover:border-[#E63946]/40 shadow-inner'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[#D51C29]" /> : <Moon className="w-4 h-4 text-[#E63946]" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className={`lg:hidden p-2.5 rounded-xl border transition-all ${
                isDarkMode
                  ? 'bg-[#2A2324] border-[#4E494A] text-[#F4EDED]'
                  : 'bg-[#F8F8F8] border-[#E8E8E8] text-[#1A1A1A]'
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
            ? 'bg-[#111111]/95 border-[#4E494A] text-[#F4EDED]'
            : 'bg-[#FFFFFF]/95 border-[#E8E8E8] text-[#1A1A1A]'
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
                      ? isDarkMode
                        ? 'bg-[#A41521] text-white font-bold'
                        : 'bg-[#E63946] text-white font-bold'
                      : isDarkMode
                      ? 'text-[#A35B62] hover:bg-[#2A2324] hover:text-[#F4EDED]'
                      : 'text-[#5F6368] hover:bg-[#F8F8F8] hover:text-[#1A1A1A]'
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
