import React, { useState } from 'react';
import { Search, X, ArrowUpRight, MapPin, Tag } from 'lucide-react';
import { curatedCategories, localExperiences, discoverPills } from '../data/villageData';

export default function SearchModal({ isOpen, onClose, onSelectSpot }) {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  // Aggregate searchable items
  const allItems = [
    ...curatedCategories.map(item => ({ ...item, type: 'Spot / Layanan' })),
    ...localExperiences.map(item => ({ ...item, type: 'Pengalaman Lokal', price: item.time })),
    ...discoverPills.map(item => ({ ...item, type: 'Kategori', price: 'Eksplor' })),
  ];

  const filtered = searchQuery.trim() === ''
    ? allItems.slice(0, 6)
    : allItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ketik nama spot, sungai, homestay, atau kuliner..."
            className="flex-1 text-sm sm:text-base bg-transparent border-0 focus:outline-none text-forest-950 placeholder:text-stone-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-full text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-full bg-cream-100 hover:bg-stone-200 text-xs font-semibold text-stone-600"
          >
            ESC / Tutup
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
            {searchQuery ? `Hasil Pencarian (${filtered.length})` : 'Rekomendasi Terpopuler'}
          </span>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              <p className="text-sm">Tidak ditemukan hasil untuk "{searchQuery}"</p>
              <p className="text-xs text-stone-400 mt-1">Coba kata kunci lain seperti "sungai", "homestay", "ikan", atau "anyaman".</p>
            </div>
          ) : (
            filtered.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  onSelectSpot && onSelectSpot(item);
                  onClose();
                }}
                className="p-3 sm:p-4 rounded-2xl bg-cream-100 hover:bg-forest-900 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white text-forest-900 group-hover:bg-gold-500 group-hover:text-forest-950">
                        {item.type}
                      </span>
                      {item.category && (
                        <span className="text-xs text-stone-500 group-hover:text-stone-300">
                          {item.category}
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-forest-950 group-hover:text-white mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="text-right shrink-0 ml-3">
                  <span className="text-xs font-semibold text-forest-800 group-hover:text-gold-300 block">
                    {item.price}
                  </span>
                  <div className="inline-flex items-center text-[10px] text-stone-400 group-hover:text-stone-200 gap-0.5 mt-0.5">
                    <span>Lihat</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
