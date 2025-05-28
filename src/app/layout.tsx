import { ReactNode } from 'react';
import styles from './layout.module.css';
import Navbar from '../components/Navbar/Navbar';

/*
import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Karla } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
*/

// ✅ Shared variables
const SITE_TITLE = 'Mike Kenway – Portfolio';
const SITE_DESCRIPTION = 'UX Designer & Creative Director.';
const OG_IMAGE = 'https://replace-me-later.com';
const SITE_URL = 'https://mikekenway.com';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Karla:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>
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
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Mike Kenway',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: '@mikekenway',
    images: [{ url: OG_IMAGE }],
  },
};
