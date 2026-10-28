import React, { useState } from 'react';
import { Star, StarHalf, ShieldCheck } from 'lucide-react';

const reviewsData = [
  {
    name: "Sunita Patel", category: "Housewife", rating: 5,
    text: "I had zero knowledge about money or shares. The teacher explained charts using simple household budget examples! Now I can read a basic chart safely.",
  },
  {
    name: "Rajesh Sharma", category: "Retiree", rating: 4.8,
    text: "I really appreciated their honest approach. They didn't make fake promises of doubling money overnight. They taught me how to protect my savings and stay safe from online scams.",
  },
  {
    name: "David K.", category: "Employee", rating: 4.6,
    text: "I work a regular 9-to-5 job and wanted to understand what business news actually meant. Now I know how buying shares works and how brokers operate.",
  },
  {
    name: "Aisha Lin", category: "Student", rating: 5,
    text: "Very clear explanations on price highs and lows. This gave me great confidence as a college student wanting to start saving early.",
  },
  {
    name: "Vikram S.", category: "Businessman", rating: 4.7,
    text: "The part about avoiding beginner traps saved me from losing my hard-earned money in random text message groups. Highly recommended for complete beginners.",
  }
];

const duplicatedReviews = [...reviewsData, ...reviewsData];

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="reviews" className="py-16 sm:py-20 px-3 sm:px-6 border-t border-slate-800/60 overflow-hidden w-full max-w-[100vw] relative bg-gradient-to-b from-[#0b1320] to-[#0f172a]">
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 px-4">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] inline-block">
          Real Results
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-4 tracking-tight">What Our Attendees Say</h2>
        
        {/* Mobile-only gentle guidance */}
        <p className="text-slate-400 text-xs mt-3 sm:hidden">Press and hold any review to pause reading.</p>
        
        {/* Desktop-only professional trust subtitle */}
        <p className="text-slate-400 text-sm mt-3 hidden sm:block">Trusted by students, working professionals and beginners across India.</p>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden group">
        <div className="absolute top-0 left-0 h-full w-10 sm:w-24 lg:w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-10 sm:w-24 lg:w-32 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none"></div>

        <div 
          className={`flex w-max animate-marquee gap-4 sm:gap-6 px-4 hover:[animation-play-state:paused] ${isPaused ? '[animation-play-state:paused]' : ''}`}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {duplicatedReviews.map((r, idx) => {
            const fullStars = Math.floor(r.rating);
            const hasHalfStar = r.rating % 1 !== 0;

            return (
              <div 
                key={idx} 
                className="w-[82vw] sm:w-[350px] md:w-[380px] bg-[#121c2e]/90 backdrop-blur-md border border-slate-700/80 p-4 sm:p-6 rounded-2xl shrink-0 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)] relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-2 sm:px-2.5 py-1 rounded-lg shrink-0">
                      <div className="flex text-amber-400">
                        {[...Array(fullStars)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                        ))}
                        {hasHalfStar && <StarHalf className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />}
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-amber-300 ml-1">{r.rating}</span>
                    </div>

                    <span className="text-[11px] sm:text-xs font-semibold text-slate-300 bg-slate-800/90 border border-slate-700 px-2.5 sm:px-3 py-1 rounded-lg shadow-sm truncate max-w-[130px] sm:max-w-none">
                      “{r.category}”
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-5 sm:mb-6 font-normal">
                    “{r.text}”
                  </p>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-3.5 mt-auto pt-3.5 sm:pt-4 border-t border-slate-800/80">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/30 border border-emerald-500/30 flex items-center justify-center text-xs font-bold text-emerald-300 shrink-0 shadow-inner">
                    {r.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
                      <span className="truncate">{r.name}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-emerald-400 font-medium">Verified Attendee</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}