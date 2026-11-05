import React from 'react';
import { LotusMotif, DiyaIcon } from '../Decorations';
import { MapPin } from 'lucide-react';

interface CardVenueProps {
  onClick?: () => void;
  onOpenMap?: () => void;
}

export const CardVenue: React.FC<CardVenueProps> = ({ onClick, onOpenMap }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl border border-[#D4AF37]/50 bg-[#FAF5EB] shadow-2xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)] hover:border-[#D4AF37] flex flex-col justify-between ${
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

      {/* Top Header Block */}
      <div className="relative h-[18%] w-full bg-[#FAF5EB] px-3 pt-2.5 pb-1 flex flex-col items-center justify-center text-center z-10">
        <LotusMotif size={14} color="#8A5D28" className="mb-0.5" />
        <p className="font-cinzel text-[11px] tracking-[0.24em] text-[#6E4A28] uppercase font-semibold">
          THE WEDDING
        </p>
        <h2 className="font-cinzel text-base sm:text-lg font-bold tracking-[0.22em] text-[#2C1810] uppercase leading-tight">
          VENUE
        </h2>
        <div className="flex items-center justify-center gap-1 mt-0.5">
          <span className="h-[0.5px] w-5 bg-[#C29B38]" />
          <LotusMotif size={10} color="#8A5D28" />
          <span className="h-[0.5px] w-5 bg-[#C29B38]" />
        </div>
      </div>

      {/* Celestial Temple Palace Artwork */}
      <div className="relative w-full h-[58%] overflow-hidden">
        <img
          src="/images/card6_venue.jpg"
          alt="The Divine Wedding Palace of Mount Kailash"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Celestial sparkles over Kailash Palace */}
        <span className="absolute top-1/4 left-1/3 text-[#FFEAA7] text-[10px] animate-sparkle-twinkle pointer-events-none drop-shadow">✦</span>
        <span className="absolute top-1/3 right-1/4 text-[#FFEAA7] text-[8px] animate-sparkle-twinkle pointer-events-none drop-shadow" style={{ animationDelay: '1.1s' }}>✦</span>

        {/* Ambient Diya on bridge with warm halo */}
        <div className="absolute bottom-3 left-4 relative">
          <div className="absolute -inset-1 rounded-full bg-[#FFD166]/30 blur-sm animate-pulse pointer-events-none" />
          <DiyaIcon size={20} />
        </div>

        {/* Soft gradient fade into map section */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FAF5EB] via-[#FAF5EB]/80 to-transparent" />
      </div>

      {/* Bottom Pilgrimage Trail Map Block */}
      <div className="relative h-[24%] w-full bg-[#FAF5EB] px-3 pb-3 pt-0 flex flex-col justify-between items-center text-center z-10">
        {/* Pilgrimage Map Path Graphic */}
        <div className="w-full relative h-10 flex items-center justify-between px-2">
          {/* Starting Temple Shrine */}
          <div className="flex flex-col items-center">
            <span className="text-xs">⛩️</span>
            <span className="text-[8px] font-cinzel text-[#8A5D28] tracking-wider uppercase">Gate</span>
          </div>

          {/* Dotted Golden Route */}
          <div className="flex-1 flex items-center justify-center px-1">
            <svg width="100%" height="16" viewBox="0 0 100 16" fill="none">
              <path
                d="M 5 12 Q 25 2, 50 10 T 95 6"
                stroke="#C29B38"
                strokeWidth="1.5"
                strokeDasharray="2 3"
                fill="none"
              />
              <circle cx="28" cy="7" r="2" fill="#8B1E2B" />
              <circle cx="68" cy="8" r="2" fill="#8B1E2B" />
            </svg>
          </div>

          {/* Destination Kailash Pin */}
          <div className="flex flex-col items-center">
            <div className="p-0.5 rounded-full bg-[#8B1E2B] text-amber-200 shadow-sm animate-bounce">
              <MapPin className="w-3 h-3" />
            </div>
            <span className="text-[8px] font-cinzel text-[#8B1E2B] font-bold tracking-wider uppercase mt-0.5">Kailash</span>
          </div>
        </div>

        {/* View Location Golden Button */}
        <button
          onClick={(e) => {
            if (onOpenMap) {
              e.stopPropagation();
              onOpenMap();
            }
          }}
          className="group/btn relative overflow-hidden w-[88%] py-1.5 px-3 bg-[#FAF5EB] hover:bg-[#F3E7CE] border border-[#B37E28] rounded-full shadow-sm flex items-center justify-center gap-1.5 transition-all group-hover:border-[#8B1E2B] active:scale-95"
        >
          <span className="absolute inset-y-0 -left-full w-2/3 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent animate-btn-shimmer pointer-events-none" />
          <MapPin className="w-3.5 h-3.5 text-[#8B1E2B] transition-transform group-hover/btn:scale-110" />
          <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#3D2311] uppercase">
            VIEW LOCATION
          </span>
        </button>
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-[#D4AF37]/60 rounded-xl" />
    </div>
  );
};
