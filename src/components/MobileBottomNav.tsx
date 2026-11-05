import React from 'react';
import { Home, CalendarDays, Heart, MapPin, LayoutGrid } from 'lucide-react';

interface MobileBottomNavProps {
  activeId: string;
  onNavigate: (id: string) => void;
  onOpenRSVP: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeId,
  onNavigate,
  onOpenRSVP,
}) => {
  const tab = (id: string, label: string, Icon: React.ElementType) => {
    const isActive = activeId === id;
    return (
      <button
        key={id}
        onClick={() => onNavigate(id)}
        aria-label={label}
        aria-current={isActive ? 'true' : undefined}
        className="relative flex flex-1 flex-col items-center justify-center gap-1 py-2 min-h-[54px] active:scale-95 transition-transform"
      >
        <Icon
          className={`w-[22px] h-[22px] transition-colors ${
            isActive ? 'text-[#8B1E2B]' : 'text-[#8A5D28]/55'
          }`}
        />
        <span
          className={`font-cinzel text-[8px] font-bold uppercase tracking-[0.14em] transition-colors ${
            isActive ? 'text-[#8B1E2B]' : 'text-[#8A5D28]/60'
          }`}
        >
          {label}
        </span>
        {isActive && (
          <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#8B1E2B]" />
        )}
      </button>
    );
  };

  return (
    <nav
      aria-label="Primary mobile navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 no-print"
    >
      <div className="bg-white/95 backdrop-blur-xl border-t border-[#D4AF37]/50 shadow-[0_-10px_30px_-12px_rgba(120,85,30,0.35)]">
        <div className="grid grid-cols-5 items-end px-1 pt-1 pb-safe">
          {tab('home', 'Home', Home)}
          {tab('events', 'Events', CalendarDays)}

          {/* Raised centre blessings action */}
          <button
            onClick={onOpenRSVP}
            aria-label="Send blessings"
            className="flex flex-1 flex-col items-center justify-end gap-1 pb-2 min-h-[54px] active:scale-95 transition-transform"
          >
            <span className="-mt-8 w-14 h-14 rounded-full bg-gradient-to-br from-[#8B1E2B] to-[#5A0F1A] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_10px_25px_-6px_rgba(139,30,43,0.6)]">
              <Heart className="w-6 h-6 text-[#F2D06B] fill-current" />
            </span>
            <span className="font-cinzel text-[8px] font-bold uppercase tracking-[0.14em] text-[#8B1E2B]">
              Bless
            </span>
          </button>

          {tab('venue', 'Venue', MapPin)}
          {tab('suite', 'Suite', LayoutGrid)}
        </div>
      </div>
    </nav>
  );
};
