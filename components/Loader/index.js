import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={`${styles.bar} ${styles.bar1}`}></div>
      <div className={`${styles.bar} ${styles.bar2}`}></div>
      <div className={`${styles.bar} ${styles.bar3}`}></div>
      <div className={`${styles.bar} ${styles.bar4}`}></div>
      <div className={`${styles.bar} ${styles.bar5}`}></div>
      <div className={`${styles.bar} ${styles.bar6}`}></div>
      <div className={`${styles.bar} ${styles.bar7}`}></div>
      <div className={`${styles.bar} ${styles.bar8}`}></div>
    </div>
  );
}
