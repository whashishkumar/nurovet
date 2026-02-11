import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { ToastProvider } from '@/context/ToastContext';
import { Fredoka, Onest, Figtree } from 'next/font/google';


// const onesta = localFont({
//   src: '../public/fonts/Onest-Regular.ttf',
//   variable: '--font-onesta',
//   display: 'swap',
// });




// const fredoka = localFont({
//   src: '../public/fonts/Fredoka-Regular.ttf',
//   variable: '--font-fredoka',
//   display: 'swap',
// });

// const figtree = localFont({
//   src: '../public/fonts/Fredoka-Regular.ttf',
//   variable: '--font-figtree',
//   display: 'swap',
// });


const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const onesta = Onest({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});



const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});



export const metadata: Metadata = {
  title: 'nuroVet',
  description:
    'Nurovet is an AI-driven veterinary intelligence platform designed to augment—not replace—clinical judgment. It functions as a digital specialist, continuously analyzing data, recognizing patterns, and delivering insights that improve diagnostic accuracy, workflow efficiency, and patient outcomes.',

  icons: {
    icon: "/logo/logoh.svg",
    shortcut: "/logo/logoh.svg"
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka} ${onesta} ${figtree} antialiased`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
