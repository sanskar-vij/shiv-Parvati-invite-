import React, { useState } from 'react';
import { CrownMotif } from './Royal';
import { OrnamentalDivider, DiyaIcon, LotusMotif } from './Decorations';
import { Sparkles, MailOpen } from 'lucide-react';

interface InviteIntroProps {
  onOpen: () => void;
}

export const InviteIntro: React.FC<InviteIntroProps> = ({ onOpen }) => {
  const [leaving, setLeaving] = useState(false);

  const handleOpen = () => {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(onOpen, 650);
  };

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-[#FFFDF8] transition-all duration-700 ease-out overflow-y-auto ${
        leaving ? 'opacity-0 scale-[1.06] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Backdrop dress */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 royal-lattice opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,175,55,0.18),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(139,30,43,0.08),transparent_65%)]" />
      </div>

      <div className="relative flex flex-col items-center text-center px-6 py-10 max-w-md w-full animate-fade-up">
        <div className="flex items-center gap-2">
          <CrownMotif size={20} className="animate-float" />
          <span className="font-cinzel text-[9px] font-bold uppercase tracking-[0.3em] text-[#8A5D28]">
            The Divine Vivaha
          </span>
          <CrownMotif size={20} className="animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <p className="mt-5 font-cormorant text-base text-[#8A5D28] tracking-[0.15em]">
          ॥ श्री गणेशाय नमः ॥
        </p>

        <h1 className="mt-3 font-cinzel-dec text-4xl sm:text-5xl font-bold uppercase leading-tight gold-shimmer-text">
          Shiv
          <span className="font-cinzel"> &amp; </span>
          Parvati
        </h1>

        <OrnamentalDivider color="#B8860B" className="my-4 max-w-[240px]" />

        <p className="font-cinzel text-[11px] font-semibold uppercase tracking-[0.3em] text-[#5C3A1E]">
          The Divine Wedding
        </p>
        <p className="mt-1.5 font-cormorant italic text-sm text-[#8A5D28]">
          Saturday · 6 March 2027 · Mount Kailash
        </p>

        <div className="my-5 relative flex items-center justify-center gap-4">
          <div className="absolute w-36 h-36 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.25),transparent_70%)] animate-glow-pulse pointer-events-none" />
          <DiyaIcon size={24} className="hover:scale-110 transition-transform relative z-10" />
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF6DE] to-[#F0DDAE] border-2 border-[#C9A227] shadow-md flex items-center justify-center z-10">
            <LotusMotif size={28} color="#8B1E2B" className="animate-lotus-breathe" />
          </div>
          <DiyaIcon size={24} className="hover:scale-110 transition-transform relative z-10" />
        </div>

        <button
          onClick={handleOpen}
          className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8B1E2B] via-[#A12434] to-[#6E101B] border border-[#D4AF37] text-white font-cinzel text-xs font-bold uppercase tracking-[0.22em] shadow-[0_15px_35px_-10px_rgba(139,30,43,0.6)] transition-all active:scale-95 hover:shadow-[0_18px_40px_-10px_rgba(139,30,43,0.75)]"
        >
          <span className="absolute inset-y-0 -left-full w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-btn-shimmer pointer-events-none" />
          <span className="absolute inset-0 rounded-full border border-[#D4AF37]/70 animate-ping opacity-30" aria-hidden="true" />
          <MailOpen className="w-4 h-4 text-[#F2D06B] transition-transform group-hover:rotate-12 group-hover:scale-110" />
          <span>Open Invitation</span>
          <Sparkles className="w-4 h-4 text-[#F2D06B] animate-pulse" />
        </button>

        <p className="mt-3.5 font-cormorant italic text-xs text-[#8A5D28]/80">
          Tap to open with divine wedding music ♪
        </p>
      </div>
    </div>
  );
};
