import { ShieldCheck, Heart, AlertCircle } from 'lucide-react';
import { responsibleTourism } from '../data/villageData';

export default function ResponsibleTourism() {
  return (
    <section id="etika" className="py-16 sm:py-20 bg-forest-950 text-white relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 text-gold-400 border border-forest-800 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>KODE ETIK PENGUNJUNG</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Wisata Bertanggung Jawab <br />
            <span className="italic font-light text-gold-300">Menjaga Pusaka Lestari Sangkuliman</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Keindahan alam dan kelangsungan satwa langka hanya dapat bertahan jika kita bersama-sama memperlakukan alam dengan rasa hormat dan kasih sayang.
          </p>
        </div>

        {/* 5 Etika Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {responsibleTourism.map((item, idx) => (
            <div
              key={idx}
              className="bg-forest-900/60 rounded-3xl p-6 sm:p-7 border border-forest-800 backdrop-blur-sm flex flex-col justify-between group hover:border-gold-500/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center border border-forest-700">
                    <span className="font-serif font-bold text-sm">0{idx + 1}</span>
                  </div>
                  <AlertCircle className="w-4 h-4 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-forest-800/80 text-[11px] text-stone-400 italic">
                Prinsip Pokdarwis BMT & Tim Desa Ramah Lingkungan
              </div>
            </div>
          ))}

          {/* Sixth Special Community Card */}
          <div className="bg-gradient-to-br from-gold-500/20 via-forest-900 to-forest-950 rounded-3xl p-6 sm:p-7 border border-gold-500/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-gold-500 text-forest-950 flex items-center justify-center font-bold mb-4">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gold-200 mb-2">
                Dukung Ekonomi Hijau Warga
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                Setiap kunjungan yang santun, pembelian kuliner Iwak Basumap, kue tradisional, serta sewa perahu warga langsung mendukung kesejahteraan nelayan dan konservasi perairan Mahakam.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-forest-800/80 text-[11px] text-gold-300 font-semibold">
              Kearifan Lokal Sangkuliman
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
