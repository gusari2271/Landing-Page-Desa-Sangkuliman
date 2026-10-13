import React from 'react';
import { Waves, Droplets, Sun, CheckCircle2, Clock } from 'lucide-react';
import { waterSeasons, siteConfig } from '../data/villageData';

export default function WaterSeasons() {
  const icons = [Waves, Droplets, Sun];

  return (
    <section id="musim" className="py-16 sm:py-24 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 text-forest-900 border border-forest-200 text-xs font-bold uppercase tracking-widest">
            <Waves className="w-3.5 h-3.5 text-gold-600" />
            <span>Siklus Alam Danau & Sungai</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Musim di Sangkuliman <br />
            <span className="italic font-light text-forest-800">Tiga Wajah Keindahan Alam</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Keadaan air danau terbagi menjadi tiga fase khas oleh Pokdarwis BMT. Waktu terbaik berkunjung adalah saat <strong>air pasang besar</strong> dan <strong>musim kemarau</strong>.
          </p>
        </div>

        {/* 3 Water Seasons Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {waterSeasons.map((season, idx) => {
            const Icon = icons[idx] || Waves;
            return (
              <div
                key={season.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-gold-100 text-forest-950">
                      Fase {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-800 transition-colors mb-1">
                    {season.title}
                  </h3>

                  <span className="text-xs font-semibold text-gold-700 block mb-3">
                    {season.badge}
                  </span>

                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {season.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {season.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700 font-light">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 text-xs">
                  <span className="text-stone-400 block font-light text-[11px]">Rekomendasi Aktivitas:</span>
                  <span className="font-semibold text-forest-900">{season.bestActivity}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Waktu Terbaik Berkunjung */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-forest-900 text-white flex items-center justify-center gap-3 text-center text-xs sm:text-sm shadow-md">
          <Clock className="w-5 h-5 text-gold-400 shrink-0" />
          <span>
            <strong>Waktu Terbaik Berkunjung:</strong> {siteConfig.bestTime} (menyesuaikan agenda wisata perairan & camping daratan).
          </span>
        </div>

      </div>
    </section>
  );
}
