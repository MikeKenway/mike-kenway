import styles from './ServiceListCard.module.css';

interface ServiceListCardProps {
  title: string;
  services: string[];
}

export default function ServiceListCard({
  title,
  services,
}: ServiceListCardProps) {
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
