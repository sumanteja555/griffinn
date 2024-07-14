import styles from "./Event.module.css";

export default function Aminity({ aminity }) {
  const { img, title } = aminity;
  return (
    <div className={styles.aminityContainer}>
      <figure className={styles.logoWrapper}>
        <img src={img} alt={title} className={styles.aminityLogo} />
      </figure>
      <p className={styles.aminityTitle}>{title}</p>
    </div>
  );
}
