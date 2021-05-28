import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFetch } from "../../../hooks/useFetch";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import Topbar from "../../../components/Topbar";

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

  return (
    <div>
      <Topbar
        naviTabs={["playlists", "albums", "artists"]}
        currentPage="music"
      />
      {!isLoading && tracksData ? (
        <>
          <h1>
            {type} {tracksData.name}
          </h1>
          {tracksData ? (
            <ul>
              Canciones:
              {tracksData.tracks &&
                tracksData.tracks.items.map((tracks) => {
                  return (
                    <li>{type == "album" ? tracks.name : tracks.track.name}</li>
                  );
                })}
            </ul>
          ) : (
            <p>Loading</p>
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
