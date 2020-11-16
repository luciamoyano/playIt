import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export default function Play(){
    const router = useRouter()
    const {playlist_id, access_token, type} = router.query
    const [tracksData, setTracksData] = useState({});

    useEffect(()=> {
        fetchData();
    },[access_token]);

    async function fetchData() {
        const data = await fetch(
            `https://api.spotify.com/v1/${type}s/${playlist_id}`,
            {
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
            })
        const dataJson = await data.json();
        setTracksData(dataJson);
     }

    let tracksList = []
    if(Object.keys(tracksData) > 0) {
        tracksList = tracksData.tracks.items;
    }

    return (
        <div>
            <h1>{type} {tracksData.name}</h1>
        <ul>Canciones:
            {
                tracksList && 
                tracksList.map((tracks)=>{
                return <li>{tracks.track.name}</li>
                })
            }
        </ul>
        </div>
    )
};