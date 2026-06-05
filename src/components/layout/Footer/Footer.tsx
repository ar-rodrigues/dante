import { CONTACT_EMAIL } from '@/data/siteContent';

import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>dante.</div>
      <p className={styles.copy}>
        © {year} Dante Creative Agency · Todos los derechos reservados
      </p>
      <div className={styles.location}>
        Puebla, MX
        <br />
        {CONTACT_EMAIL}
      </div>
    </footer>
  );
}
