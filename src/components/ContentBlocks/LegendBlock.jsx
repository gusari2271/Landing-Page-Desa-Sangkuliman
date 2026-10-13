import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export default function LegendBlock({
  title = "Legenda / Cerita Rakyat",
  badge = "Cerita Rakyat & Mitos Lokal",
  text = "",
  className = "",
}) {
  if (!text) return null;

  const paragraphs = text.split('\n\n').filter(p => p.trim());

  return (
    <div className={`max-w-4xl mx-auto my-12 px-4 sm:px-6 ${className}`}>
      <div className="bg-gradient-to-br from-[#FAF6ED] via-[#F5EFE0] to-[#EFE6D2] rounded-3xl p-6 sm:p-10 border border-[#DCCBB5] shadow-card relative overflow-hidden">
        {/* Subtle decorative watermark */}
        <div className="absolute top-4 right-4 text-[#D7C4A5]/30 pointer-events-none select-none">
          <BookOpen className="w-32 h-32" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5D7C0] text-forest-950 text-[10px] font-bold uppercase tracking-widest w-fit mb-3 border border-[#D5C2A5]">
            <Sparkles className="w-3.5 h-3.5 text-gold-700" />
            <span>{badge}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950 mb-6 leading-snug">
            {title}
          </h3>

          <div className="space-y-4 text-stone-800 font-sans text-sm sm:text-base leading-relaxed font-normal">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-justify sm:text-left">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#DCCBB5] text-[11px] text-stone-600 italic">
            * Dituturkan secara turun-temurun oleh para tetua dan nelayan Danau Saguntur, Desa Sangkuliman.
          </div>
        </div>
      </div>
    </div>
  );
}
