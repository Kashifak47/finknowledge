import React from 'react';
import { ShieldCheck, ArrowRight, HeartHandshake, Zap, Flame } from 'lucide-react';

export default function FinalCTA({ onOpenModal }) {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-slate-800/60">
      <div className="bg-gradient-to-br from-[#121c2e] via-[#162238] to-[#121c2e] border border-amber-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center relative overflow-hidden shadow-2xl shadow-amber-500/5">
        
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-24 sm:h-32 bg-amber-500/10 blur-3xl pointer-events-none rounded-full"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest mb-4 shadow-sm">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Zero Pressure, Pure Learning
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-snug sm:leading-tight">
            Take Your First Step Into the Market <span className="text-amber-400 block sm:inline">With Complete Confidence</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
            Learn the stock market the simple way. Understand charts, make sense of investing and build confidence step by step.          </p>

          {/* Interactive Button Container with unified float animation */}
          <div className="relative z-30 flex flex-col items-center justify-center pt-2">
            <div className="relative w-full sm:w-auto max-w-[280px] sm:max-w-none mx-auto animate-[bounce_3s_infinite]">
              
              {/* Ultra-attractive vibrant top-right badge with fiery rotation and glow */}
              <div className="absolute -top-3.5 right-0 sm:-right-3 z-40 bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 text-white text-[9px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)] flex items-center gap-1.5 uppercase tracking-wider pointer-events-none transform rotate-3 scale-105">
                <Flame className="w-3.5 h-3.5 fill-white text-white shrink-0 animate-bounce" />
                <span>Few Seats Left</span>
              </div>

              {/* Redesigned Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof onOpenModal === 'function') {
                    onOpenModal();
                  } else {
                    console.error('onOpenModal prop is missing in FinalCTA!');
                  }
                }}
                className="w-full sm:w-auto relative group overflow-hidden bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold px-7 sm:px-10 py-4 rounded-xl text-center shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.75)] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2.5 text-xs sm:text-base cursor-pointer"
              >
                {/* Shimmer light pass effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out"></div>

                <Zap className="w-4 h-4 text-slate-950 shrink-0 fill-slate-950 relative z-10" />
                <span className="relative z-10">Save Your Free Seat</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-5 sm:mt-6 text-[10px] sm:text-xs text-slate-400 px-1 text-center whitespace-nowrap overflow-x-auto scrollbar-none">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
            <span>Protected by our 100% Easy Refund Policy</span>
          </div>
        </div>

      </div>
    </section>
  );
}