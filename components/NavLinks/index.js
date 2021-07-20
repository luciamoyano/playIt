import Link from "next/link";
import styles from "./NavLinks.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

export default function NavLinks({ naviTabs, currentPage, currentTab }) {
  return (
    naviTabs &&
    naviTabs.map((tab, key) => {
      const icon =
        tab === "albums"
          ? faCompactDisc
          : tab === "playlists"
          ? faHeadphonesAlt
          : tab === "artists"
          ? faUserAlt
          : faMicrophone;
      return (
        <Link href={`/${currentPage}/${tab}`} key={key}>
          <li
            className={`${styles.navLink} 
                ${currentTab === tab && styles.currentTab}`}
          >
            <FontAwesomeIcon icon={icon} />
            <a>{tab}</a>
          </li>
        </Link>
      );
    })
  );
}
