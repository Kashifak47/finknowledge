import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, User, Briefcase, GraduationCap } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="pt-8 pb-12 px-4 max-w-4xl mx-auto text-center md:text-left">
      {/* Mobile Responsive Banner */}
      <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-3 shadow-lg shadow-emerald-900/20">
        <div className="flex items-start sm:items-center gap-3 text-left">
          <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-sm text-slate-200">
            <span className="font-bold text-emerald-400 block sm:inline">100% Money-Back Promise:</span> If you feel it wasn't worth your time, get a full refund — no questions asked!
          </p>
        </div>
        {/* Redirects to the new page */}
        <Link to="/refund-policy" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 hover:underline shrink-0 whitespace-nowrap self-start sm:self-auto ml-9 sm:ml-0">
          LEARN MORE →
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6 justify-center md:justify-start text-slate-300">
        <span className="uppercase font-bold tracking-wider text-slate-400 text-[11px] w-full sm:w-auto mb-1 sm:mb-0">Designed For:</span>
        <span className="bg-slate-800/80 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 text-[11px] sm:text-xs"><User className="w-3.5 h-3.5 text-cyan-400" /> Housewife</span>
        <span className="bg-slate-800/80 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 text-[11px] sm:text-xs"><Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Working Class</span>
        <span className="bg-slate-800/80 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 text-[11px] sm:text-xs"><GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> Student</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
        Master the Basics of Stock Markets <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">100% Risk-Free</span>
      </h1>

      <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
        Never bought a share in your life? This live class makes reading price charts simple, explains how the stock market works in plain words and helps you use trading apps safely.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button onClick={onOpenModal} className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-center shadow-[0_0_20px_rgba(16,185,129,0.3)] transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
          Reserve Risk-Free Seat (₹399)
        </button>
        <a href="#curriculum" className="bg-slate-800/80 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl text-center border border-slate-600 transition flex items-center justify-center">
          Explore Curriculum
        </a>
      </div>
    </section>
  );
}