import React from 'react';
import { Users, Star, Award, ShieldCheck } from 'lucide-react';

export default function StatsBanner() {
  return (
    <div className="border-y border-slate-800/80 bg-gradient-to-r from-[#0f172a] via-[#121c2e] to-[#0f172a] py-6">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center justify-center">
          <Users className="w-6 h-6 text-teal-400 mb-2" />
          <h4 className="text-xl font-extrabold text-white">5,000+</h4>
          <p className="text-xs text-slate-400 font-medium">Students Trained</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Star className="w-6 h-6 text-amber-400 mb-2" />
          <h4 className="text-xl font-extrabold text-white">4.9/5</h4>
          <p className="text-xs text-slate-400 font-medium">Average Rating</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
          <h4 className="text-xl font-extrabold text-white">100%</h4>
          <p className="text-xs text-slate-400 font-medium">Refund Guarantee</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Award className="w-6 h-6 text-cyan-400 mb-2" />
          <h4 className="text-xl font-extrabold text-white">Zero</h4>
          <p className="text-xs text-slate-400 font-medium">Jargon Promised</p>
        </div>
      </div>
    </div>
  );
}