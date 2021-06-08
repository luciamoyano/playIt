import SpotifyPlayer from "react-spotify-web-playback";
import Track from "../Track";
import styles from "./Tracks.module.scss";
import { useState } from "react";

export default function Tracks({ tracksData, type, token }) {
  const [trackUri, setTrackUri] = useState("");

  function playSong(Uri) {
    setTrackUri(Uri);
  }

  function msToMinute(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <h2>{tracksData.name}</h2>
        <div className={styles.playlistsContainer}>
          {tracksData && Object.keys(tracksData).length > 0 && (
            <ul>
              {type !== "program" &&
                tracksData.tracks.items.map((track) => {
                  const { name, uri, artists, duration_ms } =
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
                    />
                  );
                })}
              {type == "program" &&
                tracksData.items.map((episode) => {
                  const { name, images, uri, description, duration_ms } =
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
                    />
                  );
                })}
            </ul>
          )}
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
  );
}
