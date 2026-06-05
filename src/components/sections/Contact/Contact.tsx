import { CONTACT_EMAIL, contactLinks } from '@/data/siteContent';
import { FadeUp } from '@/components/layout/FadeUp/FadeUp';
import { Button } from '@/components/ui';

import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="cta" className={styles.section}>
      <FadeUp className={styles.left}>
        <h2 className={styles.title}>
          ¿Listo para lanzar tu marca o darle el empuje que <em className={styles.accent}>merece?</em>
        </h2>
        <p className={styles.description}>
          Escríbenos y platícanos tu idea. Te escuchamos, te guiamos y trabajamos contigo para
          lanzar o mejorar tu marca en el mundo digital. A tu ritmo y con resultados reales.
        </p>
        <Button
          variant="white"
          href={`mailto:${CONTACT_EMAIL}`}
          className={styles.ctaButton}
        >
          Agenda asesoría sin costo
        </Button>
      </FadeUp>

      <FadeUp className={styles.right} delay={80}>
        <h3 className={styles.rightTitle}>El cambio comienza aquí.</h3>
        {contactLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.contactItem}>
            <span className={styles.contactIcon}>{link.icon}</span>
            <div>
              <div className={styles.contactLabel}>{link.label}</div>
              <div className={styles.contactValue}>{link.value}</div>
            </div>
          </a>
        ))}
      </FadeUp>
    </section>
  );
}
