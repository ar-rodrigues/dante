'use client';

import Image from 'next/image';
import { useState } from 'react';

import { FadeUp, PageContainer } from '@/components/layout';
import { HorizontalRail } from '@/components/ui';
import { servicesSection } from '@/data/siteContent';

import styles from './Services.module.css';

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className={styles.section} aria-labelledby="services-title">
      <PageContainer>
        <FadeUp>
          <p className={styles.kicker}>{servicesSection.kicker}</p>
          <h2 id="services-title" className={styles.title}>
            {servicesSection.title}
          </h2>
        </FadeUp>

        <HorizontalRail itemCount={servicesSection.items.length} label="Servicios">
          {servicesSection.items.map((service, index) => {
            const open = openIndex === index;
            return (
              <article
                key={service.title}
                className={[styles.card, styles[service.tone], open ? styles.open : '']
                  .filter(Boolean)
                  .join(' ')}
              >
                <div className={styles.top}>
                  <span className={styles.tag}>{service.tag}</span>
                  <button
                    type="button"
                    className={styles.heading}
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <h3>{service.title}</h3>
                  </button>
                </div>

                <div className={styles.symbol}>
                  <Image
                    src={service.image}
                    alt=""
                    width={240}
                    height={240}
                    sizes="(max-width: 650px) 70vw, 200px"
                  />
                </div>

                <div className={styles.reveal}>
                  <p>{service.description}</p>
                  <p className={styles.examples}>{service.examples}</p>
                  <span className={styles.cta} aria-hidden="true">
                    Platiquemos ↗
                  </span>
                </div>

                <a href="#empezar" className={styles.cardLink}>
                  Platiquemos
                </a>
              </article>
            );
          })}
        </HorizontalRail>
      </PageContainer>
    </section>
  );
}
