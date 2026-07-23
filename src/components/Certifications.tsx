import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

interface CertificationsProps {
  isDarkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
  return (
    <section id="certifications" className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-[#111111]' : 'bg-[#F5F5F5]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#B87333] border-[#B87333]/30' : 'text-[#4F83CC] border-[#4F83CC]/30'
          }`}>
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'
          }`}>
            Professional <span className={isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}>Certifications</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
            Accredited credentials certified by government and industry skill boards.
          </p>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
          }`} />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className={`p-8 rounded-3xl glass-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group relative overflow-hidden ${
                isDarkMode
                  ? 'bg-[#1F1F1F] border-[#2F2F2F] hover:border-[#B87333]/40'
                  : 'bg-[#FFFFFF] border-[#D1D5DB] hover:border-[#4F83CC]/40'
              }`}
            >
              {/* Background Accent Badge Watermark */}
              <div className={`absolute -right-6 -bottom-6 pointer-events-none group-hover:scale-125 transition-transform duration-500 opacity-5 ${
                isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
              }`}>
                <Award className="w-48 h-48" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    isDarkMode
                      ? 'bg-[#B87333]/20 text-[#D8D8D8] border-[#B87333]/30'
                      : 'bg-[#4F83CC]/20 text-[#374151] border-[#4F83CC]/30'
                  }`}>
                    {cert.badgeText}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-4 h-4" />
                    Verified
                  </div>
                </div>

                <h3 className={`text-xl font-extrabold tracking-tight ${isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'}`}>
                  {cert.title}
                </h3>

                <p className={`text-sm font-bold flex items-center gap-2 ${
                  isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
                }`}>
                  <Award className="w-4 h-4" />
                  Issuing Authority: {cert.issuer}
                </p>
              </div>

              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs relative z-10 ${
                isDarkMode ? 'border-[#2F2F2F] text-[#A3A3A3]' : 'border-[#D1D5DB] text-[#6B7280]'
              }`}>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Skill Standards Certified
                </span>
                <span className={`font-mono font-bold ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`}>TESDA Accredited</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
