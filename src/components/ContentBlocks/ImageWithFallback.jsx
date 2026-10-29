import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';

export default function ImageWithFallback({
  src,
  alt = "Dokumentasi Desa Wisata Sangkuliman",
  className = "",
  containerClassName = "",
  caption = "",
  onClick,
  objectPosition,
  scale,
  style = {},
  priority = false,
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // Periksa apakah gambar sudah selesai dimuat atau ada di cache browser
  useEffect(() => {
    setHasError(false);
    if (imgRef.current) {
      if (imgRef.current.complete) {
        if (imgRef.current.naturalWidth > 0) {
          setIsLoaded(true);
        } else if (imgRef.current.naturalWidth === 0 && imgRef.current.src) {
          setHasError(true);
        }
      } else {
        setIsLoaded(false);
      }
    } else {
      setIsLoaded(false);
    }
  }, [src]);

  // Jika src kosong atau file tidak ditemukan saat dimuat
  const showPlaceholder = !src || hasError;

  const imageStyle = {
    ...(objectPosition ? { objectPosition } : {}),
    ...(scale && scale !== 1 ? { transform: `scale(${scale})`, transformOrigin: objectPosition || 'center' } : {}),
    ...style,
  };

  return (
    <figure className={`relative overflow-hidden group w-full h-full ${containerClassName}`}>
      {showPlaceholder ? (
        <div
          onClick={onClick}
          className={`w-full h-full min-h-[220px] bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 flex flex-col items-center justify-center p-6 text-center text-white relative select-none border border-forest-700/50 ${
            onClick ? 'cursor-pointer' : ''
          } ${className}`}
        >
          {/* Subtle nature pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#c59353_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-gold-400 mb-3 border border-white/20 shadow-sm transition-transform group-hover:scale-105">
              <Camera className="w-6 h-6" />
            </div>
            <p className="font-serif text-sm font-semibold text-gold-200 tracking-wide line-clamp-2">
              {alt || "Dokumentasi Desa Wisata Sangkuliman"}
            </p>
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300/80 bg-forest-950/60 px-3 py-1 rounded-full mt-2 border border-forest-700">
              Desa Ekowisata Sangkuliman
            </span>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full overflow-hidden">
          <img
            ref={(node) => {
              imgRef.current = node;
              if (node && node.complete) {
                if (node.naturalWidth > 0 && !isLoaded) {
                  setIsLoaded(true);
                } else if (node.naturalWidth === 0 && node.src && !hasError) {
                  setHasError(true);
                }
              }
            }}
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onLoad={() => {
              setIsLoaded(true);
              setHasError(false);
            }}
            onError={() => {
              setHasError(true);
              setIsLoaded(false);
            }}
            onClick={onClick}
            style={imageStyle}
            className={`w-full h-full object-cover transition-opacity duration-500 group-hover:scale-105 ${
              onClick ? 'cursor-pointer' : ''
            } ${isLoaded ? 'opacity-100' : (priority ? 'opacity-95' : 'opacity-0')} ${className}`}
          />
          {!isLoaded && !hasError && !priority && (
            <div className="absolute inset-0 bg-forest-900/30 animate-pulse pointer-events-none"></div>
          )}
        </div>
      )}

      {caption && (
        <figcaption className="text-xs text-stone-500 font-light mt-2 px-1 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
