import React, { useEffect, useRef, useState } from 'react';
import ImageWithFallback from './ImageWithFallback';

export default function SplitBlock({
  imagePosition = "left", // "left" | "right"
  images = [],
  title,
  text,
  caption,
  className = "",
  photoPosition = "center",
  photoZoom = 1,
  photoFit = "cover",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const imageSrc = images && images.length > 0 ? images[0] : null;
  const isImageLeft = imagePosition === "left";

  return (
    <div
      ref={blockRef}
      className={`max-w-6xl mx-auto py-10 sm:py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* Photo Column - On mobile, always appears first */}
        <div
          className={`lg:col-span-6 order-1 ${
            isImageLeft ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-stone-200/80 bg-forest-950 group">
            {/* Ambient blurred backdrop if photoFit is contain */}
            {photoFit === 'contain' && imageSrc && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  src={imageSrc}
                  alt=""
                  className="w-full h-full object-cover filter blur-2xl opacity-35 scale-110"
                />
              </div>
            )}
            <ImageWithFallback
              src={imageSrc}
              alt={title || "Dokumentasi Sangkuliman"}
              className={`w-full h-80 sm:h-96 md:h-[420px] ${
                photoFit === 'contain' ? 'object-contain object-center' : 'object-cover'
              }`}
              caption={caption}
              containerClassName="w-full h-full"
              objectPosition={photoPosition || "center"}
              scale={photoZoom && photoZoom >= 0.8 ? photoZoom : 1}
            />
            {/* Subtle aesthetic accent border */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Text Column */}
        <div
          className={`lg:col-span-6 order-2 space-y-4 ${
            isImageLeft ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-[10px] font-bold uppercase tracking-widest border border-forest-200/60">
            <span>DOKUMENTASI & KEARIFAN</span>
          </div>

          {title && (
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950 leading-snug">
              {title}
            </h3>
          )}

          <div className="text-stone-600 text-sm sm:text-base font-light leading-relaxed space-y-3">
            {text && text.split('\n\n').map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
