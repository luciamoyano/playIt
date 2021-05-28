import { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Profile.module.scss";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const userDataApi = "https://api.spotify.com/v1/me/";
  const fetchData = useFetch();

  useEffect(() => {
    setIsLoading(true);
    const [, accessToken] = useLocalStorage();
    fetchData(userDataApi, setUserData, accessToken);
    setIsLoading(false);
  }, []);

  const { display_name, id, images, followers, external_urls } = userData;

  return (
    <>
      {!isLoading ? (
        <div className={styles.user}>
          {images && <img src={images[0].url} />}
          <div>
            {userData ? (
              <>
                <h1>{display_name}</h1>
                {external_urls && (
                  <a href={external_urls.spotify}>
                    <h2>@{id}</h2>
                  </a>
                )}
                <p>{followers && <span>{followers.total}</span>} followers</p>
              </>
            ) : (
              <p>Loading</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
