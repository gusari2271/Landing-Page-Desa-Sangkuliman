import React from 'react';
import { MessageCircle, Compass } from 'lucide-react';
import { getWhatsAppUrl } from '../data/villageData';
import ImageWithFallback from './ContentBlocks/ImageWithFallback';

export default function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Sunset Background at Tanjung Rappeh with moody overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/tanjung-rappeh/cover.webp"
          alt="Sunset di Tanjung Rappeh Desa Wisata Sangkuliman"
          className="w-full h-full object-cover object-center filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/80 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Title & Action */}
          <div className="lg:col-span-8 text-white space-y-4">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-300 block">
              RENCANAKAN KUNJUNGAN ANDA
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Kunjungi Pusaka Alam <br className="hidden sm:block" />
              <span className="italic font-light text-gold-200">Desa Wisata Sangkuliman</span>
            </h2>
            <p className="text-stone-200 text-sm sm:text-base font-light max-w-xl leading-relaxed">
              Jelajahi perairan tenang Sungai Mahakam, saksikan semburan Pesut Mahakam, dan nikmati keramahan kampung nelayan yang asri dan bersahaja.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 text-emerald-800" />
                <span>Informasi Lebih Lanjut</span>
              </a>

              <a
                href="#linkhub"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-medium text-sm sm:text-base border border-white/30 transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-gold-400" />
                <span>Pusat Link Terpadu</span>
              </a>
            </div>
          </div>

          {/* Right Script Quote */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 text-left lg:text-right max-w-sm">
              <p className="font-script text-3xl sm:text-4xl text-gold-300 font-bold leading-snug">
                "Tenangnya alam, hangatnya sambutan warga."
              </p>
              <p className="text-xs text-stone-300 font-light mt-2 tracking-wide uppercase">
                — Kearifan Desa Sangkuliman
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
