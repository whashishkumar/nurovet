import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/layout/NavBar';

const onesta = localFont({
  src: '../public/fonts/Onest-Regular.ttf',
  variable: '--font-onesta',
  display: 'swap',
});

const fredoka = localFont({
  src: '../public/fonts/Fredoka-Regular.ttf',
  variable: '--font-fredoka',
  display: 'swap',
});

const figtree = localFont({
  src: '../public/fonts/Fredoka-Regular.ttf',
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'nuroVet',
  description:
    'Nurovet is an AI-driven veterinary intelligence platform designed to augment—not replace—clinical judgment. It functions as a digital specialist, continuously analyzing data, recognizing patterns, and delivering insights that improve diagnostic accuracy, workflow efficiency, and patient outcomes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${onesta.variable} ${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
