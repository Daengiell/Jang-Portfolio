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
      isDarkMode ? 'bg-[#0F0F10] border-[#2B2B30] text-[#9A9A9A]' : 'bg-[#FCFBF8] border-[#E6E2DA] text-[#666666]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#0F0F10] bg-[#C8A96A] font-bold text-xs">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className={`font-bold text-base ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-[#C8A96A]">Full Stack & WordPress Developer</p>
            </div>
          </div>

          {/* Center Attribution & Copyright */}
          <div className="text-center text-xs space-y-1">
            <p className={isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}>
              Designed & Developed by{' '}
              <span className={`font-bold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                {PERSONAL_INFO.name}
              </span>
            </p>
            <p className={`font-mono ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>
              Copyright © 2026. All Rights Reserved.
            </p>
          </div>

          {/* Right Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-2xl border transition-all hover:scale-110 cursor-pointer flex items-center gap-2 text-xs font-bold ${
              isDarkMode
                ? 'bg-[#1A1A1D] border-[#2B2B30] text-[#C8A96A] hover:bg-[#2B2B30] hover:text-[#F5F5F2]'
                : 'bg-[#F5F3EF] border-[#E6E2DA] text-[#2B2B2E] hover:bg-[#FCFBF8] shadow-sm'
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
