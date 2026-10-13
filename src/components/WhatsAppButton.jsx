import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/villageData';

/**
 * Komponen Tombol WhatsApp Resmi Terpusat
 * Mengarahkan pengunjung langsung ke WhatsApp Pokdarwis BMT dengan pesan kontekstual.
 */
export default function WhatsAppButton({
  destinationName = "",
  label = "Informasi Lebih Lanjut",
  sublabel = "",
  variant = "primary", // 'primary' | 'secondary' | 'outline' | 'gold' | 'compact'
  className = "",
  showIcon = true,
}) {
  const url = getWhatsAppUrl(destinationName);

  const getVariantStyles = () => {
    switch (variant) {
      case 'gold':
        return 'bg-gold-500 hover:bg-gold-600 text-forest-950 shadow-md hover:shadow-lg font-bold border border-gold-400';
      case 'secondary':
        return 'bg-forest-800/90 hover:bg-forest-800 text-white shadow-md hover:shadow-lg font-semibold border border-forest-700';
      case 'outline':
        return 'bg-transparent hover:bg-forest-900 hover:text-white text-forest-900 border border-forest-900 font-semibold';
      case 'compact':
        return 'bg-forest-900 hover:bg-forest-800 text-white text-xs px-3.5 py-2 font-medium';
      case 'primary':
      default:
        return 'bg-forest-900 hover:bg-forest-800 text-white shadow-md hover:shadow-lg font-semibold border border-forest-700/60';
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Hubungi WhatsApp untuk informasi ${destinationName || 'Desa Wisata Sangkuliman'}`}
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 group ${getVariantStyles()} ${className}`}
    >
      {showIcon && (
        <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 transition-transform group-hover:scale-110" />
      )}
      <div className="text-left leading-tight">
        <span className="block text-sm sm:text-base">{label}</span>
        {sublabel && (
          <span className="block text-[10px] opacity-80 font-normal tracking-wide mt-0.5">
            {sublabel}
          </span>
        )}
      </div>
    </a>
  );
}
