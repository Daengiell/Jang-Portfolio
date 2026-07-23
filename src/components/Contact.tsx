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
    <section id="contact" className={`py-24 relative overflow-hidden ${
      isDarkMode ? 'bg-[#0F0F10]' : 'bg-[#FCFBF8]'
    }`}>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 rounded-full blur-3xl pointer-events-none opacity-10 bg-[#C8A96A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#C8A96A] border-[#2B2B30]' : 'text-[#C8A96A] border-[#E6E2DA]'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
          }`}>
            Let's Build Something <span className="text-[#C8A96A]">Amazing Together</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-[#9A9A9A]' : 'text-[#666666]'
          }`}>
            I'm currently available for freelance projects, full-time opportunities, and collaborations. Feel free to reach out via email or phone—I look forward to hearing from you.
          </p>
          <div className="w-20 h-1.5 mx-auto rounded-full bg-[#C8A96A]" />
        </div>

        {/* 3 Premium Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Card 1: Phone */}
          <div className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
            isDarkMode
              ? 'bg-[#1A1A1D] border-[#2B2B30] hover:border-[#C8A96A]/40'
              : 'bg-[#F5F3EF] border-[#E6E2DA] hover:border-[#C8A96A]/40'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-3.5 rounded-2xl group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'bg-[#C8A96A]/15 text-[#C8A96A]' : 'bg-[#E8D9B5] text-[#2B2B2E]'
                }`}>
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isDarkMode ? 'text-[#9A9A9A] hover:text-[#F5F5F2] hover:bg-[#2B2B30]' : 'text-[#8E8E8E] hover:text-[#2B2B2E] hover:bg-[#FCFBF8]'
                  }`}
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div>
                <p className={`text-xs uppercase tracking-wider font-bold ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>Phone</p>
                <a
                  href={`tel:${PERSONAL_INFO.phoneClean}`}
                  className={`text-xl font-extrabold block mt-1 transition-colors ${
                    isDarkMode ? 'text-[#F5F5F2] hover:text-[#C8A96A]' : 'text-[#2B2B2E] hover:text-[#C8A96A]'
                  }`}
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t ${isDarkMode ? 'border-[#2B2B30]' : 'border-[#E6E2DA]'}`}>
              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className="text-xs font-bold hover:underline flex items-center gap-1.5 text-[#C8A96A]"
              >
                Direct Call Available
                <PhoneCall className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
            isDarkMode
              ? 'bg-[#1A1A1D] border-[#2B2B30] hover:border-[#C8A96A]/40'
              : 'bg-[#F5F3EF] border-[#E6E2DA] hover:border-[#C8A96A]/40'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-3.5 rounded-2xl group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'bg-[#C8A96A]/15 text-[#C8A96A]' : 'bg-[#E8D9B5] text-[#2B2B2E]'
                }`}>
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isDarkMode ? 'text-[#9A9A9A] hover:text-[#F5F5F2] hover:bg-[#2B2B30]' : 'text-[#8E8E8E] hover:text-[#2B2B2E] hover:bg-[#FCFBF8]'
                  }`}
                  title="Copy Email Address"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div>
                <p className={`text-xs uppercase tracking-wider font-bold ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>Email</p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={handleEmailClick}
                  className={`text-lg sm:text-xl font-extrabold block text-left mt-1 transition-colors break-all cursor-pointer ${
                    isDarkMode ? 'text-[#F5F5F2] hover:text-[#C8A96A]' : 'text-[#2B2B2E] hover:text-[#C8A96A]'
                  }`}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t ${isDarkMode ? 'border-[#2B2B30]' : 'border-[#E6E2DA]'}`}>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={handleEmailClick}
                className="text-xs font-bold hover:underline flex items-center gap-1.5 cursor-pointer text-[#C8A96A]"
              >
                Send Direct Email
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
            isDarkMode
              ? 'bg-[#1A1A1D] border-[#2B2B30] hover:border-[#C8A96A]/40'
              : 'bg-[#F5F3EF] border-[#E6E2DA] hover:border-[#C8A96A]/40'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-3.5 rounded-2xl group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'bg-[#C8A96A]/15 text-[#C8A96A]' : 'bg-[#E8D9B5] text-[#2B2B2E]'
                }`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  Primary Base
                </span>
              </div>

              <div>
                <p className={`text-xs uppercase tracking-wider font-bold ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>Location</p>
                <p className={`text-xl font-extrabold mt-1 ${
                  isDarkMode ? 'text-[#F5F5F2]' : 'text-[#2B2B2E]'
                }`}>
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t ${isDarkMode ? 'border-[#2B2B30]' : 'border-[#E6E2DA]'}`}>
              <span className={`text-xs font-medium ${isDarkMode ? 'text-[#9A9A9A]' : 'text-[#8E8E8E]'}`}>
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
            className="flex-1 min-w-[200px] px-8 py-4 rounded-2xl font-bold text-sm text-[#0F0F10] bg-[#C8A96A] hover:bg-[#E8D9B5] shadow-xl shadow-[#C8A96A]/25 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Send Email
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phoneClean}`}
            className={`flex-1 min-w-[200px] px-8 py-4 rounded-2xl font-bold text-sm border flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer ${
              isDarkMode
                ? 'bg-[#1A1A1D] border-[#2B2B30] text-[#F5F5F2] hover:bg-[#2B2B30] shadow-lg'
                : 'bg-[#F5F3EF] border-[#E6E2DA] text-[#2B2B2E] hover:bg-[#FCFBF8] shadow-lg'
            }`}
          >
            <PhoneCall className="w-4 h-4 text-[#C8A96A]" />
            Call Me
          </a>
        </div>

        {/* Copy Confirmation Toast */}
        {(copiedType || toastMessage) && (
          <div className="fixed bottom-8 right-8 z-50 px-5 py-3 rounded-2xl text-[#0F0F10] bg-[#C8A96A] font-bold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
            <Check className="w-4 h-4" />
            {toastMessage || `Copied ${copiedType === 'email' ? 'Email Address' : 'Phone Number'} to clipboard!`}
          </div>
        )}

      </div>
    </section>
  );
};
