import React from 'react';
import { LotusMotif, OrnamentalDivider, DiyaIcon } from './Decorations';
import { Heart, MapPin, CalendarDays, Download } from 'lucide-react';

interface FooterProps {
  onOpenVenue: () => void;
  onOpenCeremonies: () => void;
  onOpenRSVP: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenVenue,
  onOpenCeremonies,
  onOpenRSVP,
}) => {
  const handlePrint = () => window.print();

  return (
    <footer className="relative bg-white border-t-2 border-[#D4AF37]/50 text-[#2C1810] pt-14 pb-12 px-5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-8 z-10">
        <div className="flex items-center gap-3">
          <DiyaIcon size={24} />
          <LotusMotif size={36} color="#8B1E2B" />
          <DiyaIcon size={24} />
        </div>

        <div>
          <h2 className="font-cinzel text-xl sm:text-3xl font-bold tracking-[0.22em] text-[#2C1810] uppercase">
            Shiv &amp; Parvati
          </h2>
          <p className="font-cinzel text-[9px] sm:text-xs tracking-[0.3em] text-[#8A5D28] uppercase font-semibold mt-1.5">
            The Divine Wedding · A Celebration of Eternal Love
          </p>
          <p className="font-cormorant text-sm text-[#8A5D28] mt-2">
            Saturday, 6 March 2027 · Godhuli Vela · Kailash Golden Mandap
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#FDF6E9] border border-[#D4AF37]/60 max-w-2xl vintage-shadow">
          <div className="flex items-center justify-center gap-2 text-[#8B1E2B] mb-2">
            <span className="font-cinzel text-[10px] font-bold tracking-widest uppercase">
              Maha Mangala Shanti Mantra
            </span>
          </div>
          <p className="font-cormorant text-base sm:text-xl font-bold italic text-[#7A1521] leading-relaxed">
            « कर्पूरगौरं करुणावतारं संसारसारम् भुजगेन्द्रहारम् ।<br className="hidden sm:inline" />
            सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि ॥ »
          </p>
          <p className="font-cormorant text-xs sm:text-sm text-[#6E4A28] mt-2.5 max-w-lg mx-auto">
            “I bow to the pure, compassionate Lord wearing the serpent garland, who
            dwells forever in the lotus of my heart together with Goddess Bhavani.”
          </p>
        </div>

        <OrnamentalDivider color="#B8860B" className="max-w-md opacity-90" />

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <button
            onClick={onOpenRSVP}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8B1E2B] to-[#6E101B] hover:from-[#9C2232] hover:to-[#7E1523] border border-[#8B1E2B] font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-white flex items-center gap-2 shadow-lg transition-transform active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 text-[#F2D06B] fill-current" />
            Send Blessings
          </button>
          <button
            onClick={onOpenVenue}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-[#FDF6E9] border border-[#D4AF37]/60 font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-[#5C3A1E] flex items-center gap-2 transition-colors shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-[#8B1E2B]" />
            Yatra &amp; Venue
          </button>
          <button
            onClick={onOpenCeremonies}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-[#FDF6E9] border border-[#D4AF37]/60 font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-[#5C3A1E] flex items-center gap-2 transition-colors shadow-sm"
          >
            <CalendarDays className="w-3.5 h-3.5 text-[#8B1E2B]" />
            Rituals
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-[#FDF6E9] border border-[#D4AF37]/60 font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-[#5C3A1E] flex items-center gap-2 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#8B1E2B]" />
            Save Invite
          </button>
        </div>

        <div className="pt-6 border-t border-[#D4AF37]/40 w-full">
          <p className="font-cormorant text-sm text-[#8A5D28]">
            Consecrated for the cosmic union of Shiva &amp; Shakti · Mount Kailash Divine Vivaha
          </p>
          <p className="font-cinzel text-[9px] text-[#B8860B] tracking-widest uppercase mt-1.5">
            ॐ नमः शिवाय · ॐ पार्वत्यै नमः · शुभं भवतु
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 hairline-gold" />
            <a
              href="https://patrikastudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#8A5D28] hover:text-[#8B1E2B] transition-colors underline decoration-[#D4AF37]/50 underline-offset-4"
            >
              Designed by Patrika Studio
            </a>
            <span className="h-[1px] w-8 hairline-gold" />
          </div>
        </div>
      </div>
    </footer>
  );
};
