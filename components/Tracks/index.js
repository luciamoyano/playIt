import SpotifyPlayer from "react-spotify-web-playback";
import Track from "../Track";
import styles from "./Tracks.module.scss";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Loader from "../Loader";

export default function Tracks({ type, playlistId }) {
  const [trackUri, setTrackUri] = useState("");
  const [token, setToken] = useState("");

  const [tracksData, setTracksData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = useFetch();

  const playlistsApi = `https://api.spotify.com/v1/${type}s/${playlistId}`;
  const episodesApi = `https://api.spotify.com/v1/shows/${playlistId}/episodes`;

  useEffect(() => {
    setIsLoading(true);
    const [, accessToken] = useLocalStorage();
    setToken(accessToken);
    if (type == "program") {
      fetchData(episodesApi, setTracksData, accessToken);
    } else {
      fetchData(playlistsApi, setTracksData, accessToken);
    }
    setIsLoading(false);
  }, [type && playlistId]);

  function playSong(Uri) {
    setTrackUri(Uri);
  }

  console.log(tracksData);

  function msToMinute(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return !isLoading && tracksData ? (
    <>
      <div className={styles.mainContainer}>
        <h2>{tracksData.name}</h2>
        <div className={styles.playlistsContainer}>
          <ul>
            {type !== "program" &&
              tracksData.tracks?.items.map((track) => {
                const { name, uri, artists, duration_ms, id } =
                  type == "album" ? track : track.track;
                const duration = msToMinute(duration_ms);
                const coverImage =
                  type == "album"
                    ? tracksData.images[2].url
                    : track.track.album.images[2].url;
                return (
                  <Track
                    name={name}
                    playSong={playSong}
                    image={coverImage}
                    uri={uri}
                    artists={artists}
                    duration={duration}
                    key={id}
                  />
                );
              })}
            {type == "program" &&
              tracksData.items?.map((episode) => {
                const { name, images, uri, description, duration_ms, id } =
                  episode;
                const duration = msToMinute(duration_ms);
                return (
                  <Track
                    name={name}
                    playSong={playSong}
                    image={images[2].url}
                    uri={uri}
                    description={description}
                    duration={duration}
                    key={id}
                  />
                );
              })}
          </ul>
        </div>
      </div>
      <div className={styles.player}>
        {trackUri !== "" && (
          <SpotifyPlayer
            token={token}
            uris={[`${trackUri}`]}
            styles={{
              autoPlay: true,
              bgColor: "#000",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#f35588",
              trackArtistColor: "#ccc",
              trackNameColor: "#fff",
              height: 40,
            }}
          />
        )}
      </div>
    </>
  ) : (
    <Loader action={Loading} />
  );
}
