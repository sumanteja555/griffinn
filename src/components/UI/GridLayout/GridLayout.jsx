import styles from "./GridLayout.module.css";

import GridItem from "./GridItem.jsx";
export default function GridLayout({ gridItems }) {
  const { heading, gridData } = gridItems;
  return (
    <section className={styles.container}>
      <p id={styles.heading}>{heading}</p>
      <div className={styles.gridItemsContainer}>
        {gridData.map((item) => {
          return <GridItem item={item} key={item.title} />;
        })}
      </div>
    </section>
  );
}
