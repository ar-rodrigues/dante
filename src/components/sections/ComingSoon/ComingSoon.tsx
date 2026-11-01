import Image from 'next/image';

import styles from './ComingSoon.module.css';

const INSTAGRAM_URL = 'https://www.instagram.com/dante.creativa/';

export function ComingSoon() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/dante-remodelacion.png"
        alt="Dante"
        width={162}
        height={203}
        priority
      />
      <p className={styles.plain}>Estamos en remodelación</p>
      <p className={styles.script}>pero seguimos creciendo.</p>
      <a
        className={styles.cta}
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        ENCUÉNTRANOS EN REDES
      </a>
    </main>
  );
}
