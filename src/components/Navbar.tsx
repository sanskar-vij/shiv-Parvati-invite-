import React, { useState } from 'react';
import { LotusMotif } from './Decorations';
import { AudioPlayer } from './AudioPlayer';
import { useScrollY } from './Reveal';
import { Sparkles, Heart, Menu, X, MapPin, CalendarDays } from 'lucide-react';

export interface NavSection {
  id: string;
  label: string;
}

interface NavbarProps {
  sections: NavSection[];
  activeId: string;
  onNavigate: (id: string) => void;
  petalEnabled: boolean;
  setPetalEnabled: (enabled: boolean) => void;
  onOpenVenue: () => void;
  onOpenCeremonies: () => void;
  onOpenRSVP: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  sections,
  activeId,
  onNavigate,
  petalEnabled,
  setPetalEnabled,
  onOpenVenue,
  onOpenCeremonies,
  onOpenRSVP,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollY();
  const condensed = scrollY > 80;

  const go = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`no-print sticky top-0 z-50 transition-all duration-500 border-b bg-white/95 backdrop-blur-xl ${
        condensed
          ? 'border-[#D4AF37]/45 shadow-[0_10px_30px_-12px_rgba(120,85,30,0.35)]'
          : 'border-[#D4AF37]/25 shadow-[0_6px_20px_-12px_rgba(120,85,30,0.25)]'
      }`}
    >
      <div className="h-[3px] bg-gradient-to-r from-[#8B1E2B] via-[#D4AF37] to-[#8B1E2B]" />

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 transition-all duration-500 ${
          condensed ? 'py-2' : 'py-3.5'
        }`}
      >
        {/* Brand */}
        <button onClick={() => go('home')} className="group flex items-center gap-2.5 shrink-0">
          <span className="p-1 rounded-full bg-[#8B1E2B]/5 border border-[#D4AF37]/60 group-hover:border-[#8B1E2B] transition-colors">
            <LotusMotif size={20} color="#8B1E2B" />
          </span>
          <span className="text-left min-w-0">
            <span className="block font-cinzel text-[13px] sm:text-base font-bold tracking-[0.12em] sm:tracking-[0.2em] text-[#2C1810] group-hover:text-[#8B1E2B] transition-colors uppercase leading-none whitespace-nowrap">
              Shiv &amp; Parvati
            </span>
            <span className="block font-cinzel text-[7px] sm:text-[9px] tracking-[0.24em] sm:tracking-[0.3em] text-[#8A5D28] uppercase mt-0.5 whitespace-nowrap">
              The Divine Wedding
            </span>
          </span>
        </button>

        {/* Desktop anchors */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Invitation navigation">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => go(section.id)}
                className={`relative px-3 py-2 font-cinzel text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.16em] rounded-full transition-colors ${
                  isActive ? 'text-[#8B1E2B]' : 'text-[#6E4A28]/75 hover:text-[#2C1810]'
                }`}
              >
                {section.label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-[1.5px] bg-[#8B1E2B] transition-all duration-300 ${
                    isActive ? 'w-5 opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setPetalEnabled(!petalEnabled)}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border font-cinzel text-[9px] uppercase tracking-[0.18em] transition-all ${
              petalEnabled
                ? 'bg-[#8B1E2B] border-[#8B1E2B] text-white shadow-sm'
                : 'bg-white border-[#D4AF37]/50 text-[#8A5D28] hover:text-[#8B1E2B] hover:border-[#8B1E2B]/50'
            }`}
            title="Toggle the flower-petal shower"
          >
            <Sparkles className={`w-3.5 h-3.5 ${petalEnabled ? 'text-[#F2D06B]' : 'text-[#B8860B]'}`} />
            <span className="hidden xl:inline">Petals</span>
          </button>

          <AudioPlayer />

          <button
            onClick={onOpenVenue}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#FDF6E9] border border-[#D4AF37]/60 font-cinzel text-[9px] font-bold uppercase tracking-[0.18em] text-[#5C3A1E] transition-colors shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-[#8B1E2B]" />
            Venue
          </button>

          <button
            onClick={onOpenCeremonies}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#FDF6E9] border border-[#D4AF37]/60 font-cinzel text-[9px] font-bold uppercase tracking-[0.18em] text-[#5C3A1E] transition-colors shadow-sm"
          >
            <CalendarDays className="w-3.5 h-3.5 text-[#8B1E2B]" />
            Rituals
          </button>

          <button
            onClick={onOpenRSVP}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#8B1E2B] to-[#6E101B] hover:from-[#9C2232] hover:to-[#7E1523] border border-[#8B1E2B] font-cinzel text-[9px] font-bold uppercase tracking-[0.18em] text-white shadow-md transition-all active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 text-[#F2D06B] fill-current" />
            Blessings
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full bg-white border border-[#D4AF37]/60 text-[#5C3A1E] shadow-sm"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-[#D4AF37]/30 px-4 py-4 animate-fade-up shadow-xl">
          <nav className="grid grid-cols-2 gap-2" aria-label="Mobile invitation navigation">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => go(section.id)}
                className={`py-2.5 rounded-xl font-cinzel text-[10px] font-bold uppercase tracking-[0.16em] transition-colors ${
                  activeId === section.id
                    ? 'bg-[#8B1E2B] text-white border border-[#8B1E2B]'
                    : 'bg-[#FDF6E9] text-[#5C3A1E] border border-[#D4AF37]/40'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="mt-3 grid grid-cols-2 gap-2 pt-3 border-t border-[#D4AF37]/25">
            <button
              onClick={() => {
                onOpenVenue();
                setMobileOpen(false);
              }}
              className="py-2.5 rounded-xl bg-[#FDF6E9] border border-[#D4AF37]/40 text-[#5C3A1E] font-cinzel text-[10px] font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8B1E2B]" />
              Venue
            </button>
            <button
              onClick={() => {
                onOpenCeremonies();
                setMobileOpen(false);
              }}
              className="py-2.5 rounded-xl bg-[#FDF6E9] border border-[#D4AF37]/40 text-[#5C3A1E] font-cinzel text-[10px] font-semibold uppercase tracking-[0.14em] flex items-center justify-center gap-1.5"
            >
              <CalendarDays className="w-3.5 h-3.5 text-[#8B1E2B]" />
              Rituals
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
