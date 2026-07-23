import React from 'react';
import { X, ExternalLink, Globe, Server, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  isDarkMode,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-4xl rounded-3xl glass-card border shadow-2xl overflow-hidden my-8 transition-all ${
          isDarkMode ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Browser Header Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className="px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 max-w-xs truncate flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-indigo-400" />
            <span>{project.url ? project.url.replace('https://', '') : `app.internal/${project.id}`}</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-400">
            {project.category}
          </span>
        </div>

        {/* Main Banner Header (Image-free layout) */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border-b border-slate-800">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-600/90 text-white shadow-md inline-block">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-xs sm:text-sm text-indigo-300 font-medium">
                  {project.subtitle}
                </p>
              )}
            </div>

            {project.isLive && project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg flex items-center gap-2 transition-all cursor-pointer"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Project Overview
            </h3>
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Key Deliverables & Innovations
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-800/40 light:bg-slate-100 flex items-start gap-2 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="pt-4 border-t border-slate-800 light:border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-4 flex justify-between items-center text-xs text-slate-400">
            <span>Role: <strong className="text-slate-200 light:text-slate-800">{project.role}</strong></span>
            {project.isLive && project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline font-bold flex items-center gap-1"
              >
                {project.url}
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-amber-400 font-semibold">• Internal Enterprise Solution</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
