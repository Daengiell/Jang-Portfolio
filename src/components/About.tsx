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
            isDarkMode ? 'text-[#B87333] border-[#B87333]/30' : 'text-[#4F83CC] border-[#4F83CC]/30'
          }`}>
            <User className="w-3.5 h-3.5" />
            Get To Know Me
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'
          }`}>
            About <span className={isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}>Me</span>
          </h2>
          <div className={`w-16 h-1 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#B87333]' : 'bg-[#4F83CC]'
          }`} />
        </div>

        {/* Content Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className={`lg:col-span-8 p-8 sm:p-10 rounded-3xl glass-card flex flex-col justify-between border shadow-xl ${
            isDarkMode ? 'bg-[#1F1F1F] border-[#2F2F2F]' : 'bg-[#F5F5F5] border-[#D1D5DB]'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl ${
                  isDarkMode ? 'bg-[#B87333]/10 text-[#B87333]' : 'bg-[#4F83CC]/10 text-[#4F83CC]'
                }`}>
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'}`}>
                    Full Stack Developer & Website Designer
                  </h3>
                  <p className={`text-xs font-medium ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`}>
                    Based in {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              <p className={`text-base sm:text-lg leading-relaxed ${
                isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'
              }`}>
                {PERSONAL_INFO.aboutMe}
              </p>

              <div className={`grid sm:grid-cols-2 gap-4 pt-4 border-t ${
                isDarkMode ? 'border-[#2F2F2F]' : 'border-[#D1D5DB]'
              }`}>
                <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                  isDarkMode ? 'bg-[#111111]/60 border-[#2F2F2F]' : 'bg-[#FFFFFF]/80 border-[#D1D5DB]'
                }`}>
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`} />
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#D8D8D8]' : 'text-[#374151]'}`}>
                    WordPress Custom Development
                  </span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                  isDarkMode ? 'bg-[#111111]/60 border-[#2F2F2F]' : 'bg-[#FFFFFF]/80 border-[#D1D5DB]'
                }`}>
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`} />
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#D8D8D8]' : 'text-[#374151]'}`}>
                    PHP Business Applications
                  </span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                  isDarkMode ? 'bg-[#111111]/60 border-[#2F2F2F]' : 'bg-[#FFFFFF]/80 border-[#D1D5DB]'
                }`}>
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'}`} />
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#D8D8D8]' : 'text-[#374151]'}`}>
                    Speed & SEO Optimization
                  </span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-xl border ${
                  isDarkMode ? 'bg-[#111111]/60 border-[#2F2F2F]' : 'bg-[#FFFFFF]/80 border-[#D1D5DB]'
                }`}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#D8D8D8]' : 'text-[#374151]'}`}>
                    IT Support & Database Mgmt
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar Card */}
          <div className={`lg:col-span-4 p-8 sm:p-10 rounded-3xl glass-card flex flex-col justify-between border shadow-xl ${
            isDarkMode ? 'bg-[#1F1F1F] border-[#2F2F2F]' : 'bg-[#F5F5F5] border-[#D1D5DB]'
          }`}>
            <div className="space-y-6">
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
              }`}>
                <Sparkles className="w-4 h-4" />
                Quick Details
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl mt-0.5 ${
                    isDarkMode ? 'bg-[#B87333]/10 text-[#B87333]' : 'bg-[#4F83CC]/10 text-[#4F83CC]'
                  }`}>
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>Name</p>
                    <p className={`text-sm font-bold ${isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'}`}>
                      {PERSONAL_INFO.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl mt-0.5 ${
                    isDarkMode ? 'bg-[#B87333]/10 text-[#B87333]' : 'bg-[#4F83CC]/10 text-[#4F83CC]'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>Location</p>
                    <p className={`text-sm font-bold ${isDarkMode ? 'text-[#FAFAFA]' : 'text-[#374151]'}`}>
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl mt-0.5 ${
                    isDarkMode ? 'bg-[#B87333]/10 text-[#B87333]' : 'bg-[#4F83CC]/10 text-[#4F83CC]'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20for%20Jhon%20Rey%20Ebro`}
                      onClick={(e) => {
                        e.preventDefault();
                        sendEmail('Inquiry for Jhon Rey Ebro');
                      }}
                      className={`text-sm font-bold hover:underline break-all cursor-pointer ${
                        isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
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
                    <p className={`text-xs font-medium ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>Phone</p>
                    <a
                      href={`tel:${PERSONAL_INFO.phoneClean}`}
                      className={`text-sm font-bold hover:underline ${
                        isDarkMode ? 'text-[#B87333]' : 'text-[#4F83CC]'
                      }`}
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`pt-6 border-t ${isDarkMode ? 'border-[#2F2F2F]' : 'border-[#D1D5DB]'}`}>
              <p className={`text-xs text-center ${isDarkMode ? 'text-[#A3A3A3]' : 'text-[#6B7280]'}`}>
                Dedicated to clean code, scalable architecture, and pixel-perfect design.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
