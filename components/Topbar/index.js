import Button from "../Button";
import Navigation from "../Navigation";
import Profile from "../Profile";

export default function Topbar({ naviTabs, currentPage }) {
  return (
    <>
      <Profile />
      <Button type="themeButton" />
      <Navigation naviTabs={naviTabs} currentPage={currentPage} />
    </>
  );
}
