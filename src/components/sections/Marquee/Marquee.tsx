import { marqueeServices } from '@/data/siteContent';

import styles from './Marquee.module.css';

export function Marquee() {
  return (
    <div className={styles.ticker} aria-label="Disciplinas">
      {marqueeServices.map((item) => (
        <span key={item}>{item} ↗</span>
      ))}
    </div>
  );
}
