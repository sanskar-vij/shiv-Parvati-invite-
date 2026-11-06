import React, { useState } from 'react';
import { LotusMotif } from '../Decorations';
import { User, Users, ChevronDown, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CardRSVPProps {
  onClick?: () => void;
  onSubmitBlessing?: (name: string, guests: string, message?: string) => void;
}

export const CardRSVP: React.FC<CardRSVPProps> = ({ onClick, onSubmitBlessing }) => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('2');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!name.trim()) return;

    if (onSubmitBlessing) {
      onSubmitBlessing(name, guests);
    }

    // Trigger celestial flower confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FF758F', '#8B1E2B', '#FFF275', '#E5383B'],
      });
    } catch {
      // fallback
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
    }, 4500);
  };

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
          JOIN OUR
        </p>
        <h2 className="font-cinzel text-base sm:text-lg font-bold tracking-[0.22em] text-[#2C1810] uppercase leading-tight">
          CELEBRATION
        </h2>
        <div className="flex items-center justify-center gap-1 mt-0.5">
          <span className="h-[0.5px] w-5 bg-[#C29B38]" />
          <LotusMotif size={10} color="#8A5D28" />
          <span className="h-[0.5px] w-5 bg-[#C29B38]" />
        </div>
      </div>

      {/* Shiv & Parvati Blessing Artwork */}
      <div className="relative w-full h-[52%] overflow-hidden">
        <img
          src="/images/card7_celebration.webp"
          alt="Shiv and Parvati Showering Blessings"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Soft gradient fade into form */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#FAF5EB] via-[#FAF5EB]/80 to-transparent" />
      </div>

      {/* Bottom RSVP Form Block */}
      <div className="relative h-[30%] w-full bg-[#FAF5EB] px-3.5 pb-3 pt-1 flex flex-col justify-center items-center z-10">
        {isSubmitted ? (
          <div className="w-full py-3 bg-[#8B1E2B]/10 border border-[#8B1E2B]/30 rounded-lg text-center animate-fade-in flex flex-col items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-[#8B1E2B] mb-1" />
            <p className="font-cinzel text-xs font-bold text-[#8B1E2B] uppercase tracking-wider">
              Blessings Received!
            </p>
            <p className="font-cormorant italic text-[11px] text-[#5C3A1E]">
              May Mahadev &amp; Devi Maa bless you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-1.5" onClick={(e) => e.stopPropagation()}>
            {/* Name Input */}
            <div className="relative w-full">
              <User className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8A5D28]" />
              <input
                type="text"
                placeholder="YOUR NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full py-1.5 pl-8 pr-2.5 bg-[#FAF5EB] hover:bg-white focus:bg-white border border-[#C29B38] rounded-full text-[10px] sm:text-[11px] font-cinzel tracking-[0.16em] uppercase text-[#2C1810] placeholder-[#8A5D28]/70 focus:outline-none focus:ring-1 focus:ring-[#8B1E2B] focus:border-[#8B1E2B] transition-colors"
              />
            </div>

            {/* Guests Select */}
            <div className="relative w-full">
              <Users className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8A5D28]" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full py-1.5 pl-8 pr-7 bg-[#FAF5EB] hover:bg-white focus:bg-white border border-[#C29B38] rounded-full text-[10px] sm:text-[11px] font-cinzel tracking-[0.16em] uppercase text-[#2C1810] focus:outline-none focus:ring-1 focus:ring-[#8B1E2B] focus:border-[#8B1E2B] transition-colors appearance-none cursor-pointer"
              >
                <option value="1">1 GUEST</option>
                <option value="2">2 GUESTS</option>
                <option value="3">3 GUESTS</option>
                <option value="4">4 GUESTS</option>
                <option value="5+">5+ GUESTS (FAMILY)</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8A5D28] pointer-events-none" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative overflow-hidden w-full py-1.5 px-3 bg-gradient-to-r from-[#7A1521] via-[#8B1E2B] to-[#6E101B] hover:from-[#8E1927] hover:to-[#7E131E] border border-[#D4AF37] rounded-full text-[#FFF0C4] shadow-md flex items-center justify-center gap-1.5 transition-all transform active:scale-95 group/btn"
            >
              <span className="absolute inset-y-0 -left-full w-2/3 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-btn-shimmer pointer-events-none" />
              <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase">
                SEND BLESSINGS
              </span>
              <LotusMotif size={12} color="#F2D06B" className="transition-transform group-hover/btn:rotate-12" />
            </button>
          </form>
        )}
      </div>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-2 ring-[#D4AF37]/60 rounded-xl" />
    </div>
  );
};
