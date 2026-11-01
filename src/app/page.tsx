import type { Metadata, Viewport } from 'next';

import { ComingSoon, HomePage } from '@/components/sections';
import { isUnderConstruction } from '@/data/siteMode';

export const metadata: Metadata = isUnderConstruction
  ? {
      title: 'Dante | Seguimos creciendo',
      description:
        'Estamos en remodelación, pero seguimos creciendo. Encuéntranos en Instagram.',
    }
  : {
      title: 'Dante Creative Agency',
      description:
        'Agencia creativa de marketing digital y branding en Puebla, México.',
    };

export const viewport: Viewport = isUnderConstruction
  ? { themeColor: '#e97525' }
  : {};

export default function Home() {
  if (isUnderConstruction) {
    return <ComingSoon />;
  }

  return <HomePage />;
}
