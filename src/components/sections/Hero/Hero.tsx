import { heroCards } from '@/data/siteContent';
import { FadeUp } from '@/components/layout/FadeUp/FadeUp';
import { Button, Tag } from '@/components/ui';

import styles from './Hero.module.css';

const cardVariantClass = {
  dark: styles.cardDark,
  primary: styles.cardPrimary,
  accent: styles.cardAccent,
  muted: styles.cardMuted,
} as const;

export function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.bgText} aria-hidden="true">
        D
      </div>

      <FadeUp className={styles.left}>
        <Tag className={styles.tag}>✦ Agencia Creativa · Puebla, MX</Tag>

        <h1 className={styles.title}>
          Impulsa tu marca con
          <br />
          <em className={styles.accent}>claridad, estrategia</em>
          <br />y creatividad real.
        </h1>

        <p className={styles.subtitle}>
          Creamos e impulsamos marcas que viven, venden y crecen en línea. Sin rollos, sin
          contratos interminables.
        </p>

        <div className={styles.actions}>
          <Button variant="primary" href="#cta">
            Agenda asesoría sin costo
          </Button>
          <Button variant="outline" href="#services">
            Conoce servicios
          </Button>
        </div>
      </FadeUp>

      <FadeUp className={styles.right} delay={80}>
        {heroCards.map((card) => (
          <article
            key={card.number}
            className={[styles.card, cardVariantClass[card.variant]].join(' ')}
          >
            <span className={styles.cardNumber}>{card.number}</span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </article>
        ))}
      </FadeUp>
    </section>
  );
}
