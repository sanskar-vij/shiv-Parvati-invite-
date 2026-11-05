import React from 'react';
import { LotusMotif, OrnamentalDivider, DiyaIcon } from '../Decorations';
import { CountdownTimer, WEDDING_DATE } from '../CountdownTimer';
import { useScrollY } from '../Reveal';
import { Heart, MapPin, CalendarDays } from 'lucide-react';

interface HeroProps {
  onOpenRSVP: () => void;
  onOpenVenue: () => void;
}

const dateLine = WEDDING_DATE.toLocaleDateString('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export const Hero: React.FC<HeroProps> = ({ onOpenRSVP, onOpenVenue }) => {
  const scrollY = useScrollY();
  const parallax = Math.min(scrollY * 0.32, 260);
  const fade = Math.max(0, 1 - scrollY / 620);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Parallax backdrop */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${parallax}px, 0) scale(1.08)` }}
      >
        <img
          src="/images/card1_hero.jpg"
          alt="Lord Shiva and Goddess Parvati beneath the full moon over Mount Kailash"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0604]/80 via-[#0B0604]/45 to-[#0B0604]/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_42%,rgba(212,175,55,0.16),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/70 to-transparent" />

      {/* Hanging temple bells */}
      <div className="absolute top-0 left-[12%] hidden sm:block opacity-70">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-[#D4AF37]/70 mx-auto" />
        <div className="animate-float">
          <svg width="26" height="30" viewBox="0 0 32 32" fill="none" className="mx-auto">
            <path d="M16 8 C11 8, 8 16, 7 24 L25 24 C24 16, 21 8, 16 8 Z" fill="#D4AF37" stroke="#7A4B11" />
            <path d="M5 24 C5 22.5, 27 22.5, 27 24 C27 26, 5 26, 5 24 Z" fill="#F2D06B" stroke="#7A4B11" />
          </svg>
        </div>
      </div>
      <div className="absolute top-0 right-[12%] hidden sm:block opacity-70">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-[#D4AF37]/70 mx-auto" />
        <div className="animate-float" style={{ animationDelay: '1.4s' }}>
          <svg width="26" height="30" viewBox="0 0 32 32" fill="none" className="mx-auto">
            <path d="M16 8 C11 8, 8 16, 7 24 L25 24 C24 16, 21 8, 16 8 Z" fill="#D4AF37" stroke="#7A4B11" />
            <path d="M5 24 C5 22.5, 27 22.5, 27 24 C27 26, 5 26, 5 24 Z" fill="#F2D06B" stroke="#7A4B11" />
          </svg>
        </div>
      </div>

      {/* Hero content */}
      <div
        className="relative z-10 w-full max-w-3xl mx-auto px-5 pt-16 pb-24 sm:py-24 text-center"
        style={{ opacity: fade, transform: `translateY(${Math.min(scrollY * 0.12, 90)}px)` }}
      >
        <p className="font-cormorant text-base sm:text-lg text-[#E8CFA0]/90 tracking-wide">
          ॐ श्री गणेशाय नमः
        </p>

        <div className="flex items-center justify-center gap-3 mt-3 sm:mt-4 mb-2 sm:mb-3">
          <DiyaIcon size={22} />
          <LotusMotif size={34} color="#D4AF37" />
          <DiyaIcon size={22} />
        </div>

        <p className="font-cinzel text-[9px] sm:text-xs font-semibold tracking-[0.3em] sm:tracking-[0.42em] text-[#D4AF37] uppercase">
          Together with divine blessings
        </p>

        <h1 className="mt-3 sm:mt-4 font-cinzel-dec text-[2.6rem] sm:text-6xl lg:text-7xl font-bold uppercase leading-[1.08] gold-text-bright drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
          Shiv
          <span className="font-cinzel text-[#F2D06B]">&amp;</span>
          Parvati
        </h1>

        <OrnamentalDivider color="#D4AF37" className="my-3 sm:my-4 max-w-[240px] sm:max-w-sm mx-auto opacity-90" />

        <p className="font-cinzel text-[11px] sm:text-base font-semibold tracking-[0.24em] sm:tracking-[0.34em] text-[#FFF0C4] uppercase">
          The Divine Wedding
        </p>

        <p className="font-cormorant italic text-sm sm:text-lg text-amber-100/75 mt-2.5 sm:mt-3 max-w-xl mx-auto leading-relaxed">
          Two souls, one cosmos — a celebration of eternal love beneath the
          snow-crowned silence of Mount Kailash.
        </p>

        {/* Date + venue */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-x-6 sm:gap-y-2 text-[#F2D06B]">
          <span className="flex items-center gap-2 font-cinzel text-[11px] sm:text-sm tracking-[0.12em] sm:tracking-[0.16em] uppercase">
            <CalendarDays className="w-4 h-4 shrink-0" />
            {dateLine}
          </span>
          <span className="hidden sm:inline h-3 w-[1px] bg-[#D4AF37]/50" />
          <span className="flex items-center gap-2 font-cinzel text-[11px] sm:text-sm tracking-[0.12em] sm:tracking-[0.16em] uppercase">
            <MapPin className="w-4 h-4 shrink-0" />
            Kailash Golden Mandap
          </span>
        </div>

        {/* Countdown */}
        <div className="mt-6 sm:mt-7 w-full max-w-md mx-auto">
          <CountdownTimer variant="dark" />
          <p className="font-cinzel text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-amber-200/60 mt-3">
            Until the Muhurat begins
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 max-w-md sm:max-w-none mx-auto">
          <button
            onClick={onOpenRSVP}
            className="group px-6 py-3.5 sm:py-3 rounded-full bg-gradient-to-r from-[#8B1E2B] to-[#6E101B] hover:from-[#9C2232] hover:to-[#7E1523] border border-[#D4AF37] text-amber-100 font-cinzel text-xs font-bold uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 text-[#F2D06B] fill-current group-hover:scale-110 transition-transform" />
            Send Blessings
          </button>
          <button
            onClick={onOpenVenue}
            className="px-6 py-3.5 sm:py-3 rounded-full bg-white/5 hover:bg-white/12 backdrop-blur-md border border-[#D4AF37]/50 text-amber-200 font-cinzel text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          >
            Venue &amp; Yatra
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
        <span className="font-cinzel text-[9px] uppercase tracking-[0.3em] text-[#8A5D28]">
          Begin the journey
        </span>
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" className="text-[#8A5D28]">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
          <circle cx="11" cy="10" r="2.4" fill="currentColor" className="animate-scroll-cue" />
        </svg>
      </div>
    </section>
  );
};
