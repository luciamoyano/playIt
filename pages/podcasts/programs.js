import React, { useEffect, useState } from "react";
import Playlists from "../../components/Playlists";
import Topbar from "../../components/Topbar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";

import styles from "./Podcasts.module.scss";

export default function Programas() {
  const [isLoading, setIsLoading] = useState(false);
  const [userSavedPodcasts, setUserSavedPodcasts] = useState({});
  const savedAlbumsApi = "https://api.spotify.com/v1/me/shows";
  const fetchData = useFetch();

  useEffect(() => {
    setIsLoading(true);
    const [, accessToken] = useLocalStorage();
    fetchData(savedAlbumsApi, setUserSavedPodcasts, accessToken);
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Topbar
        naviTabs={["episodios", "programs"]}
        currentPage="podcasts"
        currentTab="programs"
      />
      {!isLoading ? (
        <>
          {userSavedPodcasts.items && (
            <Playlists
              label="My Podcasts"
              type="program"
              currentPage="podcasts"
              playlistData={userSavedPodcasts.items}
            />
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
