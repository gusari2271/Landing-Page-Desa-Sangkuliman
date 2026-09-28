import React, { useState } from 'react';
import { 
  MessageSquareText, 
  MapPin, 
  FileDown, 
  Share2, 
  Check, 
  ExternalLink,
  QrCode,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { linkHubItems, villageInfo } from '../data/villageData';
import { InstagramIcon, YoutubeIcon, FacebookIcon, TikTokIcon } from './Icons';

const iconLookup = {
  MessageSquareText: MessageSquareText,
  MapPin: MapPin,
  Instagram: InstagramIcon,
  Video: TikTokIcon,
  Youtube: YoutubeIcon,
  Facebook: FacebookIcon,
  FileDown: FileDown,
};

export default function CentralLinkHub({ onOpenBrochure, onOpenReservation }) {
  const [copied, setCopied] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="linkhub" className="py-16 sm:py-24 bg-white relative">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#204E38_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 text-forest-900 border border-forest-200 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>LINK HUB RESMI SATU PINTU</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Satu Pintu Akses <span className="italic font-light text-forest-800">Wisata Sangkuliman</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light mt-3">
            Akses seluruh informasi resmi, reservasi WhatsApp, panduan rute navigasi, dan media sosial terverifikasi tanpa repot mencari link terpisah.
          </p>

          {/* Share & QR Code Quick Action Bar */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={handleShareLink}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold border border-stone-300 transition-all shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tautan Disalin!' : 'Salin Tautan Website'}</span>
            </button>

            <button
              onClick={() => setShowQrModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold border border-stone-300 transition-all shadow-sm"
            >
              <QrCode className="w-3.5 h-3.5 text-forest-900" />
              <span>Kode QR Desa</span>
            </button>
          </div>
        </div>

        {/* Link Hub Cards Stack */}
        <div className="space-y-3.5">
          {linkHubItems.map((item) => {
            const Icon = iconLookup[item.icon] || ExternalLink;
            const isHighlight = item.highlight;

            if (item.actionType === 'download') {
              return (
                <button
                  key={item.id}
                  onClick={onOpenBrochure}
                  className="w-full group text-left p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-forest-900 to-forest-950 text-white shadow-md hover:shadow-card-hover transition-all duration-300 flex items-center justify-between border border-forest-800 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-gold-300 shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-gold-200 transition-colors">
                          {item.title}
                        </h3>
                        {item.badge && (
                          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-gold-500 text-forest-950">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-stone-300 font-light mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 ml-3">
                    <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                      <FileDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              );
            }

            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={`group p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                  isHighlight
                    ? 'bg-gradient-to-r from-forest-900 via-forest-900 to-forest-800 text-white border-forest-700 shadow-md hover:shadow-card-hover hover:-translate-y-0.5'
                    : 'bg-cream-100 hover:bg-white text-forest-950 border-stone-200/80 shadow-soft hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                      isHighlight
                        ? 'bg-white/15 text-gold-300'
                        : 'bg-white text-forest-900 shadow-sm border border-stone-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3
                        className={`font-serif text-base sm:text-lg font-bold transition-colors ${
                          isHighlight ? 'text-white group-hover:text-gold-200' : 'text-forest-950 group-hover:text-forest-800'
                        }`}
                      >
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span
                          className={`hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md ${
                            isHighlight
                              ? 'bg-gold-500 text-forest-950'
                              : 'bg-stone-200 text-stone-700'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs sm:text-sm font-light mt-0.5 ${
                        isHighlight ? 'text-stone-300' : 'text-stone-600'
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 ml-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                      isHighlight
                        ? 'bg-white/15 text-white group-hover:bg-gold-500 group-hover:text-forest-950'
                        : 'bg-stone-100 text-stone-600 group-hover:bg-forest-900 group-hover:text-white'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Verification Guarantee Badge */}
        <div className="mt-8 p-4 rounded-2xl bg-cream-100 border border-stone-200/80 flex items-center justify-center gap-3 text-stone-600 text-xs text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>Seluruh tautan di atas dikelola resmi oleh Pokdarwis & Pengelola Desa Wisata Sangkuliman</span>
        </div>

      </div>

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl text-center relative border border-stone-200">
            <h3 className="font-serif text-xl font-bold text-forest-950 mb-1">Scan QR Desa Sangkuliman</h3>
            <p className="text-xs text-stone-500 mb-6">Pindai dengan kamera smartphone untuk membuka website resmi</p>
            
            <div className="bg-cream-100 p-6 rounded-2xl inline-block border border-stone-200 shadow-inner mb-6">
              <div className="w-48 h-48 bg-white p-3 rounded-xl flex items-center justify-center border border-stone-200">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://desasangkuliman.id"
                  alt="QR Code Desa Wisata Sangkuliman"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-sm font-semibold transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
