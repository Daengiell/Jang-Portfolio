import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

interface EducationProps {
  isDarkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  return (
    <section id="education" className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-[#111111]' : 'bg-[#FFFFFF]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#B87333] border-[#B87333]/30' : 'text-[#4F83CC] border-[#4F83CC]/30'
          }`}>
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'
          }`}>
            Education <span className={isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}>History</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
            Foundational computer science education and technical training background.
          </p>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
          }`} />
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl glass-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group ${
                isDarkMode
                  ? 'bg-[#1F1F1F] border-[#2F2F2F] hover:border-[#B87333]/40'
                  : 'bg-[#F5F5F5] border-[#D1D5DB] hover:border-[#4F83CC]/40'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl group-hover:scale-110 transition-transform ${
                    isDarkMode ? 'bg-[#B87333]/10 text-[#B87333]' : 'bg-[#4F83CC]/10 text-[#4F83CC]'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                    isDarkMode
                      ? 'text-[#B87333] bg-[#B87333]/10'
                      : 'text-[#4F83CC] bg-[#4F83CC]/10'
                  }`}>
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'}`}>
                    {item.institution}
                  </h3>
                  <p className={`text-sm font-semibold mt-1 flex items-center gap-1.5 ${
                    isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
                  }`}>
                    <BookOpen className="w-4 h-4" />
                    {item.degree}
                  </p>
                </div>
              </div>

              <div className={`pt-6 mt-6 border-t flex justify-between items-center text-xs ${
                isDarkMode ? 'border-[#2F2F2F] text-[#A3A3A3]' : 'border-[#D1D5DB] text-[#6B7280]'
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
