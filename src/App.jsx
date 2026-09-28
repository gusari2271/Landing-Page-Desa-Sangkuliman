import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillCategories from './components/PillCategories';
import CuratedCategories from './components/CuratedCategories';
import LocalExperiences from './components/LocalExperiences';
import CentralLinkHub from './components/CentralLinkHub';
import PartnersSection from './components/PartnersSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import VideoModal from './components/VideoModal';
import ReservationModal from './components/ReservationModal';
import SearchModal from './components/SearchModal';
import BrochureModal from './components/BrochureModal';
import SpotDetailModal from './components/SpotDetailModal';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const handleSelectSpot = (spot) => {
    setSelectedSpot(spot);
  };

  return (
    <div className="min-h-screen bg-cream-100 font-sans text-slate-800 relative selection:bg-forest-800 selection:text-white">
      
      {/* 1. Top Glassmorphic Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenReservation={() => setIsReservationModalOpen(true)}
      />

      {/* 2. Panoramic Hero Section (Intaran Sanur Style) */}
      <main>
        <Hero
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onOpenReservation={() => setIsReservationModalOpen(true)}
        />

        {/* 3. Discover Sangkuliman Pill Bar */}
        <PillCategories
          onSelectCategory={(catId) => {
            const elem = document.getElementById('kategori');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Curated Highlights Grid (Find What You Love in Sangkuliman) */}
        <CuratedCategories onSelectSpot={handleSelectSpot} />

        {/* 5. Local Experiences Grid (Experience Sangkuliman Like a Local) */}
        <LocalExperiences onOpenReservation={() => setIsReservationModalOpen(true)} />

        {/* 6. Dedicated Central Link Hub (Satu Pintu Akses Terpadu - Solusi Notulen) */}
        <CentralLinkHub
          onOpenBrochure={() => setIsBrochureModalOpen(true)}
          onOpenReservation={() => setIsReservationModalOpen(true)}
        />

        {/* 7. Featured Partners & BUMDes */}
        <PartnersSection />

        {/* 8. Bottom CTA Banner (Your Sangkuliman Story Starts Here) */}
        <CtaBanner onOpenReservation={() => setIsReservationModalOpen(true)} />
      </main>

      {/* 9. Full Footer */}
      <Footer onOpenReservation={() => setIsReservationModalOpen(true)} />

      {/* 10. AI Chatbot Widget Slot (Fixed Bottom-Right) */}
      <ChatbotWidget />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectSpot={handleSelectSpot}
      />

      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />

      <SpotDetailModal
        spot={selectedSpot}
        onClose={() => setSelectedSpot(null)}
        onBookDirect={() => setIsReservationModalOpen(true)}
      />

    </div>
  );
}
