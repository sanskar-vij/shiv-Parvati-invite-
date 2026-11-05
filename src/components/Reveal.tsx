import React, { useEffect, useRef, useState } from 'react';

export type RevealDirection = 'up' | 'left' | 'right' | 'scale' | 'none';

/** IntersectionObserver-powered scroll reveal hook. Fires once. */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.14) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in milliseconds */
  delay?: number;
  direction?: RevealDirection;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article' | 'header' | 'figure';
}

/** Declarative wrapper that fades/slides its children into view on scroll. */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as = 'div',
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      data-dir={direction}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

/** Scroll-spy: returns the id of the section currently dominating the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const handler = () => {
      const probe = window.innerHeight * 0.34;
      let current = ids[0] ?? '';
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) current = id;
      });
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [ids]);

  return active;
}

/** Current window scrollY (throttled by rAF). */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let frame = 0;
    const handler = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('scroll', handler);
      cancelAnimationFrame(frame);
    };
  }, []);
  return scrollY;
}

/** 0 → 1 page scroll progress. */
export function useScrollProgress() {
  const scrollY = useScrollY();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    setProgress(max > 0 ? Math.min(1, scrollY / max) : 0);
  }, [scrollY]);

  return progress;
}
