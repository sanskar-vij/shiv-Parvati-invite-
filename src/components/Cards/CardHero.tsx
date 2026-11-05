import React from 'react';
import { LotusMotif, DiyaIcon, TempleBellIcon } from '../Decorations';

interface CardHeroProps {
  onClick?: () => void;
  isDetailed?: boolean;
}

export const CardHero: React.FC<CardHeroProps> = ({ onClick, isDetailed = false }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl border border-[#D4AF37]/50 bg-[#FAF5EB] shadow-2xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)] hover:border-[#D4AF37] ${
        onClick ? 'cursor-pointer' : ''
      }`}
      style={{
        aspectRatio: '9 / 14',
      }}
    >
      {/* Outer Fine Inset Border */}
      <div className="absolute inset-1.5 z-10 pointer-events-none rounded-lg border border-[#C29B38]/40" />
      <div className="absolute inset-2.5 z-10 pointer-events-none rounded-md border border-[#E6C575]/25" />

      {/* Corner Ornaments */}
      <div className="absolute top-2 left-2 z-10 w-4 h-4 border-t-2 border-l-2 border-[#B37E28] pointer-events-none" />
      <div className="absolute top-2 right-2 z-10 w-4 h-4 border-t-2 border-r-2 border-[#B37E28] pointer-events-none" />
      <div className="absolute bottom-2 left-2 z-10 w-4 h-4 border-b-2 border-l-2 border-[#B37E28] pointer-events-none" />
      <div className="absolute bottom-2 right-2 z-10 w-4 h-4 border-b-2 border-r-2 border-[#B37E28] pointer-events-none" />

      {/* Main Artwork */}
      <div className="relative w-full h-[76%] overflow-hidden">
        <img
          src="/images/card1_hero.jpg"
          alt="Shiv & Parvati - The Divine Wedding"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Top Floating Bells Overlay with natural pendulum swing */}
        <div className="absolute top-3 left-4 flex gap-2">
          <TempleBellIcon size={20} className="text-[#F2D06B] drop-shadow-md animate-bell-swing" />
        </div>
        <div className="absolute top-3 right-4 flex gap-2">
          <TempleBellIcon size={20} className="text-[#F2D06B] drop-shadow-md animate-bell-swing-delayed" />
        </div>

        {/* Ethereal Floating Celestial Sparkles */}
        <span className="absolute top-1/4 left-1/4 text-[#FFEAA7] text-[11px] animate-sparkle-twinkle pointer-events-none drop-shadow">✦</span>
        <span className="absolute top-1/3 right-1/4 text-[#FFEAA7] text-[9px] animate-sparkle-twinkle pointer-events-none drop-shadow" style={{ animationDelay: '1.2s' }}>✦</span>
        <span className="absolute top-1/2 left-1/3 text-[#FFEAA7] text-[12px] animate-sparkle-twinkle pointer-events-none drop-shadow" style={{ animationDelay: '0.6s' }}>✦</span>

        {/* Ambient Diya Glow on corners with warm halo */}
        <div className="absolute bottom-2 left-3 relative">
          <div className="absolute -inset-1 rounded-full bg-[#FFD166]/30 blur-sm animate-pulse pointer-events-none" />
          <DiyaIcon size={24} />
        </div>
        <div className="absolute bottom-2 right-3 relative">
          <div className="absolute -inset-1 rounded-full bg-[#FFD166]/30 blur-sm animate-pulse pointer-events-none" />
          <DiyaIcon size={24} />
        </div>

        {/* Soft gradient fade into bottom parchment */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FAF5EB] via-[#FAF5EB]/80 to-transparent" />
      </div>

      {/* Bottom Parchment Title Block */}
      <div className="relative h-[24%] w-full bg-[#FAF5EB] px-4 pt-1 pb-3 flex flex-col items-center justify-center text-center">
        {/* Lotus Header Flourish */}
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <span className="h-[1px] w-6 bg-[#C29B38]/60" />
          <LotusMotif size={22} color="#8A5D28" className="animate-lotus-breathe" />
          <span className="h-[1px] w-6 bg-[#C29B38]/60" />
        </div>

        {/* Title */}
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#2C1810] drop-shadow-sm leading-tight uppercase">
          SHIV & PARVATI
        </h2>

        {/* Subtitle */}
        <p className="font-cinzel text-[10px] sm:text-[11px] font-medium tracking-[0.28em] text-[#7A4F23] uppercase mt-1">
          THE DIVINE WEDDING
        </p>

        {isDetailed && (
          <p className="mt-2 text-xs text-[#5D3A1A] font-cormorant italic">
            Tap to view auspicious invitation details &amp; blessings
          </p>
        )}
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-[#D4AF37]/60 rounded-xl" />
    </div>
  );
};
