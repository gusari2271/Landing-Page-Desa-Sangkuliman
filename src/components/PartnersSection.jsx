import React from 'react';
import { Trees, ShieldCheck, Heart, Sparkles, Building2 } from 'lucide-react';
import { partnersList } from '../data/villageData';

export default function PartnersSection() {
  return (
    <section id="mitra" className="py-14 sm:py-20 bg-cream-100 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-600 block mb-1.5">
              KOLABORASI & PELESTARIAN
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950">
              Mitra Kerja Sama <span className="italic font-light text-forest-800">& Kelembagaan Desa</span>
            </h2>
          </div>

          <p className="text-stone-500 text-xs sm:text-sm max-w-md font-light">
            Bersama mewujudkan ekowisata berkelanjutan, menjaga konservasi satwa langka, dan merawat alam Sangkuliman.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-5">
          {partnersList.map((partner, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-soft hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-full bg-forest-50 text-forest-800 flex items-center justify-center mb-3 group-hover:bg-forest-900 group-hover:text-gold-400 transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xs sm:text-sm font-bold text-forest-950 group-hover:text-forest-800 transition-colors line-clamp-2">
                {partner.name}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-stone-500 font-light mt-1 line-clamp-2">
                {partner.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
