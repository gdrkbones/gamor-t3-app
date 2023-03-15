import EllipseSVG from "~/component/EllipseSVG";
import UserPlus from "~/component/icon/UserPlus";
import PresentationColumn from "~/component/PresentationColumn";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const GameInfoColumn = () => {
  return (
    <div className={styles.column}>
      <p className={styles["game-info"]}>Fornite New Season</p>
      <Link className={styles["join-link"]} href="">
        Join Live Stream
      </Link>
      <div className={styles["timer"]}>
        <Link className={styles["user-icon"]} href="">
          <UserPlus />
        </Link>
        <span className={styles["clock"]}>11 : 40</span>
      </div>
      <div className={styles["image-container"]}>
        <Image
          alt="main-player"
          src={"/image/fornite_player_2.png"}
          width={320}
          height={320}
        />
        <Link
          href={""}
          className={styles["floating-image"]}
          style={{
            top: "25%",
            left: "5%",
          }}
        >
          <Image
            alt="miniature"
            src={"/image/fornite_player_3.png"}
            width={55}
            height={55}
          />
        </Link>
        <Link
          href={""}
          className={styles["floating-image"]}
          style={{
            top: "60%",
            left: "75%",
          }}
        >
          <Image
            alt="miniature"
            src={"/image/fornite_player_3.png"}
            width={55}
            height={55}
          />
        </Link>
      </div>
    </div>
  );
};

export default GameInfoColumn;
