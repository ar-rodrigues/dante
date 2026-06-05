import { processSteps } from '@/data/siteContent';
import { FadeUp } from '@/components/layout/FadeUp/FadeUp';
import { SectionHeading } from '@/components/ui';

import styles from './Process.module.css';

export function Process() {
  return (
    <section id="process" className={styles.section}>
      <FadeUp>
        <SectionHeading
          variant="dark"
          title={
            <>
              ¿Cómo es trabajar
              <br />
              <span className={styles.accent}>con Dante?</span>
            </>
          }
          description="Simple, honesto y enfocado a lo que tu marca necesita. Así de fácil."
        />
      </FadeUp>

      <div className={styles.steps}>
        {processSteps.map((step, index) => (
          <FadeUp key={step.number} className={styles.step} delay={index * 80}>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
            <div className={styles.number}>{step.number}</div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
