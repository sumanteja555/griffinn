import VolunteerInput from "./VolunteerInput";
import volunteer from "../../utils/volunteer";

import styles from "./Volunteer.module.css";

export default function Volunteer() {
  return (
    <section className={styles.container}>
      <p className="mainHeading">Volunteer</p>
      {volunteer.map((item) => (
        <VolunteerInput {...item} key={item.name} />
      ))}

      <div className={styles.btnContainer}>
        <button className={styles.btn}>Submit</button>
      </div>
    </section>
  );
}
