import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Podcasts() {
  const router = useRouter();
  useEffect(() => {
    const [, getToken] = useLocalStorage();
    if (getToken) {
      router.push("/podcasts/programs");
    } else {
      router.push("/login");
    }
  }, []);

  return <p>Redirecting...</p>;
}
