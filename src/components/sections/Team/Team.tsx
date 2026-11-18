'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { FadeUp, PageContainer } from '@/components/layout';
import { teamSection } from '@/data/siteContent';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import styles from './Team.module.css';

export function Team() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
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
      setIndex(next);
    };

    rail.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      rail.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollToIndex = (i: number) => {
    const rail = trackRef.current;
    if (!rail) return;
    const cards = [...rail.children] as HTMLElement[];
    const card = cards[i];
    if (!card) return;
    rail.scrollTo({
      left: card.offsetLeft - cards[0].offsetLeft,
      behavior: reduced ? 'auto' : 'smooth',
    });
  };

  return (
    <section id="equipo" className={styles.section} aria-labelledby="team-title">
      <PageContainer>
        <FadeUp>
          <h2 id="team-title">
            {teamSection.titleBefore} <em>{teamSection.titleEmphasis}</em>
          </h2>
        </FadeUp>

        <div ref={trackRef} className={styles.team}>
          {teamSection.members.map((member) => (
            <article key={member.name} className={styles.person}>
              <button
                type="button"
                className={styles.trigger}
                aria-label={`Mostrar nombre y cargo de ${member.name}`}
              >
                <div className={styles.photo}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={960}
                    height={1280}
                    sizes="(max-width: 650px) 45vw, 420px"
                    quality={90}
                    // Misma nitidez que la entrega: el crop CSS escala a 155%
                    // y el optimizador bajaba demasiado la resolución.
                    unoptimized
                  />
                </div>
              </button>
              <div className={styles.caption}>
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.dots} role="group" aria-label="Equipo">
          {teamSection.members.map((member, i) => (
            <button
              key={member.name}
              type="button"
              aria-label={`Equipo: ir a ${member.name}`}
              aria-pressed={i === index}
              onClick={() => scrollToIndex(i)}
            >
              <span />
            </button>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
