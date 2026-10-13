import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Waves, Utensils, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { discoverPills } from '../data/villageData';
import ImageWithFallback from './ContentBlocks/ImageWithFallback';

const iconMap = {
  Sparkles: Sparkles,
  Waves: Waves,
  Utensils: Utensils,
  BookOpen: BookOpen,
  Compass: Compass,
};

export default function PillCategories() {
  return (
    <section id="jelajah" className="py-14 sm:py-20 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-600 block">
              DISCOVER SANGKULIMAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-950 leading-tight">
              Kekayaan Pusaka{' '}
              <span className="italic font-light text-forest-800">Desa Wisata Sangkuliman</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
              Temukan keajaiban alam dan kearifan masyarakat Kutai Kartanegara: tarian sakral penjaga kampung, satwa langka pesut & bekantan, hingga gurihnya Iwak Basumap.
            </p>
            <a
              href="#kategori"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-gold-600 transition-colors group"
            >
              <span>Lihat Semua Pilihan Spot</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 6 Category Rounded Pill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {discoverPills.map((pill) => {
            const IconComponent = iconMap[pill.icon] || Sparkles;
            const targetUrl = pill.slug === 'kuliner' ? '/kuliner' : `/destinasi/${pill.slug}`;

            // return (
            //   <Link
            //     key={pill.id}
            //     to={targetUrl}
            //     className="group relative h-64 sm:h-72 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5"
            //   >
            //     {/* Image with graceful fallback */}
            //     <ImageWithFallback
            //       src={pill.image}
            //       alt={pill.title}
            //       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            //     />

            //     {/* Dark Gradient Overlay */}
            //     <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>

            //     {/* Content at Bottom */}
            //     <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end text-white z-10">
            //       <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2.5 text-gold-300 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
            //         <IconComponent className="w-4 h-4" />
            //       </div>
            //       <h3 className="font-serif text-base sm:text-lg font-bold leading-snug group-hover:text-gold-200 transition-colors">
            //         {pill.title}
            //       </h3>
            //       <p className="text-[11px] sm:text-xs text-stone-300 font-light mt-0.5 line-clamp-2">
            //         {pill.subtitle}
            //       </p>
            //     </div>
            //   </Link>
            // );
          })}
        </div>

      </div>
    </section>
  );
}
