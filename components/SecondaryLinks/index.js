import Link from "next/link";
import styles from "./SecondaryLinks.module.scss";

export default function SecondaryLinks({ naviTabs, currentPage, currentTab }) {
  console.log(currentTab);
  return (
    <ul className={styles.secondaryLinks}>
      {naviTabs &&
        naviTabs.map((tab, key) => {
          return (
            <Link href={`/${currentPage}/${tab}`}>
              <li
                className={`${styles.secondaryLink} 
                ${currentTab === tab && styles.currentTab}`}
                key={key}
              >
                <a>{tab}</a>
              </li>
            </Link>
          );
        })}
    </ul>
  );
}
