import React, { useEffect, useState } from "react";
import Playlists from "../../components/Playlists";
import Topbar from "../../components/Topbar";
import Loader from "../../components/Loader";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Music.module.scss";

export default function Albums() {
  const [isLoading, setIsLoading] = useState(false);
  const [userSavedAlbums, setUserSavedAlbums] = useState({});
  const savedAlbumsApi = "https://api.spotify.com/v1/me/albums";
  const fetchData = useFetch();

  useEffect(() => {
    setIsLoading(true);
    const [, accessToken] = useLocalStorage();
    fetchData(savedAlbumsApi, setUserSavedAlbums, accessToken);
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Topbar
        naviTabs={["playlists", "albums", "artists"]}
        currentPage="music"
        currentTab="albums"
      />
      {!isLoading ? (
        <>
          {userSavedAlbums.items && (
            <Playlists
              label="Albums"
              currentPage="music"
              type="album"
              playlistData={userSavedAlbums.items}
            />
          )}
        </>
      ) : (
        <Loader action="Loading" />
      )}
    </div>
  );
}
