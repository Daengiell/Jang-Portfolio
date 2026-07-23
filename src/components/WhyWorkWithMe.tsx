import React from 'react';
import { Zap, Lightbulb, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

interface WhyWorkWithMeProps {
  isDarkMode: boolean;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-indigo-400" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  Users: <Users className="w-6 h-6 text-purple-400" />,
};

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ isDarkMode }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card text-indigo-400 light:text-indigo-600 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Core Strengths
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Why <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Work With Me</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Proven characteristics and work ethics that ensure successful project delivery and seamless collaboration.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* 4 Premium Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_WORK_WITH_ME.map((feature, idx) => (
            <div
              key={feature.title}
              className={`p-8 rounded-3xl glass-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40' : 'bg-white/80 border-slate-200 hover:border-indigo-400'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-slate-800/60 light:bg-slate-100 group-hover:scale-110 transition-transform">
                    {ICON_MAP[feature.iconName] || <Zap className="w-6 h-6 text-indigo-400" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {feature.title}
                </h3>

                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/40 light:border-slate-100">
                <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
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
