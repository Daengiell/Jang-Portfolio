import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

interface CertificationsProps {
  isDarkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
  return (
    <section id="certifications" className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-[#0F0F10]' : 'bg-[#FCFBF8]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#C8A96A] border-[#2B2B30]' : 'text-[#C8A96A] border-[#E6E2DA]'
          }`}>
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
          }`}>
            Professional <span className="text-[#C8A96A]">Certifications</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'}`}>
            Accredited credentials certified by government and industry skill boards.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full bg-[#C8A96A]" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full group relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                isDarkMode
                  ? 'bg-[#1A1A1D] border-[#2B2B30] hover:border-[#C8A96A]/40'
                  : 'bg-[#F5F3EF] border-[#E6E2DA] hover:border-[#C8A96A]/40'
              }`}
            >
              {/* Background Accent Badge Watermark */}
              <div className="absolute -right-6 -bottom-6 pointer-events-none group-hover:scale-125 transition-transform duration-500 opacity-5 text-[#C8A96A]">
                <Award className="w-48 h-48" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    isDarkMode
                      ? 'bg-[#1A1A1D] text-[#E8D9B5] border-[#C8A96A]/40'
                      : 'bg-[#E8D9B5] text-[#2B2B2E] border-[#C8A96A]/30'
                  }`}>
                    {cert.badgeText}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-4 h-4" />
                    Verified
                  </div>
                </div>

                <h3 className={`text-xl font-extrabold tracking-tight ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                  {cert.title}
                </h3>

                <p className="text-sm font-bold flex items-center gap-2 text-[#C8A96A]">
                  <Award className="w-4 h-4" />
                  Issuing Authority: {cert.issuer}
                </p>
              </div>

              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs relative z-10 ${
                isDarkMode ? 'border-[#2B2B30] text-[#9A9A9A]' : 'border-[#E6E2DA] text-[#8E8E8E]'
              }`}>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Skill Standards Certified
                </span>
                <span className="font-mono font-bold text-[#C8A96A]">TESDA Accredited</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
