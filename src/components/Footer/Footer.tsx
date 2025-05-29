// components/Footer/Footer.tsx

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href='/about'>About</Link>
        <Link href='/resume'>Resume</Link>
        <Link href='/blog'>Blog</Link>
        <a
          href='https://linkedin.com/in/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </div>
      <div className={styles.copy}>
        © 2025 Mike Kenway. All rights reserved.
      </div>
    </footer>
  );
}
