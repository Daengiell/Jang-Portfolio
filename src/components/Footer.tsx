import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Section3DWrapper } from './3d/Section3DWrapper';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Section3DWrapper className={`py-12 border-t relative transition-colors ${
      isDarkMode ? 'bg-[#111111] border-[#4E494A] text-[#A35B62]' : 'bg-[#F8F8F8] border-[#E8E8E8] text-[#5F6368]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs ${
              isDarkMode ? 'bg-[#A41521]' : 'bg-[#E63946]'
            }`}>
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className={`font-bold text-base ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                {PERSONAL_INFO.name}
              </p>
              <p className={`text-xs ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`}>Full Stack & WordPress Developer</p>
            </div>
          </div>

          {/* Center Attribution & Copyright */}
          <div className="text-center text-xs space-y-1">
            <p className={isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}>
              Designed & Developed by{' '}
              <span className={`font-bold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                {PERSONAL_INFO.name}
              </span>
            </p>
            <p className={`font-mono ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>
              Copyright © 2026. All Rights Reserved.
            </p>
          </div>

          {/* Right Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-2xl border transition-all hover:scale-110 cursor-pointer flex items-center gap-2 text-xs font-bold ${
              isDarkMode
                ? 'bg-[#2A2324] border-[#4E494A] text-[#D51C29] hover:bg-[#4E494A] hover:text-[#F4EDED]'
                : 'bg-[#FFFFFF] border-[#E8E8E8] text-[#E63946] hover:bg-[#F8F8F8] shadow-sm'
            }`}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </Section3DWrapper>
  );
};
