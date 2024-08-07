import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function ImpLinks({ title, links }) {
  return (
    <div className={styles.divContainer}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.ul}>
        {links &&
          links.map(({ name, address }) => {
            return (
              <li key={name} className={styles.li}>
                <Link to={address} className={styles.link}>
                  {name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
