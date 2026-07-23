import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

interface EducationProps {
  isDarkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card text-indigo-400 light:text-indigo-600 border border-indigo-500/30">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Education <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">History</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Foundational computer science education and technical training background.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl glass-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40' : 'bg-white/80 border-slate-200 hover:border-indigo-400'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.institution}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-400 mt-1 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    {item.degree}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 light:border-slate-200 flex justify-between items-center text-xs text-slate-500">
                <span>Formal Education</span>
                <span className="text-emerald-400 font-semibold">• Completed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
