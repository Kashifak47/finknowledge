import React, { useState } from 'react';
import { Calendar, Video, MapPin, ShieldCheck, Flame } from 'lucide-react';

export default function BookingCard({ onOpenModal }) {
  const [format, setFormat] = useState('online');

  return (
    <section className="w-full max-w-md mx-auto px-3 sm:px-4 py-6 sm:py-8 border-t border-slate-800/60">
      <div className="bg-[#121c2e] border border-slate-700/80 rounded-2xl p-5 sm:p-6 md:p-7 shadow-2xl relative overflow-hidden transition-all duration-300">
        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
          <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Choose Class Format</span>
          {format === 'online' ? (
            <span className="text-[11px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2.5 py-1 rounded-full flex items-center gap-1.5 shrink-0">
              <Flame className="w-3 h-3 fill-amber-300 shrink-0" /> Limited Seats Left
            </span>
          ) : (
            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-full shrink-0">
              100% Refundable
            </span>
          )}
        </div>

        {/* Format Selectors */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
          <button
            onClick={() => setFormat('online')}
            className={`flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
              format === 'online'
                ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <Video className="w-4 h-4 shrink-0" /> Online Live
          </button>
          <button
            onClick={() => setFormat('inperson')}
            className={`flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
              format === 'inperson'
                ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <MapPin className="w-4 h-4 shrink-0" /> In-Person Venue
          </button>
        </div>

        {/* Class Details */}
        <div className="space-y-3.5 mb-6 text-xs sm:text-sm text-slate-300 bg-[#0b1320]/60 p-4 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-amber-300 shrink-0" />
            <span className="leading-snug">
              <strong className="text-white font-semibold">Upcoming Date:</strong> {format === 'online' ? 'Upcoming Weekend' : 'Soon'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {format === 'online' ? (
              <Video className="w-4 h-4 text-amber-300 shrink-0" />
            ) : (
              <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
            )}
            <span className="leading-snug">
              <strong className="text-white font-semibold">Platform:</strong> {format === 'online' ? 'HD Zoom Live + Full Recorded Access' : 'Offline Venue (Bengaluru)'}
            </span>
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t border-slate-800/80 pt-4 mb-6 flex items-end justify-between gap-3">
          <div>
            <span className="text-[11px] sm:text-xs text-slate-400 block mb-0.5">Special Masterclass Fee</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {format === 'online' ? 'Free' : '₹1,999'}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 line-through">
                {format === 'online' ? '₹399' : '₹3,999'}
              </span>
            </div>
          </div>
          {format === 'online' ? (
            <span className="text-[11px] bg-amber-950/70 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-lg flex items-center gap-1 shrink-0">
              <Flame className="w-3 h-3 fill-amber-300 shrink-0" /> Filling Fast
            </span>
          ) : (
            <span className="text-[11px] bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-lg shrink-0">
              Refundable
            </span>
          )}
        </div>

        {format === 'inperson' ? (
          <button
            disabled
            className="w-full bg-slate-800/90 text-slate-400 font-bold py-3.5 px-4 rounded-xl transition text-xs sm:text-sm cursor-not-allowed border border-slate-700/80 text-center shadow-inner"
          >
            In-Person Seat is Not Available
          </button>
        ) : (
          <button
            onClick={onOpenModal}
            className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold py-3.5 px-4 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md cursor-pointer"
          >
            Continue Booking (Zero Risk) →
          </button>
        )}

        <p className="text-[10px] sm:text-[11px] text-center text-slate-400 mt-4 flex items-center justify-center gap-1.5 leading-relaxed">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Protected by our 100% Easy Refund Policy</span>
        </p>
      </div>
    </section>
  );
}