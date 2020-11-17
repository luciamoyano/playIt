import styles from "./Button.module.scss";

export default function Button({ name, onClick, type }) {
  return (
    <button onClick={onClick} className={styles[type]}>
      {name}
    </button>
  );
}
