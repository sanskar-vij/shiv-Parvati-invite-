import React, { useEffect } from 'react';
import { X, Sparkles, Share2, Calendar, MapPin, Heart } from 'lucide-react';
import { LotusMotif, OrnamentalDivider } from './Decorations';

export interface CardData {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  sanskritVerse?: string;
  verseMeaning?: string;
  highlights: string[];
}

interface CardModalProps {
  card: CardData | null;
  onClose: () => void;
  onOpenVenue?: () => void;
  onOpenCeremonies?: () => void;
  onOpenRSVP?: () => void;
}

export const CardModal: React.FC<CardModalProps> = ({
  card,
  onClose,
  onOpenVenue,
  onOpenCeremonies,
  onOpenRSVP,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (card) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [card, onClose]);

  if (!card) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${card.title} — Shiv & Parvati Divine Wedding`,
        text: card.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[94svh] sm:max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-[#FAF5EB] border-2 border-b-0 sm:border-b-2 border-[#D4AF37] shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-[#2C1810] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile bottom-sheet grabber */}
        <div aria-hidden="true" className="sm:hidden absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/70 z-30" />
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#2C1810]/70 text-[#FFF2CE] hover:bg-[#8B1E2B] transition-colors shadow-md"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image with frame */}
          <div className="relative min-h-[220px] sm:min-h-[320px] md:min-h-full bg-[#120B08] flex items-center justify-center p-4">
            <div className="relative w-full h-full max-h-[300px] sm:max-h-[520px] rounded-lg overflow-hidden border border-[#D4AF37]/60 shadow-xl flex items-center justify-center bg-[#1A0F0A]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full max-h-[300px] sm:max-h-[520px] object-contain object-center"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/40 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Detailed Info & Vedic Shlokas */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category Pill */}
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full bg-[#8B1E2B]/10 border border-[#8B1E2B]/30 font-cinzel text-[10px] font-bold text-[#8B1E2B] tracking-widest uppercase">
                  {card.category}
                </span>
                <LotusMotif size={14} color="#8B1E2B" />
              </div>

              {/* Title & Subtitle */}
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider text-[#2C1810] uppercase">
                {card.title}
              </h2>
              <p className="font-cinzel text-xs font-semibold tracking-[0.2em] text-[#8A5D28] uppercase mt-1">
                {card.subtitle}
              </p>

              <OrnamentalDivider className="my-4" />

              {/* Sanskrit Verse if present */}
              {card.sanskritVerse && (
                <div className="my-4 p-4 rounded-xl bg-[#F4E9D5] border-l-4 border-[#8B1E2B] shadow-inner">
                  <div className="flex items-center gap-1.5 text-[#8B1E2B] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-cinzel text-[10px] font-bold tracking-widest uppercase">
                      Vedic Mangala Shloka
                    </span>
                  </div>
                  <p className="font-cormorant text-base sm:text-lg font-semibold italic text-[#4A2610] leading-relaxed">
                    « {card.sanskritVerse} »
                  </p>
                  {card.verseMeaning && (
                    <p className="font-cormorant text-xs sm:text-sm text-[#6E4A28] mt-1.5">
                      <strong className="text-[#3D2311]">Meaning:</strong> {card.verseMeaning}
                    </p>
                  )}
                </div>
              )}

              {/* Description */}
              <p className="font-cormorant text-base sm:text-lg text-[#3E2718] leading-relaxed mb-4">
                {card.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                <h4 className="font-cinzel text-xs font-bold tracking-widest text-[#7A4F23] uppercase">
                  Sacred Highlights
                </h4>
                <ul className="space-y-1.5 font-cormorant text-sm text-[#4E3220]">
                  {card.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold mt-0.5">✦</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions Toolbar */}
            <div className="pt-4 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {card.id === 6 && onOpenVenue && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenVenue();
                    }}
                    className="px-4 py-2 bg-[#FAF5EB] hover:bg-[#F3E7CE] border border-[#B37E28] rounded-full font-cinzel text-xs font-bold text-[#3D2311] flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#8B1E2B]" />
                    Interactive Map
                  </button>
                )}
                {card.id === 4 && onOpenCeremonies && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCeremonies();
                    }}
                    className="px-4 py-2 bg-[#FAF5EB] hover:bg-[#F3E7CE] border border-[#B37E28] rounded-full font-cinzel text-xs font-bold text-[#3D2311] flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#8B1E2B]" />
                    Full Schedule
                  </button>
                )}
                {card.id === 7 && onOpenRSVP && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenRSVP();
                    }}
                    className="px-4 py-2 bg-[#8B1E2B] hover:bg-[#721521] text-amber-100 rounded-full font-cinzel text-xs font-bold flex items-center gap-1.5 transition-all shadow-md"
                  >
                    <Heart className="w-3.5 h-3.5 text-[#F2D06B]" />
                    Send Blessings
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full border border-[#C29B38]/50 hover:bg-[#F4E9D5] text-[#5C3A1E] transition-colors"
                  title="Share this moment"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-[#2C1810] hover:bg-[#452718] text-[#FAF5EB] rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Close Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
