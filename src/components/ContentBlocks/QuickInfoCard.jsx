import React from 'react';
import { MapPin, Navigation, Clock, CheckCircle2 } from 'lucide-react';

export default function QuickInfoCard({ quickInfo, className = "" }) {
  if (!quickInfo) return null;

  return (
    <div className={`max-w-4xl mx-auto my-10 px-4 sm:px-6 ${className}`}>
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-card">
        
        {/* Header */}
        <div className="border-b border-stone-200/80 pb-5 mb-6">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 block mb-1">
            INFORMASI RINGKAS
          </span>
          <h3 className="font-serif text-2xl font-bold text-forest-950">
            Panduan Kunjungan Destinasi
          </h3>
          <p className="text-xs text-stone-500 font-light mt-1">
            Informasi praktis seputar lokasi, rute perjalanan, waktu terbaik, dan aktivitas yang dapat dilakukan.
          </p>
        </div>

        {/* 3 Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Lokasi */}
          <div className="p-4 rounded-2xl bg-cream-100 border border-stone-200/60 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-sm font-bold text-forest-950">Lokasi & Area</h4>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              {quickInfo.lokasi || "Kawasan Desa Wisata Sangkuliman"}
            </p>
          </div>

          {/* Akses */}
          <div className="p-4 rounded-2xl bg-cream-100 border border-stone-200/60 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center">
              <Navigation className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-sm font-bold text-forest-950">Jalur Akses</h4>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              {quickInfo.akses || "Transportasi air perahu long boat / ces ketinting atau feri Liang Ulu"}
            </p>
          </div>

          {/* Waktu Terbaik */}
          <div className="p-4 rounded-2xl bg-cream-100 border border-stone-200/60 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-sm font-bold text-forest-950">Waktu Kunjungan Terbaik</h4>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              {quickInfo.waktuTerbaik || "Air pasang besar dan musim kemarau"}
            </p>
          </div>

        </div>

        {/* Aktivitas Unggulan */}
        {quickInfo.aktivitas && quickInfo.aktivitas.length > 0 && (
          <div className="p-4 sm:p-5 rounded-2xl bg-forest-50/60 border border-forest-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-forest-900 mb-3">
              Aktivitas yang Dapat Dilakukan:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {quickInfo.aktivitas.map((act, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{act}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
