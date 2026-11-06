import React from 'react';
import { LotusMotif } from '../Decorations';
import { CeremonyKey } from '../../data/ceremoniesData';

interface CardCelebrationsProps {
  onClick?: () => void;
  onSelectCeremony?: (ceremony: CeremonyKey) => void;
}

export const CardCelebrations: React.FC<CardCelebrationsProps> = ({ onClick, onSelectCeremony }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl border border-[#D4AF37]/50 bg-[#FAF5EB] shadow-2xl transition-all duration-500 hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)] hover:border-[#D4AF37] p-2.5 sm:p-3 flex flex-col justify-between ${
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

      {/* Top Header */}
      <div className="relative text-center pt-1 pb-1 z-10">
        <LotusMotif size={16} color="#8A5D28" className="mb-0.5" />
        <h2 className="font-cinzel text-xs sm:text-sm font-semibold tracking-[0.26em] text-[#6E4A28] uppercase leading-tight">
          WEDDING
        </h2>
        <h3 className="font-cinzel text-base sm:text-lg font-bold tracking-[0.22em] text-[#2C1810] uppercase leading-tight">
          CELEBRATIONS
        </h3>
        <div className="flex items-center justify-center gap-1 mt-0.5">
          <span className="h-[0.5px] w-5 bg-[#C29B38]" />
          <LotusMotif size={12} color="#8A5D28" />
          <span className="h-[0.5px] w-5 bg-[#C29B38]" />
        </div>
      </div>

      {/* 3 Celebration Blocks */}
      <div className="relative z-10 flex flex-col justify-between flex-1 py-1 gap-2.5">
        {/* 1. HALDI */}
        <div
          className="relative w-full flex-1 rounded-md border border-[#D4AF37]/60 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          onClick={(e) => {
            if (onSelectCeremony) {
              e.stopPropagation();
              onSelectCeremony('haldi');
            }
          }}
        >
          <img
            src="/images/event_haldi.webp"
            alt="Haldi Ceremony"
            className="w-full h-full object-cover object-center"
          />
          {/* Bottom Gold Label Pill */}
          <div className="absolute bottom-1 inset-x-0 flex justify-center">
            <span className="bg-[#FAF5EB]/95 px-5 py-0.5 rounded-full border border-[#B37E28]/70 font-cinzel text-[10px] font-bold tracking-[0.2em] text-[#3D2311] shadow-sm uppercase">
              HALDI
            </span>
          </div>
        </div>

        {/* 2. MEHNDI */}
        <div
          className="relative w-full flex-1 rounded-md border border-[#D4AF37]/60 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          onClick={(e) => {
            if (onSelectCeremony) {
              e.stopPropagation();
              onSelectCeremony('mehndi');
            }
          }}
        >
          <img
            src="/images/event_mehendi.webp"
            alt="Mehendi Ceremony"
            className="w-full h-full object-cover object-center"
          />
          {/* Bottom Gold Label Pill */}
          <div className="absolute bottom-1 inset-x-0 flex justify-center">
            <span className="bg-[#FAF5EB]/95 px-5 py-0.5 rounded-full border border-[#B37E28]/70 font-cinzel text-[10px] font-bold tracking-[0.2em] text-[#3D2311] shadow-sm uppercase">
              MEHNDI
            </span>
          </div>
        </div>

        {/* 3. WEDDING */}
        <div
          className="relative w-full flex-1 rounded-md border border-[#D4AF37]/60 overflow-hidden shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          onClick={(e) => {
            if (onSelectCeremony) {
              e.stopPropagation();
              onSelectCeremony('wedding');
            }
          }}
        >
          <img
            src="/images/event_wedding.webp"
            alt="Vivaha Wedding Ceremony"
            className="w-full h-full object-cover object-center"
          />
          {/* Bottom Gold Label Pill */}
          <div className="absolute bottom-1 inset-x-0 flex justify-center">
            <span className="bg-[#FAF5EB]/95 px-5 py-0.5 rounded-full border border-[#B37E28]/70 font-cinzel text-[10px] font-bold tracking-[0.2em] text-[#3D2311] shadow-sm uppercase">
              WEDDING
            </span>
          </div>
        </div>
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-[#D4AF37]/60 rounded-xl" />
    </div>
  );
};
