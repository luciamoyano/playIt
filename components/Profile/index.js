import { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFetch } from "../../hooks/useFetch";

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

  return (
    <>
      {!isLoading ? (
        <div>
          <p>{userData.display_name}</p>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
