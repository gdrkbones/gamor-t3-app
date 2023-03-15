import hexToRgba from "~/utils/hexToRgba";
import intToString from "~/utils/IntToString";
import randColor from "~/utils/RandColor";
import Image from "next/image";
import Link from "next/link";
import LeftArrorFill from "../icon/LeftArrorFill";
import styles from "./styles.module.css";

type Category = {
  name: string;
  linkTo: string;
  image?: string;
};
type CategoriesProps = {
  data?: Category[];
};

const CategoryData: Category[] = [
  { name: "Action Games", linkTo: "" },
  { name: "Sports Games", linkTo: "" },
  { name: "Adventure Games", linkTo: "" },
  { name: "Arcade Games", linkTo: "" },
  { name: "Fantasy Games", linkTo: "" },
  { name: "Strategy Games", linkTo: "" },
  { name: "Shooter Games", linkTo: "" },
];

const Categories = ({ data = CategoryData }: CategoriesProps) => {
  return (
    <div className={styles["main"]}>
      <div className={styles["title"]}>
        <p>Trending Categories</p>
      </div>
      <div className={styles["category-list"]}>
        {data.map(({ name, linkTo }, index) => {
          const color = randColor();

          return (
            <Link
              href={linkTo}
              key={name}
              className={styles["category-list-item"]}
            >
              <Image
                className={styles["bg-image"]}
                src={"/image/action_game.jpg"}
                alt="bgImage"
                width={300}
                height={150}
              />
              <div
                className={styles["bg-color-filter"]}
                style={{
                  backgroundColor: color,
                }}
              />
              <span className={styles["category-item-index"]}>
                {intToString(index + 1, 2)}
                <div
                  className={styles["category-item-index-decorator"]}
                  style={{
                    borderColor: color,
                  }}
                />
              </span>
              <span className={styles["category-item-name"]}>{name}</span>
              <span className={styles["category-link"]}>
                <LeftArrorFill />
              </span>
            </Link>
          );
        })}
        <Link className={styles["category-list-item"]} href={"/categories"}>
          <span className={styles["category-item-title"]}>view all</span>
          <span className={styles["category-item-name"]}>All Categories</span>
          <span className={styles["category-link"]}>
            <LeftArrorFill />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
