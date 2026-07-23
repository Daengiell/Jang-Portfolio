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
      isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className={`font-bold text-base ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs text-indigo-400">Full Stack & WordPress Developer</p>
            </div>
          </div>

          {/* Center Attribution & Copyright */}
          <div className="text-center text-xs space-y-1">
            <p>
              Designed & Developed by{' '}
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {PERSONAL_INFO.name}
              </span>
            </p>
            <p className="text-slate-500 font-mono">
              Copyright © 2026. All Rights Reserved.
            </p>
          </div>

          {/* Right Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-2xl border transition-all hover:scale-110 cursor-pointer flex items-center gap-2 text-xs font-bold ${
              isDarkMode
                ? 'bg-slate-900 border-slate-800 text-indigo-400 hover:bg-slate-800'
                : 'bg-white border-slate-300 text-indigo-600 hover:bg-slate-50 shadow-sm'
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
