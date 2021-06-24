import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Playlists from "../../components/Playlists";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Dashboard() {
  const router = useRouter();
  // separa location por &
  const [fullHash] = router.asPath.split("&");
  // desestructuramos el array del split y tomamos solo el accesstoken
  const [, accessToken] = fullHash.split("=");

  useEffect(() => {
    const [setToken] = useLocalStorage();
    setToken(accessToken);
    if (accessToken) {
      router.push("/music/playlists");
    } else {
      router.push("/login");
    }
  }, []);

  return <Loader action="Redirecting" />;
}

export default Dashboard;
