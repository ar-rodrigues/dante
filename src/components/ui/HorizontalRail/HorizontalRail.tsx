'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import styles from './HorizontalRail.module.css';

type HorizontalRailProps = {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  label?: string;
  showDots?: boolean;
  itemCount: number;
};

export function HorizontalRail({
  children,
  className,
  trackClassName,
  label = 'Carrusel',
  showDots = true,
  itemCount,
}: HorizontalRailProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [requested, setRequested] = useState<number | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const rail = trackRef.current;
    if (!rail) return;

    const update = () => {
      const cards = [...rail.children] as HTMLElement[];
      if (!cards.length) return;
      const box = rail.getBoundingClientRect();
      let next = 0;
      let distance = Infinity;
      cards.forEach((card, i) => {
        const delta = Math.abs(card.getBoundingClientRect().left - box.left);
        if (delta < distance) {
          distance = delta;
          next = i;
        }
      });
      if (
        rail.scrollWidth > rail.clientWidth &&
        Math.abs(rail.scrollLeft - (rail.scrollWidth - rail.clientWidth)) < 2
      ) {
        next = requested ?? cards.length - 1;
      }
      setIndex(next);
    };

    rail.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      rail.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [requested, itemCount]);

  const scrollByPage = (direction: -1 | 1) => {
    const rail = trackRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.85,
      behavior: reduced ? 'auto' : 'smooth',
    });
  };

  const scrollToIndex = (i: number) => {
    const rail = trackRef.current;
    if (!rail) return;
    const cards = [...rail.children] as HTMLElement[];
    const card = cards[i];
    if (!card) return;
    setRequested(i);
    rail.scrollTo({
      left: card.offsetLeft - cards[0].offsetLeft,
      behavior: reduced ? 'auto' : 'smooth',
    });
  };

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(' ')}>
      <div
        ref={trackRef}
        className={[styles.track, trackClassName].filter(Boolean).join(' ')}
        onPointerDown={() => setRequested(null)}
        onWheel={() => setRequested(null)}
      >
        {children}
      </div>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          aria-label={`${label}: anterior`}
          onClick={() => scrollByPage(-1)}
        >
          ←
        </button>
        {showDots ? (
          <div className={styles.dots} role="group" aria-label={label}>
            {Array.from({ length: itemCount }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${label}: ir al ítem ${i + 1}`}
                aria-pressed={i === index}
                onClick={() => scrollToIndex(i)}
              >
                <span />
              </button>
            ))}
          </div>
        ) : null}
        <button
          type="button"
          className={styles.arrow}
          aria-label={`${label}: siguiente`}
          onClick={() => scrollByPage(1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
