import React, { useState } from 'react';
import { Calendar, Video, MapPin, ShieldCheck, CheckCircle } from 'lucide-react';

export default function BookingCard({ onOpenModal }) {
  const [format, setFormat] = useState('online');

  return (
    <section className="max-w-md mx-auto px-4 py-8">
      <div className="bg-[#121c2e] border border-slate-700/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Choose Class Format</span>
          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-full">
            100% Refundable
          </span>
        </div>

        {/* Format Selectors */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <button
            onClick={() => setFormat('online')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold border transition ${
              format === 'online'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                : 'bg-slate-800/80 text-slate-300 border-slate-700'
            }`}
          >
            <Video className="w-4 h-4" /> Online Live
          </button>
          <button
            onClick={() => setFormat('inperson')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold border transition ${
              format === 'inperson'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                : 'bg-slate-800/80 text-slate-300 border-slate-700'
            }`}
          >
            <MapPin className="w-4 h-4" /> In-Person Venue
          </button>
        </div>

        {/* Class Details */}
        <div className="space-y-3 mb-6 text-sm text-slate-300">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
            <span><strong>Upcoming Date:</strong> Upcoming Weekend (10:00 AM IST)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Video className="w-4 h-4 text-cyan-400 shrink-0" />
            <span><strong>Platform:</strong> HD Zoom Live + Full Recorded Access</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t border-slate-800 pt-4 mb-6 flex items-end justify-between">
          <div>
            <span className="text-xs text-slate-400 block mb-0.5">Special Masterclass Fee</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white">₹399</span>
              <span className="text-sm text-slate-500 line-through">₹1,999</span>
            </div>
          </div>
          <span className="text-xs bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded">
            Refundable
          </span>
        </div>

        <button
          onClick={onOpenModal}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          Continue Booking (Zero Risk) →
        </button>

        <p className="text-[11px] text-center text-slate-400 mt-3 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Protected by our 100% No-Questions-Asked Refund Policy
        </p>
      </div>
    </section>
  );
}