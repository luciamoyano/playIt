import React, { useEffect, useState } from "react";
import Playlists from "../../components/Playlists";
import Topbar from "../../components/Topbar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Music.module.scss";

export default function PlaylistsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const userPlaylistsApi = "https://api.spotify.com/v1/me/playlists";
  const [userPlaylists, setUserPlaylists] = useState({});
  const fetchData = useFetch();

  useEffect(() => {
    setIsLoading(true);
    const [, accessToken] = useLocalStorage();
    fetchData(userPlaylistsApi, setUserPlaylists, accessToken);
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Topbar
        naviTabs={["playlists", "albums", "artists"]}
        currentPage="music"
        currentTab="playlists"
      />
      {!isLoading ? (
        <>
          {userPlaylists.items && (
            <Playlists
              label="My Playlists"
              type="playlist"
              currentPage="music"
              playlistData={userPlaylists.items}
            />
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
