import Navigation from "../Navigation";
import Profile from "../Profile";
import styles from "./Topbar.module.scss";

export default function Topbar({ currentTab }) {
  return (
    <div className={styles.topbar}>
      <Profile />
      <Navigation currentTab={currentTab} />
    </div>
  );
}
