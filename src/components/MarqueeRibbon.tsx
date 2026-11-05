import React from 'react';

const ITEMS = [
  'Shiv weds Parvati',
  '6 March 2027',
  'Mount Kailash',
  'Limited Royal Edition',
  'A Celebration of Eternal Love',
];

export const MarqueeRibbon: React.FC = () => (
  <div
    aria-hidden="true"
    className="relative overflow-hidden py-2.5 bg-gradient-to-r from-[#3A2313] via-[#5A3A16] to-[#3A2313] border-y border-[#D4AF37]/70"
  >
    <div className="flex w-max animate-marquee">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex shrink-0 items-center">
          {ITEMS.map((text) => (
            <span
              key={`${copy}-${text}`}
              className="mx-5 flex items-center gap-5 font-cinzel text-[10px] font-bold uppercase tracking-[0.24em] text-[#F2D06B] whitespace-nowrap"
            >
              {text}
              <span className="text-[#D4AF37]">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
