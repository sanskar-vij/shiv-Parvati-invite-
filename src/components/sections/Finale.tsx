import React from 'react';
import { Reveal, useScrollY } from '../Reveal';
import { LotusMotif, DiyaIcon } from '../Decorations';
import { Heart, MapPin, Download } from 'lucide-react';

interface FinaleProps {
  onOpenRSVP: () => void;
  onOpenVenue: () => void;
  onPrint: () => void;
}

export const Finale: React.FC<FinaleProps> = ({ onOpenRSVP, onOpenVenue, onPrint }) => {
  const scrollY = useScrollY();

  return (
    <section id="forever" className="relative min-h-[92svh] flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src="/images/card8_forever.webp"
          alt="Shiva and Parvati watching the moon rise over Kailash"
          loading="lazy"
          className="w-full h-full object-cover object-center"
          style={{ transform: `scale(1.12) translate3d(0, ${Math.min(scrollY * 0.04, 40)}px, 0)` }}
        />
        {/* Readability scrim over imagery */}
        <div className="absolute inset-0 bg-[#0B0604]/55" />
        {/* Blend into the white page above and below */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 py-24 text-center">
        <Reveal direction="scale">
          <p className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.42em] text-[#F2D06B] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Forever
          </p>
          <h2 className="mt-2 font-cinzel text-3xl sm:text-5xl font-bold uppercase tracking-[0.14em] gold-text-bright drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
            Together
          </h2>

          <div className="mt-5 flex items-center justify-center gap-3">
            <DiyaIcon size={24} />
            <LotusMotif size={34} color="#D4AF37" />
            <DiyaIcon size={24} />
          </div>

          <h3 className="mt-5 font-cinzel text-2xl sm:text-4xl font-bold uppercase tracking-[0.16em] text-[#FFF0C4] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Shiv &amp; Parvati
          </h3>
          <p className="mt-2 font-cinzel text-[10px] sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#E6C575] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            A celebration of eternal love
          </p>

          <p className="mt-6 font-cormorant text-base sm:text-xl italic text-amber-100/90 leading-relaxed max-w-xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            “May the union of Shiva and Shakti bless every home with peace,
            prosperity and unshakeable devotion.”
          </p>

          <p className="mt-4 font-cormorant text-base text-[#E8CFA0] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            ॐ नमः शिवाय · ॐ पार्वत्यै नमः · शुभं भवतु
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={onOpenRSVP}
              className="px-6 py-3.5 sm:py-3 rounded-full bg-gradient-to-r from-[#8B1E2B] to-[#6E101B] hover:from-[#9C2232] hover:to-[#7E1523] border border-[#D4AF37] text-white font-cinzel text-xs font-bold uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 text-[#F2D06B] fill-current" />
              Send Blessings
            </button>
            <button
              onClick={onOpenVenue}
              className="px-6 py-3.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-[#D4AF37]/60 text-amber-100 font-cinzel text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#F2D06B]" />
              Yatra Guide
            </button>
            <button
              onClick={onPrint}
              className="px-6 py-3.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-[#D4AF37]/60 text-amber-100 font-cinzel text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#F2D06B]" />
              Save Invite
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
