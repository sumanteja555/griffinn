import Count from "./Count/Count.jsx";
import HomeCover from "./HomeCover/HomeCover.jsx";
import Reviews from "./Reviews/Reviews.jsx";
import reviewStyles from "./Reviews/Reviews.module.css";
import Categories from "./Categories/Categories.jsx";
export default function Home() {
  return (
    <>
      <HomeCover />
      <Categories />

      {/* <section className={styles.tripsContainer}>
        <div className={styles.upcomingTripsContainer}>
          {tripsData.map((trip) => (
            <UpcomingTrips
              {...trip}
              className={styles.upcoming}
              key={trip.title}
            />
          ))}
        </div>
      </section> */}
      <section className={reviewStyles.reviewsMainContainer}>
        <Reviews />
      </section>

      <Count />
    </>
  );
}
