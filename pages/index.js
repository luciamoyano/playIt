import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Loader from "../components/Loader";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const accessToken =
    useLocalStorage() !== undefined ? [, accessToken] : undefined;

  useEffect(() => {
    setIsLoading(true);
    if (accessToken) {
      router.push("/music");
    } else {
      router.push("/login");
    }
    setIsLoading(false);
  }, []);

  return <Loader action="Redirecting" />;
}
