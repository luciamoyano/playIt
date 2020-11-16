import React, {useEffect, useState} from 'react';
import Playlists from '../../../components/Playlists';
import Button from '../../../components/Button';
import Navigation from '../../../components/Navigation';
import {useLocalStorage} from '../../../hooks/useLocalStorage';

export default function Musica() {
    const [isLoading, setIsLoading] = useState(false)
    const userDataApi = 'https://api.spotify.com/v1/me/';
    const savedAlbumsApi = 'https://api.spotify.com/v1/me/albums'
    
    const [userData, setUserData] = useState({});
    const [userSavedAlbums, setUserSavedAlbums] = useState({});
    
    useEffect(()=> {
        setIsLoading(true)
        const [, accessToken] = useLocalStorage();
            fetchData(userDataApi, setUserData, accessToken);
            fetchData(savedAlbumsApi, setUserSavedAlbums, accessToken);
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

    let savedAlbums = [];
    let username = '';

    if (userData){
        username = userData.display_name;
    }

    
    if (userSavedAlbums){
        savedAlbums = userSavedAlbums.items;
    }

    return (
        <div>
         <Button type='themeButton'/>
         <Navigation naviTabs={['playlists', 'albumes', 'artistas']} currentPage='musica'/>
         {!isLoading ?      
         (<>    
            <p>{username}</p>

         
         {savedAlbums &&
             <Playlists label="Albumes" type="album" playlistData={savedAlbums}/>
            } 
            </>
         ): (<p>Loading</p>)
            }
        </div>
    )
};