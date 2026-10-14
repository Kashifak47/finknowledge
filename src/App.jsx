import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RefundPolicy from './pages/RefundPolicy';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b1320] text-slate-100 selection:bg-teal-500 selection:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}