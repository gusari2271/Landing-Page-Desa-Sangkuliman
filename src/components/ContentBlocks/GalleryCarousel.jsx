import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function GalleryCarousel({
  images = [
    "/images/pemukiman-1990/coverpemukiman.png",
    "/images/pemukiman-1990/1.jpg",
    "/images/pemukiman-1990/2.png",
    "/images/pemukiman-1990/3.jpg",
  ],
  caption = "",
  title = "Galeri Foto Eksplorasi",
  className = "",
  photoFit = "cover",
  photoPosition = "center",
  photoZoom = 1,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef(null);

  if (!images || images.length === 0) return null;

  const total = images.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext(); // swipe left -> next
    } else if (diff < -50) {
      handlePrev(); // swipe right -> prev
    }
    touchStartX.current = null;
  };

  return (
    <div className={`max-w-5xl mx-auto py-10 sm:py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 block mb-1">
          DOKUMENTASI FOTO
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
          {title}
        </h3>
        <p className="text-xs text-stone-500 font-light mt-1">
          Gunakan tombol panah atau geser di layar untuk melihat dokumentasi lainnya.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-card border border-stone-200 bg-forest-950 group select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-72 sm:h-96 md:h-[480px] w-full flex items-center justify-center overflow-hidden bg-forest-950">
          {/* Ambient blurred backdrop so any ratio photo looks beautiful */}
          {images && images[currentIndex] && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                src={images[currentIndex]}
                alt=""
                className="w-full h-full object-cover filter blur-3xl opacity-30 scale-110"
              />
            </div>
          )}

          <ImageWithFallback
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${title} - Foto ${currentIndex + 1}`}
            priority={true}
            className={`w-full h-full transition-all duration-500 relative z-10 cursor-pointer ${
              photoFit === 'contain' ? 'object-contain object-center' : 'object-cover'
            }`}
            containerClassName="w-full h-full"
            objectPosition={photoPosition || "center"}
            scale={photoZoom && photoZoom >= 0.8 ? photoZoom : 1}
            onClick={() => setLightboxOpen(true)}
          />

          {/* Overlay info */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
              {currentIndex + 1} / {total}
            </span>
            <button
              onClick={() => setLightboxOpen(true)}
              aria-label="Buka Foto Layar Penuh"
              className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Prev & Next Navigation Buttons */}
        {total > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Foto Sebelumnya"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-forest-950 flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 z-10"
            >
              <ChevronLeft className="w-6 h-6 -ml-0.5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Foto Selanjutnya"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-forest-950 flex items-center justify-center shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 z-10"
            >
              <ChevronRight className="w-6 h-6 -mr-0.5" />
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {total > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Lihat Foto ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'w-6 h-2 bg-gold-400'
                    : 'w-2 h-2 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {caption && (
        <p className="text-xs text-stone-500 font-light mt-3 text-center italic max-w-2xl mx-auto">
          {caption}
        </p>
      )}

      {/* Lightbox Fullscreen Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-lg animate-fadeIn">
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Tutup Layar Penuh"
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Prev & Next */}
          {total > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Foto Sebelumnya"
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Foto Selanjutnya"
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
            <ImageWithFallback
              key={`lightbox-${images[currentIndex]}`}
              src={images[currentIndex]}
              alt={`${title} - Layar Penuh ${currentIndex + 1}`}
              className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-xs text-stone-400 mt-3 font-light">
              Foto {currentIndex + 1} dari {total}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
