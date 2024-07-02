import styles from "./AdventureActivities.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import adventureActivities from "../../utils/adventureActivities.js";
import Activity from "./Activity.jsx";

export default function AdventureActivities() {
  return (
    <section className={styles.container}>
      <p id={styles.heading}>Adventure Activities</p>
      <div className={styles.activitiesContainer}>
        {adventureActivities.map((activity) => {
          return <Activity activity={activity} key={activity.title} />;
        })}
      </div>
    </section>
  );
}
