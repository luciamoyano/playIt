import React from "react";
import Link from "next/link";
import styles from "./Playlist.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Playlist({ id, name, images, type, token, data, tracks, artists }) {
  const [imgHeight640] = images;
  const linkPath =
    type == "artist"
      ? data.external_urls.spotify
      : {
          pathname: `/player/${type}`,
          query: { playlist_id: id },
        };
  return (
    <>
      {data ? (
        <Link href={linkPath}>
          <div className={styles.playlist}>
            <div className={styles.imgContainer}>
              {imgHeight640 && <img src={imgHeight640.url} alt={name} />}
            </div>
            <div className={styles.player}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <div className={styles.infoContainer}>
              <h2>{name}</h2>
              {artists &&
                artists.map((artist, key) => {
                  const { name } = artist;
                  return (
                    <p className={styles.artistName} key={key}>
                      {name}
                    </p>
                  );
                })}
              {tracks && (
                <p className={styles.tracksCount}>
                  {tracks}
                  {tracks !== 1 ? " tracks" : " track"}
                </p>
              )}
            </div>
          </div>
        </Link>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default Playlist;
