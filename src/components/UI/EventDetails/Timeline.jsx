import styles from "./Event.module.css";

export default function Timeline({ itineary }) {
  console.log(itineary);

  const [dayOne = {}, dayTwo = {}] = itineary;
  return (
    <section className={styles.designSection}>
      <h1 className={styles.heading}>Itinerary</h1>
      <div className={styles.timeline}>
        <div className={styles.timelineEmpty}></div>
        <div className={styles.timelineMiddle}>
          <div className={styles.timelineCircle}></div>
        </div>
        <div
          className={`${styles.timelineComponent} ${styles.timelineContent}`}
        >
          <p className={styles.title}>Day - 1</p>
          <ul className={styles.ul}>
            {dayOne.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <p>End of Night</p>
        </div>
        <div
          className={`${styles.timelineComponent} ${styles.timelineContent}`}
        >
          <p className={styles.title}>Day -2</p>
          <ul className={styles.ul}>
            {dayTwo.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <p>End of Night</p>
        </div>

        <div className={styles.timelineMiddle}>
          <div className={styles.timelineCircle}></div>
        </div>
      </div>
    </section>
  );
}
