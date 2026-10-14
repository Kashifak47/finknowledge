import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBanner from '../components/StatsBanner';
import BookingCard from '../components/BookingCard';
import WhyUs from '../components/WhyUs'; // Import the new component
import Curriculum from '../components/Curriculum';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import RegistrationModal from '../components/RegistrationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <StatsBanner />
        <BookingCard onOpenModal={() => setIsModalOpen(true)} />
        
        {/* Inserted the new highly attractive comparison section here */}
        <WhyUs /> 
        
        <Curriculum />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}