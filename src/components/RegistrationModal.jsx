import React, { useState } from 'react';
import { X, ShieldCheck, Phone, Mail, User, CheckCircle2, ChevronDown } from 'lucide-react';

export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '',
    phone: '', 
    format: 'online', 
    category: 'Housewife' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Lead Captured! Proceeding to Payment..."); 
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="bg-[#121c2e] border border-slate-700/80 w-full max-w-lg rounded-2xl relative shadow-2xl z-10 max-h-[95vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        
        <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 px-5 py-4 border-b border-slate-700/50 flex justify-between items-center sticky top-0 z-20 backdrop-blur-md">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-white">Reserve Your Seat</h3>
            <p className="text-[11px] sm:text-xs text-teal-400 font-medium mt-0.5">Complete details to lock your spot</p>
          </div>
          <button onClick={onClose} className="p-1.5 bg-slate-800/50 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          
          {/* 1. Full Name Field */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-4 h-4 text-slate-500" />
              </div>
              <input 
                type="text" 
                required 
                placeholder="e.g. Sarah Jenkins" 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                className="w-full bg-[#0b1320] border border-slate-600 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition" 
              />
            </div>
          </div>

          {/* 2. Contact Fields (Phone & Email side-by-side on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">WhatsApp Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="w-4 h-4 text-slate-500" />
                </div>
                <input 
                  type="tel" 
                  required 
                  placeholder="+91 00000 00000" 
                  value={formData.phone} 
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                  className="w-full bg-[#0b1320] border border-slate-600 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-slate-500" />
                </div>
                <input 
                  type="email" 
                  required 
                  placeholder="name@example.com" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  className="w-full bg-[#0b1320] border border-slate-600 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition" 
                />
              </div>
            </div>
          </div>

          {/* 3. Format and Category Dropdowns (side-by-side on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Preferred Format</label>
              <div className="relative">
                <select 
                  value={formData.format} 
                  onChange={(e) => setFormData({ ...formData, format: e.target.value })} 
                  className="w-full bg-[#0b1320] border border-slate-600 rounded-lg pl-3.5 pr-10 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition appearance-none cursor-pointer"
                >
                  <option value="online">Online Live Masterclass (₹399 - Ref...)</option>
                  <option value="inperson">In-Person Masterclass (₹399 - Ref...)</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Category</label>
              <div className="relative">
                <select 
                  value={formData.category} 
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
                  className="w-full bg-[#0b1320] border border-slate-600 rounded-lg pl-3.5 pr-10 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition appearance-none cursor-pointer"
                >
                  <option value="Housewife">Housewife</option>
                  <option value="Working Class">Working Class</option>
                  <option value="Student">Student</option>
                  <option value="Retiree">Retiree</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>
            
          </div>

          <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-lg p-3 mt-4">
            <div className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                By continuing, you secure your spot for the <span className="font-semibold text-white">₹399 Masterclass</span>. Protected by our 7-day 100% money-back guarantee.
              </p>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold py-3.5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm flex items-center justify-center gap-2 mt-6 shadow-[0_0_20px_rgba(20,184,166,0.3)] disabled:opacity-70 disabled:hover:scale-100">
            {isSubmitting ? 'Processing...' : 'Submit & Proceed to Pay ₹399'} 
            {!isSubmitting && <ShieldCheck className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}