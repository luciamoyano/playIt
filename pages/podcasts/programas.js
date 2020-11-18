import React, { useEffect, useState } from "react";
import Playlists from "../../components/Playlists";
import Topbar from "../../components/Topbar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";

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
    <div>
      <Topbar naviTabs={["episodios", "programas"]} currentPage="podcasts" />
      {!isLoading ? (
        <>
          {userSavedPodcasts.items && (
            <Playlists
              label="Programas"
              type="programa"
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
