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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card text-indigo-400 light:text-indigo-600 border border-indigo-500/30">
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Work <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            My professional career track building web solutions, managing IT systems, and supporting client growth.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glow Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2 opacity-30" />

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
                    <div className="w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/50">
                      <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12'
                  }`}>
                    <div className={`p-6 sm:p-8 rounded-2xl glass-card border transition-all duration-300 hover:shadow-2xl hover:border-indigo-500/40 group ${
                      isDarkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white/80 border-slate-200'
                    }`}>
                      
                      {/* Top Badge & Date */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        {exp.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            {exp.badge}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 light:text-indigo-600 bg-indigo-500/10 px-3 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className={`text-xl font-bold tracking-tight ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {exp.role}
                      </h3>
                      
                      <div className={`flex items-center gap-2 mt-1 mb-4 text-sm font-semibold text-slate-400 light:text-slate-600 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <Building2 className="w-4 h-4 text-purple-400" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Responsibilities List */}
                      <ul className={`space-y-2 text-sm text-left ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
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
