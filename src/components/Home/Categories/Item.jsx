import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

export default function Item({ title, img, link }) {
  return (
    <div className={styles.itemContainer}>
      <img src={img} alt={title} className={styles.itemImg} />
      <div className={styles.overlay}></div>
      <div className={styles.itemContent}>
        <p className={styles.itemTitle}>Click Below To Know</p>
        <Link to={link} className={styles.itemLink}>
          {title}
        </Link>
      </div>
    </div>
  );
}
