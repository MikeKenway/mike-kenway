import styles from './ServiceListCard.module.css';

interface ServiceGroupCardProps {
  title: string;
  services: string[];
}

export default function ServiceGroupCard({
  title,
  services,
}: ServiceGroupCardProps) {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.list}>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
