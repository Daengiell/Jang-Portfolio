import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Search,
  Server
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  isDarkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'WordPress Websites' | 'Custom Web Applications'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesTab = activeTab === 'All' || proj.category === activeTab;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <section id="projects" className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-[#0F0F10]' : 'bg-[#FCFBF8]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#C8A96A] border-[#2B2B30]' : 'text-[#C8A96A] border-[#E6E2DA]'
          }`}>
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio Highlights
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
          }`}>
            Featured <span className="text-[#C8A96A]">Projects</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'}`}>
            Explore live WordPress client websites and custom PHP business systems developed for operational excellence.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full bg-[#C8A96A]" />
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className={`flex flex-wrap items-center gap-2 p-1.5 rounded-2xl border backdrop-blur-md ${
            isDarkMode
              ? 'bg-[#1A1A1D] border-[#2B2B30]'
              : 'bg-[#F5F3EF] border-[#E6E2DA]'
          }`}>
            {(['All', 'WordPress Websites', 'Custom Web Applications'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#C8A96A] text-[#0F0F10] shadow-lg shadow-[#C8A96A]/20'
                    : isDarkMode
                    ? 'text-[#F5F5F2] hover:bg-[#0F0F10]'
                    : 'text-[#666666] hover:text-[#2B2B2E] hover:bg-[#FCFBF8]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
              isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'
            }`} />
            <input
              type="text"
              placeholder="Filter by keyword or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-medium border outline-none transition-all ${
                isDarkMode
                  ? 'bg-[#1A1A1D] border-[#2B2B30] text-[#F5F5F2] focus:border-[#C8A96A]'
                  : 'bg-[#F5F3EF] border-[#E6E2DA] text-[#2B2B2E] focus:border-[#C8A96A]'
              }`}
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-2xl glass-card border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between h-full cursor-pointer ${
                isDarkMode
                  ? 'bg-[#1A1A1D] border-[#2B2B30] hover:border-[#C8A96A]/60'
                  : 'bg-[#F5F3EF] border-[#E6E2DA] hover:border-[#C8A96A]/60'
              }`}
            >
              <div>
                {/* Browser Header Bar */}
                <div className={`px-4 py-2.5 border-b flex items-center justify-between ${
                  isDarkMode ? 'bg-[#0F0F10] border-[#2B2B30]' : 'bg-[#FCFBF8] border-[#E6E2DA]'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className={`text-[10px] font-mono truncate max-w-[160px] ${
                    isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'
                  }`}>
                    {project.url ? project.url.replace('https://', '') : 'internal.app'}
                  </div>
                  {project.isLive ? (
                    <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-[#C8A96A]">System</span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border ${
                      isDarkMode
                        ? 'bg-[#C8A96A]/15 text-[#C8A96A] border-[#C8A96A]/30'
                        : 'bg-[#E8D9B5] text-[#2B2B2E] border-[#C8A96A]/20'
                    }`}>
                      {project.category}
                    </span>
                    <span className={`text-[11px] font-mono ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight transition-colors group-hover:text-[#C8A96A]">
                    {project.title}
                  </h3>

                  <p className={`text-xs leading-relaxed line-clamp-3 ${
                    isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'
                  }`}>
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                          isDarkMode
                            ? 'bg-[#0F0F10] text-[#F5F5F2] border-[#2B2B30]'
                            : 'bg-[#FCFBF8] text-[#2B2B2E] border-[#E6E2DA]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className={`px-6 pb-6 pt-2 border-t flex items-center justify-between ${
                isDarkMode ? 'border-[#2B2B30]' : 'border-[#E6E2DA]'
              }`}>
                <span className={`text-[11px] font-medium ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>
                  {project.role}
                </span>

                {project.isLive && project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 border cursor-pointer text-[#C8A96A] hover:text-[#0F0F10] hover:bg-[#C8A96A] border-[#C8A96A]/40"
                  >
                    Visit Website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-semibold flex items-center gap-1 text-[#C8A96A]">
                    <Server className="w-3 h-3" />
                    Custom System
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-lg font-semibold text-slate-400">No projects found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setActiveTab('All');
                setSearchQuery('');
              }}
              className="text-xs text-[#C8A96A] hover:underline font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};

