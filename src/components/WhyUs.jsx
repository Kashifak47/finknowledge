import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/40 px-3 sm:px-4 py-1.5 rounded-full border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          The Smart Choice
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-4 sm:mt-5 tracking-tight">
          Why Choose FinKnowledge?
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto px-2">
          We keep things simple and honest, giving you the real basics you need without charging thousands of rupees.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10 relative items-stretch">
        
        {/* Floating 'VS' Badge */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-[#0c1322] border border-slate-700/80 rounded-full items-center justify-center z-10 text-slate-400 font-extrabold text-xs lg:text-sm shadow-xl">
          VS
        </div>

        {/* Other Expensive Courses */}
        <div className="bg-[#121c2e]/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-colors duration-300 hover:border-slate-600 shadow-lg">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-400 mb-6 sm:mb-8 text-center border-b border-slate-800 pb-4">
              Other Expensive Courses
            </h3>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-slate-400">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500/80 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Cost anywhere from ₹5,000 to ₹50,000+ just for basic lessons.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-slate-400">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500/80 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Recorded videos where nobody is there to answer your doubts live.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-slate-400">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500/80 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Use heavy technical terms that confuse and scare beginners.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-slate-400">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500/80 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Strict "No Refund" rules once you pay them.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FinKnowledge Masterclass */}
        <div className="bg-gradient-to-br from-[#121c2e] to-[#1a1c18] border border-amber-500/40 rounded-2xl p-6 sm:p-8 lg:p-10 relative shadow-[0_0_30px_rgba(245,158,11,0.1)] md:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] flex flex-col justify-between">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-yellow-400 text-slate-950 text-[9px] sm:text-[10px] lg:text-xs font-extrabold px-3 sm:px-4 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-widest shadow-md">
            Our Approach
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-6 sm:mb-8 text-center border-b border-slate-700/50 pb-4">
              FinKnowledge Masterclass
            </h3>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-slate-200">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Super affordable at just <strong className="text-white">Free</strong> (₹399 value).</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-slate-200">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Live class with a dedicated Q&A session to clear your doubts.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-slate-200">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Zero confusion. We explain everything using simple everyday examples.</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-slate-200">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Fully protected by our <strong className="text-emerald-400">100% Money-Back Guarantee</strong>.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}