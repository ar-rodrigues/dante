import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import Script from 'next/script';

import { AntdProvider } from '@/providers/AntdProvider';

import './globals.css';

const GTM_ID = 'GTM-KFCTT7J2';

const dmSerifDisplay = DM_Serif_Display({
  variable: '--font-script',
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
});

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dantecreativa.com';

const siteDescription =
  'Marketing, branding, audiovisual, desarrollo web y motion graphics. Aliados creativos en Puebla, Querétaro y Guadalajara.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dante Creative Agency',
  description: siteDescription,
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Dante Creative Agency',
    title: 'Dante Creative Agency',
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Logo de Dante Creative Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dante Creative Agency',
    description: siteDescription,
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body>
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
