import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <h1 className={styles.title}>
          I design scalable systems and thoughtful experiences <br />
          that drive clarity, growth, and momentum.
        </h1>

        <p className={styles.subtitle}>
          UX/UI Designer • Creative Director • Founder <br />
          Helping startups, artists, and indie brands make smarter digital
          decisions—without the agency fluff.
        </p>

        <div className={styles.actions}>
          <Link
            href='/cases'
            className='primaryBtn'
          >
            See My Work
          </Link>
          <Link
            href='/contact'
            className={styles.secondaryBtn}
          >
            Let’s Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
