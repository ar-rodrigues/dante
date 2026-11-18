import type { Metadata } from 'next';

import { HomePage } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Dante Creative Agency',
  description:
    'Marketing, branding, audiovisual, desarrollo web y motion graphics. Aliados creativos en Puebla, Querétaro y Guadalajara.',
  robots: {
    index: false,
    follow: false,
  },
};

/** Vista previa del sitio completo mientras `/` muestra la remodelación. */
export default function SitioPage() {
  return <HomePage />;
}
