import generateDiceBearAvataaars from "~/utils/RandAvatar";
import randColor from "~/utils/RandColor";
import Image from "next/image";
import HorizontalPicker from "../HorizontalPicker";
import AdjustmentsHorizontal from "../icon/AdjustmentsHorizontal";
import PlatformList from "../PlatformList";
import styles from "./styles.module.css";

const PlatformSearchColumn = () => {
  return (
    <div className={styles["column"]}>
      <div className={styles["section"]}>
        <div className={styles["title"]}>
          <span className={styles["number-indicator"]}>01.</span>
          <p className={styles["name"]}>
            <b>Choose</b> Platform
          </p>
        </div>
        <HorizontalPicker
          values={[
            { value: "party", text: "Party", decorator: "🎉" },
            { value: "matchs", text: "Matchs", decorator: "🎮" },
            { value: "streams", text: "Streams", decorator: "📺" },
          ]}
        />
      </div>
      <div className={styles["section"]}>
        <div className={styles["title"]}>
          <span className={styles["number-indicator"]}>02.</span>
          <p className={styles["name"]}>
            <b>Searching</b> Game
          </p>
        </div>
        <PlatformList />
      </div>
    </div>
  );
};

export default PlatformSearchColumn;
