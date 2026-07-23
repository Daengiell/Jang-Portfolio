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
            isDarkMode ? 'text-[#D51C29] border-[#4E494A]' : 'text-[#E63946] border-[#E8E8E8]'
          }`}>
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'
          }`}>
            Professional <span className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>Certifications</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>
            Accredited credentials certified by government and industry skill boards.
          </p>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#A41521]' : 'bg-[#E63946]'
          }`} />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full group relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                isDarkMode
                  ? 'bg-[#2A2324] border-[#4E494A] hover:border-[#D51C29]/40'
                  : 'bg-[#FFFFFF] border-[#E8E8E8] hover:border-[#E63946]/40'
              }`}
            >
              {/* Background Accent Badge Watermark */}
              <div className={`absolute -right-6 -bottom-6 pointer-events-none group-hover:scale-125 transition-transform duration-500 opacity-5 ${
                isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
              }`}>
                <Award className="w-48 h-48" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    isDarkMode
                      ? 'bg-[#5A121D]/40 text-[#F4EDED] border-[#A41521]/40'
                      : 'bg-[#FFD6DB] text-[#1A1A1A] border-[#E63946]/30'
                  }`}>
                    {cert.badgeText}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-4 h-4" />
                    Verified
                  </div>
                </div>

                <h3 className={`text-xl font-extrabold tracking-tight ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                  {cert.title}
                </h3>

                <p className={`text-sm font-bold flex items-center gap-2 ${
                  isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
                }`}>
                  <Award className="w-4 h-4" />
                  Issuing Authority: {cert.issuer}
                </p>
              </div>

              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs relative z-10 ${
                isDarkMode ? 'border-[#4E494A] text-[#A35B62]' : 'border-[#E8E8E8] text-[#5F6368]'
              }`}>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Skill Standards Certified
                </span>
                <span className={`font-mono font-bold ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`}>TESDA Accredited</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
