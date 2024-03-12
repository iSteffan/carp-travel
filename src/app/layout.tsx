import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'Unforgettable trips to the most beautiful parts of the Carpathians',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'CarpTravel',
    description: 'Unforgettable trips to the most beautiful parts of the Carpathians',
    url: 'https://carp-travel-lovat.vercel.app/',
    siteName: 'CarpTravel',
    images: [
      {
        url: '/ogp/ogp_800_600.jpg',
        width: 800,
        height: 600,
        alt: 'CarpTravel',
      },
      {
        url: '/ogp/ogp_1800_1600.jpg',
        width: 1800,
        height: 1600,
        alt: 'CarpTravel',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
