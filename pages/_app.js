import "../styles/globals.scss";
import { TokenProvider } from "../contexts/TokenContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState("");

  function handleToken(urlToken) {
    setToken(urlToken);
  }
  return (
    <TokenProvider value={{ token: token }}>
      <Component {...pageProps} handleToken={handleToken} />
    </TokenProvider>
  );
}

export default MyApp;
