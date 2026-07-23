import React from 'react';
import { User, MapPin, Mail, Phone, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sendEmail } from '../utils/emailHandler';

interface AboutProps {
  isDarkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#C8A96A] border-[#2B2B30]' : 'text-[#C8A96A] border-[#E6E2DA]'
          }`}>
            <User className="w-3.5 h-3.5" />
            Get To Know Me
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
          }`}>
            About <span className="text-[#C8A96A]">Me</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-[#C8A96A]" />
        </div>

        {/* Content Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-8 h-full">
            <div className={`p-8 sm:p-10 rounded-3xl glass-card flex flex-col justify-between border shadow-xl h-full ${
              isDarkMode ? 'bg-[#1A1A1D] border-[#2B2B30]' : 'bg-[#F5F3EF] border-[#E6E2DA]'
            }`}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${
                    isDarkMode ? 'bg-[#C8A96A]/15 text-[#C8A96A]' : 'bg-[#E8D9B5] text-[#2B2B2E]'
                  }`}>
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                      Full Stack Developer & Website Designer
                    </h3>
                    <p className="text-xs font-medium text-[#C8A96A]">
                      Based in {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                <p className={`text-base sm:text-lg leading-relaxed ${
                  isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'
                }`}>
                  {PERSONAL_INFO.aboutMe}
                </p>

                <div className={`grid sm:grid-cols-2 gap-4 pt-4 border-t ${
                  isDarkMode ? 'border-[#2B2B30]' : 'border-[#E6E2DA]'
                }`}>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isDarkMode ? 'bg-[#0F0F10]/60 border-[#2B2B30]' : 'bg-[#FCFBF8] border-[#E6E2DA]'
                  }`}>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#C8A96A]" />
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                      WordPress Custom Development
                    </span>
                  </div>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isDarkMode ? 'bg-[#0F0F10]/60 border-[#2B2B30]' : 'bg-[#FCFBF8] border-[#E6E2DA]'
                  }`}>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#C8A96A]" />
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                      PHP Business Applications
                    </span>
                  </div>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isDarkMode ? 'bg-[#0F0F10]/60 border-[#2B2B30]' : 'bg-[#FCFBF8] border-[#E6E2DA]'
                  }`}>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#C8A96A]" />
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                      Speed & SEO Optimization
                    </span>
                  </div>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isDarkMode ? 'bg-[#0F0F10]/60 border-[#2B2B30]' : 'bg-[#FCFBF8] border-[#E6E2DA]'
                  }`}>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                      IT Support & Database Mgmt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar Card */}
          <div className="lg:col-span-4 h-full">
            <div className={`p-8 sm:p-10 rounded-3xl glass-card flex flex-col justify-between border shadow-xl h-full ${
              isDarkMode ? 'bg-[#1A1A1D] border-[#2B2B30]' : 'bg-[#F5F3EF] border-[#E6E2DA]'
            }`}>
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8A96A]">
                  <Sparkles className="w-4 h-4" />
                  Quick Details
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl mt-0.5 ${
                      isDarkMode ? 'bg-[#C8A96A]/15 text-[#C8A96A]' : 'bg-[#E8D9B5] text-[#2B2B2E]'
                    }`}>
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>Name</p>
                      <p className={`text-sm font-bold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                        {PERSONAL_INFO.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl mt-0.5 ${
                      isDarkMode ? 'bg-[#C8A96A]/15 text-[#C8A96A]' : 'bg-[#E8D9B5] text-[#2B2B2E]'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>Location</p>
                      <p className={`text-sm font-bold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl mt-0.5 ${
                      isDarkMode ? 'bg-[#C8A96A]/15 text-[#C8A96A]' : 'bg-[#E8D9B5] text-[#2B2B2E]'
                    }`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20for%20Jhon%20Rey%20Ebro`}
                        onClick={(e) => {
                          e.preventDefault();
                          sendEmail('Inquiry for Jhon Rey Ebro');
                        }}
                        className="text-sm font-bold hover:underline break-all cursor-pointer text-[#C8A96A]"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>Phone</p>
                      <a
                        href={`tel:${PERSONAL_INFO.phoneClean}`}
                        className="text-sm font-bold hover:underline text-[#C8A96A]"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`pt-6 border-t ${isDarkMode ? 'border-[#2B2B30]' : 'border-[#E6E2DA]'}`}>
                <p className={`text-xs text-center ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>
                  Dedicated to clean code, scalable architecture, and pixel-perfect design.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
