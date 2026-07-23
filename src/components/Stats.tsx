import React, { useState, useEffect } from 'react';
import { Globe, Cpu, Briefcase, CheckCircle2 } from 'lucide-react';
import { STATS } from '../data/portfolioData';

interface StatsProps {
  isDarkMode: boolean;
}

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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-[#C8A96A]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#C8A96A]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#C8A96A]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-[#C8A96A]" />;
      default: return <Globe className="w-6 h-6 text-[#C8A96A]" />;
    }
  };

  return (
    <section className={`py-20 relative overflow-hidden border-y ${
      isDarkMode
        ? 'bg-[#0F0F10] border-[#2B2B30]'
        : 'bg-[#FCFBF8] border-[#E6E2DA]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-6 rounded-2xl glass-card border flex flex-col items-center text-center space-y-3 transition-transform hover:-translate-y-1 ${
                isDarkMode ? 'bg-[#1A1A1D] border-[#2B2B30]' : 'bg-[#F5F3EF] border-[#E6E2DA]'
              }`}
            >
              <div className={`p-3 rounded-2xl ${
                isDarkMode ? 'bg-[#0F0F10]' : 'bg-[#FCFBF8]'
              }`}>
                {getIcon(stat.iconName)}
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono text-[#C8A96A]">
                {counts[idx]}
                {stat.suffix}
              </div>

              <p className={`text-xs sm:text-sm font-semibold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

