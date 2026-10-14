import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#080d16] py-10 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-base font-bold text-white mb-2">TradeStart Academy</h4>
        <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
          Educational masterclass designed for general awareness and market literacy only. Not financial advice or stock tips.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
          <a href="#refund-details" className="hover:text-emerald-400">Refund Guarantee</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Contact Support</a>
        </div>

        <p className="text-[11px] text-slate-600 mt-6">
          © {new Date().getFullYear()} TradeStart Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}