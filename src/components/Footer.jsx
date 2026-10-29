import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#070b13] border-t border-slate-800/80 pt-10 sm:pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-6 sm:gap-10 md:gap-16 items-start">
        
        {/* Left Column: Brand, Tagline & Social Icons */}
        <div className="space-y-3 sm:space-y-4 text-left">
          <div className="inline-block pb-1 border-b-2 border-amber-400">
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm sm:text-xl font-extrabold text-white tracking-tight">FinKnowledge</h4>
              {/* <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 inline-block mb-1 shrink-0"></span> */}
            </div>
          </div>
          
          <p className="text-[11px] sm:text-sm text-[#CBD5E1] max-w-sm leading-relaxed">
            Where Market Curiosity Meets Financial Clarity.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-start gap-3 sm:gap-4 pt-1">
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#CBD5E1] hover:text-amber-300 transition-colors duration-200 p-1 -m-1" 
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 4.9.1 1.3.1 1.6.1 4.9 0 3.2 0 3.6-.1 4.9-.2 3.3-1.7 4.8-5 5-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.9-.1-3.3-.2-4.8-1.7-5-5-.1-1.3-.1-1.6-.1-4.9 0-3.2 0-3.6.1-4.9.2-3.3 1.7-4.8 5-5 1.3-.1 1.6-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 2.7.3.3 2.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.2 4.3 2.6 6.7 6.9 6.9 1.3.1 1.7.1 5 .1s3.7 0 5-.1c4.3-.2 6.7-2.6 6.9-6.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-4.3-2.6-6.7-6.9-6.9-1.3-.1-1.7-.1-5-.1zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#CBD5E1] hover:text-amber-300 transition-colors duration-200 p-1 -m-1" 
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.3l-.5 3.5h-2.8v8.4C19.6 23.1 24 18.1 24 12.1z" />
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#CBD5E1] hover:text-amber-300 transition-colors duration-200 p-1 -m-1" 
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Quick Links */}
        <div className="flex flex-col items-end text-right space-y-2.5 sm:space-y-3">
          <div className="inline-block pb-1 border-b-2 border-amber-400">
            <h5 className="text-xs sm:text-base font-bold text-white tracking-wider uppercase">Quick Links</h5>
          </div>
          <div className="flex flex-col space-y-2">
            <Link to="/refund-policy" className="text-[11px] sm:text-sm text-[#A8B3C7] hover:text-amber-300 transition-colors">Refund Policy</Link>
            <Link to="/terms" className="text-[11px] sm:text-sm text-[#A8B3C7] hover:text-amber-300 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-[11px] sm:text-sm text-[#A8B3C7] hover:text-amber-300 transition-colors">Privacy Policy</Link>
            <a href="mailto:support@finknowledge.in" className="text-[11px] sm:text-sm text-[#A8B3C7] hover:text-amber-300 transition-colors">Contact Support</a>
          </div>
        </div>

      </div>

      {/* Subtle Horizontal Divider */}
      <div className="max-w-6xl mx-auto my-6 sm:my-8 border-t border-[#1e293b]"></div>

      {/* Bottom Copyright Center */}
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[10px] sm:text-xs text-[#A8B3C7]">
          © 2026 FinKnowledge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}