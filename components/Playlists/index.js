import React from 'react';
import Playlist from '../Playlist';
import styles from './Playlists.module.scss';

function Playlists(props) {
    const {playlistData, label, token, type} = props;
    return (
        <>
        <div class={styles.mainContainer}>
            <h1>{label}</h1>
            <div className={styles.playlistsContainer}>
                {type == 'playlist' &&
                    playlistData.map((playlist,key) => {
                        const {name, images, id} = playlist
                        return <Playlist data={playlist} type={type} token={token} name={name} images={images} key={id ? id : key} id={id}/>
                    })
                }

                {type == 'album' &&
                    playlistData.map((playlist,key) => {
                        const {name, images, id} = playlist.album
                        return <Playlist data={playlist} type={type} token={token} name={name} images={images} key={id ? id : key} id={id}/>
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Playlists;