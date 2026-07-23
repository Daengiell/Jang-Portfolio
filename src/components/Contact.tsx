import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, PhoneCall, Copy, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sendEmail } from '../utils/emailHandler';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    sendEmail('Inquiry for Jhon Rey A. Ebro', (msg) => {
      setToastMessage(msg);
      setTimeout(() => setToastMessage(null), 3500);
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card text-indigo-400 light:text-indigo-600 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Build Something <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Amazing Together</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            I'm currently available for freelance projects, full-time opportunities, and collaborations. Feel free to reach out via email or phone—I look forward to hearing from you.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* 3 Premium Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Card 1: Phone */}
          <div className={`p-8 rounded-3xl glass-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group ${
            isDarkMode ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/40' : 'bg-white/90 border-slate-200 hover:border-indigo-400'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Phone</p>
                <a
                  href={`tel:${PERSONAL_INFO.phoneClean}`}
                  className={`text-xl font-extrabold block mt-1 hover:text-indigo-400 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/60 light:border-slate-200">
              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="text-xs font-bold text-indigo-400 hover:underline flex items-center gap-1.5"
              >
                Direct Call Available
                <PhoneCall className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className={`p-8 rounded-3xl glass-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group ${
            isDarkMode ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/40' : 'bg-white/90 border-slate-200 hover:border-indigo-400'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Email</p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={handleEmailClick}
                  className={`text-lg sm:text-xl font-extrabold block text-left mt-1 hover:text-purple-400 transition-colors break-all cursor-pointer ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/60 light:border-slate-200">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={handleEmailClick}
                className="text-xs font-bold text-purple-400 hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                Send Direct Email
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className={`p-8 rounded-3xl glass-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group ${
            isDarkMode ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/40' : 'bg-white/90 border-slate-200 hover:border-indigo-400'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  Primary Base
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-slate-400">Location</p>
                <p className={`text-xl font-extrabold mt-1 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/60 light:border-slate-200">
              <span className="text-xs font-medium text-slate-400">
                Remote & On-Site Availability
              </span>
            </div>
          </div>

        </div>

        {/* Action Buttons: Send Email & Call Me */}
        <div className="flex flex-wrap items-center justify-center gap-6 max-w-md mx-auto">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={handleEmailClick}
            className="flex-1 min-w-[200px] px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Send Email
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phoneClean}`}
            className={`flex-1 min-w-[200px] px-8 py-4 rounded-2xl font-bold text-sm border flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer ${
              isDarkMode
                ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800 shadow-lg'
                : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-100 shadow-lg'
            }`}
          >
            <PhoneCall className="w-4 h-4 text-indigo-400" />
            Call Me
          </a>
        </div>

        {/* Copy Confirmation Toast */}
        {(copiedType || toastMessage) && (
          <div className="fixed bottom-8 right-8 z-50 px-5 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
            <Check className="w-4 h-4" />
            {toastMessage || `Copied ${copiedType === 'email' ? 'Email Address' : 'Phone Number'} to clipboard!`}
          </div>
        )}

      </div>
    </section>
  );
};
