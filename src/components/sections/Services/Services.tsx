import { services } from '@/data/siteContent';
import { FadeUp } from '@/components/layout/FadeUp/FadeUp';
import { SectionHeading } from '@/components/ui';

import styles from './Services.module.css';

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <FadeUp>
        <SectionHeading
          title={
            <>
              Todo lo que necesitas para
              <br />
              <span className={styles.accent}>crecer en digital.</span>
            </>
          }
          description="Soluciones personalizadas para cada etapa de tu marca. Elige lo que necesitas, cuando lo necesitas."
        />
      </FadeUp>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <FadeUp key={service.title} className={styles.item} delay={index * 80}>
            <div className={styles.icon}>{service.icon}</div>
            <span className={styles.tag}>{service.tag}</span>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
            <ul className={styles.list}>
              {service.items.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
