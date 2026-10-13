import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Sparkles, Waves, Trees, BookOpen, Clock, Heart } from 'lucide-react';
import { destinations } from '../data/villageData';
import ImageWithFallback from './ContentBlocks/ImageWithFallback';

const filterTabs = [
  { id: 'all', name: 'Semua Destinasi', icon: Sparkles },
  { id: 'satwa', name: 'Satwa Langka', icon: Trees },
  { id: 'spot-alam', name: 'Spot Alam & Sunset', icon: Waves },
  { id: 'nelayan', name: 'Edukasi Nelayan', icon: Compass },
  { id: 'susur-sungai', name: 'Susur Sungai & Luah', icon: Waves },
  { id: 'budaya-sejarah', name: 'Budaya & Sejarah', icon: BookOpen },
];

export default function CuratedCategories() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = destinations.filter((dest) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'satwa') {
      return dest.category.toLowerCase().includes('satwa');
    }
    if (activeTab === 'spot-alam') {
      return dest.category.toLowerCase().includes('spot alam') || dest.category.toLowerCase().includes('sunset') || dest.category.toLowerCase().includes('danau');
    }
    if (activeTab === 'nelayan') {
      return dest.category.toLowerCase().includes('nelayan') || dest.slug === 'tanjung-hallat';
    }
    if (activeTab === 'susur-sungai') {
      return dest.category.toLowerCase().includes('susur sungai') || dest.slug.startsWith('luah');
    }
    if (activeTab === 'budaya-sejarah') {
      return dest.category.toLowerCase().includes('budaya') || dest.category.toLowerCase().includes('sejarah');
    }
    return true;
  });

  return (
    <section id="kategori" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold-600 block mb-2">
              DIREKTORI RESMI DESA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
              Pilihan Destinasi <span className="italic font-light text-forest-800">Sangkuliman</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light mt-2 max-w-2xl leading-relaxed">
              Dari keajaiban lumba-lumba air tawar Pesut Mahakam, keheningan 4 luah alami, hingga pesona matahari terbenam Danau Semayang.
            </p>
          </div>

          <Link
            to="/kuliner"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-900 hover:text-gold-600 transition-colors shrink-0 group self-start md:self-end"
          >
            <span>Jelajahi Kuliner Khas</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
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
        {/* Destination Cards Grid (Link to /destinasi/:slug) - NO PRICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <Link
              key={item.slug}
              to={`/destinasi/${item.slug}`}
              className="group bg-cream-100 rounded-3xl overflow-hidden border border-stone-200/70 shadow-sm hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Photo with Overlay and Badges */}
                <div className="relative h-60 w-full overflow-hidden">
                  <ImageWithFallback
                    src={item.cover}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    containerClassName="w-full h-full"
                    objectPosition={item.coverPosition}
                    scale={item.coverZoom}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-forest-900/85 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors leading-snug">
                    {item.name}
                  </h3>
                  
                  <p className="text-stone-600 text-xs sm:text-sm font-light mt-2 line-clamp-2 leading-relaxed">
                    {item.summary || item.tagline}
                  </p>

                  {item.bestTime && (
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500 font-light mt-3">
                      <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span className="truncate">{item.bestTime}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Action Bar (Without Price) */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-stone-200/60">
                <span className="text-xs font-semibold text-forest-900 group-hover:text-gold-600 transition-colors">
                  Lihat Detail Destinasi
                </span>
                
                <div className="w-10 h-10 rounded-full bg-white group-hover:bg-forest-900 group-hover:text-white text-forest-900 border border-stone-300 group-hover:border-forest-900 flex items-center justify-center transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
