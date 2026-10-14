import React from 'react';
import { Layers, ArrowUpDown, RefreshCw, Shield, PlayCircle, AlertTriangle } from 'lucide-react';

const modules = [
  {
    step: "1", icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />,
    title: "Support & Resistance",
    desc: "Learn the invisible floor and ceiling of stock prices. Understand why prices bounce at specific levels.",
    tag: "Core Chart Skill"
  },
  {
    step: "2", icon: <ArrowUpDown className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />,
    title: "Identifying Highs & Lows",
    desc: "Discover Higher-Highs and Lower-Lows without confusion. Know immediately if a stock is trending up or down.",
    tag: "Market Structure"
  },
  {
    step: "3", icon: <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
    title: "How Markets Really Move",
    desc: "Gain clarity on market cycles, supply/demand and why financial media causes retail mistakes.",
    tag: "Price Action"
  },
  {
    step: "4", icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
    title: "Brokerage Account Setup",
    desc: "Step-by-step walkthrough on choosing safe Indian brokers, completing KYC and demat basics.",
    tag: "Practical Execution"
  },
  {
    step: "5", icon: <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
    title: "Executing Your First Trade",
    desc: "Watch a live demo of placing Market Orders, Limit Orders and setting Stop-Loss protections.",
    tag: "Live Simulation"
  },
  {
    step: "6", icon: <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />,
    title: "Avoiding Beginner Scams",
    desc: "Protect yourself from fake Telegram tipsters, pump-and-dump groups and impulse trading.",
    tag: "Capital Protection"
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16 sm:scroll-mt-20">
      
      {/* Header Section */}
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-[10px] sm:text-xs font-bold text-cyan-400 tracking-wider uppercase bg-cyan-950/40 border border-cyan-800/40 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.1)]">
          Step-by-Step Curriculum
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-4 sm:mt-5 tracking-tight">
          What You Will Master
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed px-2">
          We cut out complicated Dalal Street jargon and teach you pure practical basics you can actually use the very next day.
        </p>
      </div>

      {/* Grid Layout - Gap 4 for mobile prevents excessive scrolling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {modules.map((m) => (
          <div 
            key={m.step} 
            className="bg-[#121c2e]/80 backdrop-blur-md border border-slate-700/50 p-5 sm:p-6 lg:p-8 rounded-2xl relative overflow-hidden flex flex-col h-full transition-all duration-300 hover:bg-[#162238] hover:border-cyan-500/50 hover:shadow-[0_10px_40px_rgba(6,182,212,0.1)] group transform hover:-translate-y-1"
          >
            {/* Background Watermark Number for Premium Feel */}
            <span className="absolute -bottom-4 -right-1 text-[80px] sm:text-[100px] font-black text-white/[0.02] group-hover:text-cyan-400/[0.04] transition-colors z-0 pointer-events-none select-none leading-none">
              {m.step}
            </span>

            {/* Content Foreground */}
            <div className="relative z-10 flex flex-col h-full">
              
              {/* App-Style Header (Icon left, text right) - looks great on mobile */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 sm:p-3.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-inner border border-slate-700/50 shrink-0 group-hover:border-slate-600 transition-colors">
                  {m.icon}
                </div>
                
                <div className="pt-0.5">
                  <span className="text-[9px] sm:text-[10px] font-bold text-teal-400 tracking-widest uppercase mb-1 sm:mb-1.5 block">
                    {m.tag}
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">
                    {m.title}
                  </h3>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-grow mt-1 sm:mt-2">
                {m.desc}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}