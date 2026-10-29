import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { q: "How does the 100% money-back refund work?", a: "If you attend the class and feel it didn't give you value, just let us know within 7 days. We will return your full money straight back to your original payment account, no questions asked!" },
  { q: "Will this class make me a rich trader right away?", a: "No, learning takes time and practice. This session is built to give you strong basics so you can trade safely without losing money due to simple beginner mistakes." },
  { q: "I have zero knowledge about finance. Can I still learn?", a: "Definitely! Over 70% of our attendees have zero background in finance. We avoid heavy numbers and explain everything using simple everyday language." },
  { q: "What is the difference between Online and In-Person formats?", a: "The online class happens over live video with time for your questions. The in-person class happens at our physical training hall with printed workbooks. Both include our full 100% money-back guarantee." }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section id="faq" className="py-14 sm:py-20 px-3.5 sm:px-6 max-w-3xl mx-auto border-t border-slate-800/60 scroll-mt-20">
      <div className="text-center mb-8 sm:mb-14">
        <span className="text-[11px] sm:text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] inline-flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-amber-300" /> Got Questions?
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3.5 tracking-tight">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2.5 max-w-lg mx-auto leading-relaxed px-2">Everything you need to know about the masterclass, format and refund policy.</p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map((f, i) => {
          const isOpen = openIdx === i;
          return (
            <div 
              key={i} 
              className={`bg-[#121c2e] border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 shadow-xl ${
                isOpen ? 'border-amber-500/50 shadow-[0_4px_25px_rgba(245,158,11,0.12)]' : 'border-slate-700/80 hover:border-slate-600'
              }`}
            >
              <button 
                onClick={() => toggle(i)} 
                className="w-full text-left p-3.5 sm:p-5 flex justify-between items-center gap-3 sm:gap-4 cursor-pointer group active:bg-slate-800/50 transition-colors"
              >
                <span className={`text-xs sm:text-base font-bold transition-colors leading-snug ${
                  isOpen ? 'text-amber-300 group-hover:text-amber-200' : 'text-slate-100 group-hover:text-amber-300'
                }`}>
                  {f.q}
                </span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800/90 border border-slate-700 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 bg-amber-500/10 border-amber-500/40 text-amber-300' : 'text-slate-400 group-hover:border-slate-600'}`}>
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-3.5 sm:p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 mt-0.5">
                  {f.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
} 