import React from 'react';
import { Waves, Droplets, Sun, CheckCircle2 } from 'lucide-react';
import { waterSeasons } from '../../data/villageData';

export default function WaterSeasonsBlock({
  title = "Tiga Fase Perubahan Air Danau Semayang",
  subtitle = "Kelompok Sadar Wisata BMT membagi siklus alam danau menjadi tiga fase utama:",
  className = "",
}) {
  const icons = [Waves, Droplets, Sun];

  return (
    <div className={`max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 block mb-1">
          SIKLUS ALAM DANAU
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-stone-600 font-light mt-1.5">
            {subtitle}
          </p>
        )}
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {waterSeasons.map((season, idx) => {
          const Icon = icons[idx] || Waves;
          return (
            <div
              key={season.id}
              className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold-100 text-forest-950">
                    Fase {idx + 1}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-bold text-forest-950 group-hover:text-forest-800 transition-colors mb-1">
                  {season.title}
                </h4>

                <span className="text-xs font-semibold text-gold-700 block mb-2">
                  {season.badge}
                </span>

                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  {season.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {season.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] text-forest-900 font-medium">
                <span className="text-stone-400 block font-light">Aktivitas Utama:</span>
                <span>{season.bestActivity}</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
