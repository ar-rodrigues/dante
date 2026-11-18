import { FadeUp, PageContainer } from '@/components/layout';
import { Button, ExploreCard } from '@/components/ui';
import { problemsSection } from '@/data/siteContent';

import styles from './Problems.module.css';

export function Problems() {
  return (
    <section className={styles.section} aria-labelledby="problems-title">
      <PageContainer>
        <FadeUp>
          <p className={styles.kicker}>{problemsSection.kicker}</p>
          <h2 id="problems-title" className={styles.title}>
            {problemsSection.title}
          </h2>
        </FadeUp>

        <div className={styles.grid}>
          {problemsSection.items.map((item, index) => (
            <FadeUp key={item.title} delay={index * 80}>
              <ExploreCard title={item.title} tone={item.tone} icon={item.icon}>
                <p>{item.description}</p>
              </ExploreCard>
            </FadeUp>
          ))}
        </div>

        <FadeUp className={styles.note}>
          <p>{problemsSection.note}</p>
          <Button href={problemsSection.cta.href} variant="alt">
            {problemsSection.cta.label}
          </Button>
        </FadeUp>
      </PageContainer>
    </section>
  );
}
