import styles from "./Footer.module.css";

export default function SocialLinks() {
  return (
    <div className={styles.divContainer}>
      <p className={styles.title}>Social Links</p>
      <ul className={styles.ul}>
        <li className={styles.socialLinks} id={styles.instagram}>
          <a href="https://www.instagram.com/griffinn360adventure/">
            Instagram
          </a>
        </li>
        <li className={styles.socialLinks} id={styles.youtube}>
          <a href="https://www.youtube.com/@griffinn360adventures">Youtube</a>
        </li>
        <li className={styles.socialLinks} id={styles.gmail}>
          <a href="mailto:someone@example.com">Gmail</a>
        </li>
        <li className={styles.socialLinks} id={styles.whatsapp}>
          <a href="https://chat.whatsapp.com/GMqTwjiY2WB6vFB482TSYF">
            Whats App
          </a>
        </li>
        <li className={styles.socialLinks} id={styles.phone}>
          <a href="tel:+919010100595">+91 90101 00595</a>
        </li>
      </ul>
    </div>
  );
}
