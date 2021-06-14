import Button from "../../components/Button";
import styles from "./Login.module.scss";

function Login() {
  const baseUrl = `https://accounts.spotify.com/authorize`;
  const client_id = `7abba68765ca417abb055d6cb940f4c9`;
  const response_type = `token`;
  const redirect_uri = `http://localhost:3000/music`;
  const scopes = `streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read user-follow-read user-read-recently-played`;
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h1>Welcome to Musikit</h1>
        <p>Login with Spotify to continue</p>
        <a
          href={`${baseUrl}?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scopes}`}
        >
          <Button name="Log in with Spotify" type="logInButton" />
        </a>
      </div>
    </div>
  );
}

export default Login;
