import styles from "./AdventureActivities.module.css";

import kayaking from "../../assets/adventureActivities/kayakingOne.jpg";

export default function Activity({ activity }) {
  const { title, img, description, price } = activity;
  return (
    <div className={styles.activityContainer}>
      <figure className={styles.imgContainer}>
        <img src={img} alt={title} className={styles.img} />
      </figure>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>Rs. {price}/-</p>
        <button className={styles.btn}>Book Now</button>
      </div>
    </div>
  );
}
