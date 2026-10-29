import React from 'react';
import {
  Gift,
  GraduationCap,
  TrendingUp,
  Activity,
  Laptop,
  Lightbulb,
  Check,
  Flame,
  ArrowRight,
} from 'lucide-react';

/*
  ALL COLOURS LIVE HERE. If any shade looks different from your design,
  change just the value in this block and the whole hero updates.
*/
const palette = `
  .fk-hero {
    --bg: #060c19;
    --panel: #0a1224;
    --line: #1a2644;
    --green-bg: #082721;
    --green-line: #1b6b58;
    --teal: #2ee6b2;
    --yellow: #ffcf2e;
    --orange: #f5a31a;
    --ink: #0a0f1d;
    --muted: #8a9bc7;
    --pill-line: #263556;
    --old-price-bg: #252b37;
    --purple: #a78bfa;
    --blue: #3b9bff;
    --green: #22d3a0;
    --check: #22c55e;
    --red: #ef4444;
  }

  @keyframes shine-bounce {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }

  .animate-shine-bounce {
    animation: shine-bounce 5s ease-in-out infinite;
  }
`;

const features = [
  { icon: TrendingUp, label: 'Stock Market Basics', color: 'var(--green)' },
  { icon: Activity, label: 'Read Price Charts', color: 'var(--purple)' },
  { icon: Laptop, label: 'Use Trading Platforms', color: 'var(--blue)' },
  { icon: Lightbulb, label: 'Build Confidence', color: 'var(--yellow)' },
];

const trust = ['No Payment', 'No Hidden Charges', 'No Experience'];

// Background candlestick clusters
const G = '#16a34a';
const R = '#dc2626';
const leftCluster = [
  { top: 5, body: 14, bottom: 6, color: G },
  { top: 3, body: 18, bottom: 6, color: R },
  { top: 5, body: 10, bottom: 4, color: G },
  { top: 4, body: 14, bottom: 5, color: R },
];
const rightCluster = [
  { top: 4, body: 14, bottom: 6, color: R },
  { top: 5, body: 10, bottom: 5, color: G },
  { top: 3, body: 14, bottom: 6, color: R },
  { top: 4, body: 10, bottom: 5, color: G },
];

function CandleCluster({ items, className }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 flex items-end gap-1 opacity-25 blur-[1px] scale-75 ${className}`}
    >
      {items.map((c, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="w-px" style={{ height: c.top, background: c.color }} />
          <span className="w-1.5 rounded-[2px]" style={{ height: c.body, background: c.color }} />
          <span className="w-px" style={{ height: c.bottom, background: c.color }} />
        </div>
      ))}
    </div>
  );
}

export default function Hero({ onOpenModal }) {
  return (
    <section
      className="fk-hero relative overflow-hidden px-2 min-[340px]:px-3 sm:px-6 pt-2 sm:pt-4 pb-4 sm:pb-8 w-full box-border"
      style={{ background: 'var(--bg)' }}
    >
      <style>{palette}</style>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center w-full">

        {/* Free offer banner */}
        <div
          className="relative w-full rounded-xl border px-3 py-2.5 sm:px-5 sm:py-3.5 shadow-[0_0_20px_rgba(46,230,178,0.12)] mt-0.5 overflow-hidden transition-all duration-300 hover:border-emerald-400 box-border"
          style={{ background: 'var(--green-bg)', borderColor: 'var(--green-line)' }}
        >
          <div className="flex items-center gap-2 sm:gap-4 text-left relative z-10">
            <div
              className="flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 shadow-inner"
              style={{ color: 'var(--teal)' }}
            >
              <Gift className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} />
            </div>
            <div className="min-w-0 flex-1">
              <p
                className="text-xs sm:text-xl font-extrabold leading-tight tracking-wide"
                style={{ color: 'var(--teal)' }}
              >
                100% FREE{' '}
                <span className="block min-[340px]:inline text-[12px] sm:text-sm font-semibold text-white">
                  — No Payment Required
                </span>
              </p>
              <p className="mt-0.5 text-[11px] sm:text-xs leading-snug text-slate-300">
                Reserve your seat and attend the live masterclass at absolutely no cost.
              </p>
            </div>
            <span
              className="hidden sm:block shrink-0 -rotate-6 text-xs font-semibold"
              style={{
                color: 'var(--teal)',
                fontFamily: '"Comic Sans MS", "Segoe Script", cursive',
              }}
            >
              Limited
              <br />
              Seats!
            </span>
          </div>
          {/* Slower continuous bouncing shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine-bounce pointer-events-none" />
        </div>

        {/* Pill + heading wrapper */}
        <div className="relative isolate flex w-full flex-col items-center">
          <CandleCluster items={leftCluster} className="left-0 -bottom-2 sm:-bottom-3" />
          <CandleCluster items={rightCluster} className="right-0 bottom-1 sm:bottom-2" />

          {/* Eyebrow pill */}
          <div
            className="mt-2.5 sm:mt-3.5 inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[8.5px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 shadow-inner"
            style={{ background: 'var(--panel)', borderColor: 'var(--pill-line)' }}
          >
            <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-teal-400" />
            Live Financial Markets
          </div>

          {/* Heading */}
          <h1 className="mt-2 sm:mt-3 font-black tracking-tight text-white leading-none text-2xl min-[340px]:text-3xl sm:text-5xl md:text-6xl drop-shadow-md">
            Masterclass
          </h1>
        </div>
        <p className="mt-1 sm:mt-2 font-extrabold text-white leading-tight text-sm min-[340px]:text-base sm:text-2xl md:text-3xl">
          Learn the Basics of <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">Stock Markets</span>
        </p>

        {/* Price strip */}
        <div className="mt-2.5 sm:mt-4 flex items-center justify-center w-full">
          <div className="relative flex items-center scale-[0.84] min-[350px]:scale-[0.9] sm:scale-100">
            <span
              className="relative -skew-x-6 rounded-l-lg py-1.5 pl-2.5 pr-4 sm:py-2.5 sm:pl-4 sm:pr-7 text-base sm:text-2xl font-bold text-slate-300 shadow-inner"
              style={{ background: 'var(--old-price-bg)' }}
            >
              <span className="inline-block skew-x-6">₹399</span>
              <span
                className="absolute left-1.5 right-2.5 top-1/2 h-[2px] -rotate-12 rounded bg-rose-500 shadow-sm"
              />
            </span>
            <div
              className="-ml-2.5 flex items-center gap-2 sm:gap-3 -skew-x-6 rounded-lg px-3 py-1 sm:px-5 sm:py-2 shadow-[0_0_15px_rgba(255,207,46,0.18)] border border-yellow-200/30"
              style={{ background: 'var(--yellow)' }}
            >
              <span
                className="skew-x-6 text-xl sm:text-4xl font-black leading-none drop-shadow-sm"
                style={{ color: 'var(--ink)' }}
              >
                ₹0
              </span>
              <span className="h-5 sm:h-8 w-px bg-slate-900/30" />
              <span className="skew-x-6 text-left leading-tight" style={{ color: 'var(--ink)' }}>
                <span className="block text-base sm:text-2xl font-black tracking-tight">FREE</span>
                <span className="block text-[6px] sm:text-[9px] font-extrabold tracking-wider uppercase opacity-90">
                  For a limited time
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Feature icons */}
        <ul className="mt-3 sm:mt-5 grid w-full grid-cols-4 gap-1 sm:gap-3">
          {features.map(({ icon: Icon, label, color }, i) => (
            <li
              key={label}
              className="flex flex-col items-center gap-1 p-1 sm:px-2 sm:py-3 rounded-xl bg-[#0a1224]/60 border border-[#1a2644]/80 shadow-sm hover:border-slate-700 transition sm:border-l"
              style={{ borderColor: i === 0 ? undefined : 'var(--line)' }}
            >
              <div className="p-1 sm:p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <Icon className="h-3.5 w-3.5 min-[340px]:h-4 min-[340px]:w-4 sm:h-6 sm:w-6" style={{ color }} strokeWidth={2} />
              </div>
              <span className="text-[6px] min-[340px]:text-[7px] min-[380px]:text-[8px] sm:text-xs font-bold text-slate-200 leading-tight text-center tracking-tighter sm:tracking-normal">
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* Description */}
        <p
          className="mt-3 sm:mt-5 max-w-xl text-[14px] sm:text-sm leading-relaxed px-1 sm:px-2 font-normal"
          style={{ color: 'var(--muted)' }}
        >
          A beginner-friendly live masterclass designed to help you understand how the stock
          market works, read basic price charts and use trading platforms with confidence.
        </p>

        {/* Trust row */}
        <ul
          className="mt-3 sm:mt-5 flex w-full flex-row items-stretch rounded-xl border shadow-inner overflow-hidden"
          style={{ background: 'var(--panel)', borderColor: 'var(--line)' }}
        >
          {trust.map((t) => (
            <li
              key={t}
              className="flex flex-1 items-center justify-center gap-1 sm:gap-2 px-0.5 sm:px-3 py-2 text-[7.5px] min-[340px]:text-[9px] sm:text-sm font-semibold text-slate-100 border-l first:border-0 whitespace-nowrap"
              style={{ borderColor: 'var(--line)' }}
            >
              <span
                className="flex h-3 w-3 sm:h-4 sm:w-4 shrink-0 items-center justify-center rounded-full shadow-sm"
                style={{ background: 'var(--check)' }}
              >
                <Check className="h-2 w-2 sm:h-3 sm:w-3" style={{ color: '#06210f' }} strokeWidth={3.5} />
              </span>
              <span className="truncate">{t}</span>
            </li>
          ))}
        </ul>

        {/* Limited seats badge with shining effect */}
        <div
          className="mt-3 sm:mt-5 -rotate-1 rounded-lg px-3.5 py-1 sm:px-5 sm:py-1.5 shadow-[0_0_15px_rgba(255,207,46,0.25)] relative overflow-hidden border border-yellow-200/40"
          style={{ background: 'var(--yellow)' }}
        >
          <span
            className="flex items-center gap-1.5 text-[11px] sm:text-sm font-black uppercase tracking-wider relative z-10"
            style={{ color: 'var(--ink)' }}
          >
            <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-bounce" style={{ color: 'var(--red)', fill: '#f97316' }} />
            Limited Free Seats
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine-bounce pointer-events-none" />
        </div>

        {/* CTAs */}
        <div className="mt-3 sm:mt-4 flex w-full max-w-md flex-col items-center gap-3">
          <button
            onClick={onOpenModal}
            className="group relative overflow-hidden flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-lg font-black uppercase shadow-[0_0_20px_rgba(245,163,26,0.3)] transition-all duration-200 hover:brightness-110 hover:scale-[1.01] active:scale-[0.98] border border-yellow-200/40 box-border"
            style={{
              color: 'var(--ink)',
              background: 'linear-gradient(to bottom, var(--yellow), var(--orange))',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              I Want My Free Seat
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-1.5" />
            </span>
            {/* Slower continuous bouncing shine effect for the button */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine-bounce pointer-events-none" />
          </button>
          <p className="text-[10px] sm:text-xs font-medium" style={{ color: 'var(--muted)' }}>
            Fill the form to reserve your seat.
          </p>

          <a
            href="#curriculum"
            className="flex w-full items-center justify-between rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:brightness-125 hover:border-slate-600 shadow-md box-border"
            style={{ background: 'var(--panel)', borderColor: 'var(--line)' }}
          >
            <span className="flex flex-1 items-center justify-center gap-2">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
              Explore Curriculum
            </span>
            <ArrowRight className="h-4 w-4 text-slate-300" />
          </a>
        </div>
      </div>
    </section>
  );
}