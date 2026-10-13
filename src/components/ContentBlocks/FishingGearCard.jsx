import React from 'react';
import { Anchor, Fish, Sparkles, Compass } from 'lucide-react';

export default function FishingGearCard({
  title = "Alat Tangkap Tradisional Nelayan Sangkuliman",
  subtitle = "",
  gears = [],
  className = "",
}) {
  if (!gears || gears.length === 0) return null;

  return (
    <div className={`max-w-5xl mx-auto py-10 sm:py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-[10px] font-bold uppercase tracking-widest border border-forest-200 mb-2">
          <Anchor className="w-3 h-3 text-gold-600" />
          <span>KEARIFAN LOKAL KAMPUNG NELAYAN</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-stone-600 font-light mt-2">
            {subtitle}
          </p>
        )}
      </div>

      {/* Grid of gears */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gears.map((gear, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              {/* Badge & Name */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-forest-50 text-forest-800 border border-forest-200/60">
                  Sasaran: {gear.target}
                </span>
                <span className="w-7 h-7 rounded-full bg-cream-100 text-forest-900 flex items-center justify-center text-xs font-bold font-serif">
                  0{idx + 1}
                </span>
              </div>

              <h4 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors mb-2">
                {gear.name}
              </h4>

              <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-4">
                {gear.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-1.5 text-[11px] text-stone-500 font-light">
              <div>
                <span className="font-medium text-forest-900">Waktu Operasi: </span>
                <span>{gear.operation}</span>
              </div>
              <div>
                <span className="font-medium text-forest-900">Perlengkapan: </span>
                <span>{gear.tools}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
