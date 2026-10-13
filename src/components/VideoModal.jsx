import React from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '../data/villageData';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-7xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup Video"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Container */}
        <div className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/LeyZZOXV2cs?si=Sw7uw3vNpE273VCx?autoplay=1"
            title="Video Profil Desa Wisata Sangkuliman"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Footer info in video modal */}
        <div className="p-4 sm:p-5 bg-forest-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="font-serif text-base font-bold text-gold-300">Desa Wisata Sangkuliman - Pesona Alam & Budaya</h4>
            <p className="text-xs text-stone-300 font-light">Dokumenter pesona alam pedesaan, kearifan lokal, dan susur sungai asri</p>
          </div>
          <a
            href={siteConfig.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-gold-400 hover:text-white underline self-start sm:self-auto"
          >
            Buka di YouTube Channel →
          </a>
        </div>

      </div>
    </div>
  );
}
