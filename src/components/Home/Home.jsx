import Count from "./Count";
import HomeCover from "./HomeCover";
import Reviews from "./Reviews";
import UpcomingTrips from "./UpcomingTrips";
import tripsData from "../../utils/UpcomingTrips.js";
import styles from "../Home/Home.module.css";
export default function Home() {
  return (
    <>
      <HomeCover />
      <Count />

      <section className={styles.tripsContainer}>
        <div className={styles.upcomingTripsContainer}>
          {tripsData.map((trip) => (
            <UpcomingTrips
              {...trip}
              className={styles.upcoming}
              key={trip.title}
            />
          ))}
        </div>
      </section>
      <section className={styles.reviewsMainContainer}>
        <Reviews />
      </section>
    </>
  );
}
