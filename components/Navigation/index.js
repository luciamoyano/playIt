import Link from "next/link";
import styles from "./Navigation.module.scss";
import NavLinks from "../NavLinks";

export default function Navigation({ currentTab }) {
  return (
    <nav className={`${styles.nav} ${styles.currentPage}`}>
      <ul className={styles.links}>
        <Link href="/music/playlists">
          <li className={styles.mainLink}>Music</li>
        </Link>
        <NavLinks
          naviTabs={["playlists", "albums", "artists"]}
          currentPage={"music"}
          currentTab={currentTab}
        />
        <Link href="/podcasts/programs">
          <li className={styles.mainLink}>Podcasts</li>
        </Link>
        <NavLinks
          naviTabs={["programs"]}
          currentPage={"podcasts"}
          currentTab={currentTab}
        />
      </ul>
    </nav>
  );
}
