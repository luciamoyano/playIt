import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Loader from "../components/Loader";

export default function Home() {
  const router = useRouter();
  const accessToken =
    useLocalStorage() !== undefined ? [, accessToken] : undefined;

  useEffect(() => {
    if (accessToken) {
      router.push("/music");
    } else {
      router.push("/login");
    }
  }, []);

  return <Loader action="Redirecting" />;
}
