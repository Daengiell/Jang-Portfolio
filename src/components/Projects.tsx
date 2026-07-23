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
      isDarkMode ? 'bg-[#111111]' : 'bg-[#FFFFFF]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#B87333] border-[#B87333]/30' : 'text-[#4F83CC] border-[#4F83CC]/30'
          }`}>
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio Highlights
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'
          }`}>
            Featured <span className={isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}>Projects</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
            Explore live WordPress client websites and custom PHP business systems developed for operational excellence.
          </p>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
          }`} />
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className={`flex flex-wrap items-center gap-2 p-1.5 rounded-2xl border backdrop-blur-md ${
            isDarkMode
              ? 'bg-[#1F1F1F] border-[#2F2F2F]'
              : 'bg-[#F5F5F5] border-[#D1D5DB]'
          }`}>
            {(['All', 'WordPress Websites', 'Custom Web Applications'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? isDarkMode
                      ? 'bg-[#B87333] text-white shadow-lg shadow-[#B87333]/20'
                      : 'bg-[#4F83CC] text-white shadow-lg shadow-[#4F83CC]/20'
                    : isDarkMode
                    ? 'text-[#D8D8D8] hover:text-white hover:bg-[#2F2F2F]'
                    : 'text-[#6B7280] hover:text-[#374151] hover:bg-[#FFFFFF]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
              isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'
            }`} />
            <input
              type="text"
              placeholder="Filter by keyword or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-medium border outline-none transition-all ${
                isDarkMode
                  ? 'bg-[#1F1F1F] border-[#2F2F2F] text-[#FAFAFA] focus:border-[#B87333]'
                  : 'bg-[#F5F5F5] border-[#D1D5DB] text-[#374151] focus:border-[#4F83CC]'
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
              className={`group relative rounded-2xl glass-card border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between cursor-pointer ${
                isDarkMode
                  ? 'bg-[#1F1F1F] border-[#2F2F2F] hover:border-[#B87333]/60'
                  : 'bg-[#F5F5F5] border-[#D1D5DB] hover:border-[#4F83CC]/60'
              }`}
            >
              <div>
                {/* Browser Header Bar */}
                <div className={`px-4 py-2.5 border-b flex items-center justify-between ${
                  isDarkMode ? 'bg-[#111111] border-[#2F2F2F]' : 'bg-[#FFFFFF] border-[#D1D5DB]'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className={`text-[10px] font-mono truncate max-w-[160px] ${
                    isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'
                  }`}>
                    {project.url ? project.url.replace('https://', '') : 'internal.app'}
                  </div>
                  {project.isLive ? (
                    <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <span className={`text-[10px] font-bold ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`}>System</span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border ${
                      isDarkMode
                        ? 'bg-[#B87333]/10 text-[#B87333] border-[#B87333]/20'
                        : 'bg-[#4F83CC]/10 text-[#4F83CC] border-[#4F83CC]/20'
                    }`}>
                      {project.category}
                    </span>
                    <span className={`text-[11px] font-mono ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
                      {project.role}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold tracking-tight transition-colors ${
                    isDarkMode
                      ? 'text-[#FAFAFA] group-hover:text-[#B87333]'
                      : 'text-[#374151] group-hover:text-[#4F83CC]'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs leading-relaxed line-clamp-3 ${
                    isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'
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
                            ? 'bg-[#111111] text-[#D8D8D8] border-[#2F2F2F]'
                            : 'bg-[#FFFFFF] text-[#374151] border-[#D1D5DB]'
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
                isDarkMode ? 'border-[#2F2F2F]' : 'border-[#D1D5DB]'
              }`}>
                <span className={`text-[11px] font-medium ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
                  {project.role}
                </span>

                {project.isLive && project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 border cursor-pointer ${
                      isDarkMode
                        ? 'text-[#B87333] hover:text-white hover:bg-[#B87333] border-[#B87333]/30'
                        : 'text-[#4F83CC] hover:text-white hover:bg-[#4F83CC] border-[#4F83CC]/30'
                    }`}
                  >
                    Visit Website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className={`text-[11px] font-semibold flex items-center gap-1 ${
                    isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
                  }`}>
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
              className="text-xs text-indigo-400 hover:underline font-bold"
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
