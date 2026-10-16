import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
// import Footer from '../components/Footer';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1320] flex flex-col font-sans">
      {/* <nav className="border-b border-slate-800/80 bg-[#0b1320] sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-row items-center justify-between gap-2">
          <Link to="/" className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-medium text-slate-400 hover:text-white transition shrink-0">
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> 
            Return to Homepage
          </Link>
          <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest text-right shrink-0">
            TradeStart Academy
          </div>
        </div>
      </nav> */}

      <main className="flex-grow flex items-center justify-center py-16 px-4 animate-in fade-in duration-500">
        <div className="max-w-md mx-auto text-center">
          
          <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-800">
            <Compass className="w-8 h-8 text-teal-400" />
          </div>

          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Error 404</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">Page Not Found</h1>
          
          <p className="text-sm leading-relaxed text-slate-400 mb-8">
            Oops! It looks like you tried to visit a page that doesn't exist or has been moved. Let's get you back on track.
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-xl text-sm font-semibold transition shadow-lg shadow-teal-900/30"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Homepage
          </Link>

        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}