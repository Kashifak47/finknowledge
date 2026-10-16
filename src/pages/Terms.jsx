import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CreditCard, ShieldAlert, FileText } from 'lucide-react';
// import Footer from '../components/Footer';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1320] flex flex-col font-sans">
      <nav className="border-b border-slate-800/80 bg-[#0b1320] sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-row items-center justify-between gap-2">
          <Link to="/" className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-medium text-slate-400 hover:text-white transition shrink-0">
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> 
            Return to Homepage
          </Link>
          <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest text-right shrink-0">
            TradeStart Academy
          </div>
        </div>
      </nav>

      <main className="flex-grow py-12 px-4 animate-in fade-in duration-500">
        <div className="max-w-3xl mx-auto">
          
          <div className="mb-10 border-b border-slate-800 pb-8">
            <h1 className="text-3xl font-bold text-white mb-3">Terms of Service</h1>
            <p className="text-sm text-slate-400">Last Updated: October 2026</p>
          </div>

          <div className="space-y-10 text-slate-300">
            
            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <BookOpen className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">1. Welcome to Our Guidelines</h2>
                <p className="text-sm leading-relaxed mb-3">
                  By visiting TradeStart Academy and joining our live educational sessions, you agree to follow these simple, clear rules designed to keep our community safe and supportive.
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  These guidelines apply to all visitors, students and participants who register for our masterclass.
                </p>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <CreditCard className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">2. Masterclass & Registration Fee</h2>
                <p className="text-sm leading-relaxed mb-3">
                  We offer an interactive 3-hour live stock market masterclass tailored for beginners, priced at <strong>₹399</strong>. 
                </p>
                <p className="text-sm leading-relaxed">
                  Access links and joining instructions are sent to your registered email and WhatsApp immediately upon successful payment confirmation.
                </p>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <ShieldAlert className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">3. Important Learning Disclaimer</h2>
                <p className="text-sm leading-relaxed mb-3">
                  TradeStart Academy is strictly an educational learning platform. We teach stock market basics, terminology and market structure in zero-jargon language.
                </p>
                <div className="border-l-2 border-slate-700 pl-4 space-y-2">
                  <p className="text-sm text-slate-400">
                    <strong>Not Financial Advice:</strong> We are not SEBI-registered financial advisors. We do not provide specific stock buy/sell tips or personal portfolio management.
                  </p>
                  <p className="text-sm text-slate-400">
                    <strong>Your Responsibility:</strong> All market trading involves risk and students remain fully responsible for their own financial choices.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <FileText className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">4. Copyright & Content Use</h2>
                <p className="text-sm leading-relaxed mb-3">
                  All presentation slides, workbooks, video recordings and learning resources provided by TradeStart Academy are protected.
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  They are strictly for your personal learning and must not be copied, redistributed, recorded, or sold commercially.
                </p>
              </div>
            </section>

          </div>

        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}