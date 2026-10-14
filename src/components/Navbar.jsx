import React from 'react';
import { TrendingUp, Menu } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  return (
    <nav className="sticky top-0 z-40 bg-[#0b1320]/80 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-teal-500/20 p-2 rounded-lg border border-teal-500/40 text-teal-400 group-hover:bg-teal-500/30 transition">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-1">
              TradeStart<span className="text-teal-400">Academy</span>
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#curriculum" className="text-sm font-medium text-slate-300 hover:text-white transition">Curriculum</a>
          <a href="#reviews" className="text-sm font-medium text-slate-300 hover:text-white transition">Reviews</a>
          <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition">FAQ</a>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenModal}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-0.5"
        >
          Reserve Seat
        </button>
      </div>
    </nav>
  );
}