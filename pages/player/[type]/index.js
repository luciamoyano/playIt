import { useRouter } from "next/router";
import Topbar from "../../../components/Topbar";
import Tracks from "../../../components/Tracks";
import styles from "./Player.module.scss";

export default function Play() {
  const router = useRouter();
  const { playlist_id, type } = router.query;

  return (
    <div className={styles.mainContainer}>
      <Topbar
        naviTabs={["playlists", "albums", "artists"]}
        currentPage="music"
      />
      <>
        {playlist_id && type && <Tracks type={type} playlistId={playlist_id} />}
      </>
    </div>
  );
}
