import React from 'react';
import { FloralWreathCrown, LotusMotif, DiyaIcon } from '../Decorations';

interface CardFamiliesProps {
  onClick?: () => void;
  isDetailed?: boolean;
}

export const CardFamilies: React.FC<CardFamiliesProps> = ({ onClick }) => {
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

      {/* Top Header Block */}
      <div className="relative h-[22%] w-full bg-[#FAF5EB] px-3 pt-3 pb-1 flex flex-col items-center justify-center text-center z-10">
        {/* Floral Wreath Crown */}
        <FloralWreathCrown className="mb-0.5 scale-90 sm:scale-100" />

        {/* Title */}
        <h2 className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] text-[#2C1810] uppercase leading-none mt-0.5">
          OUR FAMILIES
        </h2>

        {/* Subtitle Ornament & Text */}
        <div className="flex items-center justify-center gap-1.5 mt-1">
          <span className="h-[0.5px] w-4 bg-[#C29B38]" />
          <LotusMotif size={14} color="#8A5D28" />
          <span className="h-[0.5px] w-4 bg-[#C29B38]" />
        </div>

        <p className="font-cormorant italic text-xs sm:text-[13px] tracking-wide text-[#6E4A28] mt-0.5 font-medium">
          With blessings and love
        </p>

        {/* Soft bottom divider */}
        <div className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      </div>

      {/* Main Celestial Gathering Artwork */}
      <div className="relative w-full h-[78%] overflow-hidden">
        <img
          src="/images/card2_families.webp"
          alt="Shiv and Parvati surrounded by holy deities and family in Kailash"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Celestial sparkles over the divine assembly */}
        <span className="absolute top-1/4 left-1/3 text-[#FFEAA7] text-[10px] animate-sparkle-twinkle pointer-events-none drop-shadow">✦</span>
        <span className="absolute top-1/2 right-1/4 text-[#FFEAA7] text-[8px] animate-sparkle-twinkle pointer-events-none drop-shadow" style={{ animationDelay: '1.4s' }}>✦</span>

        {/* Floating Diya on marble steps with warm aura */}
        <div className="absolute bottom-3 right-4 relative">
          <div className="absolute -inset-1 rounded-full bg-[#FFD166]/30 blur-sm animate-pulse pointer-events-none" />
          <DiyaIcon size={24} />
        </div>

        {/* Subtle bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0A0502]/40 to-transparent" />
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-[#D4AF37]/60 rounded-xl" />
    </div>
  );
};
