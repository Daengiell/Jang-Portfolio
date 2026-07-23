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
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card text-indigo-400 light:text-indigo-600 border border-indigo-500/30">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio Highlights
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore live WordPress client websites and custom PHP business systems developed for operational excellence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className={`flex flex-wrap items-center gap-2 p-1.5 rounded-2xl border backdrop-blur-md ${
            isDarkMode
              ? 'bg-slate-900/80 border-slate-800'
              : 'bg-slate-900/90 border-slate-800'
          }`}>
            {(['All', 'WordPress Websites', 'Custom Web Applications'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : isDarkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by keyword or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-medium border outline-none transition-all ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800 text-white focus:border-indigo-500'
                  : 'bg-white border-slate-200 text-slate-900 focus:border-indigo-500'
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
                  ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/50'
                  : 'bg-white/90 border-slate-200 hover:border-indigo-400'
              }`}
            >
              <div>
                {/* Browser Header Bar */}
                <div className="px-4 py-2.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate max-w-[160px]">
                    {project.url ? project.url.replace('https://', '') : 'internal.app'}
                  </div>
                  {project.isLive ? (
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-indigo-400">System</span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  {/* Category Pill Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.role}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold tracking-tight group-hover:text-indigo-400 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs leading-relaxed line-clamp-3 ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${
                          isDarkMode
                            ? 'bg-slate-800 text-slate-300 border border-slate-700/50'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/40 light:border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400">
                  {project.role}
                </span>

                {project.isLive && project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-indigo-400 hover:text-white hover:bg-indigo-600 transition-all flex items-center gap-1 border border-indigo-500/30 cursor-pointer"
                  >
                    Visit Website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-semibold text-indigo-400 flex items-center gap-1">
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
