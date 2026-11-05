import React from 'react';
import { LotusMotif } from '../Decorations';

interface CardStoryProps {
  onClick?: () => void;
}

export const CardStory: React.FC<CardStoryProps> = ({ onClick }) => {
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

      {/* Decorative Golden Vines Background SVGs */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 300 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top left corner vines */}
        <path
          d="M20 30 Q 50 70, 30 110 T 70 140"
          stroke="#C29B38"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Middle decorative connecting vine */}
        <path
          d="M270 160 Q 230 220, 260 280 T 210 340"
          stroke="#C29B38"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Bottom left vine */}
        <path
          d="M25 360 Q 60 410, 30 450"
          stroke="#C29B38"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Small gold floral buds */}
        <circle cx="28" cy="115" r="2.5" fill="#D4AF37" />
        <circle cx="258" cy="275" r="2.5" fill="#D4AF37" />
        <circle cx="35" cy="445" r="2.5" fill="#D4AF37" />
      </svg>

      {/* Top Header Block */}
      <div className="relative text-center pt-1 pb-1 z-10">
        <LotusMotif size={16} color="#8A5D28" className="mb-0.5" />
        <p className="font-cinzel text-xs tracking-[0.25em] text-[#6E4A28] uppercase font-semibold">
          OUR
        </p>
        <h2 className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.22em] text-[#2C1810] uppercase leading-tight">
          STORY
        </h2>
        <div className="flex items-center justify-center gap-1 mt-0.5">
          <span className="h-[0.5px] w-5 bg-[#C29B38]" />
          <LotusMotif size={12} color="#8A5D28" />
          <span className="h-[0.5px] w-5 bg-[#C29B38]" />
        </div>
      </div>

      {/* 3 Story Vignettes Container */}
      <div className="relative z-10 flex flex-col justify-between flex-1 py-1 gap-2">
        {/* Vignette 1: A Divine Meeting */}
        <div className="flex items-center justify-between gap-2">
          {/* Framed Image */}
          <div className="relative w-[58%] aspect-[16/11] rounded-[24px_12px_24px_12px] p-0.5 bg-gradient-to-br from-[#D4AF37] via-[#FFF1C5] to-[#B37E28] shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="w-full h-full rounded-[23px_11px_23px_11px] overflow-hidden">
              <img
                src="/images/story_meeting.jpg"
                alt="A Divine Meeting"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          {/* Text */}
          <div className="w-[38%] text-right pr-2">
            <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#4A2E16] block uppercase leading-tight">
              A DIVINE
            </span>
            <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#4A2E16] block uppercase leading-tight">
              MEETING
            </span>
            <span className="block text-[11px] text-[#8A5D28] font-cormorant italic mt-0.5">
              ✧ Kailash forest
            </span>
          </div>
        </div>

        {/* Vignette 2: A Deeper Bond */}
        <div className="flex items-center justify-between gap-2">
          {/* Text */}
          <div className="w-[38%] text-left pl-2">
            <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#4A2E16] block uppercase leading-tight">
              A DEEPER
            </span>
            <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#4A2E16] block uppercase leading-tight">
              BOND
            </span>
            <span className="block text-[11px] text-[#8A5D28] font-cormorant italic mt-0.5">
              ✧ Holy Mansarovar
            </span>
          </div>
          {/* Framed Image (Oval / organic shape) */}
          <div className="relative w-[58%] aspect-[16/11] rounded-[12px_24px_12px_24px] p-0.5 bg-gradient-to-br from-[#D4AF37] via-[#FFF1C5] to-[#B37E28] shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="w-full h-full rounded-[11px_23px_11px_23px] overflow-hidden">
              <img
                src="/images/story_lake.jpg"
                alt="A Deeper Bond"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Vignette 3: A Forever Together */}
        <div className="flex items-center justify-between gap-2">
          {/* Framed Image */}
          <div className="relative w-[58%] aspect-[16/11] rounded-[24px_12px_24px_12px] p-0.5 bg-gradient-to-br from-[#D4AF37] via-[#FFF1C5] to-[#B37E28] shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="w-full h-full rounded-[23px_11px_23px_11px] overflow-hidden">
              <img
                src="/images/event_varmala.jpg"
                alt="A Forever Together"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          {/* Text */}
          <div className="w-[38%] text-right pr-2">
            <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#4A2E16] block uppercase leading-tight">
              A FOREVER
            </span>
            <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-[#4A2E16] block uppercase leading-tight">
              TOGETHER
            </span>
            <div className="flex justify-end mt-1">
              <LotusMotif size={12} color="#8A5D28" />
            </div>
          </div>
        </div>
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-[#D4AF37]/60 rounded-xl" />
    </div>
  );
};
