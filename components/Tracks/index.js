import styles from "./Tracks.module.scss";

export default function Tracks({ tracksData, type }) {
  return (
    <>
      <div className={styles.mainContainer}>
        <h2>{tracksData.name}</h2>
        <div className={styles.playlistsContainer}>
          {tracksData && (
            <ul>
              Tracks:
              {tracksData.tracks &&
                tracksData.tracks.items.map((tracks) => {
                  return (
                    <li>
                      <img
                        src={
                          type == "album"
                            ? tracksData.images[2].url
                            : tracks.track.album.images[2].url
                        }
                      />
                      <p>{type == "album" ? tracks.name : tracks.track.name}</p>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
