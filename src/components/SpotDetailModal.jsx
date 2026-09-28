import React from 'react';
import { X, Star, Calendar, MessageSquare, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { villageInfo } from '../data/villageData';

export default function SpotDetailModal({ spot, onClose, onBookDirect }) {
  if (!spot) return null;

  const handleWaInquiry = () => {
    const text = `Halo Pengelola Desa Wisata Sangkuliman, saya tertarik dengan "${spot.title || spot.name}". Mohon informasi ketersediaan jadwal, fasilitas, dan detail reservasinya. Terima kasih!`;
    const url = `https://wa.me/${villageInfo.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Cover Photo */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={spot.image}
            alt={spot.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-black/30"></div>
          
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-gold-500 text-forest-950 text-[10px] font-bold uppercase tracking-wider">
                {spot.category || 'Spot Terpilih'}
              </span>
              {spot.rating && (
                <span className="flex items-center gap-1 text-xs text-gold-300 font-semibold bg-black/40 px-2 py-0.5 rounded-full">
                  <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                  {spot.rating}
                </span>
              )}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-snug text-white">
              {spot.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">Deskripsi Lengkap</h4>
            <p className="text-stone-700 text-sm sm:text-base font-light leading-relaxed">
              {spot.description || spot.subtitle || 'Nikmati pengalaman otentik dan keindahan alam khas Desa Wisata Sangkuliman dengan fasilitas ramah dan berpemandu lokal.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-cream-100 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs text-stone-500 block font-light">Estimasi Tarif / Biaya</span>
              <span className="text-lg font-bold text-forest-950">{spot.price || 'Sesuai Paket'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-stone-500">
              <MapPin className="w-4 h-4 text-forest-800 shrink-0" />
              <span>Kawasan Desa Sangkuliman</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">Keunggulan & Fasilitas:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Didampingi pemandu warga lokal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Peralatan keamanan & kenyamanan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Spot foto estetis & asri</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dukungan langsung ekonomi desa</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleWaInquiry}
              className="flex-1 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4 text-gold-400" />
              <span>Tanyakan Ketersediaan via WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onBookDirect && onBookDirect();
              }}
              className="px-6 py-3.5 rounded-xl bg-cream-100 hover:bg-stone-200 text-forest-950 font-semibold text-sm border border-stone-300 transition-colors"
            >
              Form Reservasi
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
