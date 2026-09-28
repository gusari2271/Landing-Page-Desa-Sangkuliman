import React from 'react';
import { ArrowRight, PhoneCall, Calendar } from 'lucide-react';
import { villageInfo } from '../data/villageData';

export default function CtaBanner({ onOpenReservation }) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Landscape Sunset / River Background with moody overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=2000&q=80"
          alt="Sunset di Desa Wisata Sangkuliman"
          className="w-full h-full object-cover object-center filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/70 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Title & Action */}
          <div className="lg:col-span-8 text-white space-y-4">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-300 block">
              MULAI PETUALANGAN ANDA
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Sangkuliman Story <br className="hidden sm:block" />
              <span className="italic font-light text-gold-200">Starts Here</span>
            </h2>
            <p className="text-stone-200 text-sm sm:text-base font-light max-w-xl">
              Jadikan liburan Anda bermakna dengan menjelajahi keindahan sungai alami, tinggal di homestay ramah warga, dan mendukung ekonomi lokal desa.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservasi Kunjungan Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${villageInfo.contact.whatsapp}?text=Halo%20Pengelola%20Desa%20Wisata%20Sangkuliman,%20saya%20ingin%20konsultasi%20jadwal%20kunjungan.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-medium text-sm sm:text-base border border-white/30 transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Script Quote (Matching Intaran Sanur) */}
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
