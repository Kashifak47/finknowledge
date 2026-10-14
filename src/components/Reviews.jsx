import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const reviewsData = [
  {
    name: "Sunita Patel", category: "Housewife",
    text: "I had zero financial knowledge. The mentor explained support and resistance using household budget examples! Now I can read a basic chart safely.",
  },
  {
    name: "Rajesh Sharma", category: "Retiree",
    text: "Appreciated their honest disclaimer. They didn't promise double money overnight. They taught me risk control and how not to fall for internet tips.",
  },
  {
    name: "David K.", category: "Working Class",
    text: "I work 9-to-5 and wanted to understand what stock news really meant. Now I know how order execution works and brokers operate.",
  },
  {
    name: "Aisha Lin", category: "Student",
    text: "Very clear explanations on Highs & Lows. Great foundational knowledge for college students wanting to start early with small savings.",
  },
  {
    name: "Vikram S.", category: "Working Class",
    text: "The module on avoiding beginner traps saved me from losing my capital in fake Telegram groups. Highly recommend this for absolute beginners.",
  }
];

const duplicatedReviews = [...reviewsData, ...reviewsData];

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="reviews" className="py-20 px-4 border-t border-slate-800/60 overflow-hidden relative bg-gradient-to-b from-[#0b1320] to-[#0f172a]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-950/40 px-3 py-1 rounded-full border border-teal-500/20 shadow-[0_0_10px_rgba(20,184,166,0.1)]">
          Real Results
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">What Our Attendees Say</h2>
        <p className="text-slate-400 text-sm mt-3">Press and hold any review to pause reading on mobile.</p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto overflow-hidden group">
        {/* Gradient Fades for Smooth Entry/Exit */}
        <div className="absolute top-0 left-0 h-full w-16 sm:w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-16 sm:w-32 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track with Touch Support */}
        <div 
          className={`flex w-max animate-marquee gap-5 sm:gap-6 px-4 hover:[animation-play-state:paused] ${isPaused ? '[animation-play-state:paused]' : ''}`}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {duplicatedReviews.map((r, idx) => (
            <div 
              key={idx} 
              className="w-[300px] sm:w-[350px] bg-slate-900/80 backdrop-blur-md border border-slate-700/60 p-7 rounded-2xl shrink-0 flex flex-col justify-between transition-all duration-300 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-slate-800 opacity-50" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-800 px-2 py-0.5 rounded-md">{r.category}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 z-10 relative">"{r.text}"</p>
              </div>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-sm font-bold text-white shadow-lg border border-teal-400/20">
                  {r.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">{r.name}</h4>
                  <p className="text-[11px] text-teal-400 font-medium">Verified Attendee</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}