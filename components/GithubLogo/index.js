import Image from "next/image";
import styles from "./GithubLogo.module.scss";

export default function GithubLogo() {
  return (
    <div className={styles.imgContainer}>
      <a href="https://github.com/luciamoyano/playIt">
        <Image
          src="/images/github.png"
          alt="github project"
          width="25px"
          height="25px"
        />
      </a>
    </div>
  );
}
