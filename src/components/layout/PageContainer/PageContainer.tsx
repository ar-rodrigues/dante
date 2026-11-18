import type { ElementType, ReactNode } from 'react';

import styles from './PageContainer.module.css';

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: 'default' | 'section';
};

export function PageContainer({
  children,
  className,
  as: Tag = 'div',
  variant = 'default',
}: PageContainerProps) {
  const classes = [
    variant === 'section' ? styles.section : styles.container,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
