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
            isDarkMode ? 'text-[#B87333] border-[#B87333]/30' : 'text-[#4F83CC] border-[#4F83CC]/30'
          }`}>
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'
          }`}>
            Work <span className={isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}>Experience</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
            My professional career track building web solutions, managing IT systems, and supporting client growth.
          </p>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
          }`} />
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glow Line */}
          <div className={`absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 opacity-30 ${
            isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
          }`} />

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
                        ? 'bg-[#111111] border-[#B87333] shadow-[#B87333]/30'
                        : 'bg-[#FFFFFF] border-[#4F83CC] shadow-[#4F83CC]/30'
                    }`}>
                      <div className={`w-2 h-2 rounded-full animate-ping ${
                        isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
                      }`} />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                  }`}>
                    <div className={`p-6 sm:p-8 rounded-2xl glass-card border transition-all duration-300 hover:shadow-2xl group ${
                      isDarkMode
                        ? 'bg-[#1F1F1F] border-[#2F2F2F] hover:border-[#B87333]/50'
                        : 'bg-[#F5F5F5] border-[#D1D5DB] hover:border-[#4F83CC]/50'
                    }`}>
                      
                      {/* Top Badge & Date */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        {exp.badge && (
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                            isDarkMode
                              ? 'bg-[#B87333]/20 text-[#D8D8D8] border-[#B87333]/30'
                              : 'bg-[#4F83CC]/20 text-[#374151] border-[#4F83CC]/30'
                          }`}>
                            {exp.badge}
                          </span>
                        )}
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${
                          isDarkMode
                            ? 'text-[#B87333] bg-[#B87333]/10 border-[#B87333]/20'
                            : 'text-[#4F83CC] bg-[#4F83CC]/10 border-[#4F83CC]/20'
                        }`}>
                          <Calendar className={`w-3.5 h-3.5 ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`} />
                          {exp.period}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className={`text-xl font-bold tracking-tight ${
                        isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'
                      }`}>
                        {exp.role}
                      </h3>
                      
                      <div className={`flex items-center gap-2 mt-1 mb-4 text-sm font-semibold ${
                        isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'
                      } ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <Building2 className={`w-4 h-4 ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`} />
                        <span>{exp.company}</span>
                      </div>

                      {/* Responsibilities List */}
                      <ul className={`space-y-2 text-sm text-left ${
                        isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'
                      }`}>
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
                            }`} />
                            <span className={isDarkMode ? 'text-[#D8D8D8]' : 'text-[#374151]'}>{bullet}</span>
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
