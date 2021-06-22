import styles from "./Track.module.scss";

export default function Track({
  playSong,
  image,
  uri,
  name,
  artists,
  description,
  duration,
}) {
  return (
    <li className={styles.track} onClick={() => playSong(uri)}>
      <img src={image} />
      <div className={styles.trackInfo}>
        <p className={styles.trackName}>{name}</p>
        <p className={styles.trackArtists}>
          {artists &&
            artists.map((artist) => {
              return <span>{artist.name}</span>;
            })}
        </p>
        {description && <p>{description}</p>}
      </div>
      <div className={styles.trackDuration}>{duration}</div>
    </li>
  );
}
