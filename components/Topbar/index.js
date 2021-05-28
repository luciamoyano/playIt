import Button from "../Button";
import Navigation from "../Navigation";
import Profile from "../Profile";

export default function Topbar({ naviTabs, currentPage, currentTab }) {
  return (
    <div className="topbar">
      <Profile />
      <Navigation
        naviTabs={naviTabs}
        currentPage={currentPage}
        currentTab={currentTab}
      />
    </div>
  );
}
