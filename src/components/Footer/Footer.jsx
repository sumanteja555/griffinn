import styles from "./Footer.module.css";
import ImpLinks from "./ImpLinks";

import webLinks, { socialLinks } from "../../utils/footer";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoContainer}>
        <p className={styles.companyName}>GRIFF INN 360</p>
        <p className={styles.infoText}>
          Swamy Narayana Nagar, Gurram Guda, Injapur, Hyderabad, Telangana,
          India-500070
        </p>
        <p className={styles.infoText}>
          Life changing travel experiences curated by us.
        </p>
      </div>
      <ImpLinks {...webLinks} />
      <SocialLinks />
    </footer>
  );
}
