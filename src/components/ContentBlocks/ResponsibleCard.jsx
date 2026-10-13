import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export default function ResponsibleCard({
  title = "Wisata Bertanggung Jawab",
  items = [],
  className = "",
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`max-w-4xl mx-auto my-8 px-4 sm:px-6 ${className}`}>
      <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 shadow-xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-900 text-gold-400 flex items-center justify-center border border-emerald-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300 block">
                ETIKA KONSERVASI & PELESTARIAN
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {title}
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 font-light mb-6">
            Demi menjaga kelestarian keragaman hayati dan rasa aman satwa alami, mohon mematuhi tata tertib berikut saat berwisata:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-emerald-900/60 border border-emerald-800/80 flex items-start gap-3"
              >
                <AlertCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <p className="text-xs text-stone-200 leading-relaxed font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
