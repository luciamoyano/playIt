import Navigation from "../Navigation";
import Profile from "../Profile";
import styles from "./Topbar.module.scss";

export default function Topbar({ naviTabs, currentPage, currentTab }) {
  return (
    <div className={styles.topbar}>
      <Profile />
      <Navigation
        naviTabs={naviTabs}
        currentPage={currentPage}
        currentTab={currentTab}
      />
    </div>
  );
}
