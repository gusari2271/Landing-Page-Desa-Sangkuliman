import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowUpRight, Compass, Utensils } from 'lucide-react';
import { destinations, culinaryData } from '../data/villageData';
import ImageWithFallback from './ContentBlocks/ImageWithFallback';

export default function SearchModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  // Indeks pencarian gabungan dari destinasi dan kuliner
  const searchableDestinations = destinations.map((d) => ({
    title: d.name,
    category: d.category,
    description: d.summary || d.tagline,
    image: d.cover,
    link: `/destinasi/${d.slug}`,
    type: 'Destinasi Wisata',
  }));

  const searchableCulinary = [
    {
      title: culinaryData.iconic.name,
      category: culinaryData.iconic.category,
      description: culinaryData.iconic.description,
      image: culinaryData.iconic.photo,
      link: '/kuliner',
      type: 'Kuliner Khas',
    },
    ...culinaryData.kueBasah.map((k) => ({
      title: k.name,
      category: k.category,
      description: k.description,
      image: k.photo,
      link: '/kuliner',
      type: 'Kue Basah',
    })),
    ...culinaryData.kueKering.map((k) => ({
      title: k.name,
      category: k.category,
      description: k.description,
      image: k.photo,
      link: '/kuliner',
      type: 'Kue Kering',
    })),
  ];

  const allSearchable = [...searchableDestinations, ...searchableCulinary];

  const filtered = searchQuery.trim() === ''
    ? allSearchable.slice(0, 6)
    : allSearchable.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  const handleSelectItem = (item) => {
    navigate(item.link);
    onClose();
  };

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
            placeholder="Cari Pesut Mahakam, Tari Jepen, Tanjung Hallat, Iwak Basumap..."
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
            Tutup
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
            {searchQuery ? `Hasil Pencarian (${filtered.length})` : 'Pilihan Destinasi & Kuliner'}
          </span>

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              <p className="text-sm">Tidak ditemukan hasil untuk "{searchQuery}"</p>
              <p className="text-xs text-stone-400 mt-1">Coba kata kunci seperti "pesut", "tanjung", "hallat", "luah", "bekantan", atau "kue".</p>
            </div>
          ) : (
            filtered.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelectItem(item)}
                className="p-3 sm:p-4 rounded-2xl bg-cream-100 hover:bg-forest-900 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
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

                <div className="text-right shrink-0 ml-3 flex items-center text-xs text-forest-900 group-hover:text-gold-300 gap-1">
                  <span>Lihat</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
