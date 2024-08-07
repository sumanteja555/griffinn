import styles from "./HomeCover.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

import homeCarouselOne from "../../../assets/home/homeCarouselOne.webp";
import homeCarouselTwo from "../../../assets/home/homeCarouselTwo.webp";
import homeCarouselThree from "../../../assets/home/homeCarouselThree.webp";
import homeCarouselFour from "../../../assets/home/homeCarouselFour.webp";
import homeCarouselFive from "../../../assets/home/homeCarouselFive.webp";
import homeCarouselSix from "../../../assets/home/homeCarouselSix.webp";
import homeCarouselSeven from "../../../assets/home/homeCarouselSeven.webp";
import logo from "../../../assets/logo1.webp";

const carouselImages = [
  {
    alt: "kaying in mountains",
    src: homeCarouselOne,
  },
  {
    alt: "camping tent in forest",
    src: homeCarouselTwo,
  },
  {
    alt: "holding compass in forest",
    src: homeCarouselThree,
  },
  {
    alt: "mountains over clouds scenery",
    src: homeCarouselFour,
  },
  {
    alt: "accessories on map",
    src: homeCarouselFive,
  },
  {
    alt: "trekking ice mountains",
    src: homeCarouselSix,
  },
  {
    alt: "scuba diving in ocean",
    src: homeCarouselSeven,
  },
];
export default function HomeCover() {
  return (
    <div id={styles.homeCoverContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        modules={[Autoplay]}
        className={`mySwiper ${styles.mySwiper}`}
      >
        {carouselImages.map(({ alt, src }) => {
          return (
            <SwiperSlide key={alt}>
              <img
                src={src}
                alt={alt}
                className={styles.carouselImage}
                loading="lazy"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
