'use client';

import { useState, type ReactNode } from 'react';

import styles from './ExploreCard.module.css';

export type ExploreCardIcon = 'idea' | 'chart' | 'target';

type ExploreCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
  tone?: 'coral' | 'purple' | 'blue' | 'pink' | 'orange';
  headingLevel?: 'h2' | 'h3';
  icon?: ExploreCardIcon;
};

const ICONS: Record<ExploreCardIcon, ReactNode> = {
  idea: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2Z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 20V4m0 16h16M8 15l4-5 4 2 4-7" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="m12 12 8-8m-4 0h4v4" />
    </svg>
  ),
};

export function ExploreCard({
  title,
  children,
  className,
  tone = 'coral',
  headingLevel = 'h3',
  icon,
}: ExploreCardProps) {
  const [open, setOpen] = useState(false);
  const Heading = headingLevel;

  return (
    <article
      className={[styles.card, styles[tone], open ? styles.open : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {icon ? (
        <div className={styles.icon} aria-hidden>
          {ICONS[icon]}
        </div>
      ) : null}
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Heading className={styles.title}>{title}</Heading>
        <span className={styles.plus} aria-hidden>
          +
        </span>
      </button>
      <div className={styles.detail}>{children}</div>
    </article>
  );
}
