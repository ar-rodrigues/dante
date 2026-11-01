import type { Metadata } from 'next';

import { HomePage } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Dante Creative Agency',
  description:
    'Agencia creativa de marketing digital y branding en Puebla, México.',
  robots: {
    index: false,
    follow: false,
  },
};

/** Vista previa del sitio completo mientras `/` muestra la remodelación. */
export default function SitioPage() {
  return <HomePage />;
}
