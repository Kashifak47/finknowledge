import React, { useState, useEffect, useRef } from 'react';
import { Users, Star, Award, ShieldCheck } from 'lucide-react';

export default function StatsBanner() {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = 5000;
    const duration = 2000; // 2 seconds
    const incrementTime = 30;
    const steps = duration / incrementTime;
    const stepValue = end / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <div ref={bannerRef} className="border-y border-slate-800 bg-[#070b13] py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center justify-center">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 mb-2" />
          <h4 className="text-lg sm:text-xl font-bold text-white">{count.toLocaleString()}+</h4>
          <p className="text-xs text-slate-400 font-medium">Students Trained</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 mb-2" />
          <h4 className="text-lg sm:text-xl font-bold text-white">4.9/5</h4>
          <p className="text-xs text-slate-400 font-medium">Average Rating</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mb-2" />
          <h4 className="text-lg sm:text-xl font-bold text-white">100%</h4>
          <p className="text-xs text-slate-400 font-medium">Refund Guarantee</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 mb-2" />
          <h4 className="text-lg sm:text-xl font-bold text-white">Zero</h4>
          <p className="text-xs text-slate-400 font-medium">Complicated Terms</p>
        </div>
      </div>
    </div>
  );
}