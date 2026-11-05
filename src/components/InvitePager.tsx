import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CardHero } from './Cards/CardHero';
import { CardFamilies } from './Cards/CardFamilies';
import { CardStory } from './Cards/CardStory';
import { CardCelebrations } from './Cards/CardCelebrations';
import { CardMoments } from './Cards/CardMoments';
import { CardVenue } from './Cards/CardVenue';
import { CardRSVP } from './Cards/CardRSVP';
import { CardForever } from './Cards/CardForever';
import type { CeremonyKey } from '../data/ceremoniesData';

interface InvitePagerProps {
  onOpenMap: () => void;
  onSelectCeremony: (ceremony: CeremonyKey) => void;
  onSubmitBlessing: (name: string, guests: string) => void;
}

const PAGES = [
  { name: 'The Divine Wedding' },
  { name: 'Our Families' },
  { name: 'Our Story' },
  { name: 'Celebrations' },
  { name: 'Moments of Love' },
  { name: 'The Venue' },
  { name: 'Blessings & RSVP' },
  { name: 'Forever Together' },
];

export const InvitePager: React.FC<InvitePagerProps> = ({
  onOpenMap,
  onSelectCeremony,
  onSubmitBlessing,
}) => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback(
    (next: number) => {
      if (next < 0 || next >= PAGES.length || next === index) return;
      setDir(next > index ? 1 : -1);
      setIndex(next);
    },
    [index]
  );

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const renderCard = (page: number) => {
    switch (page) {
      case 0:
        return <CardHero />;
      case 1:
        return <CardFamilies />;
      case 2:
        return <CardStory />;
      case 3:
        return <CardCelebrations onSelectCeremony={onSelectCeremony} />;
      case 4:
        return <CardMoments />;
      case 5:
        return <CardVenue onOpenMap={onOpenMap} />;
      case 6:
        return <CardRSVP onSubmitBlessing={onSubmitBlessing} />;
      case 7:
        return <CardForever />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-[100svh] flex flex-col overflow-hidden overscroll-none">
      {/* Page stage */}
      <div
        className="flex-1 flex items-center justify-center px-4 pt-16 pb-1 min-h-0"
        onTouchStart={(e) => {
          const t = e.touches[0];
          touchStart.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={(e) => {
          if (!touchStart.current) return;
          const t = e.changedTouches[0];
          const dx = t.clientX - touchStart.current.x;
          const dy = t.clientY - touchStart.current.y;
          touchStart.current = null;
          if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
          if (dx < 0) next();
          else prev();
        }}
      >
        <div
          key={index}
          className={`w-[min(calc(100vw-32px),400px,calc((100svh-215px)*9/14))] ${
            dir === 1 ? 'animate-page-right' : 'animate-page-left'
          }`}
        >
          {renderCard(index)}
        </div>
      </div>

      {/* Page name + counter */}
      <p className="text-center font-cinzel text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#8B1E2B] mt-3">
        {PAGES[index].name}
        <span className="text-[#B8860B] font-semibold"> &nbsp;·&nbsp; {index + 1} / 8</span>
      </p>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 px-4 pt-2 pb-5 pb-safe">
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous page"
          className="w-11 h-11 rounded-full bg-white border border-[#D4AF37]/70 text-[#8B1E2B] shadow-md flex items-center justify-center transition-all active:scale-90 disabled:opacity-25 disabled:shadow-none"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1" role="tablist" aria-label="Invitation pages">
          {PAGES.map((page, i) => (
            <button
              key={page.name}
              role="tab"
              aria-selected={i === index}
              aria-label={`Page ${i + 1}: ${page.name}`}
              onClick={() => go(i)}
              className="p-2 active:scale-90 transition-transform"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-5 bg-[#8B1E2B]' : 'w-1.5 bg-[#D4AF37]/60'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={index === PAGES.length - 1}
          aria-label="Next page"
          className="w-11 h-11 rounded-full bg-[#8B1E2B] border border-[#8B1E2B] text-white shadow-md flex items-center justify-center transition-all active:scale-90 disabled:opacity-25 disabled:shadow-none"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
