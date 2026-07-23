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
      isDarkMode ? 'bg-[#0F0F10]' : 'bg-[#FCFBF8]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#C8A96A] border-[#2B2B30]' : 'text-[#C8A96A] border-[#E6E2DA]'
          }`}>
            <Code className="w-3.5 h-3.5" />
            Technical Expertise
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
          }`}>
            Skills & <span className="text-[#C8A96A]">Technologies</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'}`}>
            A comprehensive set of tools, languages, and platforms I utilize to build modern digital solutions.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full bg-[#C8A96A]" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedFilter('All')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              selectedFilter === 'All'
                ? 'bg-[#C8A96A] text-[#0F0F10] shadow-lg shadow-[#C8A96A]/20'
                : isDarkMode
                ? 'bg-[#1A1A1D] border border-[#2B2B30] text-[#F5F5F2] hover:bg-[#0F0F10]'
                : 'bg-[#F5F3EF] border border-[#E6E2DA] text-[#2B2B2E] hover:bg-[#FCFBF8]'
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
                  ? 'bg-[#C8A96A] text-[#0F0F10] shadow-lg shadow-[#C8A96A]/20'
                  : isDarkMode
                  ? 'bg-[#1A1A1D] border border-[#2B2B30] text-[#F5F5F2] hover:bg-[#0F0F10]'
                  : 'bg-[#F5F3EF] border border-[#E6E2DA] text-[#2B2B2E] hover:bg-[#FCFBF8]'
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
              className={`p-6 rounded-2xl glass-card border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between group ${
                isDarkMode
                  ? 'bg-[#1A1A1D] border-[#2B2B30] hover:border-[#C8A96A]/50'
                  : 'bg-[#F5F3EF] border-[#E6E2DA] hover:border-[#C8A96A]/50'
              }`}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className={`flex items-center gap-3 pb-3 border-b ${
                  isDarkMode ? 'border-[#2B2B30]' : 'border-[#E6E2DA]'
                }`}>
                  <div className={`p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 ${
                    isDarkMode ? 'bg-[#0F0F10] text-[#C8A96A]' : 'bg-[#FCFBF8] text-[#C8A96A]'
                  }`}>
                    {ICON_MAP[cat.iconName] || <Code className="w-5 h-5" />}
                  </div>
                  <h3 className={`font-bold text-base ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-default group/badge hover:scale-105 shadow-sm ${
                        isDarkMode
                          ? 'bg-[#0F0F10] border border-[#2B2B30] text-[#F5F5F2] hover:border-[#C8A96A]/60'
                          : 'bg-[#FCFBF8] border border-[#E6E2DA] text-[#2B2B2E] hover:border-[#C8A96A]/60'
                      }`}
                    >
                      <Check className="w-3 h-3 group-hover/badge:scale-125 transition-transform text-[#C8A96A]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`mt-6 pt-3 border-t text-[10px] flex justify-between items-center font-mono ${
                isDarkMode ? 'border-[#2B2B30] text-[#9A9A9A]' : 'border-[#E6E2DA] text-[#8E8E8E]'
              }`}>
                <span>{cat.skills.length} skills</span>
                <span className="font-bold text-[#C8A96A]">• Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
