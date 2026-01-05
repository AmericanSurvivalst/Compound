import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://compound.app'),
  title: {
    default: 'Compound - Research-Backed Performance Compound Information',
    template: '%s | Compound',
  },
  description: 'The complete guide to peptides, SARMs, nootropics, and performance compounds. Research-backed information with real studies. Know what you\'re taking.',
  keywords: ['peptides', 'SARMs', 'nootropics', 'performance compounds', 'MK-677', 'BPC-157', 'testosterone', 'bodybuilding', 'biohacking'],
  authors: [{ name: 'Compound' }],
  creator: 'Compound',
  publisher: 'Compound',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://compound.app',
    siteName: 'Compound',
    title: 'Compound - Know What You\'re Taking',
    description: 'Research-backed information on peptides, SARMs, nootropics, and performance compounds.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Compound - Performance Compound Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compound - Know What You\'re Taking',
    description: 'Research-backed information on peptides, SARMs, nootropics, and performance compounds.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Compound',
  description: 'Research-backed information on peptides, SARMs, nootropics, and performance compounds.',
  url: 'https://compound.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://compound.app/compounds?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Compound',
    logo: {
      '@type': 'ImageObject',
      url: 'https://compound.app/logo.svg',
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Compound',
  url: 'https://compound.app',
  logo: 'https://compound.app/logo.svg',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@compound.app',
    contactType: 'customer service',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
