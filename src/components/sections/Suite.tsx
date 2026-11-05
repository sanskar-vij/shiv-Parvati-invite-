import React, { useRef, useState, useCallback } from 'react';
import { Reveal } from '../Reveal';
import { LotusMotif, OrnamentalDivider } from '../Decorations';
import { CardHero } from '../Cards/CardHero';
import { CardFamilies } from '../Cards/CardFamilies';
import { CardStory } from '../Cards/CardStory';
import { CardCelebrations } from '../Cards/CardCelebrations';
import { CardMoments } from '../Cards/CardMoments';
import { CardVenue } from '../Cards/CardVenue';
import { CardRSVP } from '../Cards/CardRSVP';
import { CardForever } from '../Cards/CardForever';
import { ChevronsRight } from 'lucide-react';
import type { CeremonyKey } from './Events';

interface SuiteProps {
  onOpenCard: (id: number) => void;
  onOpenVenue: () => void;
  onAddQuickBlessing: (name: string, guests: string) => void;
  onSelectCeremony: (ceremony: CeremonyKey) => void;
}

export const Suite: React.FC<SuiteProps> = ({
  onOpenCard,
  onOpenVenue,
  onAddQuickBlessing,
  onSelectCeremony,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const cards = [
    { id: 1, node: <CardHero onClick={() => onOpenCard(1)} isDetailed /> },
    { id: 2, node: <CardFamilies onClick={() => onOpenCard(2)} /> },
    { id: 3, node: <CardStory onClick={() => onOpenCard(3)} /> },
    {
      id: 4,
      node: (
        <CardCelebrations
          onClick={() => onOpenCard(4)}
          onSelectCeremony={(c) => onSelectCeremony(c as CeremonyKey)}
        />
      ),
    },
    { id: 5, node: <CardMoments onClick={() => onOpenCard(5)} /> },
    { id: 6, node: <CardVenue onClick={() => onOpenCard(6)} onOpenMap={onOpenVenue} /> },
    {
      id: 7,
      node: <CardRSVP onClick={() => onOpenCard(7)} onSubmitBlessing={onAddQuickBlessing} />,
    },
    { id: 8, node: <CardForever onClick={() => onOpenCard(8)} /> },
  ];

  const stepWidth = useCallback(() => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return 1;
    return (el.firstElementChild as HTMLElement).offsetWidth + 16;
  }, []);

  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / stepWidth());
    setActiveDot(Math.max(0, Math.min(cards.length - 1, idx)));
  }, [cards.length, stepWidth]);

  const goToDot = useCallback(
    (idx: number) => {
      const el = trackRef.current;
      if (!el) return;
      el.scrollTo({ left: idx * stepWidth(), behavior: 'smooth' });
    },
    [stepWidth]
  );

  return (
    <section id="suite" className="relative py-14 sm:py-20 lg:py-28 px-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center">
            <LotusMotif size={26} color="#8B1E2B" />
            <h2 className="mt-2 font-cinzel text-2xl sm:text-4xl font-bold uppercase tracking-[0.16em] text-[#2C1810]">
              The Invitation Suite
            </h2>
            <p className="mt-2 font-cormorant italic text-base sm:text-lg text-[#8A5D28] max-w-2xl mx-auto">
              Eight hand-painted cards of the divine wedding — tap any card to unfold
              its mantras and lore
            </p>
            <OrnamentalDivider color="#B8860B" className="mt-4 max-w-xs mx-auto" />
            <p className="sm:hidden mt-3 inline-flex items-center gap-1 font-cinzel text-[9px] font-bold uppercase tracking-[0.22em] text-[#B8860B]">
              Swipe to explore
              <ChevronsRight className="w-3.5 h-3.5" />
            </p>
          </div>
        </Reveal>

        {/* Swipeable deck on mobile · grid on tablet/desktop */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-8 sm:mt-12 flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-2 sm:pb-0 scroll-px-5"
        >
          {cards.map((card, idx) => (
            <Reveal
              key={card.id}
              delay={(idx % 4) * 110}
              direction="scale"
              className="snap-center shrink-0 w-[84%] min-[420px]:w-[78%] sm:w-auto"
            >
              <div className="h-full flex">
                <div className="w-full flex flex-col [&>div]:w-full [&>div]:h-full [&>div]:flex [&>div]:flex-col">
                  {card.node}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Carousel dots (mobile only) */}
        <div className="sm:hidden mt-4 flex items-center justify-center gap-1.5" aria-hidden="true">
          {cards.map((card, idx) => (
            <button
              key={card.id}
              tabIndex={-1}
              onClick={() => goToDot(idx)}
              aria-label={`Go to card ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeDot ? 'w-5 bg-[#8B1E2B]' : 'w-1.5 bg-[#D4AF37]/50'
              }`}
            />
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-8 sm:mt-10 text-center font-cormorant italic text-sm text-[#8A5D28]/80">
            Illustrated in the classical Pahari–Tibetan devotional tradition · Mount Kailash, 2027
          </p>
        </Reveal>
      </div>
    </section>
  );
};
