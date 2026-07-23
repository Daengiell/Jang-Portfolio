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
      isDarkMode ? 'bg-[#111111]' : 'bg-[#FFFFFF]'
    }`}>
      
      {/* Background Glow */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 rounded-full blur-3xl pointer-events-none opacity-10 ${
        isDarkMode ? 'bg-[#A41521]' : 'bg-[#E63946]'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-card border ${
            isDarkMode ? 'text-[#D51C29] border-[#4E494A]' : 'text-[#E63946] border-[#E8E8E8]'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
            isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'
          }`}>
            Let's Build Something <span className={isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}>Amazing Together</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'
          }`}>
            I'm currently available for freelance projects, full-time opportunities, and collaborations. Feel free to reach out via email or phone—I look forward to hearing from you.
          </p>
          <div className={`w-20 h-1.5 mx-auto rounded-full ${
            isDarkMode ? 'bg-[#A41521]' : 'bg-[#E63946]'
          }`} />
        </div>

        {/* 3 Premium Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Card 1: Phone */}
          <div className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
            isDarkMode
              ? 'bg-[#2A2324] border-[#4E494A] hover:border-[#D51C29]/40'
              : 'bg-[#FFFFFF] border-[#E8E8E8] hover:border-[#E63946]/40'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-3.5 rounded-2xl group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'bg-[#A41521]/15 text-[#D51C29]' : 'bg-[#FFD6DB] text-[#E63946]'
                }`}>
                  <Phone className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isDarkMode ? 'text-[#A35B62] hover:text-[#F4EDED] hover:bg-[#4E494A]' : 'text-[#5F6368] hover:text-[#1A1A1A] hover:bg-[#F8F8F8]'
                  }`}
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div>
                <p className={`text-xs uppercase tracking-wider font-bold ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>Phone</p>
                <a
                  href={`tel:${PERSONAL_INFO.phoneClean}`}
                  className={`text-xl font-extrabold block mt-1 transition-colors ${
                    isDarkMode ? 'text-[#F4EDED] hover:text-[#D51C29]' : 'text-[#1A1A1A] hover:text-[#E63946]'
                  }`}
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t ${isDarkMode ? 'border-[#4E494A]' : 'border-[#E8E8E8]'}`}>
              <a
                href={`tel:${PERSONAL_INFO.phoneClean}`}
                className={`text-xs font-bold hover:underline flex items-center gap-1.5 ${
                  isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
                }`}
              >
                Direct Call Available
                <PhoneCall className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
            isDarkMode
              ? 'bg-[#2A2324] border-[#4E494A] hover:border-[#D51C29]/40'
              : 'bg-[#FFFFFF] border-[#E8E8E8] hover:border-[#E63946]/40'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-3.5 rounded-2xl group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'bg-[#A41521]/15 text-[#D51C29]' : 'bg-[#FFD6DB] text-[#E63946]'
                }`}>
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isDarkMode ? 'text-[#A35B62] hover:text-[#F4EDED] hover:bg-[#4E494A]' : 'text-[#5F6368] hover:text-[#1A1A1A] hover:bg-[#F8F8F8]'
                  }`}
                  title="Copy Email Address"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div>
                <p className={`text-xs uppercase tracking-wider font-bold ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>Email</p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={handleEmailClick}
                  className={`text-lg sm:text-xl font-extrabold block text-left mt-1 transition-colors break-all cursor-pointer ${
                    isDarkMode ? 'text-[#F4EDED] hover:text-[#D51C29]' : 'text-[#1A1A1A] hover:text-[#E63946]'
                  }`}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t ${isDarkMode ? 'border-[#4E494A]' : 'border-[#E8E8E8]'}`}>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={handleEmailClick}
                className={`text-xs font-bold hover:underline flex items-center gap-1.5 cursor-pointer ${
                  isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'
                }`}
              >
                Send Direct Email
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className={`p-8 rounded-3xl glass-card border flex flex-col justify-between h-full group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
            isDarkMode
              ? 'bg-[#2A2324] border-[#4E494A] hover:border-[#D51C29]/40'
              : 'bg-[#FFFFFF] border-[#E8E8E8] hover:border-[#E63946]/40'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className={`p-3.5 rounded-2xl group-hover:scale-110 transition-transform ${
                  isDarkMode ? 'bg-[#A41521]/15 text-[#D51C29]' : 'bg-[#FFD6DB] text-[#E63946]'
                }`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  Primary Base
                </span>
              </div>

              <div>
                <p className={`text-xs uppercase tracking-wider font-bold ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>Location</p>
                <p className={`text-xl font-extrabold mt-1 ${
                  isDarkMode ? 'text-[#F4EDED]' : 'text-[#1A1A1A]'
                }`}>
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            <div className={`pt-6 mt-6 border-t ${isDarkMode ? 'border-[#4E494A]' : 'border-[#E8E8E8]'}`}>
              <span className={`text-xs font-medium ${isDarkMode ? 'text-[#A35B62]' : 'text-[#5F6368]'}`}>
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
            className={`flex-1 min-w-[200px] px-8 py-4 rounded-2xl font-bold text-sm text-white shadow-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer ${
              isDarkMode
                ? 'bg-[#A41521] hover:bg-[#D51C29] shadow-[#A41521]/25'
                : 'bg-[#E63946] hover:bg-[#C92A3C] shadow-[#E63946]/25'
            }`}
          >
            <Send className="w-4 h-4" />
            Send Email
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phoneClean}`}
            className={`flex-1 min-w-[200px] px-8 py-4 rounded-2xl font-bold text-sm border flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer ${
              isDarkMode
                ? 'bg-[#2A2324] border-[#4E494A] text-[#F4EDED] hover:bg-[#4E494A] shadow-lg'
                : 'bg-[#FFFFFF] border-[#E8E8E8] text-[#1A1A1A] hover:bg-[#F8F8F8] shadow-lg'
            }`}
          >
            <PhoneCall className={`w-4 h-4 ${isDarkMode ? 'text-[#D51C29]' : 'text-[#E63946]'}`} />
            Call Me
          </a>
        </div>

        {/* Copy Confirmation Toast */}
        {(copiedType || toastMessage) && (
          <div className={`fixed bottom-8 right-8 z-50 px-5 py-3 rounded-2xl text-white font-bold text-xs shadow-2xl flex items-center gap-2 animate-bounce ${
            isDarkMode ? 'bg-[#A41521]' : 'bg-[#E63946]'
          }`}>
            <Check className="w-4 h-4" />
            {toastMessage || `Copied ${copiedType === 'email' ? 'Email Address' : 'Phone Number'} to clipboard!`}
          </div>
        )}

      </div>
    </section>
  );
};
