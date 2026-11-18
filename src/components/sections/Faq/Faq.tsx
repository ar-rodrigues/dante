import { FadeUp, PageContainer } from '@/components/layout';
import { faqItems, faqSection } from '@/data/siteContent';

import styles from './Faq.module.css';

export function Faq() {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <PageContainer>
        <FadeUp>
          <h2 id="faq-title">
            {faqSection.titleBefore}
            <br />
            <em>{faqSection.titleEmphasis}</em>
          </h2>
        </FadeUp>

        <div className={styles.list}>
          {faqItems.map((item, index) => (
            <FadeUp key={item.question} delay={Math.min(index, 4) * 100}>
              <details className={styles.item}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
                {item.link ? <a href={item.link.href}>{item.link.label}</a> : null}
              </details>
            </FadeUp>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
