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
    <>
      <div className={styles.mainContainer}>
        <h1>{currentPage}</h1>
        <h2>{label}</h2>
        <div className={styles.playlistsContainer}>
          {type == "playlist" &&
            playlistData &&
            playlistData.map((playlist, key) => {
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
            })}

          {type == "album" &&
            playlistData &&
            playlistData.map((playlist, key) => {
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
            })}

          {type == "program" &&
            playlistData &&
            playlistData.map((program, key) => {
              const { name, images, id } = program.show;
              return (
                <Playlist
                  data={program}
                  type={type}
                  token={token}
                  name={name}
                  images={images}
                  key={id ? id : key}
                  id={id}
                />
              );
            })}

          {type == "artist" &&
            playlistData &&
            playlistData.items.map((artist, key) => {
              const { name, images, id } = artist;
              return (
                <Playlist
                  data={artist}
                  type={type}
                  token={token}
                  name={name}
                  images={images}
                  key={id ? id : key}
                  id={id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
