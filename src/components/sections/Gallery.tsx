import React, { useState, useEffect, useRef } from 'react';
import { Reveal } from '../Reveal';
import { LotusMotif, OrnamentalDivider } from '../Decorations';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: '/images/card1_hero.jpg', caption: 'The Divine Couple', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/event_cocktail.jpg', caption: 'Moonlit Mansarovar', span: '' },
  { src: '/images/event_mehendi.jpg', caption: 'Mehendi Adornments', span: '' },
  { src: '/images/story_meeting.jpg', caption: 'First Offering', span: '' },
  { src: '/images/event_varmala.jpg', caption: 'Varmala Garland Exchange', span: '' },
  { src: '/images/card6_venue.jpg', caption: 'Kailash Mandap', span: 'sm:col-span-2' },
  { src: '/images/event_sangeet.jpg', caption: 'Gandharva Symphony', span: '' },
  { src: '/images/event_haldi.jpg', caption: 'Haldi Radiance', span: '' },
  { src: '/images/card8_forever.jpg', caption: 'Forever Together', span: 'sm:col-span-2' },
];

export const Gallery: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goNext = () =>
    setLightbox((p) => (p === null ? p : (p + 1) % photos.length));
  const goPrev = () =>
    setLightbox((p) => (p === null ? p : (p - 1 + photos.length) % photos.length));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((p) => (p === null ? p : (p + 1) % photos.length));
      if (e.key === 'ArrowLeft') setLightbox((p) => (p === null ? p : (p - 1 + photos.length) % photos.length));
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  return (
    <section id="gallery" className="relative py-14 sm:py-20 lg:py-28 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <LotusMotif size={26} color="#8B1E2B" />
            <h2 className="mt-2 font-cinzel text-2xl sm:text-4xl font-bold uppercase tracking-[0.16em] text-[#2C1810]">
              Moments of Love
            </h2>
            <p className="mt-2 font-cormorant italic text-base sm:text-lg text-[#8A5D28]">
              Treasured glimpses of divine harmony
            </p>
            <OrnamentalDivider color="#B8860B" className="mt-4 max-w-xs mx-auto" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 auto-rows-[150px] sm:auto-rows-[170px] gap-3 sm:gap-4">
          {photos.map((photo, idx) => (
            <Reveal
              key={photo.src + idx}
              delay={idx * 70}
              direction="scale"
              className={`${photo.span} h-full`}
            >
              <button
                onClick={() => setLightbox(idx)}
                className="group relative w-full h-full rounded-xl overflow-hidden border border-[#D4AF37]/60 hover:border-[#8B1E2B] transition-colors duration-500 vintage-shadow bg-white"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0604]/85 via-transparent to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
                <span className="absolute bottom-2.5 left-3 right-3 text-left font-cinzel text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#F2D06B] translate-y-1.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {photo.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/92 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 text-amber-100 hover:bg-[#8B1E2B] transition-colors"
            aria-label="Close gallery"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>

          <button
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-amber-100 hover:bg-[#8B1E2B] transition-colors"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <figure
            className="max-w-4xl w-full px-12 sm:px-0"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX.current;
              if (delta < -40) goNext();
              else if (delta > 40) goPrev();
              touchStartX.current = null;
            }}
          >
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].caption}
              className="w-full max-h-[68vh] sm:max-h-[76vh] object-contain rounded-xl border border-[#D4AF37]/60 shadow-2xl select-none"
              draggable={false}
            />
            <figcaption className="mt-4 text-center font-cinzel text-xs uppercase tracking-[0.28em] text-[#F2D06B]">
              {photos[lightbox].caption}
            </figcaption>
            <p className="mt-1.5 text-center font-cinzel text-[10px] tracking-[0.3em] text-amber-100/50">
              {lightbox + 1} / {photos.length}
            </p>
          </figure>

          <button
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-amber-100 hover:bg-[#8B1E2B] transition-colors"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};
