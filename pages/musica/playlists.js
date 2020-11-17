import React, { useEffect, useState } from "react";
import Playlists from "../../components/Playlists";
import Topbar from "../../components/Topbar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";

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
    <div>
      <Topbar
        naviTabs={["playlists", "albumes", "artistas"]}
        currentPage="musica"
      />
      {!isLoading ? (
        <>
          {userPlaylists.items && (
            <Playlists
              label="Mis Playlists"
              type="playlist"
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
