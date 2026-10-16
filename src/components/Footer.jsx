import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#080d16] py-10 sm:py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-sm sm:text-base font-bold text-white mb-2">TradeStart Academy</h4>
        <p className="text-[11px] sm:text-xs text-slate-400 max-w-md mx-auto mb-6 px-2 sm:px-0 leading-relaxed">
          Educational masterclass designed for general awareness and market literacy only. Not financial advice or stock tips.
        </p>

        {/* Official Platform Icons */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* YouTube */}
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-slate-800/80 hover:bg-red-600/20 text-slate-300 hover:text-red-400 border border-slate-700/80 rounded-xl transition" aria-label="YouTube">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" /></svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-slate-800/80 hover:bg-pink-600/20 text-slate-300 hover:text-pink-400 border border-slate-700/80 rounded-xl transition" aria-label="Instagram">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 4.9.1 1.3.1 1.6.1 4.9 0 3.2 0 3.6-.1 4.9-.2 3.3-1.7 4.8-5 5-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.9-.1-3.3-.2-4.8-1.7-5-5-.1-1.3-.1-1.6-.1-4.9 0-3.2 0-3.6.1-4.9.2-3.3 1.7-4.8 5-5 1.3-.1 1.6-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 2.7.3.3 2.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.2 4.3 2.6 6.7 6.9 6.9 1.3.1 1.7.1 5 .1s3.7 0 5-.1c4.3-.2 6.7-2.6 6.9-6.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-4.3-2.6-6.7-6.9-6.9-1.3-.1-1.7-.1-5-.1zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" /></svg>
          </a>

          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-slate-800/80 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-700/80 rounded-xl transition" aria-label="Facebook">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.3l-.5 3.5h-2.8v8.4C19.6 23.1 24 18.1 24 12.1z" /></svg>
          </a>
        </div>

        {/* Footer Navigation Links (Wraps gracefully on small mobile screens) */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-slate-400 mb-6 px-4">
          <Link to="/refund-policy" className="hover:text-emerald-400 transition">Refund Guarantee</Link>
          <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <a href="mailto:support@tradestartacademy.com" className="hover:text-white transition">Contact Support</a>
        </div>

        <p className="text-[10px] sm:text-[11px] text-slate-600">
          © {new Date().getFullYear()} TradeStart Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}