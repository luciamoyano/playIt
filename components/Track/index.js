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
    <li onClick={() => playSong(uri)}>
      <img src={image} />
      <div className={styles.trackInfo}>
        <p>{name}</p>
        <p>
          {artists &&
            artists.map((artist) => {
              return <span>{artist.name} </span>;
            })}
        </p>
        {description && <p>{description}</p>}
        <p>{duration}</p>
      </div>
    </li>
  );
}
