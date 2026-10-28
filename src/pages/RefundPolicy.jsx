import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Clock, Mail, AlertCircle } from 'lucide-react';
// import Footer from '../components/Footer';

export default function RefundPolicy() {
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Refund Policy</h1>
            <p className="text-xs md:text-sm text-slate-400">Last Updated: October 2026</p>
          </div>

          <div className="space-y-10 text-slate-300">
            
            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">1. The 100% Guarantee Overview</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  FinKnowledge is dedicated to make learning simple and useful. Our online masterclass is currently <span className="text-amber-400 font-semibold">free for a limited time</span> (regular standard price ₹399) and we also offer an <span className="text-amber-400 font-semibold">In-Person Masterclass (₹1999)</span>. We stand firmly behind our sessions with a full money-back guarantee. If you attend the full session and feel it didn't help you, we will gladly return your entire fee (where applicable).
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                  This guarantee is created to take away all risk so you can learn comfortably without worry. It is a straightforward policy with zero hidden rules.
                </p>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">2. Timing & How Long It Takes</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  Refund requests must be sent within <strong className="text-amber-400">seven (7) days</strong> after your class takes place. Requests sent after this time period cannot be accepted.
                </p>
                <p className="text-xs md:text-sm leading-relaxed">
                  Once we receive your note, we process it right away. Please allow <strong className="text-amber-400">3 to 5 business days</strong> for the money to show back up in your original payment account, bank account, UPI app or card.
                </p>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">3. How to Ask for a Refund</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  To claim your refund, simply send an email to our support team with these basic details:
                </p>
                <ul className="list-disc pl-5 text-xs md:text-sm space-y-2 text-slate-400 mb-3">
                  <li>Your Full Name</li>
                  <li>Your Registered Email and WhatsApp Number</li>
                  <li>Your Payment Order ID or Receipt Number (if applicable)</li>
                </ul>
                <p className="text-xs md:text-sm leading-relaxed">
                  Support Email: <a href="mailto:support@finknowledge.in" className="text-amber-400 hover:underline font-medium">support@finknowledge.in</a>
                </p>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <AlertCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">4. Fair Rules</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  To keep things fair for everyone in our community, the following conditions apply:
                </p>
                <div className="border-l-2 border-amber-500/40 pl-4 space-y-3">
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-slate-200">A. Must Attend the Class</h4>
                    <p className="text-xs md:text-sm text-slate-400 mt-1">
                      Our refund policy applies only to people who actually join and attend the live session. Tickets where people book a seat and do not show up are not eligible for a refund.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-slate-200">B. Fair Use</h4>
                    <p className="text-xs md:text-sm text-slate-400 mt-1">
                      We reserve the right to decline refunds if someone repeatedly books and refunds classes just to misuse the policy.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}