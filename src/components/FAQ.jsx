import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How does the 100% money-back refund work?", a: "If you attend the masterclass and feel it did not deliver on its promise, simply contact us within 7 days. We will process a full 100% refund straight back to your original payment method, no questions asked!" },
  { q: "Will this masterclass make me a profitable trader immediately?", a: "No, trading requires practice. This masterclass is designed to build your core foundation so you can practice safely without losing money due to basic mistakes." },
  { q: "I have zero knowledge in finance or coding. Can I learn?", a: "Absolutely! Over 70% of our attendees are beginners with zero background in finance. We avoid complex math and explain concepts with plain everyday analogies." },
  { q: "What is the difference between Online and In-Person formats?", a: "Online takes place via Zoom with live Q&A. In-Person takes place at our physical venue and includes physical workbooks. Both formats carry our 100% money-back guarantee." }
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