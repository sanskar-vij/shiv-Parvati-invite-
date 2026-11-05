import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playTempleBell } from '../utils/audio';

export const BlessingBurst: React.FC = () => {
  const [count, setCount] = useState(108);
  const [pops, setPops] = useState<number[]>([]);

  const burst = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Play sacred temple bell chime on heart tap
    playTempleBell();

    const origin = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
    try {
      confetti({
        particleCount: 55,
        spread: 80,
        startVelocity: 38,
        gravity: 0.9,
        ticks: 160,
        origin,
        colors: ['#D4AF37', '#F2D06B', '#FF758F', '#8B1E2B', '#FFF3C4'],
      });
    } catch {
      /* no-op */
    }
    setCount((c) => c + 1);
    const id = Date.now() + Math.random();
    setPops((p) => [...p.slice(-4), id]);
    window.setTimeout(() => {
      setPops((p) => p.filter((i) => i !== id));
    }, 1200);
  };

  return (
    <div className="fixed bottom-5 left-4 z-40 flex flex-col items-center">
      {/* Rising +1 pops */}
      <div className="relative h-0 w-full pointer-events-none" aria-hidden="true">
        {pops.map((id) => (
          <span
            key={id}
            className="animate-rise-fade absolute -top-3 left-1/2 -translate-x-1/2 font-cinzel text-[11px] font-bold text-[#8B1E2B] whitespace-nowrap"
          >
            +1 ♥
          </span>
        ))}
      </div>

      <button
        onClick={burst}
        aria-label="Shower a blessing"
        title="Tap to shower a blessing"
        className="group relative flex flex-col items-center active:scale-90 transition-transform"
      >
        <span className="absolute -inset-1 rounded-full border border-[#D4AF37]/60 animate-slow-ping pointer-events-none" />
        <span className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#8B1E2B] to-[#5A0F1A] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_12px_28px_-8px_rgba(139,30,43,0.65)] group-hover:shadow-[0_14px_32px_-8px_rgba(139,30,43,0.8)]">
          <Heart className="w-6 h-6 text-[#F2D06B] fill-current animate-pulse group-hover:scale-110 transition-transform" />
        </span>
        <span className="mt-1 px-2 py-px rounded-full bg-white/90 backdrop-blur border border-[#D4AF37]/60 font-cinzel text-[9px] font-bold text-[#8B1E2B] shadow-sm">
          {count} ♥
        </span>
      </button>
    </div>
  );
};
