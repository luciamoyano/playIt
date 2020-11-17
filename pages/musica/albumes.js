import React, { useEffect, useState } from "react";
import Playlists from "../../components/Playlists";
import Topbar from "../../components/Topbar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";

export default function Musica() {
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
    <div>
      <Topbar
        naviTabs={["playlists", "albumes", "artistas"]}
        currentPage="musica"
      />
      {!isLoading ? (
        <>
          {userSavedAlbums.items && (
            <Playlists
              label="Albumes"
              type="album"
              playlistData={userSavedAlbums.items}
            />
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
