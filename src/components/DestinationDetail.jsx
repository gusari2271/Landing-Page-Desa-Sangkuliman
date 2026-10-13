import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Share2, 
  MessageCircle, 
  Sparkles,
  ChevronRight,
  Compass,
  ArrowRight
} from 'lucide-react';
import { destinations, siteConfig } from '../data/villageData';
import FullTextBlock from './ContentBlocks/FullTextBlock';
import SplitBlock from './ContentBlocks/SplitBlock';
import GalleryCarousel from './ContentBlocks/GalleryCarousel';
import QuickInfoCard from './ContentBlocks/QuickInfoCard';
import ResponsibleCard from './ContentBlocks/ResponsibleCard';
import FishingGearCard from './ContentBlocks/FishingGearCard';
import LegendBlock from './ContentBlocks/LegendBlock';
import WaterSeasonsBlock from './ContentBlocks/WaterSeasonsBlock';
import WhatsAppButton from './WhatsAppButton';
import ImageWithFallback from './ContentBlocks/ImageWithFallback';

export default function DestinationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Cari destinasi berdasarkan slug  
  const destination = destinations.find((d) => d.slug === slug);

  // Scroll to top saat route berubah
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!destination) {
    return (
      <div className="min-h-screen bg-cream-100 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center mb-4">
          <Compass className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-forest-950 mb-2">Destinasi Tidak Ditemukan</h1>
        <p className="text-stone-600 text-sm max-w-md mb-6">
          Maaf, halaman destinasi yang Anda tuju belum terdaftar atau tautan telah diperbarui.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-900 text-white font-semibold text-sm hover:bg-forest-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    );
  }

  // 3 Rekomendasi Destinasi Lainnya (exclude current)
  const otherDestinations = destinations
    .filter((d) => d.slug !== slug)
    .slice(0, 3);

  // Share handler
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${destination.name} - Desa Wisata Sangkuliman`,
        text: destination.tagline,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Tautan destinasi berhasil disalin ke clipboard!');
    }
  };

  return (
    <article className="min-h-screen bg-[#FBF9F5] text-stone-800 selection:bg-forest-900 selection:text-white">
      
      {/* 1. TOP BAR / BREADCRUMB NAVIGATION */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-semibold text-forest-900 hover:text-gold-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Kembali ke Beranda</span>
            <span className="sm:hidden">Beranda</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-500 font-light truncate max-w-[160px] sm:max-w-xs">
            {destination.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            aria-label="Bagikan Halaman Destinasi"
            className="p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <WhatsAppButton
            destinationName={destination.name}
            variant="compact"
            label="Tanya WA"
            showIcon={true}
          />
        </div>
      </nav>

      {/* 2. COVER HERO DETAIL SECTION */}
      <header className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-end justify-center overflow-hidden bg-forest-950">
        {/* Cover Photo with Subtle Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={destination.cover}
            alt={destination.name}
            className="w-full h-full object-cover filter brightness-[0.82]"
            containerClassName="w-full h-full"
            objectPosition={destination.coverPosition}
            scale={destination.coverZoom}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-transparent to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-24 w-full text-white">
          <div className="space-y-4 max-w-3xl">
            
            {/* Badges & Chip */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full bg-gold-500/90 text-forest-950 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                {destination.category}
              </span>
              
              {destination.bestTime && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-stone-200 text-xs font-medium backdrop-blur-md border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-gold-300" />
                  <span>Waktu Terbaik: {destination.bestTime}</span>
                </div>
              )}
            </div>

            {/* Giant Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              {destination.name}
            </h1>

            {/* Subtitle / Tagline */}
            <p className="font-serif italic text-lg sm:text-2xl text-gold-200 font-light leading-relaxed">
              "{destination.tagline}"
            </p>

            {/* Summary preview */}
            {destination.summary && (
              <p className="text-stone-300 text-sm sm:text-base font-light max-w-2xl leading-relaxed pt-2">
                {destination.summary}
              </p>
            )}

          </div>
        </div>

        {/* Transition shape */}
        <div className="absolute -bottom-1 left-0 right-0 h-8 bg-[#FBF9F5] rounded-t-[2.5rem] z-10"></div>
      </header>

      {/* 3. DYNAMIC CONTENT BLOCKS */}
      <main className="py-6 sm:py-10">
        {destination.blocks && destination.blocks.map((block, idx) => {
          switch (block.type) {
            case 'fulltext':
              return (
                <FullTextBlock
                  key={idx}
                  title={block.title}
                  text={block.text}
                  dropCap={idx === 0}
                />
              );

            case 'split':
              return (
                <SplitBlock
                  key={idx}
                  imagePosition={block.imagePosition || (idx % 2 === 0 ? 'left' : 'right')}
                  images={block.images}
                  title={block.title}
                  text={block.text}
                  caption={block.caption}
                  photoPosition={block.photoPosition}
                  photoZoom={block.photoZoom}
                />
              );

            case 'gallery':
              return (
                <GalleryCarousel
                  key={idx}
                  images={block.images}
                  caption={block.caption}
                  title={block.title || `Galeri Foto ${destination.name}`}
                />
              );

            case 'responsible':
              return (
                <ResponsibleCard
                  key={idx}
                  title={block.title}
                  items={block.items}
                />
              );

            case 'fishing-gears':
              return (
                <FishingGearCard
                  key={idx}
                  title={block.title}
                  subtitle={block.subtitle}
                  gears={block.gears}
                />
              );

            case 'water-seasons':
              return (
                <WaterSeasonsBlock
                  key={idx}
                  title={block.title}
                  subtitle={block.subtitle}
                />
              );

            case 'legend':
              return (
                <LegendBlock
                  key={idx}
                  title={block.title}
                  badge={block.badge}
                  text={block.text}
                />
              );

            default:
              return null;
          }
        })}

        {/* 4. BLOK INFO SINGKAT (LOKASI, AKSES, WAKTU TERBAIK, AKTIVITAS) */}
        <QuickInfoCard quickInfo={destination.quickInfo} />

        {/* 5. BOTTOM CTA SECTION: WHATSAPP INQUIRY */}
        <section className="max-w-4xl mx-auto my-12 px-4 sm:px-6">
          <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-forest-800 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-300 block">
                INFORMASI & KONSULTASI RESMI
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold">
                Ingin Mengunjungi {destination.name}?
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                Hubungi pengurus Kelompok Sadar Wisata (Pokdarwis BMT) Desa Wisata Sangkuliman untuk informasi transportasi perahu, panduan pemandu lokal, dan waktu terbaik berkunjung.
              </p>
              
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <WhatsAppButton
                  destinationName={destination.name}
                  variant="gold"
                  label="Informasi Lebih Lanjut via WhatsApp"
                  className="w-full sm:w-auto"
                />
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/20 transition-colors w-full sm:w-auto justify-center"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Jelajahi Spot Lain</span>
                </Link>
              </div>

              <p className="text-[11px] text-stone-400 font-light mt-3">
                Dikelola oleh Pokdarwis Bertata Menata Tertata (BMT) • Desa Ekowisata Sangkuliman
              </p>
            </div>
          </div>
        </section>

        {/* 6. DESTINASI LAINNYA (3 KARTU REKOMENDASI) */}
        {otherDestinations.length > 0 && (
          <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 block mb-1">
                  EKSPLORASI BERIKUTNYA
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                  Destinasi Lainnya di Sangkuliman
                </h3>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-forest-900 hover:text-gold-600 transition-colors group"
              >
                <span>Lihat Semua Destinasi</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherDestinations.map((other) => (
                <Link
                  key={other.slug}
                  to={`/destinasi/${other.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-soft hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={other.cover}
                        alt={other.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-forest-900/85 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider">
                          {other.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="font-serif text-lg font-bold text-forest-950 group-hover:text-forest-700 transition-colors leading-snug line-clamp-1">
                        {other.name}
                      </h4>
                      <p className="text-stone-500 text-xs font-light mt-1.5 line-clamp-2 leading-relaxed">
                        {other.summary || other.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-1 flex items-center justify-between border-t border-stone-100 text-xs text-forest-900 font-semibold">
                    <span>Baca Selengkapnya</span>
                    <span className="text-gold-600 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>

    </article>
  );
}
