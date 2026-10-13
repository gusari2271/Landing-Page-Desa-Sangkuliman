import React from 'react';

export default function FullTextBlock({ title, text, dropCap = false, className = "" }) {
  if (!text) return null;

  // Split into paragraphs if contains newline
  const paragraphs = text.split('\n\n').filter(p => p.trim());

  return (
    <div className={`max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6 ${className}`}>
      {title && (
        <div className="mb-6 text-center">
          <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-gold-600 block mb-2">
            NARASI & LATAR BELAKANG
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-forest-950 leading-tight">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-4 rounded-full"></div>
        </div>
      )}

      <div className="space-y-5 text-stone-700 font-sans text-base sm:text-lg font-light leading-relaxed">
        {paragraphs.map((para, index) => {
          if (index === 0 && dropCap) {
            const firstLetter = para.charAt(0);
            const restText = para.slice(1);
            return (
              <p key={index} className="text-justify">
                <span className="float-left text-5xl sm:text-6xl font-serif font-bold text-forest-900 pr-3 pt-1 leading-none">
                  {firstLetter}
                </span>
                {restText}
              </p>
            );
          }
          return (
            <p key={index} className="text-justify sm:text-left">
              {para}
            </p>
          );
        })}
      </div>
    </div>
  );
}
