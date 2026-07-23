import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t relative transition-colors ${
      isDarkMode ? 'bg-[#111111] border-[#2F2F2F] text-[#A3A3A3]' : 'bg-[#F5F5F5] border-[#D1D5DB] text-[#6B7280]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs ${
              isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
            }`}>
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className={`font-bold text-base ${isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'}`}>
                {PERSONAL_INFO.name}
              </p>
              <p className={`text-xs ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`}>Full Stack & WordPress Developer</p>
            </div>
          </div>

          {/* Center Attribution & Copyright */}
          <div className="text-center text-xs space-y-1">
            <p className={isDarkMode ? 'text-[#D8D8D8]' : 'text-[#374151]'}>
              Designed & Developed by{' '}
              <span className={`font-bold ${isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'}`}>
                {PERSONAL_INFO.name}
              </span>
            </p>
            <p className={`font-mono ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
              Copyright © 2026. All Rights Reserved.
            </p>
          </div>

          {/* Right Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-2xl border transition-all hover:scale-110 cursor-pointer flex items-center gap-2 text-xs font-bold ${
              isDarkMode
                ? 'bg-[#1F1F1F] border-[#2F2F2F] text-[#B87333] hover:bg-[#2F2F2F] hover:text-[#D8D8D8]'
                : 'bg-[#FFFFFF] border-[#D1D5DB] text-[#4F83CC] hover:bg-[#F5F5F5] shadow-sm'
            }`}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};
