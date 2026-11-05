import React from 'react';
import { useScrollProgress, useScrollY } from './Reveal';
import { ChevronUp, Sparkles } from 'lucide-react';

interface ScrollProgressProps {
  /** Ordered list of section ids with display labels */
  sections: { id: string; label: string }[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  sections,
  activeId,
  onNavigate,
}) => {
  const progress = useScrollProgress();
  const scrollY = useScrollY();
  const showRail = scrollY > 420;

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none no-print">
        <div
          className="h-full bg-gradient-to-r from-[#8B1E2B] via-[#D4AF37] to-[#F2D06B] shadow-[0_0_10px_rgba(212,175,55,0.7)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Right-hand section rail (desktop) */}
      <nav
        aria-label="Invitation sections"
        className={`hidden xl:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 no-print transition-all duration-500 ${
          showRail ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6 pointer-events-none'
        }`}
      >
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="group flex items-center justify-end gap-2.5"
              aria-current={isActive ? 'true' : 'false'}
              title={section.label}
            >
              <span
                className={`font-cinzel text-[10px] uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 bg-white/85 backdrop-blur-sm px-2 py-0.5 rounded-md border border-[#D4AF37]/30 ${
                  isActive
                    ? 'text-[#8B1E2B] opacity-100'
                    : 'text-[#8A5D28] opacity-0 group-hover:opacity-100'
                }`}
              >
                {section.label}
              </span>
              <span
                className={`rounded-full transition-all duration-300 ring-2 ring-white ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-[#8B1E2B] shadow-[0_0_10px_rgba(139,30,43,0.6)]'
                    : 'w-2 h-2 bg-[#C9A86A]/70 group-hover:bg-[#8B1E2B]'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Back to top */}
      <button
        onClick={() => onNavigate('home')}
        aria-label="Back to top"
        className={`no-print fixed left-5 z-40 items-center justify-center w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/60 text-[#8B1E2B] shadow-lg hover:bg-[#8B1E2B] hover:text-white hover:border-[#8B1E2B] transition-all duration-500 hidden xl:flex ${
          showRail ? 'bottom-6 opacity-100' : '-bottom-20 opacity-0'
        }`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Floating scroll hint (mobile only, fades away) */}
      <div
        className={`xl:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 text-[#8B1E2B] shadow-lg no-print transition-opacity duration-700 ${
          showRail ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span className="font-cinzel text-[9px] uppercase tracking-[0.22em]">Scroll</span>
      </div>
    </>
  );
};
