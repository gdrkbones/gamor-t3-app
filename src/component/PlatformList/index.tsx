import generateDiceBearAvataaars from "~/utils/RandAvatar";
import randColor from "~/utils/RandColor";
import Image from "next/image";
import AdjustmentsHorizontal from "../icon/AdjustmentsHorizontal";
import Plus from "../icon/Plus";
import styles from "./styles.module.css";

type Item = {
  name: string;
  linkTo: string;
};

const PlatformList = () => {
  const found: Item[] = [
    {
      name: "Doctor Team",
      linkTo: "",
    },
    {
      name: "Mia Plays",
      linkTo: "",
    },
    {
      name: "Kexor",
      linkTo: "",
    },
    {
      name: "NickMerc",
      linkTo: "",
    },
    {
      name: "Paco Juega",
      linkTo: "",
    },
    {
      name: "Juega German",
      linkTo: "",
    },
    {
      name: "Osmand GO",
      linkTo: "",
    },
    {
      name: "Peter Pen",
      linkTo: "",
    },
    {
      name: "Let's Play",
      linkTo: "",
    },
    {
      name: "Burricks",
      linkTo: "",
    },
  ];

  return (
    <div className={styles["game-searching"]}>
      <div className={styles["game-selection"]}>
        <p className={styles["game-name"]}>COD Warzone</p>
        <span className={styles["game-select-icon"]}>
          <AdjustmentsHorizontal />
        </span>
      </div>
      <div className={styles["platform-list-wrapper"]}>
        <div className={styles["platform-list"]}>
          {found.map((item, index) => (
            <div key={`${item.name}`} className={styles["platform-item"]}>
              <div className={styles["platform-item-index"]}>
                <span>{index + 1}</span>
              </div>
              <p className={styles["platform-item-name"]}>{item.name}</p>
              <div className={styles["platform-item-users"]}>
                <span
                  className={styles["avatar-mini"]}
                  style={{ backgroundColor: randColor() }}
                >
                  <Image
                    height={16}
                    width={16}
                    src={generateDiceBearAvataaars(`1${item.name}`)}
                    alt="random avatar"
                  />
                </span>
                <span
                  className={styles["avatar-mini"]}
                  style={{ backgroundColor: randColor() }}
                >
                  <Image
                    height={16}
                    width={16}
                    src={generateDiceBearAvataaars(`2${item.name}`)}
                    alt="random avatar"
                  />
                </span>
              </div>
              <button className={styles["platform-item-action"]}>
                <Plus />
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className={styles["search-action"]}>Search Now</button>
    </div>
  );
};

export default PlatformList;
