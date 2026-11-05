import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Flame, RotateCcw } from 'lucide-react';
import { LotusMotif } from './Decorations';
import royalDiyaImg from '../assets/images/royal_diya.png';

export const DiyaRow: React.FC = () => {
  // Lamp starts UNLIT so user can tap it to light the flame
  const [isLit, setIsLit] = useState(false);
  const [justLit, setJustLit] = useState(false);
  const [blessings, setBlessings] = useState(108);
  const [showBurst, setShowBurst] = useState(false);

  // Reset "justLit" ignition animation trigger after 700ms so it smoothly switches to the continuous flame dance
  useEffect(() => {
    if (justLit) {
      const timer = setTimeout(() => setJustLit(false), 700);
      return () => clearTimeout(timer);
    }
  }, [justLit]);

  // Tap handler to kindle or bestow further blessings
  const handleTap = (e: React.MouseEvent) => {
    e.stopPropagation();

    const wasUnlit = !isLit;
    if (wasUnlit) {
      setIsLit(true);
      setJustLit(true);
    }

    setBlessings((b) => b + 1);
    setShowBurst(true);
    setTimeout(() => setShowBurst(false), 1400);

    // Auspicious celebratory golden sparkles & flower petals
    try {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: wasUnlit ? 60 : 35,
        spread: wasUnlit ? 80 : 55,
        startVelocity: wasUnlit ? 28 : 22,
        origin: { x, y },
        colors: ['#D4AF37', '#FFB703', '#8B1E2B', '#FFF275', '#E5383B', '#FFFFFF'],
      });
    } catch {
      // Fallback
    }
  };

  // Extinguish so user can re-experience lighting the lamp
  const handleExtinguish = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLit(false);
    setJustLit(false);
  };

  return (
    <div className="w-full rounded-2xl border border-[#D4AF37]/70 bg-gradient-to-b from-white/95 via-[#FFFDF7]/95 to-[#FAF5EB]/95 backdrop-blur px-4 py-4 shadow-lg text-center relative overflow-hidden group animate-gold-border-pulse">
      {/* Header flourish */}
      <div className="flex items-center justify-center gap-1.5 mb-1">
        <span className="h-px w-6 hairline-gold" />
        <LotusMotif size={16} color="#8A5D28" className="animate-lotus-breathe" />
        <span className="h-px w-6 hairline-gold" />
      </div>

      <h3 className="font-cinzel text-[11px] font-bold uppercase tracking-[0.24em] text-[#8A5D28]">
        DEEP PRAJWALAN
      </h3>
      <p className="font-cormorant italic text-xs text-[#6E4A28] mt-0.5">
        Sacred Akhand Jyoti · Touch to Light the Lamp
      </p>

      {/* The Diya Lamp Interactive Stage */}
      <div className="relative my-2 flex justify-center items-center">
        {/* Warm golden aura spreading behind the lamp when lit */}
        {isLit && (
          <div className="absolute top-2 w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(255,183,3,0.38),rgba(255,120,0,0.18),transparent_72%)] animate-glow-pulse pointer-events-none" />
        )}

        {/* Diya Button / Interactive Area */}
        <button
          onClick={handleTap}
          className={`relative group/diya rounded-2xl p-2 transition-all duration-300 focus:outline-none cursor-pointer ${
            !isLit
              ? 'hover:scale-[1.03] active:scale-95 animate-unlit-pulse'
              : 'hover:scale-[1.02] active:scale-95'
          }`}
          title={isLit ? 'Tap to bestow more blessings' : 'Tap to light the sacred flame'}
          aria-label={isLit ? 'Bestow blessings upon the lit diya' : 'Kindle the sacred diya lamp'}
        >
          {/* Diya Display Container strictly 1:1 aspect-square matching the 1024x1024 artwork */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 aspect-square mx-auto flex items-center justify-center">
            {/* The Diya Bowl Image (with clean transparent background) */}
            <img
              src={royalDiyaImg || '/images/royal_diya.png'}
              alt="Ornate Royal Diya Lamp Bowl"
              className="w-full h-full object-contain select-none pointer-events-none filter drop-shadow-[0_8px_16px_rgba(138,93,40,0.22)] transition-transform duration-500 group-hover/diya:scale-[1.02]"
              draggable={false}
            />

            {/* Ghee surface warm golden reflection when lit - centered on oil pool */}
            {isLit && (
              <div
                className="absolute w-28 h-10 sm:w-32 sm:h-11 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,214,102,0.7),rgba(255,140,0,0.28),transparent_72%)] animate-oil-glow pointer-events-none"
                style={{
                  left: '53.0%',
                  top: '55.5%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )}

            {/* ================= UNLIT STATE HINT (Directly on Wick Tip) ================= */}
            {!isLit && (
              <div
                className="absolute flex flex-col items-center pointer-events-none transition-opacity duration-300"
                style={{
                  left: '52.6%',
                  top: '41.0%',
                  transform: 'translate(-50%, -100%)',
                }}
              >
                {/* Gentle pulsing spark cue right on unlit wick tip */}
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB703] opacity-60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-tr from-[#D4AF37] to-[#FFF275] shadow-sm text-[8px] items-center justify-center font-bold text-[#8B1E2B]">
                    ✦
                  </span>
                </span>
                <span className="mt-1 font-cinzel text-[8px] font-bold tracking-widest text-[#8A5D28] bg-white/95 px-2 py-0.5 rounded-full border border-[#D4AF37]/60 shadow-sm whitespace-nowrap">
                  TAP TO LIGHT
                </span>
              </div>
            )}

            {/* ================= LIT SACRED FLAME (Anchored on Wick Tip) ================= */}
            {isLit && (
              <div
                className="absolute pointer-events-none select-none z-10"
                style={{
                  left: '52.6%',
                  top: '41.0%',
                }}
              >
                {/* Multi-layered Sacred Akhand Jyoti Flame */}
                <div
                  className={`w-10 h-16 sm:w-11 sm:h-20 ${
                    justLit ? 'animate-flame-ignite' : 'animate-flame-dance'
                  }`}
                >
                  <svg
                    viewBox="0 0 60 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      {/* Outer Flame Gradient: Vermilion to Rich Gold */}
                      <linearGradient id="outerFlameGrad" x1="30" y1="90" x2="30" y2="2" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#E63946" />
                        <stop offset="25%" stopColor="#F77F00" />
                        <stop offset="70%" stopColor="#FCBF49" />
                        <stop offset="100%" stopColor="#FFF275" />
                      </linearGradient>

                      {/* Middle Flame Gradient: Luminous Amber */}
                      <linearGradient id="midFlameGrad" x1="30" y1="86" x2="30" y2="10" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="45%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#FEF08A" />
                      </linearGradient>

                      {/* Inner Pure Brahmic Core: Radiant White-Gold */}
                      <linearGradient id="coreFlameGrad" x1="30" y1="82" x2="30" y2="18" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FFFBEB" />
                        <stop offset="50%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#FEF08A" />
                      </linearGradient>

                      {/* Base Azure Combustion Ring */}
                      <linearGradient id="baseBlueGrad" x1="24" y1="86" x2="36" y2="90" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.85)" />
                        <stop offset="100%" stopColor="rgba(147,197,253,0.3)" />
                      </linearGradient>
                    </defs>

                    {/* Outer Radiant Flame Teardrop */}
                    <path
                      d="M 30,90 C 21,85 9,70 9,52 C 9,30 23,12 30,2 C 37,12 51,30 51,52 C 51,70 39,85 30,90 Z"
                      fill="url(#outerFlameGrad)"
                      className="opacity-95"
                    />

                    {/* Middle Golden Flame Petal */}
                    <path
                      d="M 30,86 C 23,80 15,67 15,51 C 15,33 25,18 30,8 C 35,18 45,33 45,51 C 45,67 37,80 30,86 Z"
                      fill="url(#midFlameGrad)"
                      className="animate-flame-inner"
                    />

                    {/* Inner White-Hot Jyoti Core */}
                    <path
                      d="M 30,82 C 25,76 20,64 20,50 C 20,36 26,24 30,16 C 34,24 40,36 40,50 C 40,64 35,76 30,82 Z"
                      fill="url(#coreFlameGrad)"
                      className="animate-flame-inner"
                      style={{ animationDelay: '0.3s' }}
                    />

                    {/* Blue Combustion Base over the wick tip */}
                    <ellipse
                      cx="30"
                      cy="88"
                      rx="7"
                      ry="3.5"
                      fill="url(#baseBlueGrad)"
                    />
                  </svg>
                </div>

                {/* Rising Golden Ember Sparks */}
                <span className="absolute top-0 left-1/2 text-[#FFF3B0] text-[10px] animate-ember-1 pointer-events-none drop-shadow">
                  ✦
                </span>
                <span className="absolute top-0 left-1/2 text-[#FFD60A] text-[9px] animate-ember-2 pointer-events-none drop-shadow">
                  ✨
                </span>
                <span className="absolute top-0 left-1/2 text-[#FFF9D2] text-[8px] animate-ember-3 pointer-events-none drop-shadow">
                  •
                </span>
              </div>
            )}
          </div>

          {/* Floating +1 Blessing Shower Badge */}
          {showBurst && (
            <span className="animate-rise-fade absolute -top-2 left-1/2 -translate-x-1/2 font-cinzel text-xs font-bold text-[#8B1E2B] whitespace-nowrap bg-white/95 px-2.5 py-0.5 rounded-full border border-[#D4AF37] shadow-md z-20">
              +1 Divine Blessing 🪔
            </span>
          )}
        </button>
      </div>

      {/* Main Interactive Button */}
      <div className="flex flex-col items-center gap-1.5 mt-1">
        <button
          onClick={handleTap}
          className={`group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] shadow-md transition-all active:scale-95 hover:shadow-lg w-full max-w-[260px] cursor-pointer ${
            !isLit
              ? 'bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8A5D28] border border-[#FFD700] hover:brightness-110'
              : 'bg-gradient-to-r from-[#8B1E2B] via-[#A12434] to-[#6E101B] border border-[#D4AF37] hover:brightness-105'
          }`}
        >
          <span className="absolute inset-y-0 -left-full w-2/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-btn-shimmer pointer-events-none" />
          <Flame className={`w-3.5 h-3.5 ${!isLit ? 'text-amber-100 animate-bounce' : 'text-[#F2D06B] animate-pulse'}`} />
          <span>{isLit ? 'Shower More Blessings' : 'Kindle Sacred Flame'}</span>
          <Sparkles className="w-3.5 h-3.5 text-[#F2D06B]" />
        </button>

        {/* Option to extinguish & light again to re-watch the kindling animation */}
        {isLit && (
          <button
            onClick={handleExtinguish}
            className="inline-flex items-center gap-1 font-cinzel text-[9px] uppercase tracking-wider text-[#8A5D28]/80 hover:text-[#8B1E2B] hover:underline transition-colors mt-0.5 cursor-pointer"
            title="Reset to light the lamp again"
          >
            <RotateCcw className="w-2.5 h-2.5" />
            <span>Extinguish &amp; Light Again</span>
          </button>
        )}
      </div>

      {/* Auspicious Status Message */}
      <p className="mt-2 font-cormorant italic text-xs text-[#8A5D28]">
        {!isLit
          ? 'Touch the diya or tap Kindle to ignite the sacred flame & bless the couple'
          : showBurst
          ? 'ॐ Shubh Deepam! Sacred flame kindled with divine eternal light!'
          : `${blessings} blessings showered · The sacred Akhand Jyoti is glowing`}
      </p>
    </div>
  );
};
