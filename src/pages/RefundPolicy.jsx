import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Clock, Mail, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer';

export default function RefundPolicy() {
  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1320] flex flex-col font-sans">
      {/* Navigation: Forced flex-row so they stay on the same line on mobile */}
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

      {/* Main Document Container */}
      <main className="flex-grow py-12 px-4 animate-in fade-in duration-500">
        <div className="max-w-3xl mx-auto">
          
          {/* Document Header */}
          <div className="mb-10 border-b border-slate-800 pb-8">
            <h1 className="text-3xl font-bold text-white mb-3">Refund & Cancellation Policy</h1>
            <p className="text-sm text-slate-400">Last Updated: October 2026</p>
          </div>

          {/* Policy Content */}
          <div className="space-y-10 text-slate-300">
            
            {/* Core Guarantee */}
            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <Shield className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">1. The 100% Guarantee Overview</h2>
                <p className="text-sm leading-relaxed mb-3">
                  TradeStart Academy is committed to providing exceptional educational value. We stand behind our ₹399 Masterclass with a 100% money-back guarantee. If you complete the session and feel it did not meet your expectations, we will refund your full enrollment fee.
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  This guarantee is designed to remove financial risk from your learning experience. It is a "no questions asked" policy, provided the standard eligibility criteria below are met.
                </p>
              </div>
            </section>

            {/* Timeline */}
            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <Clock className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">2. Claim Window & Processing Time</h2>
                <p className="text-sm leading-relaxed mb-3">
                  Refund requests must be initiated within <strong>seven (7) calendar days</strong> following the conclusion of your scheduled masterclass. Requests submitted after this window will not be eligible for a refund under any circumstances.
                </p>
                <p className="text-sm leading-relaxed">
                  Once approved, refunds are processed immediately on our end. Please allow <strong>3 to 5 business days</strong> for the funds to reflect in your original payment method (Bank Account, UPI or Credit Card), depending on your financial institution's processing times.
                </p>
              </div>
            </section>

            {/* How to Request */}
            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <Mail className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">3. How to Initiate a Request</h2>
                <p className="text-sm leading-relaxed mb-3">
                  To request a refund, you must contact our support team in writing. Please send an email to our official support channel with the following details:
                </p>
                <ul className="list-disc pl-5 text-sm space-y-2 text-slate-400 mb-3">
                  <li>Your Full Name (as registered)</li>
                  <li>Registered Email Address and Phone Number</li>
                  <li>Payment Reference / Transaction ID</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  Email: <a href="mailto:support@tradestartacademy.com" className="text-teal-400 hover:underline">support@tradestartacademy.com</a>
                </p>
              </div>
            </section>

            {/* Exceptions & Fair Usage */}
            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <AlertCircle className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">4. Exceptions & Fair Usage Policy</h2>
                <p className="text-sm leading-relaxed mb-3">
                  To protect the integrity of our program, the following conditions apply:
                </p>
                <div className="border-l-2 border-slate-700 pl-4 space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">A. Mandatory Attendance</h4>
                    <p className="text-sm text-slate-400 mt-1">
                      The refund policy applies only to participants who attend the masterclass. "No-shows" (individuals who purchase a ticket but do not log in to the session or attend the venue) are not eligible for a refund.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">B. Abuse of Policy</h4>
                    <p className="text-sm text-slate-400 mt-1">
                      We reserve the right to refuse refunds to individuals who repeatedly purchase and refund sessions or otherwise abuse the system.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}