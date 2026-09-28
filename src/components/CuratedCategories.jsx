import React, { useState } from 'react';
import { ArrowUpRight, Star, BedDouble, UtensilsCrossed, Compass, Sparkles, ShoppingBag, Calendar, CheckCircle2 } from 'lucide-react';
import { curatedCategories } from '../data/villageData';

const filterTabs = [
  { id: 'all', name: 'Semua Kategori', icon: Sparkles },
  { id: 'Tempat Menginap', name: 'Homestay Desa', icon: BedDouble },
  { id: 'Warung & Kuliner', name: 'Kuliner Tradisional', icon: UtensilsCrossed },
  { id: 'Aktivitas & Petualangan', name: 'Susur Sungai & Petualangan', icon: Compass },
  { id: 'Spot Relaksasi', name: 'Spot Alam & Relaksasi', icon: Sparkles },
  { id: 'Oleh-oleh & Kriya', name: 'Kerajinan & Madu', icon: ShoppingBag },
  { id: 'Agenda Budaya', name: 'Event & Budaya', icon: Calendar },
];

export default function CuratedCategories({ onSelectSpot }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all'
    ? curatedCategories
    : curatedCategories.filter(item => item.category === activeTab);

  return (
    <section id="kategori" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-600 block mb-2">
              JELAJAH SANGKULIMAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
              Find What You Love <span className="italic font-light text-forest-800">in Sangkuliman</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light mt-2 max-w-2xl">
              Dari gemericik aliran sungai nan sejuk, kehangatan warga di homestay tradisional, hingga kelezatan kuliner lokal.
            </p>
          </div>

          <a
            href="#linkhub"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-900 hover:text-gold-600 transition-colors shrink-0 group self-start md:self-end"
          >
            <span>Lihat Semua Direktori</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Filter Pills with Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 hide-scrollbar">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-forest-900 text-white shadow-md'
                    : 'bg-cream-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-gold-400' : 'text-stone-500'}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* 6 Grid Cards matching Intaran Sanur Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectSpot && onSelectSpot(item)}
              className="group bg-cream-100 rounded-3xl overflow-hidden border border-stone-200/70 shadow-sm hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                {/* Photo with Overlay and Badges */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-forest-900/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                      {item.subCategory}
                    </span>
                    {item.tag && (
                      <span className="px-2.5 py-1 rounded-full bg-gold-500/90 backdrop-blur-md text-forest-950 text-[10px] font-bold tracking-wider uppercase">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-gold-300 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm font-light mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action Bar */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-stone-200/60">
                <div>
                  <span className="text-xs text-stone-400 block font-light">Estimasi Biaya</span>
                  <span className="text-sm font-semibold text-forest-900">{item.price}</span>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-white group-hover:bg-forest-900 group-hover:text-white text-forest-900 border border-stone-300 group-hover:border-forest-900 flex items-center justify-center transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
