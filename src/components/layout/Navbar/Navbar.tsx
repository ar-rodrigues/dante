import { navLinks } from '@/data/siteContent';
import { Button } from '@/components/ui';

import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        dante.
      </a>
      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <Button variant="navCta" href="#cta">
            Asesoría gratis
          </Button>
        </li>
      </ul>
    </nav>
  );
}
