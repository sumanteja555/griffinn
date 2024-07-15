import Event from "../components/UI/EventDetails/Event";
import nightCamps from "../utils/NightCamps";
import styles from "../components/UI/Aminity/Aminity.module.css";
import Aminity from "../components/UI/Aminity/Aminitiy";
import { aminities } from "../utils/general";

export default function NightCamps() {
  return (
    <>
      <Event event={nightCamps} />

      <div className={styles.aminityContainer}>
        <p className={styles.title}>AMIITIES</p>
        <div className={styles.logosContainer}>
          {aminities.map((aminity) => (
            <Aminity aminity={aminity} key={aminity.title} />
          ))}
        </div>
      </div>
    </>
  );
}
