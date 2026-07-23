import React from 'react';
import { Zap, Lightbulb, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

interface WhyWorkWithMeProps {
  isDarkMode: boolean;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ isDarkMode }) => {
  const getIcon = (iconName: string) => {
    const colorClass = isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]';
    switch (iconName) {
      case 'Zap': return <Zap className={`w-6 h-6 ${colorClass}`} />;
      case 'Lightbulb': return <Lightbulb className={`w-6 h-6 ${colorClass}`} />;
      case 'ShieldCheck': return <ShieldCheck className={`w-6 h-6 ${colorClass}`} />;
      case 'Users': return <Users className={`w-6 h-6 ${colorClass}`} />;
      default: return <Zap className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  return (
    <section className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-[#111111]' : 'bg-[#FFFFFF]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#B87333] border-[#B87333]/30' : 'text-[#4F83CC] border-[#4F83CC]/30'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            Core Strengths
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'
          }`}>
            Why <span className={isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}>Work With Me</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
            Proven characteristics and work ethics that ensure successful project delivery and seamless collaboration.
          </p>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
          }`} />
        </div>

        {/* 4 Premium Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_WORK_WITH_ME.map((feature, idx) => (
            <div
              key={feature.title}
              className={`p-8 rounded-3xl glass-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group ${
                isDarkMode
                  ? 'bg-[#1F1F1F] border-[#2F2F2F] hover:border-[#B87333]/40'
                  : 'bg-[#F5F5F5] border-[#D1D5DB] hover:border-[#4F83CC]/40'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl group-hover:scale-110 transition-transform ${
                    isDarkMode ? 'bg-[#111111]' : 'bg-[#FFFFFF]'
                  }`}>
                    {getIcon(feature.iconName)}
                  </div>
                  <span className={`text-xs font-mono font-bold ${
                    isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'
                  }`}>
                    0{idx + 1}
                  </span>
                </div>

                <h3 className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'}`}>
                  {feature.title}
                </h3>

                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
                  {feature.description}
                </p>
              </div>

              <div className={`pt-6 mt-6 border-t ${
                isDarkMode ? 'border-[#2F2F2F]' : 'border-[#D1D5DB]'
              }`}>
                <span className={`text-[11px] font-bold uppercase tracking-wider ${
                  isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
                }`}>
                  Key Value Add
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
