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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-4xl rounded-3xl glass-card border shadow-2xl overflow-hidden my-8 transition-all ${
          isDarkMode ? 'bg-[#1F1F1F] border-[#2F2F2F] text-[#FAFAFA]' : 'bg-[#FFFFFF] border-[#D1D5DB] text-[#374151]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full transition-colors cursor-pointer ${
            isDarkMode
              ? 'bg-[#2F2F2F] hover:bg-[#B87333] text-white'
              : 'bg-[#D1D5DB] hover:bg-[#4F83CC] text-[#374151] hover:text-white'
          }`}
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Browser Header Bar */}
        <div className={`flex items-center justify-between px-6 py-3 border-b ${
          isDarkMode ? 'bg-[#111111] border-[#2F2F2F]' : 'bg-[#F5F5F5] border-[#D1D5DB]'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <div className={`px-4 py-1 rounded-full border text-xs font-mono max-w-xs truncate flex items-center gap-1.5 ${
            isDarkMode ? 'bg-[#1F1F1F] border-[#2F2F2F] text-[#A3A3A3]' : 'bg-[#FFFFFF] border-[#D1D5DB] text-[#6B7280]'
          }`}>
            <Globe className={`w-3 h-3 ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`} />
            <span>{project.url ? project.url.replace('https://', '') : `app.internal/${project.id}`}</span>
          </div>
          <span className={`text-[10px] uppercase tracking-wider font-bold ${
            isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
          }`}>
            {project.category}
          </span>
        </div>

        {/* Main Banner Header (Image-free layout) */}
        <div className={`relative p-6 sm:p-8 border-b ${
          isDarkMode
            ? 'bg-[#111111] border-[#2F2F2F]'
            : 'bg-[#F5F5F5] border-[#D1D5DB]'
        }`}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-md inline-block ${
                isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
              }`}>
                {project.category}
              </span>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'
              }`}>
                {project.title}
              </h2>
              {project.subtitle && (
                <p className={`text-xs sm:text-sm font-medium ${
                  isDarkMode ? 'text-[#D8D8D8]' : 'text-[#6B7280]'
                }`}>
                  {project.subtitle}
                </p>
              )}
            </div>

            {project.isLive && project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow-lg flex items-center gap-2 transition-all cursor-pointer ${
                  isDarkMode ? 'bg-[#B87333] hover:bg-[#D48C48]' : 'bg-[#4F83CC] hover:bg-[#3B6BB0]'
                }`}
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
            <h3 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
              isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
            }`}>
              <Sparkles className="w-4 h-4" />
              Project Overview
            </h3>
            <p className={`text-base leading-relaxed ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                isDarkMode ? 'text-[#D8D8D8]' : 'text-[#374151]'
              }`}>
                <ShieldCheck className="w-4 h-4" />
                Key Deliverables & Innovations
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border flex items-start gap-2 text-xs font-medium ${
                    isDarkMode ? 'bg-[#111111] border-[#2F2F2F]' : 'bg-[#F5F5F5] border-[#D1D5DB]'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
                    }`} />
                    <span className={isDarkMode ? 'text-[#D8D8D8]' : 'text-[#374151]'}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className={`pt-4 border-t ${isDarkMode ? 'border-[#2F2F2F]' : 'border-[#D1D5DB]'}`}>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${
              isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'
            }`}>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
                    isDarkMode
                      ? 'bg-[#B87333]/10 text-[#B87333] border-[#B87333]/20'
                      : 'bg-[#4F83CC]/10 text-[#4F83CC] border-[#4F83CC]/20'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className={`pt-4 flex justify-between items-center text-xs ${
            isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'
          }`}>
            <span>Role: <strong className={isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'}>{project.role}</strong></span>
            {project.isLive && project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold flex items-center gap-1 hover:underline ${
                  isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
                }`}
              >
                {project.url}
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className={`font-semibold ${isDarkMode ? 'text-[#D8D8D8]' : 'text-[#374151]'}`}>• Internal Enterprise Solution</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
