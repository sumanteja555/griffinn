import styles from "./AdventureActivities.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import adventureActivities from "../../utils/adventureActivities.js";

export default function AdventureActivities() {
  return (
    <section className={styles.container}>
      <p id={styles.heading}>Adventure Activities</p>
      <div className={styles.activityContainer}>
        <Swiper
          spaceBetween={30}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          lazy={true}
          modules={[Autoplay]}
          className={`mySwiper ${styles.mySwiper}`}
        >
          {adventureActivities.map(({ title, img }) => {
            return (
              <SwiperSlide key={title} className={styles.imgContainer}>
                <img src={img} alt={title} className={styles.activityImg} />
                <p className={styles.activityTitle}>{title}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.infoContainer}>
          <p>
            Timings <br />
            <span>06:00 Am - 06:00 Pm</span>
          </p>
          <button className={styles.btn}>Book Now</button>
        </div>
      </div>
    </section>
  );
}
