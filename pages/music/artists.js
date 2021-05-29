import React, { useEffect, useState } from "react";
import Playlists from "../../components/Playlists";
import Topbar from "../../components/Topbar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Music.module.scss";

export default function Artists() {
  const [isLoading, setIsLoading] = useState(false);
  const artistsApi = "https://api.spotify.com/v1/me/following?type=artist";
  const [userArtists, setUserArtists] = useState({});
  const fetchData = useFetch();

  useEffect(() => {
    setIsLoading(true);
    const [, accessToken] = useLocalStorage();
    fetchData(artistsApi, setUserArtists, accessToken);
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Topbar
        naviTabs={["playlists", "albums", "artists"]}
        currentPage="music"
        currentTab="artists"
      />
      {!isLoading ? (
        <>
          {userArtists && (
            <Playlists
              label="Artists"
              type="artist"
              currentPage="music"
              playlistData={userArtists.artists}
            />
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
