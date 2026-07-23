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
            ? 'glass-nav bg-[#0F0F10]/90 backdrop-blur-md border-b border-[#2B2B30] py-3 shadow-xl shadow-black/50'
            : 'glass-nav bg-[#FCFBF8]/90 backdrop-blur-md border-b border-[#E6E2DA] py-3 shadow-[0_2px_12px_rgba(15,15,16,0.08)]'
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
                ? 'bg-gradient-to-tr from-[#C8A96A] via-[#E8D9B5] to-[#C8A96A] shadow-[#C8A96A]/20'
                : 'bg-gradient-to-tr from-[#C8A96A] via-[#E8D9B5] to-[#C8A96A] shadow-[#C8A96A]/20'
            }`}>
              <div className={`w-full h-full rounded-[11px] flex items-center justify-center font-bold text-sm ${
                isDarkMode ? 'bg-[#0F0F10] text-[#F5F5F2]' : 'bg-[#FCFBF8] text-[#2B2B2E]'
              }`}>
                <Code2 className={`w-5 h-5 group-hover:scale-110 transition-transform duration-300 text-[#C8A96A]`} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight text-base sm:text-lg leading-tight transition-colors ${
                isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
              }`}>
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-medium tracking-wide text-[#C8A96A]">
                Full Stack & WordPress
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md transition-colors ${
            isDarkMode
              ? 'bg-[#1A1A1D]/80 border-[#2B2B30]'
              : 'bg-[#F5F3EF] border-[#E6E2DA]'
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
                        ? 'text-[#0F0F10] bg-[#C8A96A] font-bold shadow-md shadow-[#C8A96A]/20'
                        : 'text-[#0F0F10] bg-[#C8A96A] font-bold shadow-md shadow-[#C8A96A]/20'
                      : isDarkMode
                      ? 'text-[#9A9A9A] hover:text-[#F5F5F2] hover:bg-[#0F0F10]'
                      : 'text-[#666666] hover:text-[#2B2B2E] hover:bg-[#FCFBF8]'
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
                  ? 'bg-[#1A1A1D] border-[#2B2B30] text-[#C8A96A] hover:bg-[#0F0F10] hover:border-[#C8A96A]/40'
                  : 'bg-[#F5F3EF] border-[#E6E2DA] text-[#C8A96A] hover:bg-[#FCFBF8] hover:border-[#C8A96A]/40'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[#C8A96A]" /> : <Moon className="w-4 h-4 text-[#C8A96A]" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className={`lg:hidden p-2.5 rounded-xl border transition-all ${
                isDarkMode
                  ? 'bg-[#1A1A1D] border-[#2B2B30] text-[#F5F5F2]'
                  : 'bg-[#F5F3EF] border-[#E6E2DA] text-[#2B2B2E]'
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
            ? 'bg-[#0F0F10]/95 border-[#2B2B30] text-[#F5F5F2]'
            : 'bg-[#FCFBF8]/95 border-[#E6E2DA] text-[#2B2B2E]'
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
                      ? 'bg-[#C8A96A] text-[#0F0F10] font-bold'
                      : isDarkMode
                      ? 'text-[#9A9A9A] hover:bg-[#1A1A1D] hover:text-[#F5F5F2]'
                      : 'text-[#666666] hover:bg-[#F5F3EF] hover:text-[#2B2B2E]'
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
