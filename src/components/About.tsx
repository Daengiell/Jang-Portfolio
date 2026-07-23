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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card text-indigo-400 light:text-indigo-600 border border-indigo-500/30">
            <User className="w-3.5 h-3.5" />
            Get To Know Me
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Content Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className={`lg:col-span-8 p-8 sm:p-10 rounded-3xl glass-card flex flex-col justify-between border shadow-xl ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-slate-200'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Full Stack Developer & Website Designer
                  </h3>
                  <p className="text-xs text-indigo-400 font-medium">Based in {PERSONAL_INFO.location}</p>
                </div>
              </div>

              <p className={`text-base sm:text-lg leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {PERSONAL_INFO.aboutMe}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/60 light:border-slate-200">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 light:bg-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    WordPress Custom Development
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 light:bg-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    PHP Business Applications
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 light:bg-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Speed & SEO Optimization
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 light:bg-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    IT Support & Database Mgmt
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar Card */}
          <div className={`lg:col-span-4 p-8 sm:p-10 rounded-3xl glass-card flex flex-col justify-between border shadow-xl ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-slate-200'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Quick Details
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 light:text-slate-500 font-medium">Name</p>
                    <p className={`text-sm font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {PERSONAL_INFO.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 light:text-slate-500 font-medium">Location</p>
                    <p className={`text-sm font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 light:text-slate-500 font-medium">Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20for%20Jhon%20Rey%20Ebro`}
                      onClick={(e) => {
                        e.preventDefault();
                        sendEmail('Inquiry for Jhon Rey Ebro');
                      }}
                      className="text-sm font-bold text-indigo-400 hover:underline break-all cursor-pointer"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 light:text-slate-500 font-medium">Phone</p>
                    <a
                      href={`tel:${PERSONAL_INFO.phoneClean}`}
                      className="text-sm font-bold text-indigo-400 hover:underline"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 light:border-slate-200">
              <p className="text-xs text-slate-400 light:text-slate-600 text-center">
                Dedicated to clean code, scalable architecture, and pixel-perfect design.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
