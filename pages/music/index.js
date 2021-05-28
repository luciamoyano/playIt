import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Playlists from "../../components/Playlists";
import Button from "../../components/Button";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Dashboard({ handleToken }) {
  const router = useRouter();
  // separa location por &
  const [fullHash] = router.asPath.split("&");
  // desestructuramos el array del split y tomamos solo el accesstoken
  const [, accessToken] = fullHash.split("=");

  useEffect(() => {
    const [setToken] = useLocalStorage();
    setToken(accessToken);
    handleToken(accessToken);
    if (accessToken) {
      router.push("/music/playlists");
    } else {
      router.push("/login");
    }
  }, []);

  return <p>Redirecting...</p>;
}

export default Dashboard;
