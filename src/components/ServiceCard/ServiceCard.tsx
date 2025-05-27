import Link from 'next/link';
import styles from './ServiceCard.module.css';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  src: string;
  alt: string;
}

export default function ServiceCard({
  title,
  description,
  link,
  src,
  alt,
}: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.cardImg}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <p className={styles.description}>{description}</p>
      <Link
        href={link}
        className='secondaryBtn'
      >
        See Work →
      </Link>
    </div>
  );
}
