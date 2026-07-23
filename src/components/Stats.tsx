import React, { useState, useEffect } from 'react';
import { Globe, Cpu, Briefcase, CheckCircle2 } from 'lucide-react';
import { STATS } from '../data/portfolioData';

interface StatsProps {
  isDarkMode: boolean;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-indigo-400" />,
  Cpu: <Cpu className="w-6 h-6 text-purple-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-pink-400" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
};

export const Stats: React.FC<StatsProps> = ({ isDarkMode }) => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const newCounts = STATS.map((stat) => {
        const progress = Math.min(step / steps, 1);
        return Math.floor(stat.numericValue * progress);
      });
      setCounts(newCounts);

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900/40 light:bg-slate-50 border-y border-slate-800/80 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-6 rounded-2xl glass-card border flex flex-col items-center text-center space-y-3 transition-transform hover:-translate-y-1 ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'
              }`}
            >
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 shadow-inner">
                {ICON_MAP[stat.iconName] || <Globe className="w-6 h-6 text-indigo-400" />}
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono">
                {counts[idx]}
                {stat.suffix}
              </div>

              <p className={`text-xs sm:text-sm font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
