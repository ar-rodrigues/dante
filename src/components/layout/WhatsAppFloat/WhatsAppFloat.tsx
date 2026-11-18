import { whatsappUrl } from '@/data/contact';

import styles from './WhatsAppFloat.module.css';

export function WhatsAppFloat() {
  return (
    <a
      className={styles.float}
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Dante por WhatsApp"
    >
      WhatsApp ↗
    </a>
  );
}
