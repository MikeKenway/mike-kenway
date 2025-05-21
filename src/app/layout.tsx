import { ReactNode } from 'react';
import styles from './layout.module.css';
import Navbar from '../components/Navbar/Navbar';
import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';

// Define props for our Layout to accept children (page content)
interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export default function Layout({
  children,
  title = 'Mike Kenway – Portfolio',
}: LayoutProps) {
  return (
    <html lang='en'>
      <body>
        <div className={styles.pageWrapper}>
          <Navbar />
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Mike Kenway</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Mike Kenway – Portfolio',
  description: 'UX Designer & Creative Director.',
  openGraph: {
    title: 'Mike Kenway – Portfolio',
    description: 'UX Designer & Creative Director.',
    url: 'https://mikekenway.com',
    siteName: 'Mike Kenway',
    images: [
      {
        url: 'https://mikekenway.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mike Kenway – Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mike Kenway – Portfolio',
    description: 'UX Designer & Creative Director.',
    creator: '@mikekenway',
    images: ['https://mikekenway.com/og-image.png'],
  },
};
