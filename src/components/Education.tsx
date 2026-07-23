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
            isDarkMode ? 'text-[#D51C29] border-[#4E494A]' : 'text-[#E63946] border-[#E8E8E8]'
          }`}>
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'
          }`}>
            Education <span className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>History</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>
            Foundational computer science education and technical training background.
          </p>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#A41521]' : 'bg-[#E63946]'
          }`} />
        </div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group ${
                isDarkMode
                  ? 'bg-[#2A2324] border-[#4E494A] hover:border-[#D51C29]/40'
                  : 'bg-[#FFFFFF] border-[#E8E8E8] hover:border-[#E63946]/40'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-2xl group-hover:scale-110 transition-transform ${
                    isDarkMode ? 'bg-[#A41521]/15 text-[#D51C29]' : 'bg-[#FFD6DB] text-[#E63946]'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                    isDarkMode
                      ? 'text-[#D51C29] bg-[#A41521]/15'
                      : 'text-[#E63946] bg-[#FFD6DB]'
                  }`}>
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                    {item.institution}
                  </h3>
                  <p className={`text-sm font-semibold mt-1 flex items-center gap-1.5 ${
                    isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
                  }`}>
                    <BookOpen className="w-4 h-4" />
                    {item.degree}
                  </p>
                </div>
              </div>

              <div className={`pt-6 mt-6 border-t flex justify-between items-center text-xs ${
                isDarkMode ? 'border-[#4E494A] text-[#A35B62]' : 'border-[#E8E8E8] text-[#5F6368]'
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
