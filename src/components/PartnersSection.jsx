import React from 'react';
import { ArrowRight, Shield, Award, Building2, Trees, Sparkles } from 'lucide-react';
import { partnersList } from '../data/villageData';

export default function PartnersSection() {
  return (
    <section id="mitra" className="py-14 sm:py-20 bg-cream-100 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-600 block mb-1.5">
              KOLABORASI & DUKUNGAN
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950">
              Mitra Resmi <span className="italic font-light text-forest-800">& Komunitas Desa</span>
            </h2>
          </div>

          <p className="text-stone-500 text-xs sm:text-sm max-w-md font-light">
            Bersama mewujudkan ekowisata berkelanjutan, memberdayakan ekonomi warga, dan menjaga kelestarian alam Sangkuliman.
          </p>
        </div>

        {/* Partners Grid Logo Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partnersList.map((partner, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-stone-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-forest-50 text-forest-800 flex items-center justify-center mb-3 group-hover:bg-forest-900 group-hover:text-gold-400 transition-colors">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-sm font-bold text-forest-950 group-hover:text-forest-800 transition-colors line-clamp-1">
                {partner.name}
              </h3>
              <p className="text-[11px] text-stone-500 font-light mt-0.5 line-clamp-1">
                {partner.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
