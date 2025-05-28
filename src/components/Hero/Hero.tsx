import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Status from '../Status/Status'

export default function Hero() {
  return (
    <section className={styles.heroWrap}>
      <div className={styles.heroGrid}>
        <div className={styles.heroItem}>
          <div className={styles.heroTitleWrap}>
            <h1 className={styles.heroTitle}>Hi! I&rsquo;m Kenway.</h1>

            <p className={styles.heroSubtitle}>
              UX/UI Designer • Creative Director • Founder
            </p>
          </div>

          <p className={styles.heroText}>
            As a Designer with over 10 years of experience, I design scalable
            systems and thoughtful experiences that drive clarity, growth, and
            momentum.
          </p>
          <p className={styles.heroText}>
            My "books" are currently: <Status />
          </p>
          <div className={styles.actions}>
            <Link
              href='/cases'
              passHref
              legacyBehavior
            >
              <a className='heroPrimaryBtn'>
                See My Work
                <div className='border-anim'>
                  <span className='top'></span>
                  <span className='right'></span>
                  <span className='bottom'></span>
                  <span className='left'></span>
                </div>
              </a>
            </Link>
            <Link
              href='/contact'
              className='heroSecondaryBtn'
            >
              Get in Touch
              <span className='border-draw'></span>
            </Link>
          </div>
        </div>
        <div className={styles.heroImg}>
          <Image
            src='/images/portsiteprofile.jpg'
            alt='headshot photo of Mike Kenway'
            fill
            priority
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </section>
  );
}
