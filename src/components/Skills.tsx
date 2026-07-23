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
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
};

export const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categoriesToDisplay =
    selectedFilter === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title === selectedFilter);

  return (
    <section id="skills" className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-[#111111]' : 'bg-[#FFFFFF]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#B87333] border-[#B87333]/30' : 'text-[#4F83CC] border-[#4F83CC]/30'
          }`}>
            <Code className="w-3.5 h-3.5" />
            Technical Expertise
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'
          }`}>
            Skills & <span className={isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}>Technologies</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
            A comprehensive set of tools, languages, and platforms I utilize to build modern digital solutions.
          </p>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
          }`} />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedFilter('All')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              selectedFilter === 'All'
                ? isDarkMode
                  ? 'bg-[#B87333] text-white shadow-lg shadow-[#B87333]/20'
                  : 'bg-[#4F83CC] text-white shadow-lg shadow-[#4F83CC]/20'
                : isDarkMode
                ? 'bg-[#1F1F1F] border border-[#2F2F2F] text-[#D8D8D8] hover:text-white hover:bg-[#2F2F2F]'
                : 'bg-[#F5F5F5] border border-[#D1D5DB] text-[#374151] hover:text-[#374151] hover:bg-[#FFFFFF]'
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
                  ? isDarkMode
                    ? 'bg-[#B87333] text-white shadow-lg shadow-[#B87333]/20'
                    : 'bg-[#4F83CC] text-white shadow-lg shadow-[#4F83CC]/20'
                  : isDarkMode
                  ? 'bg-[#1F1F1F] border border-[#2F2F2F] text-[#D8D8D8] hover:text-white hover:bg-[#2F2F2F]'
                  : 'bg-[#F5F5F5] border border-[#D1D5DB] text-[#374151] hover:text-[#374151] hover:bg-[#FFFFFF]'
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
                  ? 'bg-[#1F1F1F] border-[#2F2F2F] hover:border-[#B87333]/50'
                  : 'bg-[#F5F5F5] border-[#D1D5DB] hover:border-[#4F83CC]/50'
              }`}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className={`flex items-center gap-3 pb-3 border-b ${
                  isDarkMode ? 'border-[#2F2F2F]' : 'border-[#D1D5DB]'
                }`}>
                  <div className={`p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 ${
                    isDarkMode ? 'bg-[#111111] text-[#B87333]' : 'bg-[#FFFFFF] text-[#4F83CC]'
                  }`}>
                    {ICON_MAP[cat.iconName] || <Code className="w-5 h-5" />}
                  </div>
                  <h3 className={`font-bold text-base ${isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'}`}>
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
                          ? 'bg-[#111111] border border-[#2F2F2F] text-[#D8D8D8] hover:border-[#B87333]/60 hover:text-white'
                          : 'bg-[#FFFFFF] border border-[#D1D5DB] text-[#374151] hover:border-[#4F83CC]/60 hover:text-[#4F83CC]'
                      }`}
                    >
                      <Check className={`w-3 h-3 group-hover/badge:scale-125 transition-transform ${
                        isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
                      }`} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`mt-6 pt-3 border-t text-[10px] flex justify-between items-center font-mono ${
                isDarkMode ? 'border-[#2F2F2F] text-[#A3A3A3]' : 'border-[#D1D5DB] text-[#6B7280]'
              }`}>
                <span>{cat.skills.length} skills</span>
                <span className={`font-bold ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`}>• Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
