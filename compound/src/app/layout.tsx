import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Compound - Research-Backed Performance Optimization',
  description: 'The complete guide to peptides, SARMs, nootropics, and performance compounds. Research-backed information with AI-powered guidance.',
  openGraph: {
    title: 'Compound',
    description: 'Know what you\'re taking. Research-backed compound information.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
