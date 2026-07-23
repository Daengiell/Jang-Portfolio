import React from 'react';
import { ArrowRight, Mail, Sparkles, Code, Globe, ShieldCheck, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-glow"
    >
      {/* Background Ambient Floating Circles & Blurred Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#C8A96A]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E8D9B5]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#C8A96A]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status / Welcome Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide glass-card border shadow-sm ${
              isDarkMode
                ? 'border-[#2B2B30] text-[#C8A96A]'
                : 'border-[#E6E2DA] text-[#C8A96A]'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance & Full-time Roles
              <Sparkles className="w-3.5 h-3.5 ml-1 text-[#C8A96A]" />
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
              }`}>
                Hi, I'm{' '}
                <span className="text-[#C8A96A]">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Dynamic Job Titles */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-sm sm:text-base font-semibold">
                {PERSONAL_INFO.titles.map((title, index) => (
                  <React.Fragment key={title}>
                    <span className={`px-3 py-1 rounded-lg glass-card border font-medium ${
                      isDarkMode
                        ? 'border-[#2B2B30] text-[#F5F5F2]'
                        : 'border-[#E6E2DA] text-[#2B2B2E]'
                    }`}>
                      {title}
                    </span>
                    {index < PERSONAL_INFO.titles.length - 1 && (
                      <span className={isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}>•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Short Introduction */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'
            }`}>
              {PERSONAL_INFO.introduction}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-[#0F0F10] bg-[#C8A96A] hover:bg-[#E8D9B5] shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group cursor-pointer shadow-[#C8A96A]/20"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0F0F10]" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className={`px-7 py-3.5 rounded-xl font-bold text-sm border transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer ${
                  isDarkMode
                    ? 'bg-[#1A1A1D] border-[#2B2B30] text-[#F5F5F2] hover:bg-[#1A1A1D]/80 hover:border-[#C8A96A]/40 shadow-md'
                    : 'bg-[#F5F3EF] border-[#E6E2DA] text-[#2B2B2E] hover:bg-[#FCFBF8] hover:border-[#C8A96A]/40 shadow-md'
                }`}
              >
                <Mail className="w-4 h-4 text-[#C8A96A]" />
                Contact Me
              </button>
            </div>

            {/* Quick Specs Bar */}
            <div className={`pt-6 grid grid-cols-3 gap-4 border-t ${
              isDarkMode ? 'border-[#2B2B30]' : 'border-[#E6E2DA]'
            }`}>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#C8A96A]">4+ Yrs</p>
                <p className={`text-xs ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>Experience</p>
              </div>
              <div>
                <p className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>8+ Live</p>
                <p className={`text-xs ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>WordPress Sites</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#C8A96A]">4+ Custom</p>
                <p className={`text-xs ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>PHP Systems</p>
              </div>
            </div>
          </div>

          {/* Visual Feature Area (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl blur-xl opacity-20 animate-pulse bg-[#C8A96A]" />

              {/* Main Visual Glassmorphism Box */}
              <div className={`relative p-6 sm:p-8 rounded-2xl glass-card shadow-2xl space-y-6 ${
                isDarkMode ? 'bg-[#1A1A1D] border-[#2B2B30]' : 'bg-[#F5F3EF] border-[#E6E2DA]'
              }`}>
                {/* Code Header Bar */}
                <div className={`flex items-center justify-between pb-4 border-b ${
                  isDarkMode ? 'border-[#2B2B30]' : 'border-[#E6E2DA]'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#C8A96A]">developer.config.php</span>
                </div>

                {/* Developer Spec Snippet */}
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="text-[#C8A96A]">
                    <span>class</span> <span className={isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}>FullStackDeveloper</span> &#123;
                  </div>
                  <div className={`pl-4 space-y-1 ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'}`}>
                    <p><span className="text-[#C8A96A]">public</span> $name = <span className="text-emerald-500">'Jhon Rey A. Ebro'</span>;</p>
                    <p><span className="text-[#C8A96A]">public</span> $core = [<span className="text-emerald-500">'WordPress'</span>, <span className="text-emerald-500">'PHP'</span>, <span className="text-emerald-500">'MySQL'</span>, <span className="text-emerald-500">'JS'</span>];</p>
                    <p><span className="text-[#C8A96A]">public</span> $location = <span className="text-emerald-500">'Quezon City, PH'</span>;</p>
                    <p><span className="text-[#C8A96A]">public</span> $status = <span className="text-emerald-500">'Ready to Build'</span>;</p>
                  </div>
                  <div className="text-[#C8A96A]">&#125;</div>
                </div>

                {/* Micro Tech Icons */}
                <div className="pt-4 grid grid-cols-4 gap-2">
                  <div className="p-3 rounded-xl glass-card flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform text-[#C8A96A]">
                    <Globe className="w-5 h-5" />
                    <span className={`text-[10px] font-semibold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>WordPress</span>
                  </div>
                  <div className={`p-3 rounded-xl glass-card flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform ${
                    isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
                  }`}>
                    <Code className="w-5 h-5" />
                    <span className={`text-[10px] font-semibold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>PHP</span>
                  </div>
                  <div className="p-3 rounded-xl glass-card flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform text-[#C8A96A]">
                    <Database className="w-5 h-5" />
                    <span className={`text-[10px] font-semibold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>MySQL</span>
                  </div>
                  <div className="p-3 rounded-xl glass-card flex flex-col items-center justify-center gap-1 text-emerald-500 hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                    <span className={`text-[10px] font-semibold ${isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'}`}>Clean Code</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
