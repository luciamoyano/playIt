import React, {useEffect, useState} from 'react';
import Playlists from '../../../components/Playlists';
import Button from '../../../components/Button';
import Navigation from '../../../components/Navigation';
import {useLocalStorage} from '../../../hooks/useLocalStorage';

export default function Musica() {
    const [isLoading, setIsLoading] = useState(false)
    const userDataApi = 'https://api.spotify.com/v1/me/';
    const userPlaylistsApi = 'https://api.spotify.com/v1/me/playlists';
    
    const [userData, setUserData] = useState({});
    const [userPlaylists, setUserPlaylists] = useState({});
    
    useEffect(()=> {
        setIsLoading(true)
        const [, accessToken] = useLocalStorage();
            fetchData(userDataApi, setUserData, accessToken);
            fetchData(userPlaylistsApi, setUserPlaylists, accessToken);
        setIsLoading(false)
    },[]);

    async function fetchData(url, setter, token) {
        const data = await fetch(
            url,
            {
            headers: {
                'Authorization': 'Bearer ' + token
            }
            })
        const dataJson = await data.json();
        await setter(dataJson);
    }

    if (userData) {
        //console.log(userData);
    }

    let playlists = [];
    let username = '';
    if (userPlaylists) {
        playlists = userPlaylists.items;
    }
    if (userData){
        username = userData.display_name;
    }
    
    
    return (
        <div>
         <Button type='themeButton'/>
         
         <Navigation naviTabs={['playlists', 'albumes', 'artistas']} currentPage='musica'/>
         {!isLoading ?      
         (<>    
            <p>{username}</p>
            {playlists &&
                <Playlists label="Mis Playlists" type="playlist" playlistData={playlists}/>
            }
         
       
            </>
         ): (<p>Loading</p>)
            }
        </div>
    )
};