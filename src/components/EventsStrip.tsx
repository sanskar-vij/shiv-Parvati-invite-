import React from 'react';
import { Reveal } from './Reveal';
import { LotusMotif, OrnamentalDivider } from './Decorations';
import { ALL_15_EVENTS, type CeremonyKey } from '../data/ceremoniesData';
import { ChevronsRight } from 'lucide-react';

interface EventsStripProps {
  onSelect: (ceremony: CeremonyKey) => void;
}

export const EventsStrip: React.FC<EventsStripProps> = ({ onSelect }) => {
  return (
    <div className="relative">
      <Reveal>
        <div className="text-center px-5">
          <LotusMotif size={22} color="#8B1E2B" />
          <h2 className="mt-1.5 font-cinzel text-xl sm:text-3xl font-bold uppercase tracking-[0.14em] text-[#2C1810]">
            All 15 Sacred Ceremonies
          </h2>
          <p className="mt-1.5 font-cormorant italic text-sm sm:text-lg text-[#8A5D28]">
            Roka to Reception — tap any event for its rituals, mantras &amp; muhurat
          </p>
          <OrnamentalDivider color="#B8860B" className="mt-3 max-w-[220px] sm:max-w-xs mx-auto" />
          <p className="sm:hidden mt-2.5 inline-flex items-center gap-1 font-cinzel text-[9px] font-bold uppercase tracking-[0.22em] text-[#B8860B]">
            Swipe sideways to explore
            <ChevronsRight className="w-3.5 h-3.5" />
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-5 sm:mt-8 flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 sm:px-8 pb-3 scroll-px-5">
          {ALL_15_EVENTS.map((ev) => (
            <button
              key={ev.key}
              onClick={() => onSelect(ev.key)}
              className="group snap-start shrink-0 w-40 sm:w-48 text-left rounded-xl overflow-hidden border border-[#D4AF37]/60 bg-white vintage-shadow transition-all active:scale-95 hover:border-[#8B1E2B]/60 hover:-translate-y-0.5"
            >
              <div className="relative h-24 sm:h-28 overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
                <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-white/95 font-cinzel text-[9px] font-bold text-[#8B1E2B] border border-[#D4AF37]/60">
                  #{ev.number}
                </span>
                <span className="absolute bottom-1.5 left-2 right-2 font-cinzel text-[8px] sm:text-[9px] uppercase tracking-[0.14em] text-[#FFE8A3] truncate">
                  {ev.day}
                </span>
              </div>
              <div className="p-2.5">
                <p className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-[#2C1810] leading-tight">
                  {ev.name}
                </p>
                <p className="font-cinzel text-[8px] sm:text-[9px] uppercase tracking-[0.1em] text-[#8A5D28] mt-1 truncate">
                  {ev.time.split('·')[0].trim()}
                </p>
                <p className="font-cormorant text-[11px] text-[#8A5D28]/80 truncate mt-0.5">
                  {ev.venue.split(',')[0]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
