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
          <Link to="/" className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-slate-400 hover:text-white transition shrink-0">
            <ArrowLeft className="w-4 h-4 shrink-0" /> 
            Return to Homepage
          </Link>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest text-right shrink-0">
            FinKnowledge
          </div>
        </div>
      </nav>

      <main className="flex-grow py-12 px-4 md:px-6 animate-in fade-in duration-500">
        <div className="max-w-3xl mx-auto">
          
          <div className="mb-10 border-b border-slate-800 pb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Terms of Service</h1>
            <p className="text-xs md:text-sm text-slate-400">Last Updated: October 2026</p>
          </div>

          <div className="space-y-10 text-slate-300">
            
            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">1. Welcome to Our Guidelines</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  By visiting FinKnowledge and joining our live educational sessions, you agree to follow these simple, clear rules designed to keep our community safe and supportive.
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                  These guidelines apply to all visitors, students and participants who register for our masterclass.
                </p>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <CreditCard className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">2. Masterclass & Registration Options</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  We offer an online masterclass that is currently <span className="text-amber-400 font-semibold">free for a limited time</span> (standard valuation ₹399), as well as an <span className="text-amber-400 font-semibold">In-Person Masterclass</span> priced at <strong className="text-amber-400">₹1999</strong>. 
                </p>
                <p className="text-xs md:text-sm leading-relaxed">
                  Access links, joining instructions or seat confirmations are sent to your registered email and WhatsApp immediately upon successful registration or payment confirmation.
                </p>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">3. Important Learning Disclaimer</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  FinKnowledge is strictly an educational learning platform. We teach stock market basics, key terms and how the market works in simple language, without complicated words.
                </p>
                <div className="border-l-2 border-amber-500/40 pl-4 space-y-2">
                  <p className="text-xs md:text-sm text-slate-400">
                    <strong className="text-slate-200">Not Financial Advice:</strong> We are not SEBI-registered financial advisors. We do not provide specific stock buy/sell tips or personal portfolio management.
                  </p>
                  <p className="text-xs md:text-sm text-slate-400">
                    <strong className="text-slate-200">Your Responsibility:</strong> All market trading involves risk and students remain fully responsible for their own financial choices.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <FileText className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">4. Copyright & Content Use</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  All presentation slides, workbooks, video recordings and learning resources provided by FinKnowledge are protected.
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                  They are strictly for your personal learning and must not be copied, redistributed, recorded or sold commercially.
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