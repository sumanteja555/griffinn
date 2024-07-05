// swiper.js slides imports

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// local css styles
import styles from "./NightCamps.module.css";

// local data imports
import nightCampImages from "../../utils/NightCamps.js";
import ItineraryTimeline from "./ItineraryTimeline.jsx";

import { inclusions, aminities } from "../../utils/NightCamps.js";

export default function NightCamps() {
  return (
    <section className={styles.container}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={`mySwiper ${styles.mySwiper}`}
      >
        {nightCampImages.map(({ img, title }) => {
          return (
            <SwiperSlide key={title} className={styles.swiperSlide}>
              <figure className={styles.imgContainer}>
                <img src={img} alt={title} />
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ItineraryTimeline />
      <div className={styles.infoContainer}>
        <div className={styles.inclusions}>
          <p className={styles.title}>inclusions</p>
          <ul>
            {inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.exclusions}>
          <p className={styles.title}>exclusions</p>
          <ul>
            <li>No transportation will be provided</li>
          </ul>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Book Now</button>
      </div>
      <div className={styles.aminityContainer}>
        <p className={styles.title}>AMIITIES</p>
        <div className={styles.logosContainer}>
          {aminities.map(({ title, img }) => {
            return (
              <div className={styles.aminityContainer} key={title}>
                <figure className={styles.logoWrapper}>
                  <img src={img} alt={title} className={styles.aminityLogo} />
                </figure>
                <p className={styles.aminityTitle}>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
