import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image
              src='/images/hearticon.png'
              alt='heart logo for mikekenway.com'
              height={64}
              width={64}
            />
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <Link href='/resume'>Resume</Link>
            </li>
            <li>
              <Link href='/cases'>Case Studies</Link>
            </li>
            <Link
              href='/contact'
              className='primaryBtn'
            >
              Let’s Chat
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
