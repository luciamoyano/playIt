import React from 'react';
import Link from "next/link";
import styles from './Playlist.module.scss';

function Playlist(props){
    const {id, name, images, type, token, data} = props;
    const [imgHeight640] = images;
    return (
        <>
        {data ?
        <Link href={{
            pathname: `/player/${type}`,
            query: { playlist_id: id, access_token: token},
          }}>
        <div className={styles.playlist}>
            <div className={styles.imgContainer}>
                <img src={imgHeight640.url} alt={name}/>
            </div>
            <div className={styles.infoContainer}>
                <h2>{name}</h2>
            </div>
        </div>
        </Link>
        : <p>Loading</p>
        }
        </>
    )
};

export default Playlist;