import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Globe,
  Wrench,
  Briefcase,
  Palette,
  Check
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  isDarkMode: boolean;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-indigo-400" />,
  Server: <Server className="w-5 h-5 text-purple-400" />,
  Database: <Database className="w-5 h-5 text-blue-400" />,
  Globe: <Globe className="w-5 h-5 text-emerald-400" />,
  Code: <Code className="w-5 h-5 text-amber-400" />,
  Wrench: <Wrench className="w-5 h-5 text-rose-400" />,
  Briefcase: <Briefcase className="w-5 h-5 text-pink-400" />,
  Palette: <Palette className="w-5 h-5 text-sky-400" />,
};

export const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categoriesToDisplay =
    selectedFilter === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title === selectedFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card text-indigo-400 light:text-indigo-600 border border-indigo-500/30">
            <Code className="w-3.5 h-3.5" />
            Technical Expertise
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive set of tools, languages, and platforms I utilize to build modern digital solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedFilter('All')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              selectedFilter === 'All'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : isDarkMode
                ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedFilter(cat.title)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                selectedFilter === cat.title
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : isDarkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesToDisplay.map((cat) => (
            <div
              key={cat.title}
              className={`p-6 rounded-2xl glass-card border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/40'
                  : 'bg-white/80 border-slate-200 hover:border-indigo-400'
              }`}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800/60 light:border-slate-200">
                  <div className="p-2.5 rounded-xl bg-slate-800/50 light:bg-slate-100 group-hover:scale-110 transition-transform duration-300">
                    {ICON_MAP[cat.iconName] || <Code className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <h3 className={`font-bold text-base ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-default group/badge hover:scale-105 ${
                        isDarkMode
                          ? 'bg-slate-800/70 border border-slate-700/60 text-slate-200 hover:border-indigo-500/60 hover:text-indigo-300 hover:bg-slate-800'
                          : 'bg-slate-100 border border-slate-200 text-slate-800 hover:border-indigo-400 hover:text-indigo-700 hover:bg-white'
                      }`}
                    >
                      <Check className="w-3 h-3 text-indigo-400 group-hover/badge:scale-125 transition-transform" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/40 light:border-slate-100 text-[10px] text-slate-500 flex justify-between items-center font-mono">
                <span>{cat.skills.length} skills</span>
                <span className="text-indigo-400/80 font-bold">• Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
