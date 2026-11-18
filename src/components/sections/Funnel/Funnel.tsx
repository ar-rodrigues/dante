'use client';

import { useEffect, useRef, useState } from 'react';

import { FadeUp, PageContainer } from '@/components/layout';
import { Button } from '@/components/ui';
import { funnelSection } from '@/data/siteContent';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import styles from './Funnel.module.css';

const STEP_MS = 1200;
const LOOP_PAUSE_MS = 7000;

export function Funnel() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [invite, setInvite] = useState(-1);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const timerRef = useRef<number | null>(null);
  const stepRef = useRef(0);

  useEffect(() => {
    const clear = () => {
      if (timerRef.current != null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    if (reduced || paused) {
      clear();
      setInvite(-1);
      return clear;
    }

    const advance = () => {
      clear();
      const index = stepRef.current;
      setInvite(index);
      stepRef.current = index + 1;

      timerRef.current = window.setTimeout(() => {
        setInvite(-1);
        if (stepRef.current >= funnelSection.steps.length) {
          stepRef.current = 0;
          timerRef.current = window.setTimeout(advance, LOOP_PAUSE_MS);
        } else {
          timerRef.current = window.setTimeout(advance, 80);
        }
      }, STEP_MS);
    };

    stepRef.current = 0;
    advance();
    return clear;
  }, [reduced, paused]);

  return (
    <section id="funnel" className={styles.section} aria-labelledby="funnel-title">
      <PageContainer className={styles.layout}>
        <FadeUp>
          <p className={styles.hint}>{funnelSection.hint}</p>
          <div
            className={styles.steps}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setPaused(false);
              }
            }}
          >
            {funnelSection.steps.map((step, index) => {
              const open = expanded === index;
              const inviting = invite === index;
              return (
                <button
                  key={step.title}
                  type="button"
                  className={[styles.step, inviting ? styles.inviting : '']
                    .filter(Boolean)
                    .join(' ')}
                  aria-expanded={open}
                  onClick={() => setExpanded(open ? null : index)}
                >
                  <strong>{step.title}</strong>
                  <span className={styles.detail}>{step.summary}</span>
                </button>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp className={styles.copy}>
          <h2 id="funnel-title">{funnelSection.copyTitle}</h2>
          <p>{funnelSection.copyBody}</p>
          <h3>{funnelSection.howTitle}</h3>
          <p>{funnelSection.howBody}</p>
          <Button href={funnelSection.cta.href}>{funnelSection.cta.label}</Button>
        </FadeUp>
      </PageContainer>
    </section>
  );
}
