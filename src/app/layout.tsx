import './globals.css';
import { Inter, Bebas_Neue } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nomad Spirit BJJ – Csíkszereda',
  description: 'Kompromisszummentes brazil jiu-jitsu (BJJ) edzések Csíkszeredában. Fegyelem, közösség és tiszta erő. Csatlakozz hozzánk még ma és próbáld ki az első edzést ingyen!',
  metadataBase: new URL('https://nomad-spirit.com'),
  openGraph: {
    title: 'Nomad Spirit BJJ – Csíkszereda',
    description: 'Kompromisszummentes brazil jiu-jitsu (BJJ) edzések Csíkszeredában. Csatlakozz a grappling közösségünkhöz!',
    url: 'https://nomad-spirit.com',
    siteName: 'Nomad Spirit BJJ',
    images: [
      {
        url: '/logonomad.png',
        width: 800,
        height: 800,
        alt: 'Nomad Spirit BJJ Logo',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nomad Spirit BJJ – Csíkszereda',
    description: 'Kompromisszummentes brazil jiu-jitsu (BJJ) edzések Csíkszeredában.',
    images: ['/logonomad.png'],
  },
  icons: {
    icon: '/logonomad.svg',
    shortcut: '/logonomad.svg',
    apple: '/logonomad (192).png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className="dark scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans min-h-screen bg-brand-black text-brand-white antialiased`}>
        {children}
      </body>
    </html>
  );
}