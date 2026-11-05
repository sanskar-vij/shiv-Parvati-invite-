import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Sparkles, Shirt, Compass, Heart, CheckCircle2 } from 'lucide-react';
import { LotusMotif, OrnamentalDivider } from './Decorations';
import confetti from 'canvas-confetti';

interface DressCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PALETTE = [
  { name: 'Sacred Vermilion', hex: '#8B1E2B', desc: 'Auspicious Sindoor & Passion' },
  { name: 'Royal Kailash Gold', hex: '#D4AF37', desc: 'Solar Energy & Purity' },
  { name: 'Haldi Saffron', hex: '#FFB703', desc: 'Sacred Vows & Warmth' },
  { name: 'Temple Emerald', hex: '#0D5C3A', desc: 'Nature & Prosperity' },
  { name: 'Raw Silk Ivory', hex: '#FAF5EB', desc: 'Peace & Cosmic Harmony', darkText: true },
];

export const DressCodeModal: React.FC<DressCodeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Auspicious celebratory golden sparkles on opening
    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.4 },
        colors: ['#D4AF37', '#FFB703', '#8B1E2B', '#0D5C3A', '#FAF5EB'],
      });
    } catch {
      // Fallback
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FFFDF7] rounded-2xl border-2 border-[#D4AF37] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden animate-modal-in flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="relative flex items-center justify-between px-5 py-3.5 border-b border-[#D4AF37]/40 bg-gradient-to-r from-[#FAF5EB] via-[#FFFDF7] to-[#FAF5EB]">
          <div className="flex items-center gap-2.5">
            <LotusMotif size={20} color="#8A5D28" className="animate-lotus-breathe" />
            <div>
              <h3 className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#8A5D28]">
                CEREMONIAL DRESS CODE
              </h3>
              <p className="font-cormorant italic text-xs text-[#6E4A28] leading-none">
                Traditional Indian Festive &amp; Royal Vedic Attire
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#D4AF37]/70 bg-white hover:bg-[#8B1E2B] hover:text-white hover:border-[#8B1E2B] text-[#5C3A1E] transition-all flex items-center justify-center shadow-sm cursor-pointer"
            title="Close (Esc)"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto bg-gradient-to-b from-[#FFFDF7] to-[#FAF5EB] space-y-5">
          {/* Intro Lore */}
          <div className="text-center">
            <p className="font-cinzel text-[10px] uppercase tracking-[0.24em] text-[#8B1E2B] font-bold">
              ॥ परिधान संस्कारः ॥
            </p>
            <p className="font-cormorant italic text-base sm:text-lg text-[#3E2719] mt-1 leading-snug">
              “Guests are respectfully requested to grace the holy wedding of Shiva and Parvati in traditional Indian festive elegance.”
            </p>
            <OrnamentalDivider color="#B8860B" className="max-w-[200px] mx-auto my-2 opacity-80" />
          </div>

          {/* Men and Women Attire Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Women Attire */}
            <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/60 shadow-sm">
              <div className="flex items-center gap-2 text-[#8B1E2B] mb-2 font-cinzel text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>For Women (देव्यः)</span>
              </div>
              <ul className="space-y-1.5 text-xs font-cormorant text-[#3E2719] leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span><strong>Silk Sarees:</strong> Kanjeevaram, Banarasi, Pattu, or Paithani.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span><strong>Lehengas &amp; Anarkalis:</strong> Richly embroidered with gold zari or gotapatti.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span><strong>Accents:</strong> Fragrant jasmine gajra &amp; temple jewellery.</span>
                </li>
              </ul>
            </div>

            {/* Men Attire */}
            <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/60 shadow-sm">
              <div className="flex items-center gap-2 text-[#8B1E2B] mb-2 font-cinzel text-xs font-bold uppercase tracking-wider">
                <Shirt className="w-4 h-4" />
                <span>For Men (देवाः)</span>
              </div>
              <ul className="space-y-1.5 text-xs font-cormorant text-[#3E2719] leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span><strong>Sherwani &amp; Bandhgala:</strong> Royal silk brocade or raw silk.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span><strong>Kurta-Pyjama &amp; Dhoti:</strong> Matched with embroidered Angavastram.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span><strong>Accents:</strong> Royal gold safa (turban) &amp; silk stole.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Auspicious Color Palette */}
          <div className="p-4 rounded-xl bg-white border border-[#D4AF37]/60 shadow-sm">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#8A5D28] mb-2.5 text-center">
              Auspicious Celestial Color Palette
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {PALETTE.map((c) => (
                <div key={c.name} className="flex flex-col items-center text-center p-2 rounded-lg bg-[#FAF5EB] border border-[#D4AF37]/40">
                  <span
                    className="w-7 h-7 rounded-full border border-black/15 shadow-inner mb-1"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="font-cinzel text-[9px] font-bold text-[#2C1810] leading-tight">
                    {c.name}
                  </span>
                  <span className="font-cormorant text-[10px] text-[#8A5D28] leading-tight mt-0.5">
                    {c.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Climate & Comfort Advice */}
          <div className="p-3.5 rounded-xl bg-[#FAF3E0] border border-[#B8860B]/50 flex items-start gap-3">
            <Compass className="w-5 h-5 text-[#8B1E2B] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-cinzel text-xs font-bold text-[#8B1E2B] uppercase">
                Mount Kailash Climate &amp; Warmth
              </h5>
              <p className="font-cormorant text-xs text-[#5C3A1E] mt-0.5 leading-relaxed">
                The Himalayan celestial sanctum rests at a pleasant 18°C with gentle glacial breezes. We lovingly recommend carrying an authentic cashmere pashmina shawl or a warm royal silk angavastram for evening rituals.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="py-3 px-5 bg-[#FAF5EB] border-t border-[#D4AF37]/40 flex items-center justify-between">
          <span className="font-cinzel text-[9px] uppercase tracking-wider text-[#8A5D28]">
            Vedic Wedding Dress Protocol
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#8B1E2B] hover:bg-[#721521] text-white font-cinzel text-[9.5px] font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
