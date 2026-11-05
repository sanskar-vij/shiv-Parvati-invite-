import React from 'react';
import { LotusMotif } from '../Decorations';

interface CardForeverProps {
  onClick?: () => void;
}

export const CardForever: React.FC<CardForeverProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl border border-[#D4AF37]/60 bg-[#FAF5EB] shadow-2xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)] hover:border-[#D4AF37] ${
        onClick ? 'cursor-pointer' : ''
      }`}
      style={{
        aspectRatio: '9 / 14',
      }}
      title="Shiv & Parvati · Forever Together"
    >
      {/* Outer Fine Inset Borders */}
      <div className="absolute inset-1.5 z-10 pointer-events-none rounded-lg border border-[#C29B38]/40" />
      <div className="absolute inset-2.5 z-10 pointer-events-none rounded-md border border-[#E6C575]/25" />

      {/* Corner Ornaments */}
      <div className="absolute top-2 left-2 z-10 w-4 h-4 border-t-2 border-l-2 border-[#B37E28] pointer-events-none" />
      <div className="absolute top-2 right-2 z-10 w-4 h-4 border-t-2 border-r-2 border-[#B37E28] pointer-events-none" />
      <div className="absolute bottom-2 left-2 z-10 w-4 h-4 border-b-2 border-l-2 border-[#B37E28] pointer-events-none" />
      <div className="absolute bottom-2 right-2 z-10 w-4 h-4 border-b-2 border-r-2 border-[#B37E28] pointer-events-none" />

      {/* Main Night Moonlit Artwork Stage */}
      <div className="relative w-full h-[76%] overflow-hidden">
        {/* Background Painting - Clean, serene, high-resolution Vedic Darbar */}
        <img
          src="/images/card8_forever.jpg"
          alt="Shiv & Parvati Forever Together under Mount Kailash Full Moon"
          className="w-full h-full object-cover object-center select-none"
          draggable={false}
        />

        {/* Top Header Overlay in Starry Sky */}
        <div className="absolute top-3 inset-x-0 flex flex-col items-center justify-center text-center z-20 pointer-events-none">
          <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#FFF4D0] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
            FOREVER
          </p>
          <h2 className="font-cinzel text-sm sm:text-base font-bold tracking-[0.24em] text-[#FFE8A3] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
            TOGETHER
          </h2>
          <div className="flex items-center justify-center gap-1 mt-0.5">
            <span className="h-[0.5px] w-4 bg-[#FFDF73]/80" />
            <LotusMotif size={10} color="#FFDF73" />
            <span className="h-[0.5px] w-4 bg-[#FFDF73]/80" />
          </div>
        </div>

        {/* Delicate translucent fade at the very bottom into parchment */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#FAF5EB] via-[#FAF5EB]/40 to-transparent pointer-events-none" />
      </div>

      {/* Bottom Parchment Title Block */}
      <div className="relative h-[24%] w-full bg-[#FAF5EB] px-4 pt-1 pb-3 flex flex-col items-center justify-center text-center">
        {/* Lotus Header Flourish */}
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <span className="h-[1px] w-6 bg-[#C29B38]/60" />
          <LotusMotif size={18} color="#8A5D28" />
          <span className="h-[1px] w-6 bg-[#C29B38]/60" />
        </div>

        {/* Title */}
        <h2 className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.18em] text-[#2C1810] drop-shadow-sm leading-tight uppercase">
          SHIV &amp; PARVATI
        </h2>

        {/* Subtitle */}
        <p className="font-cinzel text-[9px] sm:text-[10px] font-medium tracking-[0.24em] text-[#7A4F23] uppercase mt-1">
          A CELEBRATION OF ETERNAL LOVE
        </p>

        {/* Auspicious Vedic Shloka blessing */}
        <p className="font-cormorant italic text-xs text-[#8A5D28] mt-0.5">
          ॐ नमः शिवाय · सदा शिवो रक्षतु · ॐ शुभं भवतु
        </p>
      </div>

      {/* Gentle border sheen on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl ring-2 ring-[#D4AF37]/60" />
    </div>
  );
};
