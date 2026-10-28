// Razorpay addition
// import React, { useState } from 'react';
// import { X, ShieldCheck, Phone, Mail, User, CheckCircle2, ChevronDown, AlertCircle, Sparkles, Loader2 } from 'lucide-react';

// export default function RegistrationModal({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({ 
//     name: '', 
//     email: '',
//     phone: '', 
//     format: 'online', 
//     category: 'Housewife',
//     website: '' // Anti-spam honeypot
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isVerifying, setIsVerifying] = useState(false); // New loading state for payment verification
//   const [errorMsg, setErrorMsg] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [paymentDetails, setPaymentDetails] = useState(null);

//   if (!isOpen) return null;

//   // Helper to load Razorpay script dynamically
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg('');

//     // --- 1. Anti-Spam Honeypot Check ---
//     if (formData.website.trim() !== '') {
//       setSuccess(true);
//       return;
//     }

//     // --- 2. Validation Checks ---
//     const trimmedName = formData.name.trim();
//     const nameRegex = /^[A-Za-z\s]{3,50}$/;
//     const consecutiveLetters = /(.)\1{2,}/;

//     if (!nameRegex.test(trimmedName) || consecutiveLetters.test(trimmedName)) {
//       setErrorMsg('Please enter a valid name !');
//       return;
//     }

//     const phoneClean = formData.phone.replace(/\D/g, '');
//     const validIndianMobileRegex = /^[6-9]\d{9}$/;
//     const allSameDigits = /^(\d)\1{9}$/;

//     let isSequential = false;
//     if (phoneClean.length === 10) {
//       let ascCount = 0;
//       let descCount = 0;
//       for (let i = 0; i < 9; i++) {
//         const diff = Number(phoneClean[i + 1]) - Number(phoneClean[i]);
//         if (diff === 1) ascCount++;
//         if (diff === -1) descCount++;
//       }
//       if (ascCount >= 8 || descCount >= 8) {
//         isSequential = true;
//       }
//     }

//     if (!validIndianMobileRegex.test(phoneClean) || allSameDigits.test(phoneClean) || isSequential) {
//       setErrorMsg('Please enter a valid, active 10-digit WhatsApp mobile number !');
//       return;
//     }

//     const trimmedEmail = formData.email.trim().toLowerCase();
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (!emailRegex.test(trimmedEmail)) {
//       setErrorMsg('Please enter a valid email address !');
//       return;
//     }

//     setIsSubmitting(true);

//     // --- 3. Load Razorpay & Initialize Secure Payment Flow ---
//     const scriptLoaded = await loadRazorpayScript();
//     if (!scriptLoaded) {
//       setErrorMsg('Razorpay SDK failed to load. Please check your internet connection.');
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       // Step A: Create order on backend (logs Pending state to Google Sheet)
//       const orderResponse = await fetch('/api/create-order', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: trimmedName,
//           email: trimmedEmail,
//           phone: phoneClean,
//           format: formData.format,
//           category: formData.category
//         }),
//       });

//       const orderData = await orderResponse.json();

//       if (!orderData.success) {
//         setErrorMsg('Could not initiate payment order. Please try again.');
//         setIsSubmitting(false);
//         return;
//       }

//       setIsSubmitting(false);

//       // Step B: Configure Razorpay Checkout
//       const options = {
//         key: orderData.keyId,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         name: "FinKnowledge",
//         description: "Live Stock Market Masterclass (₹399)",
//         order_id: orderData.orderId,
//         handler: async function (response) {
//           // Show smooth loader while verifying payment and updating sheet
//           setIsVerifying(true);

//           try {
//             const verifyResponse = await fetch('/api/verify-payment', {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature,
//                 email: trimmedEmail
//               }),
//             });

//             const verifyData = await verifyResponse.json();

//             if (verifyData.success) {
//               setPaymentDetails(response.razorpay_payment_id);
//               setIsVerifying(false);
//               setSuccess(true); // Switch view to success card

//               // --- RESET FORM ONLY ON SUCCESS ---
//               setFormData({
//                 name: '',
//                 email: '',
//                 phone: '',
//                 format: 'online',
//                 category: 'Housewife',
//                 website: ''
//               });
//             } else {
//               setIsVerifying(false);
//               setErrorMsg("Payment verification failed. Please contact support.");
//             }
//           } catch (err) {
//             console.error("Verification network error:", err);
//             setIsVerifying(false);
//             setErrorMsg("Payment received, but verification encountered an error. Contact support.");
//           }
//         },
//         modal: {
//           ondismiss: async function () {
//             setIsSubmitting(false);
//             // --- KEEP FORM DATA INTACT ON CANCEL ---
//             try {
//               await fetch('/api/update-payment-status', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                   email: trimmedEmail,
//                   status: 'Cancelled'
//                 }),
//               });
//             } catch (err) {
//               console.error("Failed to log cancellation:", err);
//             }
//           }
//         },
//         prefill: {
//           name: trimmedName,
//           email: trimmedEmail,
//           contact: phoneClean
//         },
//         theme: {
//           color: "#0d9488"
//         }
//       };

//       const paymentWindow = new window.Razorpay(options);
//       paymentWindow.open();

//     } catch (error) {
//       console.error("Submission error:", error);
//       setIsSubmitting(false);
//       setErrorMsg("Network error. Please check your connection and try again.");
//     }
//   };

//   const handleCloseModal = () => {
//     if (success) {
//       setSuccess(false);
//       setPaymentDetails(null);
//     }
//     setErrorMsg('');
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCloseModal}></div>

//       <div className="bg-[#121c2e] border border-slate-700/85 w-full max-w-lg rounded-2xl relative shadow-2xl z-10 max-h-[95vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">

//         {/* --- DYNAMIC HEADER: Hidden when success or verifying --- */}
//         {!success && !isVerifying && (
//           <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 px-5 py-4 border-b border-slate-700/50 flex justify-between items-center sticky top-0 z-20 backdrop-blur-md">
//             <div>
//               <h3 className="text-base sm:text-lg font-extrabold text-white">Reserve Your Seat</h3>
//               <p className="text-[11px] sm:text-xs text-teal-400 font-medium mt-0.5">Complete details to lock your spot</p>
//             </div>
//             <button onClick={handleCloseModal} className="p-1.5 bg-slate-800/50 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition cursor-pointer">
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         )}

//         {/* --- VERIFYING / LOADING STATE --- */}
//         {isVerifying ? (
//           <div className="p-10 sm:p-12 text-center space-y-5 my-auto">
//             <Loader2 className="w-14 h-14 text-teal-400 animate-spin mx-auto" />
//             <div className="space-y-2">
//               <h4 className="text-lg sm:text-xl font-bold text-white">Verifying Your Payment...</h4>
//               <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
//                 Please wait while we confirm your transaction and secure your seat in the masterclass.
//               </p>
//             </div>
//           </div>
//         ) : success ? (
//           /* --- SUCCESSFUL CARD --- */
//           <div className="p-6 sm:p-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
//             <div className="flex justify-end -mt-3 -mr-2">
//               <button onClick={handleCloseModal} className="p-1.5 bg-slate-800/50 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition cursor-pointer">
//                 <X className="w-4 h-4" />
//               </button>
//             </div>

//             <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-emerald-500/20 to-teal-500/30 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto text-3xl font-black border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
//               ✓
//             </div>

//             <div className="space-y-2">
//               <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-xs font-semibold">
//                 <Sparkles className="w-3.5 h-3.5" /> Registration Confirmed
//               </div>
//               <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">Payment Successful!</h4>
//               <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
//                 Welcome to <span className="text-teal-400 font-bold">FinKnowledge</span>! Your seat for the masterclass is successfully secured.
//               </p>
//             </div>

//             {/* Team Contact & Next Steps Box */}
//             <div className="bg-[#0b1320] border border-slate-700/80 rounded-xl p-4 text-left space-y-2.5 max-w-sm mx-auto shadow-inner">
//               <div className="flex items-center gap-2 text-teal-300 text-xs font-bold">
//                 <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
//                 <span>What happens next?</span>
//               </div>
//               <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
//                 Our support & onboarding team will connect with you via <span className="text-white font-medium">WhatsApp and Email</span> within 15 minutes with your exclusive masterclass link and study materials.
//               </p>
//               {paymentDetails && (
//                 <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[11px]">
//                   <span className="text-slate-400">Payment ID:</span>
//                   <span className="font-mono text-emerald-400 font-medium truncate max-w-[180px]">{paymentDetails}</span>
//                 </div>
//               )}
//             </div>

//             <button 
//               onClick={handleCloseModal}
//               className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-extrabold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] text-sm cursor-pointer"
//             >
//               Done & Return to Dashboard
//             </button>
//           </div>
//         ) : (
//           /* --- REGISTRATION FORM --- */
//           <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">

//             {errorMsg && (
//               <div className="bg-rose-950/40 border border-rose-500/30 rounded-lg p-3 flex items-center gap-2 text-rose-300 text-xs">
//                 <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
//                 <span>{errorMsg}</span>
//               </div>
//             )}

//             <div className="hidden" aria-hidden="true">
//               <label>Website URL</label>
//               <input 
//                 type="text" 
//                 name="website" 
//                 value={formData.website}
//                 onChange={(e) => setFormData({ ...formData, website: e.target.value })}
//                 tabIndex={-1} 
//                 autoComplete="off"
//               />
//             </div>

//             <div>
//               <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="w-4 h-4 text-slate-500" />
//                 </div>
//                 <input 
//                   type="text" 
//                   required 
//                   placeholder="e.g. Rahul Sharma" 
//                   value={formData.name} 
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
//                   className="w-full bg-[#0b1320] border border-slate-600 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition" 
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs font-semibold text-slate-300 mb-1.5">WhatsApp Number</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Phone className="w-4 h-4 text-slate-500" />
//                   </div>
//                   <input 
//                     type="tel" 
//                     required 
//                     placeholder="9876543210" 
//                     maxLength={10}
//                     value={formData.phone} 
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
//                     className="w-full bg-[#0b1320] border border-slate-600 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition" 
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="w-4 h-4 text-slate-500" />
//                   </div>
//                   <input 
//                     type="email" 
//                     required 
//                     placeholder="name@example.com" 
//                     value={formData.email} 
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
//                     className="w-full bg-[#0b1320] border border-slate-600 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition" 
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs font-semibold text-slate-300 mb-1.5">Preferred Format</label>
//                 <div className="relative">
//                   <select 
//                     value={formData.format} 
//                     onChange={(e) => setFormData({ ...formData, format: e.target.value })} 
//                     className="w-full bg-[#0b1320] border border-slate-600 rounded-lg pl-3.5 pr-10 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition appearance-none cursor-pointer"
//                   >
//                     <option value="online">Online Live Masterclass (₹399)</option>
//                     <option value="inperson">In-Person Masterclass (₹399)</option>
//                   </select>
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                     <ChevronDown className="w-4 h-4 text-slate-500" />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-slate-300 mb-1.5">Category</label>
//                 <div className="relative">
//                   <select 
//                     value={formData.category} 
//                     onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
//                     className="w-full bg-[#0b1320] border border-slate-600 rounded-lg pl-3.5 pr-10 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition appearance-none cursor-pointer"
//                   >
//                     <option value="Housewife">Housewife</option>
//                     <option value="Working Class">Working Class</option>
//                     <option value="Student">Student</option>
//                     <option value="Retiree">Retiree</option>
//                   </select>
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                     <ChevronDown className="w-4 h-4 text-slate-500" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-lg p-3 mt-4">
//               <div className="flex gap-2">
//                 <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
//                 <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
//                   Proceeding will open secure payment for the <span className="font-semibold text-white">₹399 Masterclass</span>. Protected by our 7-day money-back guarantee.
//                 </p>
//               </div>
//             </div>

//             <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold py-3.5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm flex items-center justify-center gap-2 mt-6 shadow-[0_0_20px_rgba(20,184,166,0.3)] disabled:opacity-70 disabled:hover:scale-100 cursor-pointer">
//               {isSubmitting ? 'Opening Secure Checkout...' : 'Proceed to Pay ₹399'} 
//               {!isSubmitting && <ShieldCheck className="w-4 h-4" />}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { X, ShieldCheck, Phone, Mail, User, CheckCircle2, ChevronDown, AlertCircle, Sparkles, Loader2 } from 'lucide-react';

export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    format: 'online',
    category: 'Employee',
    experience: 'Beginner',
    website: '' // Anti-spam honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // --- 1. Anti-Spam Honeypot Check ---
    if (formData.website.trim() !== '') {
      setSuccess(true); // Silently trick bots
      return;
    }

    // --- 2. Advanced Real-World Validation ---

    // A. Full Name Validation
    const trimmedName = formData.name.trim();
    const nameRegex = /^[A-Za-z\s]{3,50}$/;
    const consecutiveLetters = /(.)\1{2,}/;

    if (!nameRegex.test(trimmedName) || consecutiveLetters.test(trimmedName)) {
      setErrorMsg('Please enter a valid name !');
      return;
    }

    // B. WhatsApp Number Validation
    const phoneClean = formData.phone.replace(/\D/g, '');
    const validIndianMobileRegex = /^[6-9]\d{9}$/;
    const allSameDigits = /^(\d)\1{9}$/;

    let isSequential = false;
    if (phoneClean.length === 10) {
      let ascCount = 0;
      let descCount = 0;
      for (let i = 0; i < 9; i++) {
        const diff = Number(phoneClean[i + 1]) - Number(phoneClean[i]);
        if (diff === 1) ascCount++;
        if (diff === -1) descCount++;
      }
      if (ascCount >= 8 || descCount >= 8) {
        isSequential = true;
      }
    }

    if (!validIndianMobileRegex.test(phoneClean) || allSameDigits.test(phoneClean) || isSequential) {
      setErrorMsg('Please enter a valid, active 10-digit WhatsApp mobile number !');
      return;
    }

    // C. Email Validation
    const trimmedEmail = formData.email.trim().toLowerCase();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address !');
      return;
    }

    const blockedDomains = ['test.com', 'example.com', 'abc.com', 'tempmail.com', 'mailinator.com', 'xyz.com', 'fake.com', 'gmail.com.com'];
    const emailDomain = trimmedEmail.split('@')[1];
    const emailUser = trimmedEmail.split('@')[0];
    const consecutiveEmailChars = /(.)\1{3,}/;

    if (
      blockedDomains.includes(emailDomain) ||
      trimmedEmail.startsWith('test') ||
      trimmedEmail.startsWith('asdf') ||
      trimmedEmail.startsWith('qwerty') ||
      consecutiveEmailChars.test(emailUser) ||
      emailUser.length < 3
    ) {
      setErrorMsg('Please enter a genuine, active personal email address !');
      return;
    }

    setIsSubmitting(true);

    // --- 3. Secure Environment Variable Fetch ---
    const WEB_APP_URL = import.meta.env.VITE_APP_SCRIPT_URL;

    if (!WEB_APP_URL) {
      setErrorMsg('Configuration error: Web App URL is missing in environment variables.');
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: phoneClean,
          format: formData.format === 'online' ? 'Online Live Masterclass (Free)' : 'In-Person Masterclass (₹1999)',
          category: formData.category,
          experience: formData.experience
        }),
      });

      setIsSubmitting(false);
      setSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        format: 'online',
        category: 'Employee',
        experience: 'Beginner',
        website: ''
      });

    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const handleCloseModal = () => {
    setSuccess(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={handleCloseModal}></div>

      <div className="bg-[#121c2e] border border-amber-500/40 w-full max-w-lg rounded-2xl sm:rounded-3xl relative shadow-[0_0_50px_rgba(245,158,11,0.15)] z-10 my-auto max-h-[96vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* --- DYNAMIC HEADER: Hidden when success --- */}
        {!success && (
          <div className="bg-gradient-to-r from-amber-950/50 via-[#162238] to-amber-950/40 px-4 sm:px-6 py-3.5 sm:py-4 border-b border-amber-500/30 flex justify-between items-center shrink-0">
            <div>
              <h3 className="text-sm sm:text-lg font-extrabold text-white">Reserve Your Seat</h3>
              <p className="text-[10px] sm:text-xs text-amber-400 font-medium mt-0.5">Complete details to lock your spot</p>
            </div>
            <button onClick={handleCloseModal} className="p-1.5 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition cursor-pointer border border-slate-700 shrink-0">
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}

        <div className="overflow-y-auto flex-1 p-3.5 sm:p-6 scrollbar-thin scrollbar-thumb-slate-700">
          {success ? (
            /* --- SUCCESSFUL CARD --- */
            <div className="py-2 sm:py-4 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex justify-end -mt-1 -mr-1">
                <button onClick={handleCloseModal} className="p-1.5 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition cursor-pointer border border-slate-700">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-amber-500/20 to-yellow-500/30 text-amber-400 rounded-2xl flex items-center justify-center mx-auto text-3xl font-black border border-amber-500/40 shadow-[0_0_30px_rgba(245,158,11,0.25)]">
                ✓
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" /> Registration Confirmed
                </div>
                <h4 className="text-lg sm:text-2xl font-black text-white tracking-tight">Seat Reserved Successfully!</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Welcome to <span className="text-amber-400 font-bold">FinKnowledge</span>! Your registration for the masterclass is successfully recorded.
                </p>
              </div>

              {/* Team Contact & Next Steps Box */}
              <div className="bg-[#0b1320] border border-amber-500/20 rounded-xl p-3.5 text-left space-y-2 max-w-sm mx-auto shadow-inner">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>What happens next ?</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                  We’ve sent a confirmation email to your inbox! Please check it and stay tuned, our team will connect with you shortly via <span className="text-white font-medium">WhatsApp and Email</span> with your exclusive masterclass details.
                </p>
              </div>

              <button
                onClick={handleCloseModal}
                className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] text-xs sm:text-sm cursor-pointer"
              >
                Done & Return to Dashboard
              </button>
            </div>
          ) : (
            /* --- REGISTRATION FORM --- */
            <form onSubmit={handleSubmit} className="space-y-3">

              {errorMsg && (
                <div className="bg-rose-950/40 border border-rose-500/30 rounded-lg p-2.5 flex items-center gap-2 text-rose-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="hidden" aria-hidden="true">
                <label>Website URL</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <User className="w-4 h-4 text-amber-400/70" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0b1320] border border-slate-700/80 rounded-xl pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 mb-1">WhatsApp Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Phone className="w-4 h-4 text-amber-400/70" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0b1320] border border-slate-700/80 rounded-xl pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 text-amber-400/70" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0b1320] border border-slate-700/80 rounded-xl pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition shadow-inner"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 mb-1">Preferred Format</label>
                  <div className="relative">
                    <select
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full bg-[#0b1320] border border-slate-700/80 rounded-xl pl-3.5 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition appearance-none cursor-pointer shadow-inner"
                    >
                      <option value="online">Online Live Masterclass (Free)</option>
                      <option value="inperson">In-Person Masterclass (₹1999)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-amber-400/70" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 mb-1">Category</label>
                  <div className="relative">
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#0b1320] border border-slate-700/80 rounded-xl pl-3.5 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition appearance-none cursor-pointer shadow-inner"
                    >
                      <option value="Employee">Employee</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Student">Student</option>
                      <option value="Businessman">Businessman</option>
                      <option value="Housewife">Housewife</option>
                      <option value="Retiree">Retiree</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-amber-400/70" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-300 mb-1">Stock Market Experience</label>
                <div className="relative">
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-[#0b1320] border border-slate-700/80 rounded-xl pl-3.5 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition appearance-none cursor-pointer shadow-inner"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-amber-400/70" />
                  </div>
                </div>
              </div>

              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-2.5 sm:p-3 mt-2 shadow-inner">
                <div className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
                    {formData.format === 'online' ? (
                      <>Free Online Live Masterclass registration. Secure your spot instantly with zero payment required today.</>
                    ) : (
                      <>In-Person Masterclass pricing is <span className="font-semibold text-amber-300">₹1999</span>.</>
                    )}
                  </p>
                </div>
              </div>

              {formData.format === 'inperson' ? (
                <div className="w-full bg-rose-950/40 border border-rose-500/40 text-rose-300 font-bold py-3 rounded-xl text-center text-xs sm:text-sm mt-4">
                  In-Person seat is not available
                </div>
              ) : (
                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold py-3 sm:py-3.5 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] text-xs sm:text-sm flex items-center justify-center gap-2 mt-4 shadow-[0_0_20px_rgba(245,158,11,0.4)] disabled:opacity-70 disabled:hover:scale-100 cursor-pointer">
                  {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Reserving Seat...</> : 'Save Your Free Seat Now'}
                  {!isSubmitting && <ShieldCheck className="w-4 h-4" />}
                </button>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}