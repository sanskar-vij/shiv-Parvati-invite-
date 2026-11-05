import React, { useState, useCallback, useRef } from 'react';
import { Reveal } from '../Reveal';
import { LotusMotif, OrnamentalDivider, DiyaIcon } from '../Decorations';
import { ALL_15_EVENTS, CeremonyKey } from '../../data/ceremoniesData';
export type { CeremonyKey };
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface EventsProps {
  onOpenCeremonies: (ceremony: CeremonyKey) => void;
}

/* All 15 events in 5 animated groups of 3 */
const GROUPS: typeof ALL_15_EVENTS[] = Array.from({ length: 5 }, (_, g) =>
  ALL_15_EVENTS.slice(g * 3, g * 3 + 3)
);

export const Events: React.FC<EventsProps> = ({ onOpenCeremonies }) => {
  const [group, setGroup] = useState(0);
  const touchStart = useRef<number | null>(null);
  const dragStart = useRef<number | null>(null);

  // Manual navigation only - auto-change has been completely removed per user request
  const go = useCallback(
    (next: number) => {
      const total = GROUPS.length;
      const wrapped = ((next % total) + total) % total;
      if (wrapped === group) return;
      setGroup(wrapped);
    },
    [group]
  );

  const visible = GROUPS[group];

  return (
    <section id="celebrations" className="relative py-14 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white scroll-mt-0">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <DiyaIcon size={20} />
              <LotusMotif size={28} color="#8B1E2B" />
              <DiyaIcon size={20} />
            </div>
            <p className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.3em] sm:tracking-[0.34em] text-[#8A5D28] uppercase">
              Limited Royal Edition · Roka to Reception
            </p>
            <h2 className="mt-2 font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] gold-shimmer-text">
              15 Sacred Ceremonies
            </h2>
            <p className="mt-2 font-cormorant italic text-base sm:text-xl text-[#8A5D28] max-w-2xl mx-auto">
              Fifteen auspicious celebrations, unveiling three at a time — tap any event for its rituals, mantras &amp; muhurat
            </p>
            <OrnamentalDivider color="#B8860B" className="mt-4 max-w-xs mx-auto" />
          </div>
        </Reveal>

        {/* Showcase — 3 events visible at a time with increased, graceful appearance delay */}
        <Reveal delay={280}>
          <div
            className="mt-8 sm:mt-10 max-w-2xl mx-auto cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => {
              dragStart.current = e.clientX;
            }}
            onMouseUp={(e) => {
              if (dragStart.current === null) return;
              const dx = e.clientX - dragStart.current;
              dragStart.current = null;
              if (dx < -45) go(group + 1);
              else if (dx > 45) go(group - 1);
            }}
            onTouchStart={(e) => {
              touchStart.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStart.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStart.current;
              touchStart.current = null;
              if (dx < -45) go(group + 1);
              else if (dx > 45) go(group - 1);
            }}
          >
            {/* Staggered silky smooth entrance on group switch */}
            <div key={group} className="flex flex-col gap-3 sm:gap-4">
              {visible.map((event, ei) => (
                <button
                  key={event.key}
                  onClick={() => onOpenCeremonies(event.key)}
                  style={{ animationDelay: `${160 + ei * 180}ms` }}
                  className="animate-cascade-in group w-full flex items-center gap-3.5 p-3 pr-4 rounded-2xl bg-white border border-[#D4AF37]/50 text-left vintage-shadow transition-all duration-500 ease-out active:scale-[0.99] hover:border-[#8B1E2B]/70 hover:-translate-y-1 hover:shadow-[0_16px_36px_-8px_rgba(212,175,55,0.35)] cursor-pointer"
                >
                  <span className="relative shrink-0 w-[72px] h-[84px] rounded-xl overflow-hidden border border-[#D4AF37]/60 shadow-sm">
                    <img
                      src={event.image}
                      alt={event.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />
                    <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-gradient-to-br from-[#F6E27A] via-[#D4AF37] to-[#B8860B] border border-[#8A5D28]/50 font-cinzel text-[9.5px] font-bold text-[#3A2313] shadow">
                      {String(event.number).padStart(2, '0')}
                    </span>
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="block font-cinzel text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-[#2C1810] group-hover:text-[#8B1E2B] transition-colors truncate">
                      {event.name}
                    </span>
                    <span className="block font-cormorant italic text-xs sm:text-sm text-[#8A5D28] truncate">
                      {event.sanskrit}
                    </span>
                    <span className="block font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-[#8B1E2B] mt-1 truncate">
                      {event.day} · {event.date.replace(', 2027', '')}
                    </span>
                    <span className="block font-cormorant text-[11px] sm:text-xs text-[#8A5D28]/85 truncate">
                      {event.time.split('·')[0].trim()} · {event.venue.split(',')[0]}
                    </span>
                  </span>

                  <ChevronRight className="w-5 h-5 shrink-0 text-[#B8860B] group-hover:text-[#8B1E2B] group-hover:translate-x-1 transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Showcase controls with manual navigation */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => go(group - 1)}
                aria-label="Previous three events"
                className="w-10 h-10 rounded-full bg-white border border-[#D4AF37]/70 text-[#8B1E2B] shadow-md flex items-center justify-center transition-all duration-300 active:scale-90 hover:border-[#8B1E2B] hover:shadow-lg cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5" aria-label="Event groups">
                {GROUPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    aria-label={`Show events ${i * 3 + 1} to ${i * 3 + 3}`}
                    className="p-1.5 active:scale-90 transition-transform cursor-pointer"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-500 ease-out ${
                        i === group ? 'w-6 bg-[#8B1E2B]' : 'w-2 bg-[#D4AF37]/60 hover:bg-[#B8860B]'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => go(group + 1)}
                aria-label="Next three events"
                className="w-10 h-10 rounded-full bg-[#8B1E2B] border border-[#8B1E2B] text-white shadow-md flex items-center justify-center transition-all duration-300 active:scale-90 hover:brightness-110 hover:shadow-lg cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-2.5 text-center font-cinzel text-[10px] uppercase tracking-[0.24em] text-[#8A5D28]">
              Showing {group * 3 + 1}–{group * 3 + 3} of 15
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 text-center font-cormorant italic text-sm text-[#8A5D28]/80">
            Blessings of all fifteen ceremonies upon every guest · शुभं भवतु
          </p>
        </Reveal>
      </div>
    </section>
  );
};
