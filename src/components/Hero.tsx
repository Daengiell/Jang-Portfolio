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
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#A41521]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#5A121D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#D51C29]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status / Welcome Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide glass-card border shadow-sm ${
              isDarkMode
                ? 'border-[#4E494A] text-[#D51C29]'
                : 'border-[#E8E8E8] text-[#E63946]'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance & Full-time Roles
              <Sparkles className={`w-3.5 h-3.5 ml-1 ${
                isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
              }`} />
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'
              }`}>
                Hi, I'm{' '}
                <span className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Dynamic Job Titles */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-sm sm:text-base font-semibold">
                {PERSONAL_INFO.titles.map((title, index) => (
                  <React.Fragment key={title}>
                    <span className={`px-3 py-1 rounded-lg glass-card border font-medium ${
                      isDarkMode
                        ? 'border-[#4E494A] text-[#F4EDED]'
                        : 'border-[#E8E8E8] text-[#1A1A1A]'
                    }`}>
                      {title}
                    </span>
                    {index < PERSONAL_INFO.titles.length - 1 && (
                      <span className={isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}>•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Short Introduction */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'
            }`}>
              {PERSONAL_INFO.introduction}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className={`px-7 py-3.5 rounded-xl font-bold text-sm text-white hover:opacity-95 shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group cursor-pointer ${
                  isDarkMode
                    ? 'bg-[#A41521] hover:bg-[#D51C29] shadow-[#A41521]/20'
                    : 'bg-[#E63946] hover:bg-[#C92A3C] shadow-[#E63946]/20'
                }`}
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className={`px-7 py-3.5 rounded-xl font-bold text-sm border transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer ${
                  isDarkMode
                    ? 'bg-[#2A2324] border-[#4E494A] text-[#F4EDED] hover:bg-[#5A121D]/40 hover:border-[#D51C29]/40 shadow-md'
                    : 'bg-[#FFFFFF] border-[#E8E8E8] text-[#1A1A1A] hover:bg-[#F8F8F8] hover:border-[#E63946]/40 shadow-md'
                }`}
              >
                <Mail className={`w-4 h-4 ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`} />
                Contact Me
              </button>
            </div>

            {/* Quick Specs Bar */}
            <div className={`pt-6 grid grid-cols-3 gap-4 border-t ${
              isDarkMode ? 'border-[#4E494A]' : 'border-[#E8E8E8]'
            }`}>
              <div>
                <p className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`}>4+ Yrs</p>
                <p className={`text-xs ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>Experience</p>
              </div>
              <div>
                <p className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>8+ Live</p>
                <p className={`text-xs ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>WordPress Sites</p>
              </div>
              <div>
                <p className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`}>4+ Custom</p>
                <p className={`text-xs ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>PHP Systems</p>
              </div>
            </div>
          </div>

          {/* Visual Feature Area (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow frame */}
              <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-25 animate-pulse ${
                isDarkMode ? 'bg-[#A41521]' : 'bg-[#E63946]'
              }`} />

              {/* Main Visual Glassmorphism Box */}
              <div className={`relative p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6 backdrop-blur-2xl border transition-all duration-300 overflow-hidden ${
                isDarkMode
                  ? 'bg-[#2A2324]/50 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]'
                  : 'bg-white/50 border-white/80 shadow-[0_8px_32px_0_rgba(230,57,70,0.12)]'
              }`}>
                {/* Subtle top edge glare reflection for glass effect */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                {/* Code Header Bar */}
                <div className={`flex items-center justify-between pb-4 border-b ${
                  isDarkMode ? 'border-white/10' : 'border-black/5'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
                  </div>
                  <span className={`text-xs font-mono font-bold tracking-wide ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`}>developer.config.php</span>
                </div>

                {/* Developer Spec Snippet - Glass Panel */}
                <div className={`p-4 rounded-xl border backdrop-blur-md space-y-3 font-mono text-xs sm:text-sm ${
                  isDarkMode
                    ? 'bg-[#111111]/60 border-white/5 shadow-inner'
                    : 'bg-[#F8F8F8]/80 border-black/5 shadow-inner'
                }`}>
                  <div className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>
                    <span>class</span> <span className={isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}>FullStackDeveloper</span> &#123;
                  </div>
                  <div className={`pl-4 space-y-1 ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>
                    <p><span className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>public</span> $name = <span className="text-emerald-500">'Jhon Rey A. Ebro'</span>;</p>
                    <p><span className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>public</span> $core = [<span className="text-emerald-500">'WordPress'</span>, <span className="text-emerald-500">'PHP'</span>, <span className="text-emerald-500">'MySQL'</span>, <span className="text-emerald-500">'JS'</span>];</p>
                    <p><span className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>public</span> $location = <span className="text-emerald-500">'Quezon City, PH'</span>;</p>
                    <p><span className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>public</span> $status = <span className="text-emerald-500">'Ready to Build'</span>;</p>
                  </div>
                  <div className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>&#125;</div>
                </div>

                {/* Micro Tech Icons - Frosted Glass Badges */}
                <div className="pt-2 grid grid-cols-4 gap-2">
                  <div className={`p-3 rounded-xl border backdrop-blur-md flex flex-col items-center justify-center gap-1 hover:scale-105 transition-all cursor-default ${
                    isDarkMode
                      ? 'bg-white/[0.05] border-white/10 hover:bg-white/[0.1] hover:border-[#D51C29]/50 text-[#D51C29]'
                      : 'bg-white/70 border-white/90 hover:bg-white/90 hover:border-[#E63946]/50 shadow-sm text-[#E63946]'
                  }`}>
                    <Globe className="w-5 h-5" />
                    <span className={`text-[10px] font-bold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>WordPress</span>
                  </div>
                  <div className={`p-3 rounded-xl border backdrop-blur-md flex flex-col items-center justify-center gap-1 hover:scale-105 transition-all cursor-default ${
                    isDarkMode
                      ? 'bg-white/[0.05] border-white/10 hover:bg-white/[0.1] hover:border-[#D51C29]/50 text-[#F4EDED]'
                      : 'bg-white/70 border-white/90 hover:bg-white/90 hover:border-[#E63946]/50 shadow-sm text-[#1A1A1A]'
                  }`}>
                    <Code className="w-5 h-5" />
                    <span className={`text-[10px] font-bold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>PHP</span>
                  </div>
                  <div className={`p-3 rounded-xl border backdrop-blur-md flex flex-col items-center justify-center gap-1 hover:scale-105 transition-all cursor-default ${
                    isDarkMode
                      ? 'bg-white/[0.05] border-white/10 hover:bg-white/[0.1] hover:border-[#D51C29]/50 text-[#D51C29]'
                      : 'bg-white/70 border-white/90 hover:bg-white/90 hover:border-[#E63946]/50 shadow-sm text-[#E63946]'
                  }`}>
                    <Database className="w-5 h-5" />
                    <span className={`text-[10px] font-bold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>MySQL</span>
                  </div>
                  <div className={`p-3 rounded-xl border backdrop-blur-md flex flex-col items-center justify-center gap-1 hover:scale-105 transition-all cursor-default text-emerald-500 ${
                    isDarkMode
                      ? 'bg-white/[0.05] border-white/10 hover:bg-white/[0.1] hover:border-emerald-500/50'
                      : 'bg-white/70 border-white/90 hover:bg-white/90 hover:border-emerald-500/50 shadow-sm'
                  }`}>
                    <ShieldCheck className="w-5 h-5" />
                    <span className={`text-[10px] font-bold ${isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'}`}>Clean Code</span>
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
