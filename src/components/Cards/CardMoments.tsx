import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import confetti from 'canvas-confetti';
import { X, ChevronLeft, ChevronRight, ZoomIn, Heart } from 'lucide-react';
import { LotusMotif } from '../Decorations';
import { playTempleBell } from '../../utils/audio';

interface MemoryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  tagline: string;
  story: string;
  pos: string;
  floatClass: string;
}

const MEMORIES: MemoryItem[] = [
  {
    id: 'tilak',
    src: '/images/event_tilak.webp',
    title: 'Sacred Tilak',
    subtitle: 'Anointing of Mahadev',
    tagline: 'Vedic Saffron & Chandan Consecration',
    story:
      'King Himavat and the Sapta Rishis apply sacred sandalwood, Kashmiri saffron, and holy vibhuti upon Lord Shiva’s forehead on Mount Kailash, formally honoring Him as the divine bridegroom of the cosmos.',
    pos: 'object-center',
    floatClass: 'animate-gentle-float-1',
  },
  {
    id: 'mansarovar',
    src: '/images/event_cocktail.webp',
    title: 'Mansarovar',
    subtitle: 'Sacred Lantern Waters',
    tagline: 'Reflections of Eternal Peace & Serenity',
    story:
      'By the crystalline shores of holy Lake Mansarovar, where thousands of floating golden lamps illuminate the turquoise waters, reflecting Mount Kailash beneath the celestial stars in quiet divine harmony.',
    pos: 'object-center',
    floatClass: 'animate-gentle-float-2',
  },
  {
    id: 'sangeet',
    src: '/images/event_sangeet.webp',
    title: 'Gandharva Symphony',
    subtitle: 'Celestial Dance of Bliss',
    tagline: 'Veenas, Flutes & Ananda Tandava',
    story:
      'The cosmic musical celebration where celestial Gandharvas play sacred veenas and flutes, apsaras perform classical dances, and Lord Shiva performs the joyful Ananda Tandava as all the heavens rejoice.',
    pos: 'object-center',
    floatClass: 'animate-gentle-float-3',
  },
  {
    id: 'baraat',
    src: '/images/event_baraat.webp',
    title: 'Divine Baraat',
    subtitle: 'Sacred Nandi Procession',
    tagline: 'Cosmic Journey Across the Heavens',
    story:
      'Lord Shiva rides the sacred flower-adorned bull Nandi, accompanied by Lord Vishnu on Garuda, Lord Brahma on Hamsa, celestial elephants, resonant conch shells, and joyous dancing Ganas.',
    pos: 'object-center',
    floatClass: 'animate-gentle-float-4',
  },
];

interface CardMomentsProps {
  onClick?: () => void;
  onOpenGallery?: () => void;
}

export const CardMoments: React.FC<CardMomentsProps> = ({ onClick }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [blessed, setBlessed] = useState<Record<number, boolean>>({});

  const openMemory = (idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIdx(idx);

    try {
      const x = e ? e.clientX / window.innerWidth : 0.5;
      const y = e ? e.clientY / window.innerHeight : 0.5;
      confetti({
        particleCount: 38,
        spread: 65,
        startVelocity: 24,
        origin: { x, y },
        colors: ['#D4AF37', '#FFB703', '#8B1E2B', '#FFF275', '#FFFFFF'],
      });
    } catch {
      // Fallback
    }
  };

  const closeMemory = () => {
    setSelectedIdx(null);
  };

  const nextMemory = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      const next = (selectedIdx + 1) % MEMORIES.length;
      setSelectedIdx(next);
    }
  };

  const prevMemory = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      const prev = (selectedIdx - 1 + MEMORIES.length) % MEMORIES.length;
      setSelectedIdx(prev);
    }
  };

  const toggleBlessing = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    // Play bell sound on heart tapped
    playTempleBell();
    setBlessed((prev) => ({ ...prev, [idx]: !prev[idx] }));
    try {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 40,
        spread: 75,
        startVelocity: 26,
        origin: { x, y },
        colors: ['#E63946', '#FFB703', '#D4AF37', '#FFF3B0'],
      });
    } catch {
      // Fallback
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMemory();
      if (e.key === 'ArrowRight') setSelectedIdx((prev) => (prev !== null ? (prev + 1) % MEMORIES.length : null));
      if (e.key === 'ArrowLeft') setSelectedIdx((prev) => (prev !== null ? (prev - 1 + MEMORIES.length) % MEMORIES.length : null));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  const activeMemory = selectedIdx !== null ? MEMORIES[selectedIdx] : null;

  return (
    <>
      <div
        onClick={onClick}
        className={`group relative overflow-hidden rounded-xl border border-[#D4AF37]/50 bg-[#FAF5EB] shadow-2xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(212,175,55,0.3)] hover:border-[#D4AF37] p-2.5 sm:p-3 flex flex-col justify-between ${
          onClick ? 'cursor-pointer' : ''
        }`}
        style={{
          aspectRatio: '9 / 14',
        }}
      >
        {/* Outer Fine Inset Borders */}
        <div className="absolute inset-1.5 z-10 pointer-events-none rounded-lg border border-[#C29B38]/40" />
        <div className="absolute inset-2.5 z-10 pointer-events-none rounded-md border border-[#E6C575]/25" />

        {/* Corner Ornaments */}
        <div className="absolute top-2 left-2 z-10 w-4 h-4 border-t-2 border-l-2 border-[#B37E28] pointer-events-none" />
        <div className="absolute top-2 right-2 z-10 w-4 h-4 border-t-2 border-r-2 border-[#B37E28] pointer-events-none" />
        <div className="absolute bottom-2 left-2 z-10 w-4 h-4 border-b-2 border-l-2 border-[#B37E28] pointer-events-none" />
        <div className="absolute bottom-2 right-2 z-10 w-4 h-4 border-b-2 border-r-2 border-[#B37E28] pointer-events-none" />

        {/* Decorative Golden Vines Background SVGs */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
          viewBox="0 0 300 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 20 Q 40 60, 20 120" stroke="#C29B38" strokeWidth="1.5" />
          <path d="M290 20 Q 260 80, 280 140" stroke="#C29B38" strokeWidth="1.5" />
          <path d="M15 400 Q 45 440, 30 470" stroke="#C29B38" strokeWidth="1.5" />
          <path d="M285 390 Q 255 430, 270 470" stroke="#C29B38" strokeWidth="1.5" />
        </svg>

        {/* Top Header with Golden Shimmer */}
        <div className="relative text-center pt-1 pb-0.5 z-10">
          <LotusMotif size={16} color="#8A5D28" className="mb-0.5 animate-lotus-breathe" />
          <h2 className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.26em] text-[#6E4A28] uppercase leading-tight">
            MEMORIES
          </h2>
          <h3 className="font-cinzel text-base sm:text-lg font-bold tracking-[0.22em] text-[#2C1810] uppercase leading-tight">
            OF LOVE
          </h3>
          <div className="flex items-center justify-center gap-1 mt-0.5">
            <span className="h-[0.5px] w-5 bg-[#C29B38]" />
            <LotusMotif size={12} color="#8A5D28" />
            <span className="h-[0.5px] w-5 bg-[#C29B38]" />
          </div>
        </div>

        {/* 2x2 Animated Floating Memories Collage */}
        <div className="relative z-10 flex-1 grid grid-cols-2 gap-2 sm:gap-2.5 my-1.5 px-0.5 items-center">
          {MEMORIES.map((m, idx) => (
            <button
              key={m.id}
              onClick={(e) => openMemory(idx, e)}
              className={`relative group/pic text-left p-0 bg-transparent border-0 focus:outline-none cursor-pointer ${m.floatClass} hover:!scale-[1.05] hover:!rotate-0 hover:z-30 transition-all duration-300`}
              title={`Tap to open ${m.title} in full view`}
              aria-label={`Open photo of ${m.title}`}
            >
              {/* Polaroid-style gilded card container */}
              <div className="bg-[#FFFDF7] p-1.5 pb-2 rounded-lg border border-[#C29B38]/80 shadow-md group-hover/pic:shadow-[0_12px_24px_rgba(212,175,55,0.4)] group-hover/pic:border-[#D4AF37] transition-all duration-300">
                <div className="relative w-full aspect-[4/3] rounded-[3px] overflow-hidden bg-[#F3EAD7]">
                  <img
                    src={m.src}
                    alt={m.title}
                    className={`w-full h-full object-cover ${m.pos} transition-transform duration-700 ease-out group-hover/pic:scale-110`}
                  />

                  {/* Gentle hover expansion indicator */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/pic:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 text-[#8B1E2B] font-cinzel text-[7.5px] font-bold tracking-wider shadow">
                      <ZoomIn className="w-2.5 h-2.5" />
                      <span>OPEN</span>
                    </span>
                  </div>

                  {/* Corner sparkle */}
                  <span className="absolute top-1 right-1 text-white text-[8px] drop-shadow opacity-75 group-hover/pic:opacity-100 animate-sparkle-twinkle">
                    ✦
                  </span>
                </div>

                {/* Caption below photo */}
                <div className="mt-1 text-center">
                  <span className="font-cinzel text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.14em] text-[#3D2311] block uppercase leading-tight truncate">
                    {m.title}
                  </span>
                  <span className="font-cormorant italic text-[8.5px] sm:text-[9px] text-[#8A5D28] block leading-tight truncate">
                    {m.subtitle}
                  </span>
                </div>
              </div>
            </button>
          ))}

          {/* Center Golden Lotus Emblem with Breathing Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none drop-shadow-md">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FFFDF7] via-[#FFF3D1] to-[#FFFDF7] border border-[#D4AF37] flex items-center justify-center shadow-md animate-lotus-breathe">
              <span className="text-[#8A5D28] text-[10px] leading-none animate-sparkle-twinkle">✦</span>
            </div>
          </div>
        </div>

        {/* Bottom Flourish & Tap Prompt */}
        <div className="relative text-center py-0.5 z-10 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-1.5">
            <span className="h-[0.5px] w-4 bg-[#C29B38]/50" />
            <span className="font-cormorant italic text-[9.5px] sm:text-[10.5px] text-[#8A5D28]">
              Tap any memory to open full sacred darshan
            </span>
            <span className="h-[0.5px] w-4 bg-[#C29B38]/50" />
          </div>
        </div>

        {/* Hover glow ring */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-[#D4AF37]/60 rounded-xl" />
      </div>

      {/* ================= HIGH RESOLUTION LIGHTBOX / MODAL ================= */}
      {activeMemory &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={closeMemory}
          >
            {/* Modal Card */}
            <div
              className="relative w-full max-w-lg bg-[#FFFDF7] rounded-2xl border-2 border-[#D4AF37] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden animate-modal-in flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Ornate Bar */}
              <div className="relative flex items-center justify-between px-4 py-3 border-b border-[#D4AF37]/40 bg-gradient-to-r from-[#FAF5EB] via-[#FFFDF7] to-[#FAF5EB]">
                <div className="flex items-center gap-2">
                  <LotusMotif size={18} color="#8A5D28" className="animate-lotus-breathe" />
                  <div>
                    <h4 className="font-cinzel text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#8A5D28]">
                      MEMORIES OF LOVE
                    </h4>
                    <p className="font-cormorant italic text-[11px] text-[#6E4A28] leading-none">
                      Sacred Moment {(selectedIdx ?? 0) + 1} of {MEMORIES.length}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeMemory}
                  className="w-8 h-8 rounded-full border border-[#D4AF37]/70 bg-white hover:bg-[#8B1E2B] hover:text-white hover:border-[#8B1E2B] text-[#5C3A1E] transition-all flex items-center justify-center shadow-sm cursor-pointer"
                  title="Close (Esc)"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Image with Navigation Controls */}
              <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] bg-[#120B08] overflow-hidden group/view">
                <img
                  src={activeMemory.src}
                  alt={activeMemory.title}
                  className={`w-full h-full object-cover ${activeMemory.pos} transition-transform duration-700 ease-out`}
                />

                {/* Ambient Radial Golden Aura */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

                {/* Prev Arrow */}
                <button
                  onClick={prevMemory}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#8B1E2B] text-white border border-[#D4AF37]/80 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg cursor-pointer"
                  title="Previous Memory (Left Arrow)"
                  aria-label="Previous memory"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Arrow */}
                <button
                  onClick={nextMemory}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#8B1E2B] text-white border border-[#D4AF37]/80 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-lg cursor-pointer"
                  title="Next Memory (Right Arrow)"
                  aria-label="Next memory"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Floating Celestial Badge */}
                <span className="absolute bottom-3 left-4 text-[#FFF3B0] font-cinzel text-[10px] tracking-widest uppercase bg-black/60 px-2.5 py-1 rounded-full border border-[#D4AF37]/50 backdrop-blur">
                  ✦ {activeMemory.title} ✦
                </span>
              </div>

              {/* Memory Story Content Section */}
              <div className="p-4 sm:p-5 overflow-y-auto bg-gradient-to-b from-[#FFFDF7] to-[#FAF5EB]">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold uppercase tracking-[0.16em] text-[#2C1810]">
                      {activeMemory.title}
                    </h3>
                    <p className="font-cinzel text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] mt-0.5">
                      {activeMemory.subtitle}
                    </p>
                  </div>

                  {/* Heart / Blessing Button */}
                  <button
                    onClick={(e) => toggleBlessing(selectedIdx ?? 0, e)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-xs font-cinzel font-bold uppercase tracking-wider cursor-pointer ${
                      blessed[selectedIdx ?? 0]
                        ? 'bg-[#8B1E2B] text-white border-[#8B1E2B] shadow-md'
                        : 'bg-white text-[#8A5D28] border-[#D4AF37] hover:border-[#8B1E2B]'
                    }`}
                    title="Shower blessing on this memory"
                  >
                    <Heart className={`w-3.5 h-3.5 ${blessed[selectedIdx ?? 0] ? 'fill-current text-white' : 'text-[#8B1E2B]'}`} />
                    <span>{blessed[selectedIdx ?? 0] ? 'Blessed 🪔' : 'Bless'}</span>
                  </button>
                </div>

                {/* Poetic Lore */}
                <p className="font-cormorant italic text-sm sm:text-base text-[#6E4A28] mt-2.5 leading-relaxed">
                  “{activeMemory.tagline}”
                </p>
                <p className="font-cormorant text-xs sm:text-sm text-[#3E2719] mt-2 leading-relaxed">
                  {activeMemory.story}
                </p>

                {/* Quick Thumbnail Navigation Strip */}
                <div className="mt-4 pt-3 border-t border-[#D4AF37]/30 flex items-center justify-center gap-2 sm:gap-3">
                  {MEMORIES.map((m, idx) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setSelectedIdx(idx);
                      }}
                      className={`relative w-12 h-10 sm:w-14 sm:h-11 rounded border overflow-hidden transition-all cursor-pointer ${
                        selectedIdx === idx
                          ? 'border-2 border-[#8B1E2B] ring-2 ring-[#D4AF37] scale-105 shadow-md'
                          : 'border-[#D4AF37]/60 opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                      title={m.title}
                    >
                      <img src={m.src} alt={m.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Footer Flourish */}
              <div className="py-2.5 bg-[#FAF5EB] border-t border-[#D4AF37]/30 text-center">
                <span className="font-cinzel text-[8.5px] uppercase tracking-[0.24em] text-[#8A5D28]">
                  ॐ नमः शिवाय · सदा शिवो रक्षतु
                </span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
