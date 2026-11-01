import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display, Playfair_Display } from 'next/font/google';

import { AntdProvider } from '@/providers/AntdProvider';

import './globals.css';

const playfairDisplay = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-script',
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
});

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Dante Creative Agency',
  description: 'Agencia creativa de marketing digital y branding en Puebla, México.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfairDisplay.variable} ${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body>
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
