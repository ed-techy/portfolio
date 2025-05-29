import '../styles/vendors/bootstrap.min.css';
import '../styles/vendors/swiper-bundle.min.css';
import '../styles/vendors/carouselTicker.css';
import '../styles/vendors/magnific-popup.css';
import '/public/assets/fonts/remixicon/remixicon.css';
import '../styles/main.css';

import type { Metadata } from 'next';
import { Urbanist, Playfair_Display, DM_Mono } from 'next/font/google';

const urbanist = Urbanist({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--urbanist',
  display: 'swap',
});
const playfair_display = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--playpair',
  display: 'swap',
});
const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--dmMono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Eduardo Diaz Personal Portfolio Template',
  description: 'Eduardo Diaz Personal Portfolio Template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-bs-theme='dark' className='portfolio'>
      <body
        className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
