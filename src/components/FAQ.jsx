import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How does the 100% money-back refund work?", a: "If you attend the class and feel it didn't give you value, just let us know within 7 days. We will return your full money straight back to your original payment account, no questions asked!" },
  { q: "Will this class make me a rich trader right away?", a: "No, learning takes time and practice. This session is built to give you strong basics so you can trade safely without losing money due to simple beginner mistakes." },
  { q: "I have zero knowledge about finance. Can I still learn?", a: "Definitely! Over 70% of our attendees have zero background in finance. We avoid heavy numbers and explain everything using simple everyday language." },
  { q: "What is the difference between Online and In-Person formats?", a: "The online class happens over live video with time for your questions. The in-person class happens at our physical training hall with printed workbooks. Both include our full 100% money-back guarantee." }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section id="faq" className="py-16 px-4 max-w-3xl mx-auto border-t border-slate-800/60 scroll-mt-20">
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50">Got Questions?</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="border border-slate-700/60 rounded-xl overflow-hidden bg-[#121c2e] transition-colors hover:border-slate-500/50">
            <button onClick={() => toggle(i)} className="w-full text-left p-5 flex justify-between items-center text-sm font-semibold text-slate-200">
              <span>{f.q}</span>
              <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openIdx === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-5 pt-0 text-sm text-slate-400 leading-relaxed">
                {f.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}