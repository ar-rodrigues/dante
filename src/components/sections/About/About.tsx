import { FadeUp, PageContainer } from '@/components/layout';
import { alliesSection } from '@/data/siteContent';

import styles from './About.module.css';

/** Sección Aliados (stats + proceso). */
export function About() {
  return (
    <section className={styles.section} aria-labelledby="allies-title">
      <PageContainer className={styles.inner}>
        <FadeUp className={styles.copy}>
          <h2 id="allies-title">
            {alliesSection.titleBefore} <em>{alliesSection.titleEmphasis}</em>
          </h2>
          <div className={styles.stats}>
            {alliesSection.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <p className={styles.cities}>{alliesSection.cities}</p>
          <p className={styles.support}>{alliesSection.support}</p>
        </FadeUp>

        <FadeUp className={styles.process}>
          {alliesSection.process.map((step) => (
            <div key={step.number}>
              <small>{step.number}</small>
              {step.title}
            </div>
          ))}
        </FadeUp>
      </PageContainer>
    </section>
  );
}
