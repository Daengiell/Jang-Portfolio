import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

interface CertificationsProps {
  isDarkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card text-indigo-400 light:text-indigo-600 border border-indigo-500/30">
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Professional <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Accredited credentials certified by government and industry skill boards.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className={`p-8 rounded-3xl glass-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group relative overflow-hidden ${
                isDarkMode ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/40' : 'bg-white/90 border-slate-200 hover:border-indigo-400'
              }`}
            >
              {/* Background Accent Badge Watermark */}
              <div className="absolute -right-6 -bottom-6 text-indigo-500/5 pointer-events-none group-hover:scale-125 transition-transform duration-500">
                <Award className="w-48 h-48" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {cert.badgeText}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-4 h-4" />
                    Verified
                  </div>
                </div>

                <h3 className={`text-xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {cert.title}
                </h3>

                <p className="text-sm font-bold text-indigo-400 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Issuing Authority: {cert.issuer}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 relative z-10">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Skill Standards Certified
                </span>
                <span className="font-mono text-indigo-400 font-bold">TESDA Accredited</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
