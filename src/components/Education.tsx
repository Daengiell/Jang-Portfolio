import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

interface EducationProps {
  isDarkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  return (
    <section id="education" className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-[#0F0F10]' : 'bg-[#FCFBF8]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#C8A96A] border-[#2B2B30]' : 'text-[#C8A96A] border-[#E6E2DA]'
          }`}>
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
          }`}>
            Education <span className="text-[#C8A96A]">History</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'}`}>
            Foundational computer science education and technical training background.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full bg-[#C8A96A]" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group ${
                isDarkMode
                  ? 'bg-[#1A1A1D] border-[#2B2B30] hover:border-[#C8A96A]/40'
                  : 'bg-[#F5F3EF] border-[#E6E2DA] hover:border-[#C8A96A]/40'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl group-hover:scale-110 transition-transform ${
                    isDarkMode ? 'bg-[#C8A96A]/15 text-[#C8A96A]' : 'bg-[#E8D9B5] text-[#2B2B2E]'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                    isDarkMode
                      ? 'text-[#C8A96A] bg-[#C8A96A]/15'
                      : 'text-[#2B2B2E] bg-[#E8D9B5]'
                  }`}>
                    <Calendar className="w-3.5 h-3.5 text-[#C8A96A]" />
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                    {item.institution}
                  </h3>
                  <p className="text-sm font-semibold mt-1 flex items-center gap-1.5 text-[#C8A96A]">
                    <BookOpen className="w-4 h-4" />
                    {item.degree}
                  </p>
                </div>
              </div>

              <div className={`pt-6 mt-6 border-t flex justify-between items-center text-xs ${
                isDarkMode ? 'border-[#2B2B30] text-[#9A9A9A]' : 'border-[#E6E2DA] text-[#8E8E8E]'
              }`}>
                <span>Formal Education</span>
                <span className="text-emerald-500 font-semibold">• Completed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
