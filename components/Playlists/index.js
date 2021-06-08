import React from "react";
import Playlist from "../Playlist";
import styles from "./Playlists.module.scss";

export default function Playlists({
  playlistData,
  label,
  token,
  type,
  currentPage,
}) {
  return (
    <div className={styles.mainContainer}>
      <h1>{currentPage}</h1>
      <h2>{label}</h2>
      <div className={styles.playlistsContainer}>
        {playlistData &&
          playlistData.map((playlist, key) => {
            if (type == "playlist") {
              const { name, images, id, tracks } = playlist;
              return (
                <Playlist
                  data={playlist}
                  type={type}
                  token={token}
                  name={name}
                  images={images}
                  key={id ? id : key}
                  id={id}
                  tracks={tracks.total}
                />
              );
            } else if (type == "album") {
              const { name, images, id, tracks, artists } = playlist.album;
              return (
                <Playlist
                  data={playlist}
                  type={type}
                  token={token}
                  name={name}
                  images={images}
                  key={id ? id : key}
                  id={id}
                  tracks={tracks.items.length}
                  artists={artists}
                />
              );
            } else if (type == "program") {
              const { name, images, id } = playlist.show;
              return (
                <Playlist
                  data={playlist}
                  type={type}
                  token={token}
                  name={name}
                  images={images}
                  key={id ? id : key}
                  id={id}
                />
              );
            } else {
              const { name, images, id } = playlist;
              return (
                <Playlist
                  data={playlist}
                  type={type}
                  token={token}
                  name={name}
                  images={images}
                  key={id ? id : key}
                  id={id}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
