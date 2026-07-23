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
            isDarkMode ? 'text-[#D51C29] border-[#4E494A]' : 'text-[#E63946] border-[#E8E8E8]'
          }`}>
            <User className="w-3.5 h-3.5" />
            Get To Know Me
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'
          }`}>
            About <span className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>Me</span>
          </h2>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#A41521]' : 'bg-[#E63946]'
          }`} />
        </div>

        {/* Content Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-8 h-full">
            <div className={`p-8 sm:p-10 rounded-3xl glass-card flex flex-col justify-between border shadow-xl h-full ${
              isDarkMode ? 'bg-[#2A2324] border-[#4E494A]' : 'bg-[#FFFFFF] border-[#E8E8E8]'
            }`}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${
                    isDarkMode ? 'bg-[#A41521]/15 text-[#D51C29]' : 'bg-[#FFD6DB] text-[#E63946]'
                  }`}>
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                      Full Stack Developer & Website Designer
                    </h3>
                    <p className={`text-xs font-medium ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`}>
                      Based in {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                <p className={`text-base sm:text-lg leading-relaxed ${
                  isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'
                }`}>
                  {PERSONAL_INFO.aboutMe}
                </p>

                <div className={`grid sm:grid-cols-2 gap-4 pt-4 border-t ${
                  isDarkMode ? 'border-[#4E494A]' : 'border-[#E8E8E8]'
                }`}>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isDarkMode ? 'bg-[#111111]/60 border-[#4E494A]' : 'bg-[#F8F8F8] border-[#E8E8E8]'
                  }`}>
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`} />
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                      WordPress Custom Development
                    </span>
                  </div>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isDarkMode ? 'bg-[#111111]/60 border-[#4E494A]' : 'bg-[#F8F8F8] border-[#E8E8E8]'
                  }`}>
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`} />
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                      PHP Business Applications
                    </span>
                  </div>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isDarkMode ? 'bg-[#111111]/60 border-[#4E494A]' : 'bg-[#F8F8F8] border-[#E8E8E8]'
                  }`}>
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`} />
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                      Speed & SEO Optimization
                    </span>
                  </div>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isDarkMode ? 'bg-[#111111]/60 border-[#4E494A]' : 'bg-[#F8F8F8] border-[#E8E8E8]'
                  }`}>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
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
              isDarkMode ? 'bg-[#2A2324] border-[#4E494A]' : 'bg-[#FFFFFF] border-[#E8E8E8]'
            }`}>
              <div className="space-y-6">
                <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                  isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
                }`}>
                  <Sparkles className="w-4 h-4" />
                  Quick Details
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl mt-0.5 ${
                      isDarkMode ? 'bg-[#A41521]/15 text-[#D51C29]' : 'bg-[#FFD6DB] text-[#E63946]'
                    }`}>
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>Name</p>
                      <p className={`text-sm font-bold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                        {PERSONAL_INFO.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl mt-0.5 ${
                      isDarkMode ? 'bg-[#A41521]/15 text-[#D51C29]' : 'bg-[#FFD6DB] text-[#E63946]'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>Location</p>
                      <p className={`text-sm font-bold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl mt-0.5 ${
                      isDarkMode ? 'bg-[#A41521]/15 text-[#D51C29]' : 'bg-[#FFD6DB] text-[#E63946]'
                    }`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-xs font-medium ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20for%20Jhon%20Rey%20Ebro`}
                        onClick={(e) => {
                          e.preventDefault();
                          sendEmail('Inquiry for Jhon Rey Ebro');
                        }}
                        className={`text-sm font-bold hover:underline break-all cursor-pointer ${
                          isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
                        }`}
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
                      <p className={`text-xs font-medium ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>Phone</p>
                      <a
                        href={`tel:${PERSONAL_INFO.phoneClean}`}
                        className={`text-sm font-bold hover:underline ${
                          isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
                        }`}
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`pt-6 border-t ${isDarkMode ? 'border-[#4E494A]' : 'border-[#E8E8E8]'}`}>
                <p className={`text-xs text-center ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>
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
