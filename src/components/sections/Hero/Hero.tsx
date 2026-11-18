'use client';

import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui';
import { heroContent } from '@/data/siteContent';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import styles from './Hero.module.css';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;
    video.play().catch(() => setPaused(true));
  }, [reduced]);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => undefined);
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <section id="inicio" className={styles.hero} aria-label="Inicio">
      {!reduced ? (
        <video
          ref={videoRef}
          className={styles.video}
          src={heroContent.videoSrc}
          poster={heroContent.posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : null}
      <div className={styles.shade} aria-hidden />

      {!reduced ? (
        <button type="button" className={styles.control} onClick={toggleVideo}>
          {paused ? 'Reproducir ▷' : 'Pausar Ⅱ'}
        </button>
      ) : null}

      <div className={styles.copy}>
        <h1>
          {heroContent.titleBefore} <em>{heroContent.titleEmphasis}</em>
        </h1>
        <p>{heroContent.description}</p>
        <div className={styles.actions}>
          <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
          <Button href={heroContent.secondaryCta.href} variant="alt" className={styles.alt}>
            {heroContent.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
