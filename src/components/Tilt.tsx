import React, { useRef, useState } from 'react';

interface TiltProps {
  children: React.ReactNode;
  max?: number;
}

/** Gentle 3D tilt with a travelling light glare (fine pointers only). */
export const Tilt: React.FC<TiltProps> = ({ children, max = 7 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [fine] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches
  );

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !fine) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${(px * max).toFixed(2)}deg) rotateX(${(-py * max).toFixed(2)}deg)`;
    if (glareRef.current) {
      glareRef.current.style.opacity = '1';
      glareRef.current.style.background = `radial-gradient(circle at ${((px + 0.5) * 100).toFixed(1)}% ${((py + 0.5) * 100).toFixed(1)}%, rgba(255,243,196,0.38), transparent 62%)`;
    }
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1100px) rotateY(0deg) rotateX(0deg)';
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative transition-transform duration-200 ease-out will-change-transform"
    >
      {children}
      {fine && (
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[18px] z-10 opacity-0 transition-opacity duration-300"
        />
      )}
    </div>
  );
};
