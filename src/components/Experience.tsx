import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  isDarkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#C8A96A] border-[#2B2B30]' : 'text-[#C8A96A] border-[#E6E2DA]'
          }`}>
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
          }`}>
            Work <span className="text-[#C8A96A]">Experience</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'}`}>
            My professional career track building web solutions, managing IT systems, and supporting client growth.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full bg-[#C8A96A]" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glow Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 opacity-30 bg-[#C8A96A]" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Timeline Point Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-20 flex items-center justify-center">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-lg ${
                      isDarkMode
                        ? 'bg-[#0F0F10] border-[#C8A96A] shadow-[#C8A96A]/20'
                        : 'bg-[#FCFBF8] border-[#C8A96A] shadow-[#C8A96A]/20'
                    }`}>
                      <div className="w-2 h-2 rounded-full animate-ping bg-[#C8A96A]" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                  }`}>
                    <div className={`p-6 sm:p-8 rounded-2xl glass-card border transition-all duration-300 hover:-translate-y-1.5 shadow-xl group ${
                      isDarkMode
                        ? 'bg-[#1A1A1D] border-[#2B2B30] hover:border-[#C8A96A]/50'
                        : 'bg-[#F5F3EF] border-[#E6E2DA] hover:border-[#C8A96A]/50'
                    }`}>
                      
                      {/* Top Badge & Date */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        {exp.badge && (
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                            isDarkMode
                              ? 'bg-[#1A1A1D] text-[#E8D9B5] border-[#C8A96A]/40'
                              : 'bg-[#E8D9B5] text-[#2B2B2E] border-[#C8A96A]/30'
                          }`}>
                            {exp.badge}
                          </span>
                        )}
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${
                          isDarkMode
                            ? 'text-[#C8A96A] bg-[#C8A96A]/15 border-[#C8A96A]/30'
                            : 'text-[#2B2B2E] bg-[#E8D9B5] border-[#C8A96A]/20'
                        }`}>
                          <Calendar className="w-3.5 h-3.5 text-[#C8A96A]" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <div>
                        <h3 className={`text-xl font-bold tracking-tight ${
                          isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
                        }`}>
                          {exp.role}
                        </h3>
                        
                        <div className={`flex items-center gap-2 mt-1 mb-4 text-sm font-semibold ${
                          isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'
                        } ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                          <Building2 className="w-4 h-4 text-[#C8A96A]" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Responsibilities List */}
                      <ul className={`space-y-2 text-sm text-left ${
                        isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'
                      }`}>
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C8A96A]" />
                            <span className={isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
