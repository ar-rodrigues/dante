'use client';

import { useMemo, useState, type MouseEvent } from 'react';

import { FadeUp, PageContainer } from '@/components/layout';
import { Button } from '@/components/ui';
import { contactGoals, whatsappUrl } from '@/data/contact';
import { contactSection } from '@/data/siteContent';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import styles from './Contact.module.css';

export function Contact() {
  const [selected, setSelected] = useState<string | null>(null);
  const [shaking, setShaking] = useState(false);
  const reduced = usePrefersReducedMotion();

  const href = useMemo(() => {
    const goal = contactGoals.find((item) => item.id === selected);
    return goal ? whatsappUrl(goal.message) : undefined;
  }, [selected]);

  const shakePrompt = () => {
    if (reduced) return;
    setShaking(false);
    // Reinicia la animación aunque ya estuviera activa.
    requestAnimationFrame(() => {
      setShaking(true);
      window.setTimeout(() => setShaking(false), 700);
    });
  };

  return (
    <section id="empezar" className={styles.section} aria-labelledby="contact-title">
      <PageContainer className={styles.layout}>
        <FadeUp>
          <h2 id="contact-title">
            {contactSection.titleBefore}
            <br />
            <em>{contactSection.titleEmphasis}</em>
          </h2>
          <p>{contactSection.description}</p>
          <p className={styles.flow}>{contactSection.flow}</p>
        </FadeUp>

        <FadeUp>
          <fieldset className={styles.choices}>
            <legend>{contactSection.legend}</legend>
            {contactGoals.map((goal) => (
              <label key={goal.id} className={styles.choice}>
                <input
                  type="radio"
                  name="contact-goal"
                  value={goal.id}
                  checked={selected === goal.id}
                  onChange={() => setSelected(goal.id)}
                />
                <span>{goal.label}</span>
              </label>
            ))}
          </fieldset>

          <Button
            variant="dark"
            href={href ?? whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.send}
            aria-disabled={!href}
            onClick={(event: MouseEvent<HTMLAnchorElement>) => {
              if (href) return;
              event.preventDefault();
              shakePrompt();
              const first = document.querySelector<HTMLInputElement>(
                'input[name="contact-goal"]',
              );
              first?.focus();
            }}
          >
            {contactSection.submitLabel}
          </Button>

          <p
            className={[styles.feedback, shaking ? styles.shake : '']
              .filter(Boolean)
              .join(' ')}
            aria-live="polite"
          >
            {selected ? '' : contactSection.choosePrompt}
          </p>
        </FadeUp>
      </PageContainer>
    </section>
  );
}
