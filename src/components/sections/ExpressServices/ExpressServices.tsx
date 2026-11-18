'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { FadeUp, PageContainer } from '@/components/layout';
import { Button } from '@/components/ui';
import { expressSection } from '@/data/siteContent';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import styles from './ExpressServices.module.css';

export function ExpressServices() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const count = expressSection.slides.length;

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % count);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, reduced, count]);

  const show = (n: number) => setIndex((n + count) % count);

  return (
    <section className={styles.section} aria-labelledby="express-title">
      <PageContainer>
        <FadeUp>
          <h2 id="express-title">
            {expressSection.titleBefore} <em>{expressSection.titleEmphasis}</em>
          </h2>
          <p className={styles.lead}>{expressSection.description}</p>
        </FadeUp>

        <div
          className={styles.express}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          {expressSection.slides.map((slide, i) => (
            <article key={slide.title} className={styles.slide} hidden={i !== index}>
              <Image
                src={slide.image}
                alt=""
                width={1200}
                height={640}
                sizes="(max-width: 650px) 100vw, 55vw"
              />
              <div className={styles.copy}>
                <p className={styles.eyebrow}>{slide.eyebrow}</p>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <Button
                  variant="dark"
                  href={slide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Me interesa ↗
                </Button>
              </div>
            </article>
          ))}

          <div className={styles.controls}>
            <button type="button" aria-label="Anterior" onClick={() => show(index - 1)}>
              ←
            </button>
            <div className={styles.dots} role="group" aria-label="Servicios puntuales">
              {expressSection.slides.map((slide, i) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Ir a ${slide.title}`}
                  aria-pressed={i === index}
                  onClick={() => show(i)}
                >
                  <span />
                </button>
              ))}
            </div>
            <button type="button" aria-label="Siguiente" onClick={() => show(index + 1)}>
              →
            </button>
            <button
              type="button"
              className={styles.pause}
              aria-pressed={paused || reduced}
              onClick={() => setPaused((value) => !value)}
            >
              {paused || reduced ? 'Reanudar ▷' : 'Pausar Ⅱ'}
            </button>
          </div>
        </div>

        <FadeUp className={styles.advise}>
          <p>{expressSection.advise}</p>
          <Button href={expressSection.adviseCta.href} variant="alt">
            {expressSection.adviseCta.label}
          </Button>
        </FadeUp>
      </PageContainer>
    </section>
  );
}
