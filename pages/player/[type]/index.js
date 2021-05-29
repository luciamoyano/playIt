import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFetch } from "../../../hooks/useFetch";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import Topbar from "../../../components/Topbar";
import Loader from "../../../components/Loader";
import Tracks from "../../../components/Tracks";
import styles from "./Player.module.scss";

export default function Play() {
  const router = useRouter();
  const { playlist_id, type } = router.query;
  const [tracksData, setTracksData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const playlistsApi = `https://api.spotify.com/v1/${type}s/${playlist_id}`;
  const fetchData = useFetch();

  useEffect(() => {
    setIsLoading(true);
    const [, accessToken] = useLocalStorage();
    fetchData(playlistsApi, setTracksData, accessToken);
    setIsLoading(false);
  }, []);
  console.log(tracksData);
  return (
    <div className={styles.mainContainer}>
      <Topbar
        naviTabs={["playlists", "albums", "artists"]}
        currentPage="music"
      />

      {!isLoading ? (
        <>{tracksData && <Tracks tracksData={tracksData} type={type} />}</>
      ) : (
        <Loader />
      )}
    </div>
  );
}
