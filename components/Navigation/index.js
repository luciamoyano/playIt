import Link from "next/link";
import styles from "./Navigation.module.scss";
import SecondaryLinks from "../SecondaryLinks";

export default function Navigation({ naviTabs, currentPage, currentTab }) {
  return (
    <nav className={`${styles.nav} ${styles.currentPage}`}>
      <Link href="/music/playlists">
        <a className={styles.mainLink}>Music</a>
      </Link>
      {currentPage === "music" && (
        <SecondaryLinks
          naviTabs={naviTabs}
          currentPage={currentPage}
          currentTab={currentTab}
        />
      )}
      <Link href="/podcasts/programs">
        <a className={styles.mainLink}>Podcasts</a>
      </Link>
      {currentPage === "podcasts" && (
        <SecondaryLinks
          naviTabs={naviTabs}
          currentPage={currentPage}
          currentTab={currentTab}
        />
      )}
    </nav>
  );
}
