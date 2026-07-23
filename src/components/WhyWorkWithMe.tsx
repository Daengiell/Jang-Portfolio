import React from 'react';
import { Zap, Lightbulb, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

interface WhyWorkWithMeProps {
  isDarkMode: boolean;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ isDarkMode }) => {
  const getIcon = (iconName: string) => {
    const colorClass = isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]';
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
            isDarkMode ? 'text-[#D51C29] border-[#4E494A]' : 'text-[#E63946] border-[#E8E8E8]'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            Core Strengths
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'
          }`}>
            Why <span className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>Work With Me</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>
            Proven characteristics and work ethics that ensure successful project delivery and seamless collaboration.
          </p>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#A41521]' : 'bg-[#E63946]'
          }`} />
        </div>

        {/* 4 Premium Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_WORK_WITH_ME.map((feature, idx) => (
            <div
              key={feature.title}
              className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group ${
                isDarkMode
                  ? 'bg-[#2A2324] border-[#4E494A] hover:border-[#D51C29]/40'
                  : 'bg-[#FFFFFF] border-[#E8E8E8] hover:border-[#E63946]/40'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl group-hover:scale-110 transition-transform ${
                    isDarkMode ? 'bg-[#111111]' : 'bg-[#F8F8F8]'
                  }`}>
                    {getIcon(feature.iconName)}
                  </div>
                  <span className={`text-xs font-mono font-bold ${
                    isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'
                  }`}>
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                    {feature.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mt-2 ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className={`pt-6 mt-6 border-t ${
                isDarkMode ? 'border-[#4E494A]' : 'border-[#E8E8E8]'
              }`}>
                <span className={`text-[11px] font-bold uppercase tracking-wider ${
                  isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
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
