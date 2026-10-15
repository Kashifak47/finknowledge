import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const reviewsData = [
  {
    name: "Sunita Patel", category: "Housewife",
    text: "I had zero knowledge about money or shares. The teacher explained charts using simple household budget examples! Now I can read a basic chart safely.",
  },
  {
    name: "Rajesh Sharma", category: "Retiree",
    text: "I really appreciated their honest approach. They didn't make fake promises of doubling money overnight. They taught me how to protect my savings and stay safe from online scams.",
  },
  {
    name: "David K.", category: "Working Class",
    text: "I work a regular 9-to-5 job and wanted to understand what business news actually meant. Now I know how buying shares works and how brokers operate.",
  },
  {
    name: "Aisha Lin", category: "Student",
    text: "Very clear explanations on price highs and lows. This gave me great confidence as a college student wanting to start saving early.",
  },
  {
    name: "Vikram S.", category: "Working Class",
    text: "The part about avoiding beginner traps saved me from losing my hard-earned money in random text message groups. Highly recommended for complete beginners.",
  }
];

const duplicatedReviews = [...reviewsData, ...reviewsData];

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="reviews" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-800/60 overflow-hidden relative bg-gradient-to-b from-[#0b1320] to-[#0f172a]">
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
        <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/40 px-3 py-1 rounded-full border border-teal-500/20">
          Real Results
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-4 tracking-tight">What Our Attendees Say</h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-3">Press and hold any review to pause reading on mobile.</p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto overflow-hidden group">
        <div className="absolute top-0 left-0 h-full w-12 sm:w-24 lg:w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-12 sm:w-24 lg:w-32 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none"></div>

        <div 
          className={`flex w-max animate-marquee gap-4 sm:gap-6 px-4 hover:[animation-play-state:paused] ${isPaused ? '[animation-play-state:paused]' : ''}`}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {duplicatedReviews.map((r, idx) => (
            <div 
              key={idx} 
              className="w-[85vw] sm:w-[350px] bg-slate-900/80 backdrop-blur-md border border-slate-700/60 p-5 sm:p-7 rounded-2xl shrink-0 flex flex-col justify-between transition-all duration-300 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] relative"
            >
              <Quote className="absolute top-4 right-4 sm:top-5 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 text-slate-800 opacity-50" />
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-800 px-2 py-0.5 rounded-md">{r.category}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 z-10 relative">"{r.text}"</p>
              </div>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-xs sm:text-sm font-bold text-white shadow-lg border border-teal-400/20">
                  {r.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-200">{r.name}</h4>
                  <p className="text-[10px] sm:text-[11px] text-teal-400 font-medium">Verified Attendee</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}