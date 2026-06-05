import type { ReactNode } from 'react';

import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  title: ReactNode;
  description?: string;
  variant?: 'light' | 'dark';
  className?: string;
};

export function SectionHeading({
  title,
  description,
  variant = 'light',
  className,
}: SectionHeadingProps) {
  const classes = [
    styles.header,
    variant === 'dark' ? styles.dark : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
