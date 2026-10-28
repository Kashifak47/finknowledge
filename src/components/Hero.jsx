import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, User, Briefcase, GraduationCap, Sparkles } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 px-4 sm:px-6 max-w-5xl mx-auto text-center md:text-left">
      <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6 justify-center md:justify-start text-slate-400">
        <span className="uppercase font-medium tracking-wider text-slate-500 text-[11px] w-full sm:w-auto mb-1 sm:mb-0 text-center md:text-left">Designed For:</span>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full sm:w-auto">
          <span className="bg-[#121824] px-3 py-1.5 rounded-lg border border-slate-800/80 flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300"><User className="w-3.5 h-3.5 text-amber-500" /> Housewife</span>
          <span className="bg-[#121824] px-3 py-1.5 rounded-lg border border-slate-800/80 flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300"><Briefcase className="w-3.5 h-3.5 text-amber-500" /> Working Class</span>
          <span className="bg-[#121824] px-3 py-1.5 rounded-lg border border-slate-800/80 flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300"><GraduationCap className="w-3.5 h-3.5 text-amber-500" /> Student</span>
        </div>
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] sm:leading-tight mb-5 sm:mb-6 max-w-4xl mx-auto md:mx-0">
        Master the Basics of Stock Markets <span className="text-amber-400">100% Risk-Free</span>
      </h1>

      <p className="text-slate-400 text-sm sm:text-lg leading-relaxed mb-7 sm:mb-8 max-w-3xl mx-auto md:mx-0">
        Never bought a share in your life? This live class makes reading price charts simple, explains how the stock market works in plain words and helps you use trading apps safely.
      </p>

      <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-center md:items-start max-w-md sm:max-w-none mx-auto md:mx-0">
        <div className="relative inline-block w-full sm:w-auto mt-3 sm:mt-0">
          {/* Enhanced premium limited-time badge with a rich, refined gold-to-amber gradient */}
          <div className="absolute -top-3.5 right-3 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-bold text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-lg border border-yellow-200/50 flex items-center gap-1 z-10">
            <Sparkles className="w-3 h-3 fill-slate-950 text-slate-950" /> Limited Time Offer
          </div>
          <button onClick={onOpenModal} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 sm:px-9 py-3.5 sm:py-4 rounded-xl text-center shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer">
            Claim Free Seat Now
          </button>
        </div>
        <a href="#curriculum" className="w-full sm:w-auto bg-[#121824] hover:bg-[#1a2332] text-slate-200 font-medium px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-center border border-slate-800 transition-all duration-200 flex items-center justify-center text-sm sm:text-base">
          Explore Curriculum
        </a>
      </div>
    </section>
  );
}