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
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy (8 Cols on large screens) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status / Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide glass-card border border-indigo-500/30 text-indigo-400 light:text-indigo-600 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Freelance & Full-time Roles
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 ml-1" />
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Dynamic Job Titles */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-sm sm:text-base font-semibold">
                {PERSONAL_INFO.titles.map((title, index) => (
                  <React.Fragment key={title}>
                    <span className="px-3 py-1 rounded-lg glass-card border border-slate-700/50 light:border-slate-300 text-indigo-300 light:text-indigo-700 font-medium">
                      {title}
                    </span>
                    {index < PERSONAL_INFO.titles.length - 1 && (
                      <span className="text-slate-600 dark:text-slate-600">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Short Introduction */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              isDarkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {PERSONAL_INFO.introduction}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className={`px-7 py-3.5 rounded-xl font-bold text-sm border transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 shadow-md'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-md'
                }`}
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                Contact Me
              </button>
            </div>

            {/* Quick Specs Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/60 light:border-slate-200">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-indigo-400">4+ Yrs</p>
                <p className="text-xs text-slate-400 light:text-slate-600">Experience</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-purple-400">8+ Live</p>
                <p className="text-xs text-slate-400 light:text-slate-600">WordPress Sites</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-pink-400">4+ Custom</p>
                <p className="text-xs text-slate-400 light:text-slate-600">PHP Systems</p>
              </div>
            </div>
          </div>

          {/* Interactive Visual Glass Feature Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse" />

              {/* Main Visual Glassmorphism Box */}
              <div className={`relative p-6 sm:p-8 rounded-2xl glass-card shadow-2xl space-y-6 ${
                isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'
              }`}>
                {/* Code Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">developer.config.php</span>
                </div>

                {/* Developer Spec Snippet */}
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="text-indigo-400">
                    <span className="text-purple-400">class</span> <span className="text-amber-300">FullStackDeveloper</span> &#123;
                  </div>
                  <div className="pl-4 space-y-1 text-slate-300 light:text-slate-700">
                    <p><span className="text-indigo-400">public</span> $name = <span className="text-emerald-400">'Jhon Rey A. Ebro'</span>;</p>
                    <p><span className="text-indigo-400">public</span> $core = [<span className="text-emerald-400">'WordPress'</span>, <span className="text-emerald-400">'PHP'</span>, <span className="text-emerald-400">'MySQL'</span>, <span className="text-emerald-400">'JS'</span>];</p>
                    <p><span className="text-indigo-400">public</span> $location = <span className="text-emerald-400">'Quezon City, PH'</span>;</p>
                    <p><span className="text-indigo-400">public</span> $status = <span className="text-emerald-400">'Ready to Build'</span>;</p>
                  </div>
                  <div className="text-indigo-400">&#125;</div>
                </div>

                {/* Micro Tech Icons */}
                <div className="pt-4 grid grid-cols-4 gap-2">
                  <div className="p-3 rounded-xl glass-card flex flex-col items-center justify-center gap-1 text-indigo-400 hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5" />
                    <span className="text-[10px] font-semibold">WordPress</span>
                  </div>
                  <div className="p-3 rounded-xl glass-card flex flex-col items-center justify-center gap-1 text-purple-400 hover:scale-105 transition-transform">
                    <Code className="w-5 h-5" />
                    <span className="text-[10px] font-semibold">PHP</span>
                  </div>
                  <div className="p-3 rounded-xl glass-card flex flex-col items-center justify-center gap-1 text-blue-400 hover:scale-105 transition-transform">
                    <Database className="w-5 h-5" />
                    <span className="text-[10px] font-semibold">MySQL</span>
                  </div>
                  <div className="p-3 rounded-xl glass-card flex flex-col items-center justify-center gap-1 text-emerald-400 hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-[10px] font-semibold">Clean Code</span>
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
