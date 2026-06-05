import { marqueeServices } from '@/data/siteContent';

import styles from './Marquee.module.css';

export function Marquee() {
  const items = [...marqueeServices, ...marqueeServices];

  return (
    <div className={styles.section} aria-hidden="true">
      <div className={styles.track}>
        {items.map((service, index) => (
          <span key={`${service}-${index}`} className={styles.item}>
            <span className={styles.dot} />
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}
