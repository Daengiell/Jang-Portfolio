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
            ? 'glass-nav bg-[#111111]/90 backdrop-blur-md border-b border-[#1F1F1F] py-3 shadow-xl shadow-black/50'
            : 'glass-nav bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#D1D5DB] py-3 shadow-md'
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
                ? 'bg-gradient-to-tr from-[#B87333] via-[#D8D8D8] to-[#B87333] shadow-[#B87333]/20'
                : 'bg-gradient-to-tr from-[#4F83CC] via-[#374151] to-[#4F83CC] shadow-[#4F83CC]/20'
            }`}>
              <div className={`w-full h-full rounded-[11px] flex items-center justify-center font-bold text-sm ${
                isDarkMode ? 'bg-[#111111] text-[#FAFAFA]' : 'bg-[#FFFFFF] text-[#374151]'
              }`}>
                <Code2 className={`w-5 h-5 group-hover:scale-110 transition-transform duration-300 ${
                  isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
                }`} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight text-base sm:text-lg leading-tight transition-colors ${
                isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'
              }`}>
                {PERSONAL_INFO.name}
              </span>
              <span className={`text-xs font-medium tracking-wide ${
                isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
              }`}>
                Full Stack & WordPress
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md shadow-inner transition-colors ${
            isDarkMode
              ? 'bg-[#1F1F1F]/80 border-[#2F2F2F]'
              : 'bg-[#F5F5F5] border-[#D1D5DB]'
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
                        ? 'text-white bg-[#B87333] font-bold shadow-md shadow-[#B87333]/30'
                        : 'text-white bg-[#4F83CC] font-bold shadow-md shadow-[#4F83CC]/30'
                      : isDarkMode
                      ? 'text-[#A3A3A3] hover:text-[#FAFAFA] hover:bg-[#111111]'
                      : 'text-[#6B7280] hover:text-[#374151] hover:bg-[#FFFFFF]'
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
                  ? 'bg-[#1F1F1F] border-[#2F2F2F] text-[#B87333] hover:bg-[#111111] hover:border-[#B87333]/40 shadow-inner'
                  : 'bg-[#F5F5F5] border-[#D1D5DB] text-[#4F83CC] hover:bg-[#FFFFFF] hover:border-[#4F83CC]/40 shadow-inner'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[#B87333]" /> : <Moon className="w-4 h-4 text-[#4F83CC]" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className={`lg:hidden p-2.5 rounded-xl border transition-all ${
                isDarkMode
                  ? 'bg-[#1F1F1F] border-[#2F2F2F] text-[#FAFAFA]'
                  : 'bg-[#F5F5F5] border-[#D1D5DB] text-[#374151]'
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
            ? 'bg-[#111111]/95 border-[#2F2F2F] text-[#FAFAFA]'
            : 'bg-[#FFFFFF]/95 border-[#D1D5DB] text-[#374151]'
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
                        ? 'bg-[#B87333] text-white font-bold'
                        : 'bg-[#4F83CC] text-white font-bold'
                      : isDarkMode
                      ? 'text-[#A3A3A3] hover:bg-[#1F1F1F] hover:text-[#FAFAFA]'
                      : 'text-[#6B7280] hover:bg-[#F5F5F5] hover:text-[#374151]'
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
