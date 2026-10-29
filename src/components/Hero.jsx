import React from 'react';
import { ArrowRight, Play, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../data/villageData';
import ImageWithFallback from './ContentBlocks/ImageWithFallback';

export default function Hero({ onOpenVideo }) {
  return (
    <section id="beranda" className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Panorama Image with subtle overlay & elegant fallback */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/hero/cover.webp"
          alt="Panorama Alam dan Pemukiman Desa Wisata Sangkuliman"
          priority={true}
          className="w-full h-full object-cover object-center filter brightness-[0.85]"
        />
        {/* Multilayer gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/40 to-black/55"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-transparent to-black/45"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Main Typography Column */}
          <div className="lg:col-span-8 text-white space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping"></span>
              <span>DESA EKOWISATA • KAMPUNG NELAYAN • KERAGAMAN HAYATI</span>
            </div>

            {/* Giant Serif Title */}
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-md">
                SANGKULIMAN
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-200 font-light">
                The Living Heritage of Nature
              </p>
            </div>

            {/* Poetic & Factual Description */}
            <p className="text-stone-200 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed drop-shadow">
              {siteConfig.subtitle} Berdiri di atas dataran tinggi asri yang bebas banjir, diresmikan sejak 1990 dan dikelola dengan cinta oleh Pokdarwis Bertata Menata Tertata (BMT).
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#tentang"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-forest-800 hover:bg-forest-700 text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-forest-600"
              >
                <span>Jelajahi Desa</span>
                <ArrowRight className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-emerald-800" />
                <span>Informasi Lebih Lanjut</span>
              </a>

              <button
                onClick={onOpenVideo}
                aria-label="Tonton Video Profil Desa"
                className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-medium text-sm sm:text-base transition-all duration-300 border border-white/30 hover:border-white/60 shadow-lg"
              >
                <div className="w-6 h-6 rounded-full bg-white text-forest-950 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Video Profil</span>
              </button>
            </div>

          </div>

          {/* Right Script & Coordinates Column */}
          <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end space-y-6 text-left lg:text-right">
            
            {/* Elegant Script Quote Accent */}
            <div className="hidden lg:block bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-right max-w-xs transform hover:rotate-1 transition-transform">
              <p className="font-script text-2xl sm:text-3xl text-gold-300 font-bold leading-tight">
                "The Magical of Sangkuliman"
              </p>
              <p className="text-xs text-stone-300 font-light mt-1">
                2 Sungai • 2 Danau • 2 Satwa Langka
              </p>
            </div>

            {/* Geographical Coordinates Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/45 backdrop-blur-md border border-white/15 text-xs text-stone-300 text-left">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <div>
                <p className="font-semibold text-white">Desa Wisata Sangkuliman</p>
                <p className="text-[11px] text-stone-300 font-light">
                  Kec. Kota Bangun, Kab. Kutai Kartanegara, Kaltim
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Scroll Pill Indicator
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <a
          href="#tentang"
          className="group flex flex-col items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
        >
          <div className="w-5 h-8 rounded-full border-2 border-white/40 group-hover:border-gold-400 flex items-start justify-center p-1 transition-colors">
            <div className="w-1.5 h-2 bg-gold-400 rounded-full animate-bounce"></div>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-stone-300 group-hover:text-gold-300">
            Scroll to Explore
          </span>
        </a>
      </div> */}

      {/* Decorative Wave Transition */}
      <div className="absolute -bottom-1 left-0 right-0 h-10 bg-[#FBF9F5] rounded-t-[3rem] z-10"></div>
    </section>
  );
}
