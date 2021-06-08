import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFetch } from "../../../hooks/useFetch";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import Topbar from "../../../components/Topbar";
import Loader from "../../../components/Loader";
import Tracks from "../../../components/Tracks";
import styles from "./Player.module.scss";

export default function Play() {
  const [tracksData, setTracksData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { playlist_id, type } = router.query;
  const playlistsApi = `https://api.spotify.com/v1/${type}s/${playlist_id}`;
  const episodesApi = `https://api.spotify.com/v1/shows/${playlist_id}/episodes`;
  const fetchData = useFetch();

  useEffect(() => {
    const [, accessToken] = useLocalStorage();
    setIsLoading(true);
    if (type == "program") {
      fetchData(episodesApi, setTracksData, accessToken);
    } else {
      fetchData(playlistsApi, setTracksData, accessToken);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Topbar
        naviTabs={["playlists", "albums", "artists"]}
        currentPage="music"
      />

      {!isLoading && Object.keys(tracksData).length > 0 ? (
        <>{tracksData && <Tracks tracksData={tracksData} type={type} />}</>
      ) : (
        <Loader />
      )}
    </div>
  );
}
