import React, { useState, useEffect, useRef } from 'react';
import { X, Clock, MapPin, Shirt, ChevronLeft, ChevronRight } from 'lucide-react';
import { LotusMotif, OrnamentalDivider } from './Decorations';
import { ALL_15_EVENTS, CeremonyKey, CeremonyEvent } from '../data/ceremoniesData';

export type CeremonyTab = CeremonyKey;

interface CeremoniesModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCeremony?: CeremonyKey;
}

export const CeremoniesModal: React.FC<CeremoniesModalProps> = ({
  isOpen,
  onClose,
  defaultCeremony = 'wedding',
}) => {
  const [selectedKey, setSelectedKey] = useState<CeremonyKey>(defaultCeremony);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (defaultCeremony) {
      setSelectedKey(defaultCeremony);
    }
  }, [defaultCeremony, isOpen]);

  useEffect(() => {
    if (isOpen && activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [selectedKey, isOpen]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cur: CeremonyEvent =
    ALL_15_EVENTS.find((e) => e.key === selectedKey) ?? ALL_15_EVENTS[11];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-5xl max-h-[94svh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-[#FAF5EB] border-2 border-b-0 sm:border-b-2 border-[#D4AF37] shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-[#2C1810] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile bottom-sheet grabber */}
        <div aria-hidden="true" className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[#B8860B]/60 z-30" />
        {/* Header */}
        <div className="relative p-5 sm:p-7 bg-gradient-to-b from-[#F2E5CE] to-[#FAF5EB] border-b border-[#D4AF37]/40 flex flex-col items-center text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#2C1810]/70 text-[#FFF2CE] hover:bg-[#8B1E2B] transition-colors shadow-md z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <LotusMotif size={24} color="#8A5D28" className="mb-1" />
          <p className="font-cinzel text-xs tracking-[0.28em] text-[#8A5D28] uppercase font-bold">
            SACRED WEDDING ITINERARY · ALL 15 EVENTS
          </p>
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold tracking-wider text-[#2C1810] uppercase mt-1">
            VEDIC CEREMONIES &amp; CELEBRATIONS
          </h2>
          <p className="font-cormorant italic text-xs sm:text-sm text-[#6E4A28] mt-0.5">
            Complete liturgical timeline honoring the cosmic union of Shiva &amp; Shakti
          </p>
          <OrnamentalDivider className="mt-2.5 max-w-xs" />
        </div>

        {/* All 15 ceremonies — Horizontal Image Scroll Strip */}
        <div className="relative bg-[#F4E9D5] border-b border-[#D4AF37]/40 px-2 py-3 flex items-center">
          <button
            onClick={scrollLeft}
            aria-label="Scroll ceremonies left"
            className="hidden sm:flex z-10 w-8 h-8 rounded-full bg-white/95 border border-[#D4AF37] text-[#8B1E2B] shadow-md items-center justify-center hover:bg-[#8B1E2B] hover:text-white transition-all duration-200 shrink-0 cursor-pointer -mr-2"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth px-3 sm:px-4 py-1 w-full snap-x snap-mandatory"
          >
            {ALL_15_EVENTS.map((ev) => {
              const isSelected = selectedKey === ev.key;
              return (
                <button
                  key={ev.key}
                  ref={isSelected ? activeItemRef : null}
                  onClick={() => setSelectedKey(ev.key)}
                  className={`group snap-center shrink-0 flex items-center gap-2.5 p-1.5 pr-3.5 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                    isSelected
                      ? 'bg-[#8B1E2B] text-amber-100 border-[#D4AF37] shadow-lg ring-2 ring-[#D4AF37] scale-[1.02]'
                      : 'bg-white/95 text-[#3D2311] border-[#D4AF37]/50 hover:bg-[#FAF3E3] hover:border-[#8B1E2B]/50 hover:shadow-sm'
                  }`}
                >
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-[#D4AF37]/70 shrink-0 shadow-inner bg-[#1A0E08]">
                    <img
                      src={ev.image}
                      alt={ev.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span
                      className={`absolute top-1 left-1 px-1.5 py-0.5 rounded font-cinzel text-[8.5px] font-bold shadow ${
                        isSelected ? 'bg-amber-100 text-[#8B1E2B]' : 'bg-[#8B1E2B] text-amber-100'
                      }`}
                    >
                      #{ev.number}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`font-cinzel text-[11px] sm:text-xs font-bold uppercase tracking-wider leading-tight truncate ${
                        isSelected ? 'text-[#FFF2CE]' : 'text-[#2C1810] group-hover:text-[#8B1E2B]'
                      }`}
                    >
                      {ev.name}
                    </span>
                    <span
                      className={`font-cormorant text-[11px] sm:text-xs italic leading-tight truncate mt-0.5 ${
                        isSelected ? 'text-amber-200/90' : 'text-[#8A5D28]'
                      }`}>
                      {ev.day}
                    </span>
                    <span
                      className={`font-cinzel text-[8.5px] uppercase tracking-wider mt-0.5 leading-tight truncate ${
                        isSelected ? 'text-amber-100/75' : 'text-[#8A5D28]/70'
                      }`}
                    >
                      {ev.time.split('·')[0].trim()}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={scrollRight}
            aria-label="Scroll ceremonies right"
            className="hidden sm:flex z-10 w-8 h-8 rounded-full bg-white/95 border border-[#D4AF37] text-[#8B1E2B] shadow-md items-center justify-center hover:bg-[#8B1E2B] hover:text-white transition-all duration-200 shrink-0 cursor-pointer -ml-2"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="p-5 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Event Image */}
            <div className="relative md:col-span-5 min-h-[260px] sm:min-h-[340px] rounded-xl overflow-hidden border border-[#D4AF37] shadow-lg bg-[#140B07]">
              <img
                src={cur.image}
                alt={cur.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
              <div className="absolute top-3 left-3 bg-[#8B1E2B] text-amber-100 text-[10px] font-cinzel font-bold px-2.5 py-0.5 rounded-full border border-[#D4AF37]/60">
                Event #{cur.number} of 15
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="font-cinzel text-xs font-bold text-amber-200">
                  {cur.day} · {cur.date}
                </p>
                <h4 className="font-cinzel text-xl font-bold uppercase">{cur.name}</h4>
              </div>
            </div>

            {/* Event Details */}
            <div className="md:col-span-7 space-y-4 flex flex-col justify-between">
              <div>
                <p className="font-cinzel text-xs font-bold text-[#8B1E2B] tracking-widest uppercase">
                  {cur.sanskrit}
                </p>
                <h3 className="font-cinzel text-2xl font-bold text-[#2C1810] uppercase mt-0.5">
                  {cur.name}
                </h3>
                <p className="font-cormorant italic text-sm text-[#7A4B11] mt-1 font-semibold">
                  {cur.tagline}
                </p>

                {/* Timing & Location Info Grid */}
                <div className="mt-3.5 space-y-2 bg-[#F5EAD6] p-3.5 rounded-xl border border-[#D4AF37]/50">
                  <div className="flex items-center gap-2 text-xs font-cinzel text-[#3D2311]">
                    <Clock className="w-4 h-4 text-[#8B1E2B] shrink-0" />
                    <span><strong>Muhurat / Time:</strong> {cur.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-cinzel text-[#3D2311]">
                    <MapPin className="w-4 h-4 text-[#8B1E2B] shrink-0" />
                    <span><strong>Sacred Venue:</strong> {cur.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-cinzel text-[#3D2311]">
                    <Shirt className="w-4 h-4 text-[#8B1E2B] shrink-0" />
                    <span><strong>Ceremonial Attire:</strong> {cur.attire}</span>
                  </div>
                </div>

                <p className="mt-3.5 font-cormorant text-base text-[#3E2718] leading-relaxed">
                  {cur.description}
                </p>
              </div>
            </div>
          </div>


          {/* Vedic Mantra Card */}
          <div className="p-4 rounded-xl bg-[#FAF5EB] border-l-4 border-[#8B1E2B] border-y border-r border-[#D4AF37]/40 shadow-sm text-center">
            <span className="font-cinzel text-[10px] font-bold text-[#8B1E2B] tracking-widest uppercase block mb-1">
              Auspicious Vedic Chanting Shloka
            </span>
            <p className="font-cormorant text-base sm:text-lg font-bold italic text-[#2C1810]">
              {cur.mantra}
            </p>
          </div>

          {/* Action Bar */}
          <div className="pt-4 border-t border-[#D4AF37]/40 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {cur.number > 1 && (
                <button
                  onClick={() => setSelectedKey(ALL_15_EVENTS[cur.number - 2].key)}
                  className="flex-1 sm:flex-none px-3.5 py-2.5 sm:py-1.5 rounded-full bg-[#FAF5EB] border border-[#B37E28] font-cinzel text-[10px] font-bold text-[#3D2311] hover:bg-[#F3E7CE] transition-colors text-center"
                >
                  ← #{ALL_15_EVENTS[cur.number - 2].number} {ALL_15_EVENTS[cur.number - 2].name}
                </button>
              )}
              {cur.number < 15 && (
                <button
                  onClick={() => setSelectedKey(ALL_15_EVENTS[cur.number].key)}
                  className="flex-1 sm:flex-none px-3.5 py-2.5 sm:py-1.5 rounded-full bg-[#FAF5EB] border border-[#B37E28] font-cinzel text-[10px] font-bold text-[#3D2311] hover:bg-[#F3E7CE] transition-colors text-center"
                >
                  #{ALL_15_EVENTS[cur.number].number} {ALL_15_EVENTS[cur.number].name} →
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 sm:py-2 bg-[#2C1810] hover:bg-[#452718] text-[#FAF5EB] rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Close Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
