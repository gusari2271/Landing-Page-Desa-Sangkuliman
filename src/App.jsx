import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillCategories from './components/PillCategories';
import AboutHistory from './components/AboutHistory';
import CuratedCategories from './components/CuratedCategories';
import LocalExperiences from './components/LocalExperiences';
import WaterSeasons from './components/WaterSeasons';
import ResponsibleTourism from './components/ResponsibleTourism';
import CentralLinkHub from './components/CentralLinkHub';
import PartnersSection from './components/PartnersSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import VideoModal from './components/VideoModal';
import SearchModal from './components/SearchModal';
import BrochureModal from './components/BrochureModal';
import DestinationDetail from './components/DestinationDetail';
import CulinaryPage from './components/CulinaryPage';
import ScrollToTop from './components/ScrollToTop';

function HomePage({ onOpenVideo, onOpenBrochure, onOpenSearch }) {
  return (
    <>
      {/* Top Glassmorphic Navigation Bar */}
      <Navbar onOpenSearch={onOpenSearch} />

      <main>
        {/* 1. Panoramic Hero Section with Factual Coordinates & WhatsApp CTA */}
        <Hero onOpenVideo={onOpenVideo} />

        {/* 2. Discover Sangkuliman Pill Bar (Direct Links to Detail & Culinary) */}
        <PillCategories />

        {/* 3. Section Baru: Latar Belakang & Sejarah Pemukiman Terpadu 1990 */}
        <AboutHistory />

        {/* 4. Curated Highlights Grid (Link ke /destinasi/:slug tanpa harga) */}
        <CuratedCategories />

        {/* 5. Local Experiences Grid (6 Pengalaman Nyata Kampung Nelayan) */}
        <LocalExperiences />

        {/* 6. Section Baru: Musim di Sangkuliman (3 Siklus Air Danau) */}
        <WaterSeasons />

        {/* 7. Section Baru: Wisata Bertanggung Jawab (Kode Etik Pengunjung) */}
        <ResponsibleTourism />

        {/* 8. Dedicated Central Link Hub (Akses Terpadu Satu Pintu) */}
        <CentralLinkHub onOpenBrochure={onOpenBrochure} />

        {/* 9. Featured Partners Resmi */}
        <PartnersSection />

        {/* 10. Bottom CTA Banner (Informasi Lebih Lanjut via WhatsApp) */}
        <CtaBanner />
      </main>

      {/* Full Footer Resmi */}
      <Footer />
    </>
  );
}

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <div className="min-h-screen bg-[#FBF9F5] font-sans text-slate-800 relative selection:bg-forest-900 selection:text-white">
        
        <Routes>
          {/* Rute 1: Beranda Landing Page */}
          <Route
            path="/"
            element={
              <HomePage
                onOpenVideo={() => setIsVideoModalOpen(true)}
                onOpenBrochure={() => setIsBrochureModalOpen(true)}
                onOpenSearch={() => setIsSearchModalOpen(true)}
              />
            }
          />

          {/* Rute 2: Halaman Detail Destinasi Dinamis */}
          <Route
            path="/destinasi/:slug"
            element={<DestinationDetail />}
          />

          {/* Rute 3: Halaman Kuliner & Oleh-Oleh */}
          <Route
            path="/kuliner"
            element={<CulinaryPage />}
          />
        </Routes>

        {/* Global AI Chatbot Widget (Fixed Bottom-Right) */}
        <ChatbotWidget />

        {/* Interactive Modals */}
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />

        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
        />

        <BrochureModal
          isOpen={isBrochureModalOpen}
          onClose={() => setIsBrochureModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}
