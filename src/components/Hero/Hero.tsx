import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.heroWrap}>
      <div className={styles.heroGrid}>
        {/* Left Grid Column – Text */}
        <div className={styles.heroItem}>
          <div>
            <h1 className={styles.heroTitle}>Hi! I'm Kenway.</h1>

            <p className={styles.heroSubtitle}>
              UX/UI Designer • Creative Director • Founder
            </p>
            <p className={styles.heroText}>
              I design scalable systems and thoughtful experiences <br />
              that drive clarity, growth, and momentum.
            </p>
          </div>
          <div className={styles.actions}>
            <Link
              href='/cases'
              className='primaryBtn'
            >
              See My Work
            </Link>
            <Link
              href='/contact'
              className='secondaryBtn'
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right Grid Column – Image */}
        <div className={styles.heroImg}>
          <Image
            src='/images/kenway.jpg'
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
