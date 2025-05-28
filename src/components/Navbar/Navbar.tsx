import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <Image
                src='/images/hearticon.png'
                alt='heart logo for mikekenway.com'
                height={64}
                width={64}
              />
            </div>
            <div className={styles.logoName}>Mike Kenway</div>
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
            <li className='flex-row gap-1'>
              <Link href='https://www.behance.net/mikekenway'
                    target='_blank'
              >
                Case Studies
              </Link>
              <Image  src='/newtab.png'
                alt=''
                height={20}
                width={20}
              />
            </li>
            <li>
              <div>
                <Link
                  href='/contact'
                  className={styles.navBtn}
                >
                  Get in Touch
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
