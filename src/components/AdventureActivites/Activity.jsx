import styles from "./AdventureActivities.module.css";

import kayaking from "../../assets/adventureActivities/kayakingOne.jpg";

export default function Activity({ activity }) {
  const { title, img, description, price } = activity;
  return (
    <div className={styles.activityContainer}>
      <img src={img} alt={title} className={styles.img} />
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>Rs. {price}/-</p>
        <button className={styles.btn}>Book Now</button>
      </div>
    </div>
  );
}
