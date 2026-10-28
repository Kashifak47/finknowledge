import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, UserCheck, Lock, Eye, Mail } from 'lucide-react';
// import Footer from '../components/Footer';

export default function PrivacyPolicy() {
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
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Privacy Policy</h1>
            <p className="text-xs md:text-sm text-slate-400">Last Updated: October 2026</p>
          </div>

          <div className="space-y-10 text-slate-300">
            
            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <UserCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">1. Our Commitment to Your Privacy</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  At FinKnowledge, we respect your personal information and value your trust. This page explains in simple, plain language what data we collect from you and how we safeguard it.
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                  We keep data collection minimal and straightforward so you can learn with complete peace of mind.
                </p>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <Eye className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">2. What Information We Collect</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  When you register for our live masterclass (offered free for a limited time, standard value ₹399), we collect only essential details:
                </p>
                <ul className="list-disc pl-5 text-xs md:text-sm space-y-2 text-slate-400 mb-3">
                  <li>Your full name</li>
                  <li>Your active email address</li>
                  <li>Your WhatsApp or phone number for session joining links</li>
                  <li>Your preferred format, category and experience level to customize your learning experience</li>
                </ul>
                <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                  *Note: For in-person masterclass payments (₹1999), payment details are processed securely through our authorized payment gateways. We never see or store your bank passwords or PINs.
                </p>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <Lock className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">3. How We Use Your Information</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  We use your contact info strictly for class-related purposes:
                </p>
                <ul className="list-disc pl-5 text-xs md:text-sm space-y-2 text-slate-400 mb-3">
                  <li>Sending live masterclass room links and joining schedules</li>
                  <li>Delivering digital workbook materials and reminder notifications</li>
                  <li>Providing customer support regarding your registration or refund requests</li>
                </ul>
                <p className="text-xs md:text-sm leading-relaxed text-slate-400">
                  We never sell, trade or rent your personal data to any third party or spam advertisers.
                </p>
              </div>
            </section>

            <section className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800/50 rounded-lg shrink-0 mt-1">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-semibold text-white mb-2">4. Questions & Support</h2>
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  If you have any questions or concerns about your privacy or data, feel free to reach out to our team.
                </p>
                <p className="text-xs md:text-sm leading-relaxed">
                  Support Email: <a href="mailto:support@finknowledge.in" className="text-amber-400 hover:underline font-medium">support@finknowledge.in</a>
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