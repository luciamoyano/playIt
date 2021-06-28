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
        {artists && (
          <p className={styles.trackArtists}>
            {artists.map((artist) => {
              const { name, id } = artist;
              return <span key={id}>{name}</span>;
            })}
          </p>
        )}
        {description && (
          <p className={styles.trackDescription}>{description}</p>
        )}
      </div>
      <div className={styles.trackDuration}>{duration}</div>
    </li>
  );
}
