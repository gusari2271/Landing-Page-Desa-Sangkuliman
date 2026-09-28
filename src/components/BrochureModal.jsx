import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2, Map, ShieldCheck, Sparkles } from 'lucide-react';
import { villageInfo } from '../data/villageData';

export default function BrochureModal({ isOpen, onClose }) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-forest-950 text-white p-6 relative border-b border-forest-800 text-center">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-forest-900 text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-14 h-14 rounded-2xl bg-forest-900 text-gold-400 mx-auto flex items-center justify-center mb-3 border border-forest-700 shadow-md">
            <FileText className="w-7 h-7" />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-300 bg-forest-900 px-3 py-1 rounded-full border border-forest-700">
            E-BROCHURE RESMI DESA
          </span>
          <h3 className="font-serif text-2xl font-bold text-white mt-2">Buku Panduan Wisata Sangkuliman</h3>
          <p className="text-xs text-stone-300 font-light mt-1">
            Format Digital PDF (Resolusi Tinggi • Edisi Terbaru)
          </p>
        </div>

        {/* Content & Features */}
        <div className="p-6 space-y-4">
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">Isi Panduan Lengkap:</h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Peta Rute & Titik Spot Wisata Susur Sungai</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daftar Lengkap Homestay Warga & Kontak Pemilik</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daftar Menu Kuliner Tradisional & Warung Desa</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tata Tertib Kearifan Lokal & Tips Berkeliling</span>
              </li>
            </ul>
          </div>

          {/* Action Download */}
          <div className="pt-3">
            {downloaded ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="font-serif font-bold text-forest-950 text-sm">Brosur Berhasil Diunduh!</p>
                <p className="text-xs text-stone-500">Silakan cek folder unduhan perangkat Anda.</p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2 rounded-full bg-forest-900 text-white text-xs font-semibold"
                >
                  Selesai
                </button>
              </div>
            ) : (
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="w-full py-3.5 rounded-2xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Download className="w-4 h-4 text-gold-400" />
                <span>{downloading ? 'Menyiapkan Berkas PDF...' : 'Unduh E-Brochure PDF (Gratis)'}</span>
              </button>
            )}

            <p className="text-center text-[10px] text-stone-400 mt-3">
              Diterbitkan oleh Pokdarwis & Lembaga Pengelola Desa Wisata Sangkuliman
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
