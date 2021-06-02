import styles from "./Tracks.module.scss";
import SpotifyPlayer from "react-spotify-web-playback";
import { useState } from "react";

export default function Tracks({ tracksData, type, token }) {
  const [trackUri, setTrackUri] = useState("");
  function playSong(Uri) {
    setTrackUri(Uri);
  }
  console.log(tracksData);
  return (
    <>
      <div className={styles.mainContainer}>
        <h2>{tracksData.name}</h2>
        <div className={styles.playlistsContainer}>
          {tracksData && (
            <ul>
              {tracksData.tracks &&
                tracksData.tracks.items.map((track) => {
                  return (
                    <li onClick={() => playSong(track.track.uri)}>
                      <img
                        src={
                          type == "album"
                            ? tracksData.images[2].url
                            : track.track.album.images[2].url
                        }
                      />
                      <div className={styles.trackInfo}>
                        <p>{type == "album" ? track.name : track.track.name}</p>
                        {type !== "album" && (
                          <p>
                            {track.track.artists.map((artist) => {
                              return <span>{artist.name} </span>;
                            })}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
      <div class={styles.player}>
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
