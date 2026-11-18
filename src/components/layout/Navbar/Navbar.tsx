'use client';

import Image from 'next/image';
import { useState } from 'react';

import { navLinks } from '@/data/siteContent';

import styles from './Navbar.module.css';

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.head}>
      <a
        href="#inicio"
        className={styles.logo}
        aria-label="Dante Creative Agency · Inicio"
        onClick={closeMenu}
      >
        <Image
          src="/logos/dante-oscuro.png"
          alt="Dante Creative Agency"
          width={310}
          height={80}
          priority
        />
      </a>

      <nav
        id="site-nav"
        className={[styles.nav, open ? styles.open : ''].filter(Boolean).join(' ')}
        aria-label="Navegación principal"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.link} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className={styles.menu}
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen((value) => !value)}
      >
        ☰
      </button>
    </header>
  );
}
