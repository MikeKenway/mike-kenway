import styles from './Status.module.css';

export default function AvailabilityBadge() {
  return (
    <div className={styles.badge}>
      <span className={styles.indicator}></span>
      <span className={styles.text}>Open!</span>
    </div>
  );
}
