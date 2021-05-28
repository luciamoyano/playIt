import React from "react";
import Link from "next/link";
import styles from "./Playlist.module.scss";

function Playlist({ id, name, images, type, token, data, tracks, artists }) {
  const [imgHeight640] = images;
  console.log(data);
  return (
    <>
      {data ? (
        <Link
          href={{
            pathname: `/player/${type}`,
            query: { playlist_id: id, access_token: token },
          }}
        >
          <div className={styles.playlist}>
            <div className={styles.imgContainer}>
              {imgHeight640 && <img src={imgHeight640.url} alt={name} />}
            </div>
            <div className={styles.player}>►</div>
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
              {tracks && <p className={styles.tracksCount}>{tracks} tracks</p>}
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
