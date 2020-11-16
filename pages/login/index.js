import Button from '../../components/Button';
import styles from './Login.module.scss';

function Login() {
  const baseUrl = `https://accounts.spotify.com/authorize`;
  const client_id = `7abba68765ca417abb055d6cb940f4c9`;
  const response_type = `token`;
  const redirect_uri = `http://localhost:3000/dashboard`;
  return (
    <>
    <div className={styles.container}>
      <h1>Bienvenidos a Musikit</h1>
      <p>Logueate con Spotify para continuar</p>
      <a href={`${baseUrl}?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=user-library-read`}>
        <Button name='Log in with Spotify' type="logInButton"/>
      </a>
    </div>
    </>
  );
}

export default Login;