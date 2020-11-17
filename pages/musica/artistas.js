import React, { useEffect, useState } from "react";
import Playlists from "../../components/Playlists";
import Topbar from "../../components/Topbar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";

export default function Artistas() {
  const [isLoading, setIsLoading] = useState(false);
  const artistsApi = "https://api.spotify.com/v1/me/following";
  const [userArtists, setUserArtists] = useState({});
  const fetchData = useFetch();

  useEffect(() => {
    setIsLoading(true);
    const [, accessToken] = useLocalStorage();
    fetchData(artistsApi, setUserArtists, accessToken);
    setIsLoading(false);
  }, []);

  console.log(userArtists);

  return (
    <div>
      <Topbar
        naviTabs={["playlists", "albumes", "artistas"]}
        currentPage="musica"
      />
      {!isLoading ? (
        <>
          {/* {savedAlbums &&
             <Playlists label="Artistas" type="album" playlistData={savedAlbums}/>
            }  */}
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
