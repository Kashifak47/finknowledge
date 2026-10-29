import React from 'react';
import { TrendingUp, Menu } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  return (
    <nav className="sticky top-0 z-40 bg-[#0c1322]/90 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-amber-500/10 p-2 rounded-lg border border-amber-500/30 text-amber-300 group-hover:bg-amber-500/20 transition">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1">
              Fin<span className="text-amber-300">Knowledge</span>
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
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          Reserve Seat
        </button>
      </div>
    </nav>
  );
}