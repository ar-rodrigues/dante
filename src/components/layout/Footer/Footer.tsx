'use client';

import Image from 'next/image';

import { CONTACT_EMAIL, socialLinks, WHATSAPP_DISPLAY, whatsappUrl } from '@/data/contact';
import { footerContent } from '@/data/siteContent';
import { trackMetaContact } from '@/lib/metaPixel';

import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#inicio" className={styles.logo} aria-label="Dante Creative Agency · Inicio">
        <Image
          src="/logos/dante-blanco.png"
          alt="Dante Creative Agency"
          width={420}
          height={110}
        />
      </a>

      <p className={styles.statement}>
        {footerContent.statementBefore} <em>{footerContent.statementEmphasis}</em>
      </p>

      <div className={styles.footline}>
        <span>
          {footerContent.copyright}
          <br />
          {footerContent.cities}
        </span>

        <a href="#inicio" className={styles.backTop}>
          VOLVER ARRIBA ↑
        </a>

        <div className={styles.contact}>
          <div className={styles.social}>
            <a
              href={socialLinks.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Dante"
            >
              <InstagramIcon />
            </a>
            <a
              href={socialLinks.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Dante"
            >
              <FacebookIcon />
            </a>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} onClick={trackMetaContact}>
            {CONTACT_EMAIL}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackMetaContact}
          >
            WhatsApp · {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 21v-8h3l.5-4H14V7c0-1 .5-2 2-2h2V2h-3c-3 0-5 2-5 5v2H7v4h3v8" />
    </svg>
  );
}
