import React, { useEffect, useMemo, useState } from 'react';

export const WEDDING_DATE = new Date('2027-03-06T18:45:00');

interface CountdownTimerProps {
  variant?: 'light' | 'dark';
}

interface TimeParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  elapsed: boolean;
}

const pad = (n: number) => n.toString().padStart(2, '0');

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ variant = 'dark' }) => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts: TimeParts = useMemo(() => {
    const diff = WEDDING_DATE.getTime() - now;
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, elapsed: true };
    }
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      elapsed: false,
    };
  }, [now]);

  const cells = [
    { value: parts.days, label: 'Days' },
    { value: parts.hours, label: 'Hours' },
    { value: parts.minutes, label: 'Mins' },
    { value: parts.seconds, label: 'Secs' },
  ];

  const shell =
    variant === 'dark'
      ? 'bg-[#140B07]/70 border-[#D4AF37]/45 text-[#FFF2CE]'
      : 'bg-[#FDF6E9] border-[#B37E28]/50 text-[#2C1810] shadow-sm';
  const label = variant === 'dark' ? 'text-[#D4AF37]' : 'text-[#8A5D28]';

  if (parts.elapsed) {
    return (
      <div className="flex justify-center">
        <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border ${shell}`}>
          <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-center">
            The Divine Union is Complete
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-md mx-auto">
      {cells.map((cell) => (
        <div
          key={cell.label}
          className={`min-w-0 px-1 py-2 sm:py-2.5 rounded-xl border backdrop-blur-md text-center transition-transform hover:scale-105 duration-200 ${shell}`}
        >
          <div className="font-cinzel text-lg sm:text-3xl font-bold leading-none tabular-nums">
            {pad(cell.value)}
          </div>
          <div className={`font-cinzel text-[8px] sm:text-[10px] uppercase tracking-[0.18em] mt-1 ${label}`}>
            {cell.label}
          </div>
        </div>
      ))}
    </div>
  );
};
