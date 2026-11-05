import React from 'react';
import { LotusMotif } from './Decorations';

/* ---------- Royal crown motif ---------- */
export const CrownMotif: React.FC<{ size?: number; className?: string }> = ({
  size = 22,
  className = '',
}) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 64 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M8 30 L12 12 L22 22 L32 6 L42 22 L52 12 L56 30 Z"
      fill="url(#crownGold)"
      stroke="#7A4B11"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <rect x="6" y="30" width="52" height="9" rx="2" fill="url(#crownGold)" stroke="#7A4B11" strokeWidth="1.2" />
    <circle cx="12" cy="9" r="2.6" fill="#8B1E2B" stroke="#F2D06B" strokeWidth="1" />
    <circle cx="32" cy="3.5" r="2.6" fill="#8B1E2B" stroke="#F2D06B" strokeWidth="1" />
    <circle cx="52" cy="9" r="2.6" fill="#8B1E2B" stroke="#F2D06B" strokeWidth="1" />
    <circle cx="20" cy="34.5" r="2" fill="#8B1E2B" stroke="#FFF3C4" strokeWidth="0.8" />
    <circle cx="32" cy="34.5" r="2" fill="#8B1E2B" stroke="#FFF3C4" strokeWidth="0.8" />
    <circle cx="44" cy="34.5" r="2" fill="#8B1E2B" stroke="#FFF3C4" strokeWidth="0.8" />
    <defs>
      <linearGradient id="crownGold" x1="6" y1="4" x2="58" y2="39" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9E29C" />
        <stop offset="0.45" stopColor="#D4AF37" />
        <stop offset="1" stopColor="#8A5A18" />
      </linearGradient>
    </defs>
  </svg>
);

/* ---------- Numbered limited-edition pill ---------- */
export const EditionPill: React.FC = () => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3A2313] via-[#5A3A16] to-[#3A2313] border border-[#D4AF37] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)]">
    <CrownMotif size={15} />
    <span className="font-cinzel text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-[#F2D06B] whitespace-nowrap">
      Limited Royal Edition · № 001 / 108
    </span>
    <CrownMotif size={15} />
  </div>
);

/* ---------- Twin-gold royal page frame ---------- */
export const RoyalFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative p-[10px] sm:p-3 rounded-[18px] bg-gradient-to-br from-[#F3E3B8] via-[#FFFDF6] to-[#EED9A4] border border-[#C9A227]/80 shadow-[0_24px_55px_-20px_rgba(140,100,25,0.55)] group/royal-frame">
    {/* Inner hairline */}
    <div className="absolute inset-[5px] rounded-[13px] border border-[#C9A227]/50 pointer-events-none" />
    {/* Crown medallion */}
    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFFDF6] border border-[#C9A227] rounded-full px-2.5 py-1 shadow-md leading-none hover:scale-110 transition-transform">
      <CrownMotif size={15} />
    </span>
    {/* Corner diamonds */}
    <span className="absolute -top-[5px] -left-[5px] w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#F6E27A] to-[#B8860B] border border-[#8A5D28]/60 shadow" />
    <span className="absolute -top-[5px] -right-[5px] w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#F6E27A] to-[#B8860B] border border-[#8A5D28]/60 shadow" />
    <span className="absolute -bottom-[5px] -left-[5px] w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#F6E27A] to-[#B8860B] border border-[#8A5D28]/60 shadow" />
    <span className="absolute -bottom-[5px] -right-[5px] w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#F6E27A] to-[#B8860B] border border-[#8A5D28]/60 shadow" />
    {/* Card seat with subtle specular gold sheen sweep */}
    <div className="relative rounded-[10px] overflow-hidden">
      {children}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px] z-30">
        <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-card-sheen pointer-events-none" />
      </div>
    </div>
  </div>
);

/* ---------- Rotating limited-edition seal ---------- */
export const RoyalSeal: React.FC<{ size?: number }> = ({ size = 112 }) => (
  <div className="relative" style={{ width: size, height: size }} aria-hidden="true">
    <svg viewBox="0 0 120 120" className="absolute inset-0 animate-spin-slower">
      <defs>
        <path id="seal-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
        <linearGradient id="sealGold" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2D06B" />
          <stop offset="0.5" stopColor="#B8860B" />
          <stop offset="1" stopColor="#8A5D28" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="57" fill="rgba(255,253,246,0.6)" stroke="url(#sealGold)" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="33" fill="none" stroke="url(#sealGold)" strokeWidth="1" />
      <text fontSize="9" letterSpacing="1" fill="#8A5D28" fontFamily="Cinzel, serif" fontWeight={700}>
        <textPath href="#seal-circle" textLength="280" lengthAdjust="spacingAndGlyphs">
          LIMITED ROYAL EDITION · SHIV WEDS PARVATI ·
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <LotusMotif size={30} color="#8B1E2B" />
    </div>
  </div>
);

/* ---------- Fixed royal monogram (top-left) ---------- */
export const RoyalMonogram: React.FC = () => (
  <div className="fixed top-3 left-3 z-40 flex items-center gap-2">
    <span className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF6DE] to-[#F0DDAE] border-2 border-[#C9A227] shadow-md flex items-center justify-center mt-1.5">
      <span className="font-cinzel-dec text-[13px] font-bold text-[#8B1E2B]">S·P</span>
      <span className="absolute -top-[9px] left-1/2 -translate-x-1/2 leading-none">
        <CrownMotif size={13} />
      </span>
    </span>
    <span className="hidden min-[420px]:flex flex-col font-cinzel text-[7.5px] font-bold uppercase tracking-[0.2em] text-[#8A5D28] leading-none">
      <span>Shiv</span>
      <span className="text-[7px] text-[#B8860B] my-[1.5px] leading-none">&amp;</span>
      <span>Parvati</span>
    </span>
  </div>
);
