import EllipseSVG from "~/component/EllipseSVG";
import Link from "next/link";
import styles from "./styles.module.css";

const PresentationColumn = () => {
  return (
    <div className={styles.column}>
      <div className={styles.slogan}>
        <div className={styles["slogan-decoration"]}>
          <EllipseSVG style={{ bottom: "0rem" }} />
          <EllipseSVG style={{ bottom: "3rem" }} />
          <EllipseSVG style={{ bottom: "6rem" }} />
        </div>
        <p>start</p> <span>streaming</span> <p>games</p> <p>differently</p>
      </div>
      <Link href={""} className={styles.info}>
        gamor now has <span className={styles["highlight"]}>stream party</span>{" "}
        platform
      </Link>
      <div className={styles.auth}>
        <Link href="" className={styles["auth-item"]}>
          <span>Login</span>
        </Link>
        <Link href="" className={styles["auth-item"]}>
          <span>Create Account</span>
        </Link>
      </div>
    </div>
  );
};

export default PresentationColumn;
